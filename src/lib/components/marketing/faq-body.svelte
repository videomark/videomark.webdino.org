<script>
  import md5 from 'md5';
  import { _, json } from 'svelte-i18n';
  import { unique } from '$lib/services/util/array';
  import { parse } from '$lib/services/util/markdown';

  /**
   * @typedef {Object} Props
   * @property {any} [categories] All the FAQ categories.
   * @property {string} [targetId] Any element ID specified in the URL (`location.hash`).
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    categories = [],
    targetId = '',
    /* eslint-enable prefer-const */
  } = $props();
</script>

{#each categories as category}
  {@const heading = $_(`pages.faq.${category}.heading`)}
  <section id={md5(heading)} aria-current={targetId === md5(heading)}>
    <h2>{heading}</h2>
    {#each unique(/** @type {object[]} */ ($json(`pages.faq.${category}.items`)), 'question') as { question, answer } (question)}
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
    scroll-margin-top: 6rem;

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
