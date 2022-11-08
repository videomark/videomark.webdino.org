<script>
  import { json, _ } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoChartsRenderer from '$lib/components/marketing/mongo-charts-renderer.svelte';
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
  {#each $_('pages.stats_tokyo2020.qoe_distribution.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<Section>
  <h2>{$_('pages.stats_tokyo2020.qoe_trends.heading')}</h2>
  {@html parse($_('pages.stats_tokyo2020.qoe_trends.body', { default: '' }))}
  {#each $_('pages.stats_tokyo2020.qoe_trends.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<Section>
  <h2>{$_('pages.stats_tokyo2020.numbers.heading')}</h2>
  {@html parse($_('pages.stats_tokyo2020.numbers.body', { default: '' }))}
  {#each $_('pages.stats_tokyo2020.numbers.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<MongoChartsRenderer />
