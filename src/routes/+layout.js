import { waitLocale } from 'svelte-i18n';
import { initLocales } from '$lib/services/util/i18n';

export const prerender = true;

export const load = async () => {
  await initLocales();
  await waitLocale();
};
