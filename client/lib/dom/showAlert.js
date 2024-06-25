import { isString } from '../utils';
import { addClass, removeClass } from './css.js';
import { getNode } from './getNode';

/**
 *
 * @param {HTMLElement | String} node
 * @param {String} message
 * @param {Number} timeout
 * @param {void}
 */

export function showAlert(node, message, timeout = 1000) {
  if (isString(node)) node = getNode(node);

  node.textContent = message;

  addClass(node, 'is-active');
  setTimeout(() => {
    removeClass(node, 'is-active');
  }, timeout);
}
