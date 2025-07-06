<script>
  import { locale as currentLocale } from 'svelte-i18n';
  import { page } from '$app/state';

  import '$lib/styles/marketing.scss';

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    children,
    /* eslint-enable prefer-const */
  } = $props();

  const { locale = 'ja' } = $derived(page.params);

  $effect(() => {
    currentLocale.set(locale);
  });
</script>

{@render children?.()}
