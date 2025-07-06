<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div>
  {@render children?.()}
</div>

<style lang="scss">
  div {
    overflow-x: auto;

    :global(img) {
      width: 100%;
      min-width: 800px;
    }
  }
</style>
