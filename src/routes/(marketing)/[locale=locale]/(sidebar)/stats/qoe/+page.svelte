<script>
  import { json, _ } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import MongoChartsRenderer from '$lib/components/marketing/mongo-charts-renderer.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats_qoe.meta')} />

<Header>
  <h1>{$_('pages.stats_qoe.intro.heading')}</h1>
  {@html parse($_('pages.stats_qoe.body'))}
</Header>

<Section>
  <h2>{$_('pages.stats_qoe.trends.heading')}</h2>
  {@html parse($_('pages.stats_qoe.trends.body'))}
  {#each $_('pages.stats_qoe.trends.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.distribution.heading')}</h2>
  {@html parse($_('pages.stats_qoe.distribution.body'))}
  {#each $_('pages.stats_qoe.distribution.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.hourly.heading')}</h2>
  {@html parse($_('pages.stats_qoe.hourly.body'))}
  {#each $_('pages.stats_qoe.hourly.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<Section>
  <h2>{$_('pages.stats_qoe.weekly.heading')}</h2>
  {@html parse($_('pages.stats_qoe.weekly.body'))}
  {#each $_('pages.stats_qoe.weekly.chart_ids')
    .trim()
    .split(/\n/)
    .map((s) => s.trim()) as id}
    <div data-chart-id={id} />
  {/each}
</Section>

<MongoChartsRenderer />
