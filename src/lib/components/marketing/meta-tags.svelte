<script>
  import { json } from 'svelte-i18n';
  import { get } from 'svelte/store';
  import { page } from '$app/stores';
  import { supportedLocales } from '$lib/services/util/i18n';

  const { VITE_SITE_ORIGIN: origin } = import.meta.env;

  export let meta = {};
  export let pageTitleWithSiteName = true;

  $: pageTitle = meta.pageTitle || '';
  $: pageDescription = meta.pageDescription || '';
  $: pageImage = meta.pageImage || '';
  $: ({ locale = 'ja' } = $page.params);
  $: path = $page.url.pathname.replace(new RegExp(`^\\/${locale}`), '');
  $: ({
    meta: { siteTitle, siteDescription, siteImage } = {},
    social: { facebookAccount, twitterAccount } = {},
  } = get(json)('pages._global'));
  // eslint-disable-next-line no-nested-ternary
  $: _pageTitle = pageTitle
    ? pageTitleWithSiteName
      ? `${pageTitle} | ${siteTitle}`
      : pageTitle
    : siteTitle || '';
  $: _pageDescription = pageDescription || siteDescription || '';
  $: _pageImage = pageImage || siteImage ? `${origin}${pageImage || siteImage}` : '';
  $: canonicalURL = `${origin}/${locale}${path}`;
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
</svelte:head>
