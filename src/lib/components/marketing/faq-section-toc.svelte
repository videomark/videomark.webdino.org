<script>
  import md5 from 'md5';
  import { onMount } from 'svelte';
  import { json, _ } from 'svelte-i18n';
  import { unique } from '$lib/services/util/array';

  export let category = '';

  const heading = $_(`pages.faq.${category}.heading`);
  let targetId = '';

  const getHash = () => {
    targetId = window.location.hash.substring(1);
  };

  onMount(() => {
    getHash();
  });
</script>

<svelte:window
  on:hashchange={() => {
    getHash();
  }}
/>

<li>
  <a href={`#${md5(heading)}`} aria-current={targetId === md5(heading)}>
    {heading}
  </a>
  <ul>
    {#each unique($json(`pages.faq.${category}.items`), 'question') as { question } (question)}
      <li>
        <a href={`#${md5(question)}`} aria-current={targetId === md5(question)}>
          {question}
        </a>
      </li>
    {/each}
  </ul>
</li>
