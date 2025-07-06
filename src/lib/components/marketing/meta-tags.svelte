<script>
  import { json } from 'svelte-i18n';
  import { get } from 'svelte/store';
  import { page } from '$app/state';
  import { supportedLocales } from '$lib/services/util/i18n';

  const { VITE_SITE_ORIGIN: origin } = import.meta.env;

  /**
   * @typedef {Object} Props
   * @property {any} [meta] Meta information for the page.
   * @property {boolean} [pageTitleWithSiteName] Whether to append the site name to the page title.
   * Defaults to `true`.
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    meta = {},
    pageTitleWithSiteName = true,
    children,
    /* eslint-enable prefer-const */
  } = $props();

  const pageTitle = $derived(meta.pageTitle || '');
  const pageDescription = $derived(meta.pageDescription || '');
  const pageImage = $derived(meta.pageImage || '');
  const { locale = 'ja' } = $derived(page.params);
  const path = $derived(page.url.pathname.replace(new RegExp(`^\\/${locale}`), ''));
  const {
    // @ts-ignore
    meta: { siteTitle, siteDescription, siteImage } = {
      siteTitle: '',
      siteDescription: '',
      siteImage: '',
    },
    // @ts-ignore
    social: { facebookAccount, twitterAccount } = {
      facebookAccount: '',
      twitterAccount: '',
    },
  } = $derived(get(json)('pages._global'));
  const _pageTitle = $derived(
    // eslint-disable-next-line no-nested-ternary
    pageTitle
      ? pageTitleWithSiteName
        ? `${pageTitle} | ${siteTitle}`
        : pageTitle
      : siteTitle || '',
  );
  const _pageDescription = $derived(pageDescription || siteDescription || '');
  const _pageImage = $derived(pageImage || siteImage ? `${origin}${pageImage || siteImage}` : '');
  const canonicalURL = $derived(`${origin}/${locale}${path}`);
</script>

<svelte:head>
  <title>{_pageTitle}</title>
  <meta name="description" content={_pageDescription} />
  <link rel="canonical" href={canonicalURL} />
  <link rel="alternate" hreflang="x-default" href={`${origin}${path}`} />
  {#each Object.entries(supportedLocales) as [value]}
    <link rel="alternate" hreflang={value} href={`${origin}/${value}${path}`} />
  {/each}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:title" content={_pageTitle} />
  <meta property="og:description" content={_pageDescription} />
  <meta property="og:image" content={_pageImage} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="fb:profile_id" content={facebookAccount || ''} />
  <meta name="twitter:site" content={twitterAccount || ''} />
  <meta name="twitter:card" content={_pageImage ? 'summary_large_image' : 'summary'} />
  <meta name="twitter:title" content={_pageTitle} />
  <meta name="twitter:description" content={_pageDescription} />
  <meta name="twitter:image" content={_pageImage} />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="icon" type="image/png" href="/favicon-144.png" sizes="144x144" />
  <link rel="icon" type="image/png" href="/favicon-192.png" sizes="192x192" />
  <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon-144.png" sizes="144x144" />
  <link rel="apple-touch-icon" type="image/png" href="/apple-touch-icon-192.png" sizes="192x192" />
  {@render children?.()}
</svelte:head>
