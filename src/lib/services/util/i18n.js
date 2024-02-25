import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';
import YAML from 'yaml';

/**
 * All the locales available in the app.
 */
export const supportedLocales = {
  // en: { label: 'English' },
  ja: { label: '日本語' },
};

/**
 * Load strings and initialize the locales.
 * @see https://github.com/kaisermann/svelte-i18n/blob/main/docs/Getting%20Started.md
 * @see https://vitejs.dev/guide/features.html#glob-import
 */
export const initLocales = () => {
  const files = import.meta.glob('$lib/data/**/*.yaml', {
    query: '?raw',
    import: 'default',
    eager: true,
  });

  Object.entries(files).forEach(([path, content]) => {
    const [, pages, slug] = path.match(/(pages\/)?(\w+)\.yaml/);

    Object.entries(YAML.parse(/** @type {string} */ (content))).forEach(([locale, messages]) => {
      addMessages(locale, pages ? { pages: { [slug]: messages } } : { [slug]: messages });
    });
  });

  init({
    fallbackLocale: 'en',
    initialLocale: (getLocaleFromNavigator() || '').match(/^ja(?:-JP)?$/i) ? 'ja' : 'en',
  });
};
