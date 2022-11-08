<figure>
  <slot />
</figure>

<style lang="scss">
  figure {
    display: block;
    margin: 0;
    text-align: center;

    :global(img) {
      max-width: 100%;
    }
  }
</style>
