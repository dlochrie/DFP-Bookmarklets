/**
 * @author Daniel Lochrie
 * 
 * debug.js
 * This file determines what ad-network is loaded on the page, and 
 * calls `lib.js` if DFP is found.
 */

var aps = {};
aps.y = null;
aps.g = null;

console.log('Checking for Ad-Network (Yahoo):');
try {
	aps.y = yld_mgr || null;
	console.log('Yahoo APT! Found.');
} catch(e) {
	console.log('Could not find instance of Yahoo! APT.');
}

console.log('Checking for Ad-Network (Google):');
try {
	aps.g = googletag || null;
	console.log('Google DFP Found.');
} catch(e) {
	console.log('Could not find instance of Google DFP.');
}

if (aps.y) {
	// Explain Yahoo was found.
} else if(aps.g) {
	// Explain Google was found, exec common code.
} else {
	// Explain no Ad-Network was found.
}

/**
 * var url = window.location.href;
 * var urlParts = url.split('/');
 * var path = urlParts[urlParts.length -1] = '';
*/

/**
 * Modify the path to suit your needs.
 */
var path = 'https://raw.github.com/dlochrie/DFP-Bookmarklets/master/';

var js = path + 'lib.js'; 
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', js);
document.getElementsByTagName('head')[0].appendChild(script);


