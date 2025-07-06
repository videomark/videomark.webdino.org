<script>
  import { json } from 'svelte-i18n';
  import { page } from '$app/state';
  import { menuOpen } from '$lib/services/marketing/store';
  import { unique } from '$lib/services/util/array';

  /**
   * @typedef {Object} Props
   * @property {boolean} [fixed] Whether the sidebar is fixed on the left side of the screen.
   * Defaults to `false`.
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    fixed = false,
    children,
    /* eslint-enable prefer-const */
  } = $props();
</script>

<svelte:body
  onclick={() => {
    menuOpen.set(false);
  }}
/>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<aside
  class="sidebar"
  class:fixed
  class:open={$menuOpen}
  onclick={(event) => {
    if (/** @type {HTMLElement} */ (event.target).matches('a')) {
      menuOpen.set(false);
    } else {
      event.stopPropagation();
    }
  }}
>
  <nav class="global">
    <ul>
      {#each unique(/** @type {object[]} */ ($json('pages._global.header.links')), 'href') as { href, text } (href)}
        <li>
          <a {href} aria-current={page.url.pathname === href ? 'page' : undefined}>{text}</a>
        </li>
      {/each}
    </ul>
  </nav>
  {@render children?.()}
</aside>

<style lang="scss">
  aside {
    display: none;
    position: fixed;
    z-index: 50;
    inset: 3.6rem auto 0 0;
    overflow: auto;
    border-right: 1px solid #eaecef;
    width: 20rem;
    background-color: #fff;
    overscroll-behavior: contain;

    &.fixed {
      display: block;

      & ~ :global(main),
      & ~ :global(footer) {
        overflow: hidden;
        margin-left: 20rem;
      }
    }

    nav {
      &.global {
        display: none;
      }
    }

    @media screen and (max-width: 1023px) {
      display: block;
      transform: translateX(-110%);
      transition: all 0.4s;

      &.open {
        transform: translateX(0);
      }

      & ~ :global(main),
      & ~ :global(footer) {
        margin-left: 0 !important;
      }

      nav.global {
        display: block;

        & + :global(nav) {
          border-top: 1px solid #eaecef;
        }
      }
    }

    :global(ul) {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    :global(nav > ul) {
      padding: 1.5rem 0;

      & > :global(li) {
        & > :global(a) {
          font-size: 1.1em;
          line-height: 1.7;
          font-weight: 700;
          border-left: 0.25rem solid transparent;
          padding: 0.35rem 1rem 0.35rem 1.25rem;
        }

        & > :global(a[aria-current='page']),
        & > :global(a[aria-current='true']) {
          border-color: #d86449;
        }
      }

      :global(ul) {
        margin: 16px 0 16px 16px;
        font-size: 14px;
      }

      :global(li) {
        margin: 8px 0;
      }

      :global(a) {
        display: block;
        box-sizing: border-box;
        padding: 0 1rem;
        width: 100%;
        color: inherit;
        text-decoration: none;
      }

      :global(a[aria-current='page']),
      :global(a[aria-current='true']) {
        color: #d86449;
      }
    }
  }
</style>
