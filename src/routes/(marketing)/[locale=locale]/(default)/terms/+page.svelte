<script>
  import { _, json } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.terms.meta')} />

<Article>
  <h1>{$_('pages.terms.intro.heading')}</h1>
  {@html parse($_('pages.terms.body'))}
</Article>
