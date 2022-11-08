<script>
  import { json, _ } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import ReleaseNotes from '$lib/components/marketing/release-notes.svelte';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.whatsnew_android.meta')} />

<Article>
  <h1>{$_('pages.whatsnew_android.intro.heading')}</h1>
  {@html parse($_('pages.whatsnew_android.body', { default: '' }))}
  <ReleaseNotes releases={unique($json('pages.whatsnew_android.releases'), 'version')} />
</Article>
