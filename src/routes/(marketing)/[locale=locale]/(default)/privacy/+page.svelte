<script>
  import { _, json } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import LegalDocHistory from '$lib/components/marketing/legal-doc-history.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.privacy.meta')} />

<Article>
  <h1>{$_('pages.privacy.intro.heading')}</h1>
  {@html parse($_('pages.privacy.body'))}
</Article>

<LegalDocHistory
  title={$_('pages.privacy.history.heading')}
  changes={unique(/** @type {object[]} */ ($json('pages.privacy.history.changes')), 'date')}
/>
