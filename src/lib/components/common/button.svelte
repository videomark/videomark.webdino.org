<!--
  @component
  Generic button component based on the native `<button>`, or a button-looking link.
  @see https://w3c.github.io/aria/#button
-->
<script>
  /**
   * The URL for a button-looking link. If omitted, the result will be an actual `<button>`.
   */
  export let href = '';

  /**
   * The `type` of the `<button>`. It will be ignored when a button-looking link is used.
   * @type {'button' | 'submit' | 'reset'}
   */
  export let type = 'button';
</script>

{#if href}
  <a class="button" {href}><slot /></a>
{:else}
  <button {type} on:click {...$$props}><slot /></button>
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
