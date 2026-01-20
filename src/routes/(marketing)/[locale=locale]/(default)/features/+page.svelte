<script>
  import { _, json } from 'svelte-i18n';
  import DownloadButtons from '$lib/components/marketing/download-buttons.svelte';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
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

<Section>
  <h2>{$_('pages.features.player_qoe.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.features.player_qoe.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.features.player_qoe.image.src')}
          alt={$_('pages.features.player_qoe.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section accent={2}>
  <h2>{$_('pages.features.player_details.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.features.player_details.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.features.player_details.image.src')}
          alt={$_('pages.features.player_details.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section>
  <h2>{$_('pages.features.result_list.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.features.result_list.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.features.result_list.image.src')}
          alt={$_('pages.features.result_list.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section accent={2}>
  <h2>{$_('pages.features.result_details.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.features.result_details.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.features.result_details.image.src')}
          alt={$_('pages.features.result_details.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>
