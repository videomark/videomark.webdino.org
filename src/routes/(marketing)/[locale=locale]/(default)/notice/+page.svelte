<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.notice.meta')} />

<Header>
  <h1>{$_('pages.notice.intro.heading')}</h1>
</Header>

<Section>
  <h2>{$_('pages.notice.acknowledgements.heading')}</h2>
  {@html parse($_('pages.notice.acknowledgements.body'))}
</Section>

<Section accent={2}>
  <h2>{$_('pages.notice.copyright.heading')}</h2>
  {@html parse($_('pages.notice.copyright.body', { values: { year: new Date().getFullYear() } }))}
</Section>

<Section>
  <h2>{$_('pages.notice.contributors.heading')}</h2>
  {@html parse($_('pages.notice.contributors.body'))}
</Section>
