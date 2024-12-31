<script>
  import { onMount } from 'svelte';
  import { _, locale as currentLocale, json } from 'svelte-i18n';
  import { preloadCode } from '$app/navigation';
  import { page } from '$app/state';
  import ToggleMenuButton from '$lib/components/marketing/toggle-menu-button.svelte';
  import { unique } from '$lib/services/util/array';

  onMount(() => {
    (async () => {
      const links = unique(/** @type {object[]} */ ($json('pages._global.header.links')), 'href');

      await Promise.all(links.map(({ href }) => preloadCode(href)));
    })();
  });
</script>

<header>
  <ToggleMenuButton />
  <h1>
    <a href={`/${$currentLocale}`}>
      <img
        src="https://res.cloudinary.com/videomark/wvm-logo-long.png"
        alt={$_('pages._global.meta.siteTitle')}
        class="logo"
      />
    </a>
  </h1>
  <div class="spacer"></div>
  <nav>
    <!-- Somehow the array contains duplicate items during initialization, so use `unique` -->
    {#each unique(/** @type {object[]} */ ($json('pages._global.header.links')), 'href') as { href, text } (href)}
      <div>
        <a {href} aria-current={page.url.pathname === href ? 'page' : undefined}>{text}</a>
      </div>
    {/each}
  </nav>
</header>

<slot />

<footer>
  <nav>
    <div>
      {@html $_('pages._global.meta.copyright', { values: { year: new Date().getFullYear() } })}
    </div>
    {#each unique(/** @type {object[]} */ ($json('pages._global.footer.links')), 'href') as { href, text } (href)}
      <div><a {href}>{text}</a></div>
    {/each}
  </nav>
</footer>

<style lang="scss">
  header,
  footer {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.9rem;
    line-height: 1.4rem;
    -webkit-user-select: none;
    user-select: none;

    nav {
      display: flex;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      list-style: none;

      & > div {
        margin: 0;
        padding: 0;
      }
    }
  }

  h1 {
    margin: 0;
    font-size: 0;

    img {
      height: 2.2rem;
    }
  }

  .spacer {
    flex: auto;
  }

  header {
    position: fixed;
    inset: 0 0 auto;
    z-index: 20;
    box-sizing: border-box;
    width: 100%;
    height: 3.6rem;
    justify-content: space-between;
    border-bottom: 1px solid #eaecef;
    padding: 0 1.5rem;
    background-color: #fff;

    & ~ :global(main) {
      overflow: hidden;
      margin-top: 3.6rem;
    }

    nav {
      a {
        display: block;
        color: inherit;
        text-decoration: none;
        border-width: 2px 0;
        border-style: solid;
        border-color: transparent;

        &[aria-current='page'],
        &:hover,
        &:active {
          border-bottom-color: #db7058;
        }
      }

      @media screen and (max-width: 1023px) {
        display: none;
      }
    }
  }

  footer {
    justify-content: center;
    border-top: 1px solid #eaecef;
    padding: 2.5rem;
    color: #4e6e8e;

    nav {
      :global(span) {
        white-space: nowrap;
      }

      @media screen and (max-width: 767px) {
        gap: 8px;
        flex-direction: column;
        text-align: center;
      }
    }
  }
</style>
