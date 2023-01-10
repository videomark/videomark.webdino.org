<!--
  @component
  Embed MongoDB data chart placeholders on the page. Actual rendering is done with the
  `<MongoChartsRenderer>` component, which can be included only once in the stats page layout.
-->
<script>
  import { _ } from 'svelte-i18n';

  /**
   * Chart list, including the IDs and optional cache expires.
   * @type {Array.<Object>}
   */
  export let charts = [];
</script>

{#each charts as { id, cache, note }}
  <section>
    <div data-chart-id={id} data-cache={cache} />
    {#if note}
      <div role="note">{$_('pages._global.misc.note_prefix')} {note}</div>
    {/if}
  </section>
{/each}

<style lang="scss">
  section {
    margin: 48px 0 0;
  }

  [role='note'] {
    color: #4e6e8e;
    font-size: 0.9rem;
    text-align: center;
  }
</style>
