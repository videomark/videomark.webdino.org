<script>
  import { _ } from 'svelte-i18n';
  import { parse } from '$lib/services/util/markdown';
  import Article from './article.svelte';

  export let releases = [];
</script>

{#each releases.reverse() as release (release.version)}
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
