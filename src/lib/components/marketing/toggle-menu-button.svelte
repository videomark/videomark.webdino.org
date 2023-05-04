<script>
  import { _ } from 'svelte-i18n';
  import { menuOpen } from '$lib/services/marketing/store';
</script>

<button
  aria-pressed={$menuOpen}
  aria-label={$menuOpen
    ? $_('pages._global.header.menu.close')
    : $_('pages._global.header.menu.open')}
  on:click|stopPropagation={() => {
    menuOpen.set(!$menuOpen);
  }}
>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    viewBox="0 0 448 512"
  >
    <!-- eslint-disable max-len -->
    <path
      fill="currentColor"
      d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
      class=""
    />
  </svg>
</button>

<style lang="scss">
  button {
    display: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: -8px;

    @media screen and (max-width: 1023px) {
      display: block;
    }

    .icon {
      display: block;
      width: 1.25rem;
      height: 1.25rem;
      pointer-events: none;
    }
  }
</style>
