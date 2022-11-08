import { supportedLocales } from '$lib/services/util/i18n';

export function match(param) {
  return Object.keys(supportedLocales).includes(param);
}
