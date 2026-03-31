<script>
  import { _, json } from 'svelte-i18n';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.about.meta')} />

<Header>
  <h1>{$_('pages.about.intro.heading')}</h1>
  {@html parse($_('pages.about.intro.body'))}
</Header>

<Section accent={1}>
  <h2>{$_('pages.about.background.heading')}</h2>
  {@html parse($_('pages.about.background.body'))}
  <div class="centered">
    <img
      src={$_('pages.about.background.image.src')}
      alt={$_('pages.about.background.image.alt')}
    />
  </div>
</Section>

<Section>
  <h2>{$_('pages.about.architecture.heading')}</h2>
  {@html parse($_('pages.about.architecture.body'))}
  <!-- <ResponsiveImage>
    <img
      src={$_('pages.about.architecture.image.src')}
      alt={$_('pages.about.architecture.image.alt')}
    />
  </ResponsiveImage> -->
</Section>

<Section accent={2} id="qoe">
  <h2>{$_('pages.about.qoe.heading')}</h2>
  {@html parse($_('pages.about.qoe.body'))}
</Section>

<Section>
  <h2>{$_('pages.about.acknowledgment.heading')}</h2>
  {@html parse($_('pages.about.acknowledgment.body'))}
</Section>
