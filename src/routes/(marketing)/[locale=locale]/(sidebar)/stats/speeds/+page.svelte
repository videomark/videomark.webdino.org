<script>
  import { json, _ } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoCharts from '$lib/components/marketing/mongo-charts.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_speeds.meta')} />

<Header>
  <h1>{$_('pages.stats_speeds.intro.heading')}</h1>
  {@html parse($_('pages.stats_speeds.body', { default: '' }))}
</Header>

<Section>
  <h2>{$_('pages.stats_speeds.throughput.heading')}</h2>
  {@html parse($_('pages.stats_speeds.throughput.body', { default: '' }))}
  <MongoCharts charts={$json('pages.stats_speeds.throughput.charts')} />
</Section>

<Section>
  <h2>{$_('pages.stats_speeds.response_times.heading')}</h2>
  {@html parse($_('pages.stats_speeds.response_times.body', { default: '' }))}
  <MongoCharts charts={$json('pages.stats_speeds.response_times.charts')} />
</Section>
