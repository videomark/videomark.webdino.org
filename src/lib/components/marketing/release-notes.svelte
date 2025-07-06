<script>
  import { _ } from 'svelte-i18n';
  import { parse } from '$lib/services/util/markdown';
  import Article from './article.svelte';

  /**
   * @typedef {Object} Release
   * @property {string} version The version number.
   * @property {string} date The release date.
   * @property {string} body The release notes in Markdown format.
   */

  /**
   * @typedef {Object} Props
   * @property {Release[]} [releases] Release notes,
   * including the version, date, and body.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    releases = [],
    /* eslint-enable prefer-const */
  } = $props();
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
