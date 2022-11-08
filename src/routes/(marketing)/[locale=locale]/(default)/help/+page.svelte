<script>
  import { json, _ } from 'svelte-i18n';
  import Button from '$lib/components/common/button.svelte';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.help.meta')} />

<Section>
  <h2>{$_('pages.help.what.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help.what.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img src={$_('pages.help.what.image.src')} alt={$_('pages.help.what.image.alt')} />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section accent="1">
  <h2>{$_('pages.help.how.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help.how.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img src={$_('pages.help.how.image.src')} alt={$_('pages.help.how.image.alt')} />
      </Screenshot>
    </GridItem>
  </Grid>
  <p class="centered">
    <Button href="help/extension">{$_('pages.help.how.links.extension')}</Button>
    <Button href="help/android">{$_('pages.help.how.links.android')}</Button>
  </p>
</Section>

<Section>
  <h2>{$_('pages.help.call.heading')}</h2>
  <Grid>
    <GridItem>
      <img src={$_('pages.help.call.image.src')} alt={$_('pages.help.call.image.alt')} />
    </GridItem>
    <GridItem>
      {@html parse($_('pages.help.call.body'))}
    </GridItem>
  </Grid>
</Section>
