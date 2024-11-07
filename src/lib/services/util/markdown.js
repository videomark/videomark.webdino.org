// https://github.com/markedjs/marked/issues/655#issuecomment-712380889

import { marked } from 'marked';

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;

/**
 * @param {import('marked').Tokens.Link} args
 * @returns {string}
 */
renderer.link = (args) => {
  const html = linkRenderer.call(renderer, args);

  return args.href.startsWith('/')
    ? html
    : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `);
};

/**
 * @param {string} markdown
 * @returns {string}
 */
export const parse = (markdown) =>
  /** @type {string} */ (marked.parse(markdown, { renderer, breaks: true }));

/**
 * @param {string} markdown
 * @returns {string}
 */
export const parseInline = (markdown) =>
  /** @type {string} */ (marked.parseInline(markdown, { renderer, breaks: true }));
