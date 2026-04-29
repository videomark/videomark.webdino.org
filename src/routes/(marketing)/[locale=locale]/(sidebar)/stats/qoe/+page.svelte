<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoChartImages from '$lib/components/marketing/mongo-chart-images.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_qoe.meta')} />

<Header>
  <h1>{$_('pages.stats_qoe.intro.heading')}</h1>
  {@html parse($_('pages.stats_qoe.intro.body'))}
</Header>

<Section>
  <h2>{$_('pages.stats_qoe.trends.heading')}</h2>
  {@html parse($_('pages.stats_qoe.trends.body'))}
  <MongoChartImages src={'pages.stats_qoe.trends.charts'} />
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.distribution.heading')}</h2>
  {@html parse($_('pages.stats_qoe.distribution.body'))}
  <MongoChartImages src={'pages.stats_qoe.distribution.charts'} />
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.hourly.heading')}</h2>
  {@html parse($_('pages.stats_qoe.hourly.body'))}
  <MongoChartImages src={'pages.stats_qoe.hourly.charts'} />
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.weekly.heading')}</h2>
  {@html parse($_('pages.stats_qoe.weekly.body'))}
  <MongoChartImages src={'pages.stats_qoe.weekly.charts'} />
</Section>
