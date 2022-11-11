<script>
  import { json, _ } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import FaqSectionBody from '$lib/components/marketing/faq-section-body.svelte';
  import FaqSectionToc from '$lib/components/marketing/faq-section-toc.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Sidebar from '$lib/components/marketing/sidebar.svelte';
</script>

<MetaTags meta={$json('pages.faq.meta')} />

<Sidebar fixed>
  <nav>
    <ul>
      <FaqSectionToc category="general" />
      <FaqSectionToc category="qoe" />
      <FaqSectionToc category="privacy" />
      <FaqSectionToc category="limitations" />
    </ul>
  </nav>
</Sidebar>

<main>
  <Article>
    <h1>{$_('pages.faq.intro.heading')}</h1>
    <FaqSectionBody category="general" />
    <FaqSectionBody category="qoe" />
    <FaqSectionBody category="privacy" />
    <FaqSectionBody category="limitations" />
  </Article>
</main>
