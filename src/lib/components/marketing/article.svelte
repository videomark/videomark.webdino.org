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

<div class="outer">
  <article class="inner">
    {@render children?.()}
  </article>
</div>
