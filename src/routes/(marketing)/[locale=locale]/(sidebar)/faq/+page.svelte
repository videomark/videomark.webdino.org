<script>
  import { onMount } from 'svelte';
  import { json, _ } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import FaqBody from '$lib/components/marketing/faq-body.svelte';
  import FaqToc from '$lib/components/marketing/faq-toc.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Sidebar from '$lib/components/marketing/sidebar.svelte';

  const categories = ['general', 'qoe', 'privacy', 'limitations'];
  let targetId = '';

  const getHash = () => {
    targetId = window.location.hash.substring(1);
  };

  onMount(() => {
    getHash();
    (targetId ? document.getElementById(targetId) : undefined)?.scrollIntoView();
  });
</script>

<svelte:window
  on:hashchange={() => {
    getHash();
  }}
/>

<MetaTags meta={$json('pages.faq.meta')} />

<Sidebar fixed>
  <nav>
    <FaqToc {categories} {targetId} />
  </nav>
</Sidebar>

<main>
  <Article>
    <h1>{$_('pages.faq.intro.heading')}</h1>
    <FaqBody {categories} {targetId} />
  </Article>
</main>
