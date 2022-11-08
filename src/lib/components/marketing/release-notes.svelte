<script>
  import { _ } from 'svelte-i18n';
  import { parse } from '$lib/services/util/markdown';
  import Article from './article.svelte';

  export let releases = [];
</script>

{#each releases.sort((a, b) => new Date(b.date) - new Date(a.date)) as release (release.date)}
  {@const { version, date, body } = release}
  <Article>
    <h2>
      {$_('pages.whatsnew.heading_template', { values: { version, date } })}
    </h2>
    <div>
      {@html parse(body)}
    </div>
  </Article>
{/each}
