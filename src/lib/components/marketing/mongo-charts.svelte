<!--
  @component
  Embed MongoDB data chart placeholders on the page. Actual rendering is done with the
  `<MongoChartsRenderer>` component, which can be included only once in the stats page layout.
-->
<script>
  import { _, json } from 'svelte-i18n';
  import { get } from 'svelte/store';

  /**
   * @typedef {Object} Props
   * @property {string} [src] Chart source ID in the localized string resource.
   * @property {object[]} [srcArray] Chart list, including the IDs and optional cache expires.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    src = '',
    srcArray = undefined,
    /* eslint-enable prefer-const */
  } = $props();

  const charts = $derived(src ? /** @type {object[]} */ (get(json)(src)) : srcArray || []);
</script>

{#each charts as { id, cache, note }}
  <section>
    <div data-chart-id={id} data-cache={cache}></div>
    {#if note}
      <div role="note">{$_('pages._global.misc.note_prefix')} {note}</div>
    {/if}
  </section>
{/each}

<style lang="scss">
  section {
    margin: 48px 0 0;
  }

  [data-chart-id] {
    height: 500px;
  }

  [role='note'] {
    color: #4e6e8e;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
