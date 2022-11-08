<script>
  import { marked, Slugger } from 'marked';
  import { onMount } from 'svelte';
  import { json, _ } from 'svelte-i18n';
  import Article from '$lib/components/marketing/article.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Sidebar from '$lib/components/marketing/sidebar.svelte';
  import { parse } from '$lib/services/util/markdown';

  const slugger = new Slugger();
  const headings = [];
  let locationHash = '';

  marked
    .lexer($_('pages.faq.body'))
    .filter(({ type }) => type === 'heading')
    .forEach(({ depth, text }) => {
      const anchor = `#${slugger.slug(text)}`;

      if (depth === 2) {
        headings.push({ text, anchor, children: [] });
      } else {
        headings[headings.length - 1].children.push({ text, anchor });
      }
    });

  onMount(() => {
    locationHash = decodeURI(window.location.hash);
  });
</script>

<svelte:window
  on:hashchange={() => {
    locationHash = decodeURI(window.location.hash);
  }}
/>

<MetaTags meta={$json('pages.faq.meta')} />

<Sidebar fixed>
  <nav>
    <ul>
      {#each headings as { text, anchor, children }}
        <li>
          <a href={anchor} aria-current={locationHash === anchor ? 'true' : undefined}>
            {text}
          </a>
          <ul>
            {#each children as { text, anchor }}
              <li>
                <a href={anchor} aria-current={locationHash === anchor ? 'true' : undefined}>
                  {text}
                </a>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
  </nav>
</Sidebar>

<main>
  <Article>
    <h1>{$_('pages.faq.intro.heading')}</h1>
    {@html parse($_('pages.faq.body'))}
  </Article>
</main>

<style lang="scss">
  main {
    :global([id]) {
      scroll-margin-top: 6rem;
    }
  }
</style>
