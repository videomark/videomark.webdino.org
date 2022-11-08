<script>
  export let reverse = false;
</script>

<div class="grid" class:reverse>
  <slot />
</div>

<style lang="scss">
  .grid {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    margin: 32px 0;

    &.reverse {
      flex-direction: row-reverse;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }
</style>
