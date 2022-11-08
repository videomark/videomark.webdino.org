<script>
  export let accent = 0;
</script>

<div class={`outer accent-${accent}`}>
  <section class="inner">
    <slot />
  </section>
</div>

<style lang="scss">
  .outer {
    overflow: hidden;

    &.accent-1 {
      background-color: #f8c758a3;
    }

    &.accent-2 {
      background-color: #eaecef;
    }
  }
</style>
