<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children] Content of the announcement.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<div class="announcement">
  {@render children?.()}
</div>

<style>
  .announcement {
    padding: 0.8rem 1.6rem;
    color: #fff;
    background-color: #626262;
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 600;
    text-align: center;

    :global(a) {
      color: #ccc;
    }
  }
</style>
