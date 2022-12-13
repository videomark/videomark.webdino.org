<script>
  import { json, _ } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoCharts from '$lib/components/marketing/mongo-charts.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_ipv6.meta')} />

<Header>
  <h1>{$_('pages.stats_ipv6.intro.heading')}</h1>
  {@html parse($_('pages.stats_ipv6.intro.body'))}
</Header>

<Section>
  <h2>{$_('pages.stats_ipv6.throughput.heading')}</h2>
  {@html parse($_('pages.stats_ipv6.throughput.body', { default: '' }))}
  <MongoCharts charts={$json('pages.stats_ipv6.throughput.charts')} />
</Section>

<Section>
  <h2>{$_('pages.stats_ipv6.hourly_qoe.heading')}</h2>
  {@html parse($_('pages.stats_ipv6.hourly_qoe.body', { default: '' }))}
  <MongoCharts charts={$json('pages.stats_ipv6.hourly_qoe.charts')} />
</Section>

<Section>
  <h2>{$_('pages.stats_ipv6.weekly_qoe.heading')}</h2>
  {@html parse($_('pages.stats_ipv6.weekly_qoe.body', { default: '' }))}
  <MongoCharts charts={$json('pages.stats_ipv6.weekly_qoe.charts')} />
</Section>
