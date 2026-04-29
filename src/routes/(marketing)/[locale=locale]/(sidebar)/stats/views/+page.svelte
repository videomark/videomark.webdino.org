<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoChartImages from '$lib/components/marketing/mongo-chart-images.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_views.meta')} />

<Header>
  <h1>{$_('pages.stats_views.intro.heading')}</h1>
  {@html parse($_('pages.stats_views.intro.body', { default: '' }))}
</Header>

<Section>
  <h2>{$_('pages.stats_views.trends.heading')}</h2>
  {@html parse($_('pages.stats_views.trends.body', { default: '' }))}
  <MongoChartImages src={'pages.stats_views.trends.charts'} />
</Section>
