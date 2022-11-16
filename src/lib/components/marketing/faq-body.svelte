<script>
  import md5 from 'md5';
  import { json, _ } from 'svelte-i18n';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';

  /**
   * All the FAQ categories.
   */
  export let categories = [];

  /**
   * Any element ID specified in the URL (`location.hash`).
   */
  export let targetId = '';
</script>

{#each categories as category}
  {@const heading = $_(`pages.faq.${category}.heading`)}
  <section id={md5(heading)} aria-current={targetId === md5(heading)}>
    <h2>{heading}</h2>
    {#each unique($json(`pages.faq.${category}.items`), 'question') as { question, answer } (question)}
      <section id={md5(question)} aria-current={targetId === md5(question)}>
        <h3>{question}</h3>
        {@html parse(answer)}
      </section>
    {/each}
  </section>
{/each}

<style lang="scss">
  section {
    position: relative;
    margin-top: 48px;

    &:global([id]) {
      scroll-margin-top: 6rem;
    }

    // for some reason `:target` doesn’t work on Chrome/Safari, so use an attribute instead
    &[aria-current='true'] {
      &::before {
        position: absolute;
        inset: -16px;
        z-index: -1;
        background-color: #d8644922;
        content: '';
      }
    }

    section {
      margin-top: 32px;
    }
  }
</style>
