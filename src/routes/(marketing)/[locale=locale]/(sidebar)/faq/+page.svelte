<script>
  import { json, _ } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import FaqBody from '$lib/components/marketing/faq-body.svelte';
  import FaqToc from '$lib/components/marketing/faq-toc.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Sidebar from '$lib/components/marketing/sidebar.svelte';

  const categories = ['general', 'qoe', 'privacy', 'limitations'];
</script>

<MetaTags meta={$json('pages.faq.meta')} />

<Sidebar fixed>
  <nav>
    <FaqToc {categories} />
  </nav>
</Sidebar>

<main>
  <Article>
    <h1>{$_('pages.faq.intro.heading')}</h1>
    <FaqBody {categories} />
  </Article>
</main>
