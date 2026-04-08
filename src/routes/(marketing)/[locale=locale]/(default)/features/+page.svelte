<script>
  import { _, json } from 'svelte-i18n';
  import DownloadButtons from '$lib/components/marketing/download-buttons.svelte';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';

  /** @type {{ heading: string, body: string, image: { src: string, alt: string } }[]} */
  const highlights = $derived(
    unique(/** @type {object[]} */ ($json(`pages.features.highlights`)), 'heading'),
  );
</script>

<MetaTags meta={$json('pages.features.meta')} />

<Header>
  <h1>{$_('pages.features.intro.heading')}</h1>
  {@html parse($_('pages.features.intro.body'))}
</Header>

<Section accent={1}>
  <h2>{$_('pages.features.install.heading')}</h2>
  {@html parse($_('pages.features.install.body'))}
  <DownloadButtons />
</Section>

{#each highlights as { heading, body, image: { src, alt } }, index (heading)}
  <Section accent={index % 2 === 0 ? undefined : 2}>
    <h2>{heading}</h2>
    <Grid>
      <GridItem>
        {@html parse(body)}
      </GridItem>
      <GridItem>
        <Screenshot>
          <img {src} {alt} />
        </Screenshot>
      </GridItem>
    </Grid>
  </Section>
{/each}
