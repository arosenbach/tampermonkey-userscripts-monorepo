// ==UserScript==
// @name         sample
// @version      1.0.1
// @description  This is a sample script
// @author       Antoine Rosenbach <github@rbch.ovh>
// @downloadURL  https://raw.githubusercontent.com/arosenbach/tampermonkey-userscripts-monorepo/master/packages/_sample/dist/index.js
// @updateURL    https://raw.githubusercontent.com/arosenbach/tampermonkey-userscripts-monorepo/master/packages/_sample/dist/index.js
// @namespace    http://tampermonkey.net/
// @match        https://www.google.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	alert('This is a sample script');

})();
