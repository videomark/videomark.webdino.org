<script>
  import { _, json } from 'svelte-i18n';
  import { page } from '$app/state';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';

  const { locale = 'ja' } = $derived(page.params);
</script>

<MetaTags meta={$json('pages.contact.meta')} />

<Header>
  <h1>{$_('pages.contact.intro.heading')}</h1>
</Header>

<Section>
  <h2>{$_('pages.contact.thanks.title')}</h2>
  {@html parse($_('pages.contact.thanks.body'))}
  <p><a href="/{locale}">{$_('pages.contact.thanks.link_label')}</a></p>
</Section>
