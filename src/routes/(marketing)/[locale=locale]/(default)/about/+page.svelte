<script>
  import { _, json } from 'svelte-i18n';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import ResponsiveImage from '$lib/components/marketing/responsive-image.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.about.meta')} />

<Section>
  <h2>{$_('pages.about.background.heading')}</h2>
  {@html parse($_('pages.about.background.body'))}
  <div class="centered">
    <img
      src={$_('pages.about.background.image.src')}
      alt={$_('pages.about.background.image.alt')}
    />
  </div>
</Section>

<Section accent={1}>
  <h2>{$_('pages.about.how_to_use.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.about.how_to_use.body_1'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.about.how_to_use.image_1.src')}
          alt={$_('pages.about.how_to_use.image_1.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
  <Grid reverse>
    <GridItem>
      {@html parse($_('pages.about.how_to_use.body_2'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.about.how_to_use.image_2.src')}
          alt={$_('pages.about.how_to_use.image_2.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section>
  <h2>{$_('pages.about.qoe.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.about.qoe.body'))}
    </GridItem>
    <GridItem>
      <img src={$_('pages.about.qoe.image.src')} alt={$_('pages.about.qoe.image.alt')} />
    </GridItem>
  </Grid>
</Section>

<Section accent={2}>
  <h2>{$_('pages.about.architecture.heading')}</h2>
  <ResponsiveImage>
    <img
      src={$_('pages.about.architecture.image.src')}
      alt={$_('pages.about.architecture.image.alt')}
    />
  </ResponsiveImage>
  {@html parse($_('pages.about.architecture.body'))}
</Section>

<Section>
  <h2>{$_('pages.about.acknowledgment.heading')}</h2>
  {@html parse($_('pages.about.acknowledgment.body'))}
</Section>
