<script>
  import { json, _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import Button from '$lib/components/common/button.svelte';
  import Header from '$lib/components/marketing/header.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import { parse } from '$lib/services/util/markdown';

  /**
   * Submit the form to Netlify with Ajax. Don’t wait on `fetch`; just show the thank-you page.
   * @param {SubmitEvent} event `submit` event on the form.
   */
  const sendForm = ({ target }) => {
    fetch('https://sodium.netlify.app/contact/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(target)).toString(),
    });

    goto('contact/thanks');
  };
</script>

<MetaTags meta={$json('pages.contact.meta')} />

<Header>
  <h1>{$_('pages.contact.intro.heading')}</h1>
  {@html parse($_('pages.contact.body'))}
</Header>

<div class="outer">
  <div class="inner">
    <form method="POST" on:submit|preventDefault={(event) => sendForm(event)}>
      <input type="hidden" name="form-name" value="contact" />
      <p class="input-item">
        <label for="name">{$_('pages.contact.form.name')}</label>
        <span class="req">{$_('pages.contact.form.required')}</span>
        <input type="text" id="name" name="name" required />
      </p>
      <p class="input-item">
        <label for="company">{$_('pages.contact.form.company')}</label>
        <span class="req" />
        <input type="text" name="company" />
      </p>
      <p class="input-item">
        <label for="e-mail">{$_('pages.contact.form.email')}</label>
        <span class="req">{$_('pages.contact.form.required')}</span>
        <input type="email" name="e-mail" required />
      </p>
      <p class="input-item" hidden>
        <label for="tel">TEL</label>
        <span class="req" />
        <input type="text" name="tel" />
      </p>
      <p class="input-item">
        <label for="title">{$_('pages.contact.form.subject')}</label>
        <span class="req">{$_('pages.contact.form.required')}</span>
        <input type="text" name="title" required />
      </p>
      <p class="input-item">
        <label for="message">{$_('pages.contact.form.message')}</label>
        <span class="req">{$_('pages.contact.form.required')}</span>
        <textarea name="message" required />
      </p>
      <p class="centered">
        <Button type="submit">{$_('pages.contact.form.submit')}</Button>
      </p>
    </form>
  </div>
</div>

<style lang="scss">
  h1 ~ :global(*) {
    text-align: center;
  }

  form {
    display: block;
    margin: 0 auto;
    max-width: 800px;
  }

  .input-item {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;

    &[hidden] {
      display: none;
    }

    @media screen and (max-width: 767px) {
      flex-wrap: wrap;
    }

    label {
      flex: auto;
      margin: 0;
      font-weight: bold;
      text-align: right;
      box-sizing: border-box;
      width: 10rem;

      @media (max-width: 767px) {
        text-align: left;
      }
    }

    .req {
      flex: none;
      width: 5em;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      color: #a1123c;
    }

    input,
    textarea {
      flex: auto;
      padding: 8px;
      width: 80%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      -webkit-appearance: none;
      transition: all 0.3s;

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }

    textarea {
      height: 10em;
      resize: vertical;
    }
  }
</style>
