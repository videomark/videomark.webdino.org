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

  /** @type {ChartsEmbedSDK} */
  let sdk;

  onMount(() => {
    sdk = new ChartsEmbedSDK({ baseUrl: 'https://charts.mongodb.com/charts-sodium-ejpey' });
  });

  afterNavigate(() => {
    document.querySelectorAll('[data-chart-id]').forEach(async (element) => {
      const container = /** @type {HTMLElement} */ (element);

      // Load the chart lazily when the container comes into the viewport
      await new Promise((resolve) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(({ isIntersecting }) => {
            if (isIntersecting) {
              observer.unobserve(container);
              resolve(undefined);
            }
          });
        });

        observer.observe(container);
      });

      const { chartId, cache } = container.dataset;
      const _cache = Number(cache);

      const chart = sdk.createChart({
        chartId,
        height: 500,
        // `_cache` can be `undefined`, `0`, `-1` or any positive integer (in hours, not seconds,
        // unlike the `maxDataAge` option.) Default: 24 hours
        // eslint-disable-next-line no-nested-ternary
        maxDataAge: Number.isNaN(_cache) ? 86400 : _cache > 0 ? _cache * 3600 : _cache,
        showAttribution: false,
      });

      chart.render(container);
    });
  });
</script>
