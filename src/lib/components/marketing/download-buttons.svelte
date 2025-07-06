<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import Button from '../common/button.svelte';

  /**
   * @typedef {Object} Props
   * @property {boolean} [detectBrowser] Whether to detect the browser and show the appropriate
   * download button. If `false`, both buttons will be shown. Defaults to `false`.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    detectBrowser = false,
    /* eslint-enable prefer-const */
  } = $props();

  let isFirefox = $state(false);

  onMount(() => {
    isFirefox = navigator.userAgent.includes('Firefox/');
  });
</script>

<div class="centered">
  {#if detectBrowser}
    {#if isFirefox}
      <Button href="/firefoxextension">{$_('pages._global.products.firefox_extension')}</Button>
    {:else}
      <Button href="/chromeextension">{$_('pages._global.products.chrome_extension')}</Button>
    {/if}
  {:else}
    <Button href="/chromeextension">{$_('pages._global.products.chrome_extension')}</Button>
    <Button href="/firefoxextension">{$_('pages._global.products.firefox_extension')}</Button>
  {/if}
</div>
