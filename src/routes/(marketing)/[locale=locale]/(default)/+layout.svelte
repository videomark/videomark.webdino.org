<script>
  import Sidebar from '$lib/components/marketing/sidebar.svelte';
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

<Sidebar />

<main>
  {@render children?.()}
</main>
