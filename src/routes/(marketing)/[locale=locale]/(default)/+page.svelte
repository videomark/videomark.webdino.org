<script>
  import { _, json } from 'svelte-i18n';
  import { page } from '$app/state';
  import Button from '$lib/components/common/button.svelte';
  import DownloadButtons from '$lib/components/marketing/download-buttons.svelte';
  import GridItem from '$lib/components/marketing/grid-item.svelte';
  import Grid from '$lib/components/marketing/grid.svelte';
  import MetaTags from '$lib/components/marketing/meta-tags.svelte';
  import Screenshot from '$lib/components/marketing/screenshot.svelte';
  import Section from '$lib/components/marketing/section.svelte';
  import { parse, parseInline } from '$lib/services/util/markdown';

  const { locale = 'ja' } = $derived(page.params);
</script>

<MetaTags meta={$json('pages.home.meta')} pageTitleWithSiteName={false} />

{#if $_('pages.home.announcement', { default: '' })}
  <div class="announcement">
    {@html parseInline($_('pages.home.announcement'))}
  </div>
{/if}

<header>
  <hgroup aria-label="1">
    <h1>
      <img src="https://res.cloudinary.com/videomark/w_150/wvm_logo.png" alt="VideoMark" />
    </h1>
    <p>
      {$_('pages.home.hero.heading')}
    </p>
  </hgroup>
  <DownloadButtons detectBrowser={false} />
</header>

<Section>
  <h2>{$_('pages.home.intro.heading')}</h2>
  <Grid>
    <GridItem>
      {@html parse($_('pages.home.intro.body'))}
      <p class="centered">
        <Button href={`/${locale}/about`}>{$_('pages.home.intro.more')}</Button>
      </p>
    </GridItem>
    <GridItem>
      <Screenshot>
        <img src={$_('pages.home.intro.image.src')} alt={$_('pages.home.intro.image.alt')} />
      </Screenshot>
    </GridItem>
  </Grid>
</Section>

<!-- eslint-disable max-len -->
<style lang="scss">
  .announcement {
    padding: 0.8rem 1.6rem;
    color: #fff;
    background-color: #626262;
    font-size: 0.9rem;
    line-height: 1.4rem;
    font-weight: 600;
    text-align: center;

    :global(a) {
      color: #ccc;
    }
  }

  header {
    padding: 120px;
    color: #fff;
    background-color: #a1123c;
    background-image:
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAgMAAAAEE2bmAAAACVBMVEX6+vqoqKhhYWEcnxHQAAAAA3RSTlMICAgyZ5dcAAAKF0lEQVR42uzaT0/jRhgG8Ocdja1xTmPLQYbT2DIo5VO8tkxkOBlEK9qTWWUrtp9iHBkUOBlEV7Qng2i17aesut0uZDeXue/5FykxMu+fZwYwuBIAr7BkNJNn4JYAQQeVjpDo2MEBHFybvLT8YVUrDQ7RahPsebOuH9LzXRdHpSuZVUIUCjaJYUOUtgssJgqEy7tjBwcUlrh4yMXxUMx4MZZo9gg8PEjUZLWLozs7t6g8uYjRplgt9dZbaeU2R5cGegiVg2PTUzSvnsLBYURnAfSxlRYLrJpuS4wl7xgjLaTccnAsTZLAjwoxmKIyivS1EGkpz2yDEI3xHRwMyFCE25BKSuRJEZytojeiVpeJEr0wDg5A6BNEoOHz111YGwFan9mJ7+KA5etBsgwCaGu9VaqTpf3h7Z2I0RRVfuvgKFjCKwtoSE9dGU9B9l5ts+GARQj4Dg5xkIDV1va5ja6XnBWMWoGEEQGI9wcXhxAkj6+JBw4AIdD5ABkuA5BN6Hft4vo4yNnobEGaRMnSGIJWgRmnvy3sJWIHh66uyhsr+idhJdMAXB8rIyKB/oATeSYcHO0BQ6pMRC+fULH2MYtRAawdHHKr0hMt73FP6kCf/9kTZIJOzBGFrPHewWGyuDUTrToAulLVAjqFQVF7tG8OV4GLb6hSpgc33qcq5eBg0NAQqBlYgqhMV2S643M6Meo5bNA7ONByAyuSVy+gj1kjAeVNNdcODnNh7BdfNDsevEccLleSIRwcb6cml9Si04tG003VXz18bjjvpIkcHAbnEniXJskeQqGpXGRS2+AwHrVkD8rFYxR8FokJjG280fQ8ooIe/J0CRwcsdhwcsBx+r45q3JMBWu3J8RgwwaWsLgTUrYNjQw9ce3scHIGV3KP5TXWBRSXbewVioZAUwE499x0crPtjf+eCNawc2yvOQ0EI2mJR4BGHHDg4yPYiU/zjfTGZH+0hW5lHrjLv/Aqk43BoHBySIacGQoMtx8aULRZAdsqzCYxE7OAw9N11mdFcPjw9UvdTMw1WCoCCnmCcIHZw0NfTAZoQ0KcWikk4OCx0BjMgFn8B+bGV6I6PpbS+9KCQWhdPomn9S7zURBw/SBJlq2UgoJa0rBI9kQ4OP+LL/h6grdzeTkg8pUaJGW5Ysc0f4icHB1dAcQKkkEpSKeQefIbYrYQdBZgcHNaawiqdt5TGn15Ca4v4DTe5FgwXx2oaXiE77yrA7sVhOCo82Xm4RONJBlwc+5h0AdbGoBm0EbgRuP2xiVx8QzE42bl8aTUu3mAJXzP8u7BbtqRTxEibQuH+9ohQuThOc00AN6s3aCwYUPo7eYpUA4sY7OIA9QM/K32sBKqMr8oEWyaG5FjRuPJ9F4dqDaSyKoeHvxlB3AImPi3IUEcsHBz3xtemmniwD9uEpWVdbMcSb27T9M9oayQHB0qBLdNz6xNx7YeeL/VdJUjscQid5w6OQLc80239ffrhRLH0cNJqoPwLOlfIlO/gX2+H7+TadujgGMOhFZdgwP5fl5p8ppY3Sy0h22cHxzz3RIEcUEp8GvhUDh+tf8FKydDBQb0KRcdmz2c2o5aaLSF5rut3/eUHvFUOjsYeBgCBpATxz8pwEEfLLQBqCZYXLg5JvjwFeGlSs0RqjAoyQlegFR1LdnAItsLY9taXovPl5b814MH6Gn0HyP2BHByjUB5+EqqaQCrYzNpcPp8ifWQZe50xDo4K2PagMQ0kGDrOEivUdEtPM9wUUygXnyD8shm0YauKaHuyj0m0cnDA2J29APcLfaS3Z9rGuWCd7xEitBIQDg7PkME2stgcrDyQ9gQMiLwVxhZA6uDYsVRImfOuVBGpVBWGlvqHCoSdwMK0Dg5fLUSh97qqrXyAbmQsX7YohSMHx+cN842qfLQ6lusbpoOjSt49ggWibrmNoQrG46TzbqXoaRe7KEMHh6m+KrnJTqHkbwd1QDhzcUz/oObBJqm3YGgaHyB8RA/3mYnbw5t9nbj45w66V5qyRUjJ7loHdXBsKMTZIF5iPAdHmvHQr29xeQx5iUrsKC+IHRwgyf2cSRAh8HX5Q6Af7J1I5wKPWGkn11+P6+jDdHga8TizIzk4NuRYrKBPiI8+5lwOjstt+vkvHsZssq9YI1ze2WrEe21tf6IBdnBoozWGc7nb3krIGR1IrKURDo5NNU/VSoRTfKx5Lj6Jv4qXX55mXlgXV/ZvQOz9zgR7N6Ef39dqtpzok/LUygpwcTQSPCTKChXoHVtTOEMy01TfV12mD3Pl4NiwuMavF1cHB6NuJKejbW7LKA9Uebm9lg86OD7owV8pet0PBIwaTTD9lbLRxWFy/oWMfP3+FfmQsibBbQbl4JtiwbVQz8ERcAT4hOZInQHIFMEaXGsladr0z9bBka0y0xTnENPPkU/QDVrNJEltoBwcG4Ixu5p9SMGYT45o28EhS/ND0iKkYttDojgz/cfm7DfysYbMHRwctU+kgdWOMsqcnvHpisoDVQ95OokXdOHgMI9evlujYgCryQhk79YiFxffsNr99+3i02rn4CJeeL//IcpXf9AwsuKsFCKsGeTgUEODKCatLkycN/21KPXtHFp4V2etfGoHB0cIqG5cYukd/H9e8O/nH+e81dPexDg4Nkyka9XXwSFNn35xqGV/gSe1vsW9NrWDIzoUMUHnvjBYisofI4DhTyROdkNT9y5edBiLLj29eqxT6JgOLYMmz+DBYGWS3MHx9REE1mqJg+PK0xB4aKr551LCcQhAmNN5gmsHx3+jC6O0ccOqVnyxXBttHBwbhuu1Iw4HB5v8y/MxAMLsW+D6z8HF4R18dTy29jo7OLAvc3oSqAEu3mCWAGCrxEyJg7dcf3BwbNhu1oJZF39DjIrY7ijbtkgO5YShiho1fFaXKnRwbEg+TYddS5+STwfHq/1rWliNfCXXXgEHx4bieUsfpP2/eDo4Ns2K0GalavNxlnRwAFA364nDS5onwtTBsWGBEJCxbaIn+e+C4eAYG9IgFN30808/TQiitmwaTpw85RBXy7VWbM7eXuFoL8C1B3JwbEh/JF6lPw6ODbHB2j+Gg6MHdDrnH/9+Se4+jd67vTFp7ODY0FFfOvTjnB0cG8bI17W9cfAvjljO3yc0WzticXBsyIzWmqGD4zsh4xI2VEM6XAF9zdCewEVGncV5rh0cxSxtAayMxPxSyWEAvi+jO+yiBhJJDo4NcdnaT3dwrHrbQZL2/aGkveMTwbwVNYA8uxPVTE4cHMOYfbmnrm3lDo4KyPylep1NftrsftLyYWYd/Nv9r2/3v77d//p2/+vb/a9v97++3f/6p107IAEAAAAQ9P91OwLdof/lf/lf/pf/5X/5X/6X/+V/+V/+l//lf/lf/pf/5X/5X/6X/+V/+V/+l//lf/lf/pf/5X/5X/6X/+V/+V/+l//lf/lf/pf/5X/5X6f/FaVPCdfCqaf8AAAAAElFTkSuQmCC),
      url(/images/template/overlay3.svg), linear-gradient(45deg, #efe36e 5%, #eb7948 30%, #a1123c);
    background-attachment: fixed, fixed, fixed;
    background-position:
      0 0,
      50%,
      50%;
    background-size: auto, cover, cover;
    text-align: center;

    @media screen and (max-width: 767px) {
      padding: 64px 32px;
    }

    h1 {
      margin: 0;
    }

    p {
      margin: 2rem 0;
    }

    :global(a.button) {
      color: #333;
      background-color: #fff;
      border-color: #fff;

      &:hover {
        color: #fff;
        background-color: #fff2;
      }
    }
  }
</style>
