<script>
  import { _, json } from 'svelte-i18n';
  import DownloadButtons from '$lib/components/marketing/download-buttons.svelte';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse, parseInline } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.offboarding.meta')}>
  <meta name="robots" content="noindex" />
</MetaTags>

<Header>
  <h1>{@html parseInline($_('pages.offboarding.intro.heading'))}</h1>
  {@html parse($_('pages.offboarding.intro.body'))}
</Header>

<!-- svelte-ignore a11y_missing_attribute -->
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSdPXZ6902B2nzLCgkzfVAgO0rVCnC46nAgiJHj2NMZaaSfk_A/viewform?embedded=true"
></iframe>

<Section accent={1}>
  <h2>{@html parseInline($_('pages.offboarding.reinstall.title'))}</h2>
  <DownloadButtons />
</Section>

<style lang="scss">
  h1 ~ :global(*) {
    text-align: center;
  }

  iframe {
    display: block;
    margin: 0 auto;
    border: 0;
    width: 800px;
    max-width: 100%;
    height: 800px;
  }

  @media screen and (width < 800px) {
    h1 :global(br),
    h2 :global(br) {
      display: none;
    }
  }

  @media screen and (width < 480px) {
    iframe {
      height: 960px;
    }
  }
</style>
