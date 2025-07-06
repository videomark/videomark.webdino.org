<script>
  /**
   * @typedef {Object} Props
   * @property {boolean} [reverse]
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    reverse = false,
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div class="grid" class:reverse>
  {@render children?.()}
</div>

<style lang="scss">
  .grid {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin: 32px 0;

    &.reverse {
      flex-direction: row-reverse;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
</style>
