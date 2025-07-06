<script>
  import md5 from 'md5';
  import { _, json } from 'svelte-i18n';
  import { unique } from '$lib/services/util/array';

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

<ul>
  {#each categories as category}
    {@const heading = $_(`pages.faq.${category}.heading`)}
    <li>
      <a href={`#${md5(heading)}`} aria-current={targetId === md5(heading)}>
        {heading}
      </a>
      <ul>
        {#each unique(/** @type {object[]} */ ($json(`pages.faq.${category}.items`)), 'question') as { question } (question)}
          <li>
            <a href={`#${md5(question)}`} aria-current={targetId === md5(question)}>
              {question}
            </a>
          </li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>
