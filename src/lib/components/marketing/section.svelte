<script>
  /**
   * @typedef {Object} Props
   * @property {number} [accent] Accent color ID, either `1` or `2`. Defaults to `0`. If `0`, no
   * accent color is applied.
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    accent = 0,
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div class={`outer accent-${accent}`}>
  <section class="inner">
    {@render children?.()}
  </section>
</div>

<style lang="scss">
  .outer {
    overflow: hidden;

    &.accent-1 {
      background-color: #f8c758a3;
    }

    &.accent-2 {
      background-color: #eaecef;
    }
  }
</style>
