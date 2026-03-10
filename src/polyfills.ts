/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js';  // Included with Angular CLI.

if (typeof SVGElement.prototype.contains === 'undefined') {
  SVGElement.prototype.contains = HTMLDivElement.prototype.contains;
}
