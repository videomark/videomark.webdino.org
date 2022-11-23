<!--
  @component
  Embed MongoDB data chart placeholders on the page. Actual rendering is done with the
  `<MongoChartsRenderer>` component, which can be included only once in the stats page layout.
-->
<script>
  /**
   * Chart list, including the IDs and optional cache expires.
   * @type {Array.<Object>}
   */
  export let charts = [];
</script>

{#each charts as { id, cache }}
  <div data-chart-id={id} data-cache={cache} />
{/each}
