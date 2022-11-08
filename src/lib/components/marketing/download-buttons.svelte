<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import Button from '../common/button.svelte';

  export let detectBrowser = false;
  export let showAndroidLink = false;

  let isFirefox = false;

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
  {#if showAndroidLink}
    <Button href="/androidbrowser">{$_('pages._global.products.android_browser')}</Button>
  {/if}
</div>
