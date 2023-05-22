<script>
  import { _, json } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import ReleaseNotes from '$lib/components/marketing/release-notes.svelte';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.whatsnew_extension.meta')} />

<Article>
  <h1>{$_('pages.whatsnew_extension.intro.heading')}</h1>
  {@html parse($_('pages.whatsnew_extension.body', { default: '' }))}
  <ReleaseNotes
    releases={unique(
      /** @type {object[]} */ ($json('pages.whatsnew_extension.releases')),
      'version',
    )}
  />
</Article>
