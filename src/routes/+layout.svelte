<script>
  import { locale as currentLocale, isLoading } from 'svelte-i18n';
  import { page } from '$app/state';
  import { initLocales } from '$lib/services/util/i18n';

  import '$lib/styles/marketing.scss';

  $: ({ locale = 'ja' } = page.params);
  $: currentLocale.set(locale);

  initLocales();
</script>

{#if !$isLoading}
  <slot />
{/if}
