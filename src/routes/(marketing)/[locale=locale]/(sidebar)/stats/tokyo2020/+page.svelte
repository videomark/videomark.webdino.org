<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoCharts from '$lib/components/marketing/mongo-charts.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_tokyo2020.meta')} />

<Header>
  <h1>{$_('pages.stats_tokyo2020.intro.heading')}</h1>
  {@html parse($_('pages.stats_tokyo2020.body', { default: '' }))}
</Header>

<Section>
  <h2>{$_('pages.stats_tokyo2020.qoe_distribution.heading')}</h2>
  {@html parse($_('pages.stats_tokyo2020.qoe_distribution.body', { default: '' }))}
  <MongoCharts src={'pages.stats_tokyo2020.qoe_distribution.charts'} />
</Section>

<Section>
  <h2>{$_('pages.stats_tokyo2020.qoe_trends.heading')}</h2>
  {@html parse($_('pages.stats_tokyo2020.qoe_trends.body', { default: '' }))}
  <MongoCharts src={'pages.stats_tokyo2020.qoe_trends.charts'} />
</Section>

<Section>
  <h2>{$_('pages.stats_tokyo2020.numbers.heading')}</h2>
  {@html parse($_('pages.stats_tokyo2020.numbers.body', { default: '' }))}
  <MongoCharts src={'pages.stats_tokyo2020.numbers.charts'} />
</Section>
