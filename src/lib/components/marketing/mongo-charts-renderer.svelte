<!--
  @component
  Activate MongoDB data charts on the page using the Embedding SDK. A chart can be embedded using a
  `<div>` with the `data-chart-id` attribute along with the optional `data-cache` attribute.
  @example <div data-chart-id="8d4dff93-e7ca-4ccd-a622-e20e8a100197" data-cache="3600" />
  @see https://www.mongodb.com/docs/charts/embedded-chart-options/
-->
<script>
  import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';

  let sdk;

  onMount(() => {
    sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-sodium-ejpey' });
  });

  afterNavigate(() => {
    document.querySelectorAll('[data-chart-id]').forEach((container) => {
      const { chartId, cache } = container.dataset;

      const chart = sdk.createChart({
        chartId,
        height: 500,
        setMaxDataAge: cache !== undefined ? Number(cache) : 86400, // Cache for a day by default
        showAttribution: false,
      });

      chart.render(container);
    });
  });
</script>
