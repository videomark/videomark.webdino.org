<script>
  import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
  import { onMount } from 'svelte';

  onMount(() => {
    const sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-sodium-ejpey' });

    document.querySelectorAll('[data-chart-id]').forEach((container) => {
      const { chartId } = container.dataset;
      const chart = sdk.createChart({ chartId, height: 500, showAttribution: false });

      chart.render(container);
    });
  });
</script>
