<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.spec.meta')} />

<Header>
  <h1>{$_('pages.spec.intro.heading')}</h1>
  {@html parse($_('pages.spec.intro.body'))}
</Header>

<Section accent={1}>
  <h2>{$_('pages.spec.services.heading')}</h2>
  {@html parse($_('pages.spec.services.body'))}
</Section>

<Section>
  <h2>{$_('pages.spec.limitations.heading')}</h2>
  {@html parse($_('pages.spec.limitations.body'))}
</Section>

<Section accent={2}>
  <h2>{$_('pages.spec.parsing.heading')}</h2>
  {@html parse($_('pages.spec.parsing.body'))}
</Section>
