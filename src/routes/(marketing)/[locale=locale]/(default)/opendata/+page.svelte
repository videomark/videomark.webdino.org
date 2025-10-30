<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.opendata.meta')} />

<Header>
  <h1>{$_('pages.opendata.intro.heading')}</h1>
</Header>

<Section>
  <h2>{$_('pages.opendata.download.heading')}</h2>
  {@html parse($_('pages.opendata.download.body'))}
</Section>

<Section>
  <h2>{$_('pages.opendata.sample.heading')}</h2>
  {@html parse($_('pages.opendata.sample.body'))}
</Section>

<Section>
  <h2>{$_('pages.opendata.filtering.heading')}</h2>
  {@html parse($_('pages.opendata.filtering.body'))}
</Section>
