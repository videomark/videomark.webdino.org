<!--
  @component
  Embed MongoDB data charts as static images on the page. This is used to replace `<MongoCharts>`.
-->
<script>
  import { json } from 'svelte-i18n';
  import { get } from 'svelte/store';

  /**
   * @typedef {Object} Props
   * @property {string} src Chart source in the localized string resource.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    src,
    /* eslint-enable prefer-const */
  } = $props();

  const charts = $derived(/** @type {object[]} */ (get(json)(src)));
</script>

{#each charts as { id, title, hidden = false } (id)}
  {#if !hidden}
    <div>
      <img loading="lazy" src="/images/stats/{id}.webp" alt={title} />
    </div>
  {/if}
{/each}
