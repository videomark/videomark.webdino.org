<script>
  import Section from '$lib/components/marketing/section.svelte';
  import { parse } from '$lib/services/util/markdown';

  /**
   * @typedef {Object} Change
   * @property {string} date The change date.
   * @property {string} body The change summary in Markdown format.
   */

  /**
   * @typedef {Object} Props
   * @property {string} [title] The title of the change history.
   * @property {Change[]} [changes] Change summaries, including the date and body.
   */

  /** @type {Props} */
  let {
    /* eslint-disable prefer-const */
    title = '',
    changes = [],
    /* eslint-enable prefer-const */
  } = $props();
</script>

<Section accent={2}>
  <h2>{title}</h2>
  {#each changes as { date, body } (date)}
    <section>
      <h3>{date}</h3>
      {@html parse(body)}
    </section>
  {/each}
</Section>

<style>
  section {
    margin-block: 16px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }
</style>
