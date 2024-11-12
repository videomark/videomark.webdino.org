<script>
  import { _, json } from 'svelte-i18n';
  import BasicChartsRenderer from '$lib/components/marketing/basic-charts-renderer.svelte';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats.meta')} />

<Header>
  <h1>{$_('pages.stats.intro.heading')}</h1>
  {@html parse($_('pages.stats.body'))}
</Header>

<Section>
  <h2>{$_('pages.stats.hourly_qoe.heading')}</h2>
  <div class="hourly-qoe-graph"></div>
</Section>

<Section>
  <h2>{$_('pages.stats.daily_qoe.heading')}</h2>
  <div class="daily-qoe-graph"></div>
</Section>

<Section>
  <h2>{$_('pages.stats.map.heading')}</h2>
  <div class="regional-qoe-graph"></div>
  <p class="align-center">
    <small>{@html parse($_('pages.stats.map.note'))}</small>
  </p>
</Section>

<Section>
  <h2>{$_('pages.stats.opendata.heading')}</h2>
  {@html parse($_('pages.stats.opendata.body'))}
</Section>

<BasicChartsRenderer />

<style lang="scss">
  .regional-qoe-graph {
    :global(svg path) {
      stroke: #ccc;
    }
  }
</style>
