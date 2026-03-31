<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.stats.meta')} />

<Header>
  <h1>{$_('pages.stats.intro.heading')}</h1>
  {@html parse($_('pages.stats.intro.body'))}
</Header>
