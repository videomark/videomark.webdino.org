<div>
  <slot />
</div>

<style lang="scss">
  div {
    width: calc(50% - 16px);

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    & > :global(img:only-child) {
      display: block;
      margin: 0 auto;
    }
  }
</style>
