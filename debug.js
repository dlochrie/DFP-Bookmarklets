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

/**
 * Modify the path to suit your needs.
 * GitHib might not be the best place to host this.
 */
aps.scriptPath = 'https://raw.github.com/dlochrie/DFP-Bookmarklets/master/';

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

aps.loadCommon = function() {
	var js = aps.scriptPath + 'lib.js'; 
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', js);
	document.getElementsByTagName('head')[0].appendChild(script);
}

aps.loadStyles = function() {
	var css = document.createElement("link");
	css.setAttribute("rel", "stylesheet");
	css.setAttribute("type", "text/css");
	css.setAttribute("href", scriptPath + "style.css");
	document.getElementsByTagName("head")[0].appendChild(css);
}

if (aps.y) {
	alert('This site is using Yahoo! APT. Google DFP was not found.');
} else if(aps.g) {
	aps.loadCommon();
	aps.loadStyles();
} else {
	alert('No known Ad Network was Found. This site is not using Yahoo APT or DFP Premium.');
}
