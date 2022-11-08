<div>
  <slot />
</div>

<style lang="scss">
  div {
    overflow-x: auto;

    :global(img) {
      width: 100%;
      min-width: 800px;
    }
  }
</style>
