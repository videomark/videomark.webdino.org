<!--
  @component
  Generic button component based on the native `<button>`, or a button-looking link.
  @see https://w3c.github.io/aria/#button
-->
<script>
  /**
   * @typedef {Object} Props
   * @property {string} [href] The URL for a button-looking link. If omitted, the result will be an
   * actual `<button>`.
   * @property {'button' | 'submit' | 'reset'} [type] The `type` of the `<button>`. It will be
   * ignored when a button-looking link is used.
   * @property {(event: MouseEvent) => void} [onclick] Click event handler.
   * @property {import('svelte').Snippet} [children] Slot content.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    href = '',
    type = 'button',
    onclick,
    children,
    // eslint-disable-next-line svelte/valid-compile
    ...rest
    /* eslint-enable prefer-const */
  } = $props();
</script>

{#if href}
  <a class="button" {href}>
    {@render children?.()}
  </a>
{:else}
  <button {type} {onclick} {...rest}>
    {@render children?.()}
  </button>
{/if}

<style lang="scss">
  a.button,
  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #555;
    padding: 4px 16px;
    min-width: 240px;
    min-height: 40px;
    color: #fff;
    background-color: #555;
    line-height: 1.2;
    text-decoration: none;
    transition: all 0.2s;

    &:hover,
    &:focus,
    &:active {
      background-color: #626262;
    }
  }
</style>
