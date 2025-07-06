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
    width: calc(50% - 16px);

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    & > :global(img:only-child) {
      display: block;
      margin: 0 auto;
    }
  }
</style>
