<script>
  import { json, _ } from 'svelte-i18n';
  import DownloadButtons from '$lib/components/marketing/download-buttons.svelte';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';
</script>

<MetaTags meta={$json('pages.help_extension.meta')} />

<Section>
  <h2>{$_('pages.help_extension.install.heading')}</h2>
  {@html parse($_('pages.help_extension.install.body'))}
  <DownloadButtons />
</Section>

<Section accent="1">
  <h2>{$_('pages.help_extension.player_qoe.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help_extension.player_qoe.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.help_extension.player_qoe.image.src')}
          alt={$_('pages.help_extension.player_qoe.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section>
  <h2>{$_('pages.help_extension.player_details.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help_extension.player_details.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.help_extension.player_details.image.src')}
          alt={$_('pages.help_extension.player_details.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section accent="2">
  <h2>{$_('pages.help_extension.result_list.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help_extension.result_list.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.help_extension.result_list.image.src')}
          alt={$_('pages.help_extension.result_list.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<Section>
  <h2>{$_('pages.help_extension.result_details.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.help_extension.result_details.body'))}
    </GridItem>
    <GridItem>
      <Screenshot>
        <img
          src={$_('pages.help_extension.result_details.image.src')}
          alt={$_('pages.help_extension.result_details.image.alt')}
        />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>
