<script>
  import { isLoading, locale as currentLocale } from 'svelte-i18n';
  import { page } from '$app/stores';
  import { initLocales } from '$lib/services/util/i18n';

  $: ({ locale = 'ja' } = $page.params);
  $: currentLocale.set(locale);

  initLocales();
</script>

{#if !$isLoading}
  <slot />
{/if}

<style lang="scss" global>
  @use '../lib/styles/marketing.scss';
</style>
