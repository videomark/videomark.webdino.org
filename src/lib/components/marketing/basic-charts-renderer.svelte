<script>
  import { max, range } from 'd3-array';
  import { axisBottom, axisLeft } from 'd3-axis';
  import { geoMercator, geoPath } from 'd3-geo';
  import { scaleBand, scaleLinear } from 'd3-scale';
  import { select, selectAll } from 'd3-selection';
  import { onMount } from 'svelte';
  import { locale as currentLocale } from 'svelte-i18n';
  import { get } from 'svelte/store';
  import * as topojson from 'topojson';

  const locale = get(currentLocale);

  const d3 = {
    scaleBand,
    scaleLinear,
    max,
    range,
    select,
    selectAll,
    axisBottom,
    axisLeft,
    geoMercator,
    geoPath,
  };

  class VideoMarkStats {
    constructor() {
      this.width = document.querySelector('.regional-qoe-graph').clientWidth;

      this.loadHourlyStats().then(() => this.renderHourlyStats());
      this.loadDailyStats().then(() => this.renderDailyStats());

      Promise.all([this.loadRegionalStats(), this.loadMap()]).then(() =>
        this.renderRegionalStats(),
      );

      window.addEventListener('resize', () => this.rerender());
      window.addEventListener('orientationchange', () => this.rerender());
    }

    rerender() {
      // .regional-qoe-graph: 体感品質値の都道府県別ヒートマップ
      // .hourly-qoe-graph: 体感品質値の時間帯別平均
      // .daily-qoe-graph: 体感品質値の曜日別平均
      document
        .querySelectorAll('.hourly-qoe-graph, .daily-qoe-graph, .regional-qoe-graph')
        .forEach(($outer) => {
          // eslint-disable-next-line no-param-reassign
          $outer.innerHTML = '';
        });

      this.width = document.querySelector('.regional-qoe-graph').clientWidth;

      this.renderHourlyStats();
      this.renderDailyStats();
      this.renderRegionalStats();
    }

    async loadStats(method, options = {}) {
      return fetch(`https://sodium.webdino.org:8443/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(options),
      }).then((response) => response.json());
    }

    getColor(value) {
      return value ? `hsl(${parseInt((value - 2) * 40, 10)}, 100%, 45%)` : '#FFF';
    }

    renderBarChart(group, labels, stats) {
      const data = [];
      const reducedTicks = this.width < 800 && labels.length > 10;
      const xTickValues = [];
      const yTicks = this.width < 800 ? 5 : 9;

      for (let i = 0; i < labels.length; i += 1) {
        const d = stats.find((_d) => _d[group] === i);
        const key = labels[i] || i;
        const value = d ? parseInt(d.average * 100, 10) / 100 : 0;

        data.push({ key, value, color: this.getColor(value) });

        if (!reducedTicks || i % 2 === 0) {
          xTickValues.push(key);
        }
      }

      const selectors = {
        hour: '.hourly-qoe-graph',
        day: '.daily-qoe-graph',
      };

      const { width } = this;
      const height = this.width / 2;
      const margin = 40;

      const svg = d3
        .select(selectors[group])
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.key))
        .range([margin, width - margin])
        .padding(0.1);

      const yDomain = [3, 4];

      const y = d3
        .scaleLinear()
        .domain(yDomain)
        .range([height - margin, margin]);

      // bars
      svg
        .append('g')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d) => x(d.key))
        .attr('y', (d) => y(d.value))
        .attr('width', () => x.bandwidth())
        .attr('height', (d) => y(yDomain[0]) - y(d.value))
        .attr('fill', (d) => d.color)
        .append('title')
        .text((d) => d.value);

      // x-axis
      svg
        .append('g')
        .call((g) =>
          g
            .attr('transform', `translate(0, ${height - margin})`)
            .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(xTickValues)),
        );

      // y-axis
      svg.append('g').call((g) =>
        g
          .attr('transform', `translate(${margin}, 0)`)
          .call(d3.axisLeft(y).ticks(yTicks))
          .call((_g) => _g.select('.domain').remove()),
      );
    }

    async loadHourlyStats() {
      this.hourlyStats = await this.loadStats('stats', {
        group: 'hour',
        limit: 24,
      });
    }

    renderHourlyStats() {
      this.renderBarChart('hour', new Array(24), this.hourlyStats);
    }

    async loadDailyStats() {
      this.dailyStats = await this.loadStats('stats', {
        group: 'day',
        limit: 7,
      });
    }

    renderDailyStats() {
      this.renderBarChart(
        'day',
        locale === 'ja'
          ? ['日', '月', '火', '水', '木', '金', '土']
          : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        this.dailyStats,
      );
    }

    async loadRegionalStats() {
      this.regionalStats = await this.loadStats('stats/subdivision', {
        country: 'JP',
      });
    }

    async loadMap() {
      // https://github.com/dataofjapan/land/blob/master/japan.topojson
      this.map = await fetch('/scripts/japan.topojson').then((r) => r.json());
    }

    renderRegionalStats() {
      const data = [];
      const getData = (pref) => data.find((d) => d.key === pref.properties.id);

      for (let key = 1; key <= 47; key += 1) {
        const d = this.regionalStats.find(
          (_d) => _d.country === 'JP' && _d.subdivision === `${key < 10 ? '0' : ''}${key}`,
        );

        const value = d ? parseInt(d.data[0].average * 100, 10) / 100 : 0;

        data.push({ key, value, color: this.getColor(value) });
      }

      const { width } = this;
      const height = this.width;

      const svg = d3
        .select('.regional-qoe-graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      const projection = d3
        .geoMercator()
        .center([136, 35.5])
        .scale(width * 2)
        .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);
      const topo = topojson.feature(this.map, this.map.objects.japan).features;

      svg
        .selectAll('.pref')
        .data(topo)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', (pref) => getData(pref).color)
        .append('title')
        .text(
          (pref) =>
            `${pref.properties.nam_ja}: ${
              getData(pref).value || (locale === 'ja' ? 'データなし' : 'No Data')
            }`,
        );
    }
  }

  onMount(() => {
    // eslint-disable-next-line no-new
    new VideoMarkStats();
  });
</script>
