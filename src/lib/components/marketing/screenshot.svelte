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

<figure>
  {@render children?.()}
</figure>

<style lang="scss">
  figure {
    display: block;
    margin: 0;
    text-align: center;

    :global(img) {
      max-width: 100%;
    }
  }
</style>
