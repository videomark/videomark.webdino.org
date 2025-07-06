<script>
  import { json } from 'svelte-i18n';
  import { page } from '$app/state';
  import MongoChartsRenderer from '$lib/components/marketing/mongo-charts-renderer.svelte';
  import Sidebar from '$lib/components/marketing/sidebar.svelte';
  import { unique } from '$lib/services/util/array';

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<Sidebar fixed>
  <nav>
    <ul>
      {#each unique(/** @type {object[]} */ ($json('pages.stats.nav.links')), 'href') as { href, text } (href)}
        <li>
          <a {href} aria-current={page.url.pathname === href ? 'page' : undefined}>{text}</a>
        </li>
      {/each}
    </ul>
  </nav>
</Sidebar>

<main>
  {@render children?.()}
</main>

<MongoChartsRenderer />
