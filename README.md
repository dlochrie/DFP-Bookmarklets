# DFP-Bookmarklets
## Overview
Bookmarklet(s) for debugging web pages display ads via Google DFP. Note: This ONLY works for DFP Premium; it will not work for DFP Small Business or DART.

## What is a Bookmarklet?
A Bookmarklet is a bookmark that executes JavaScript in browser as opposed to navigating to a URL. Bookmarklets should work on all browser on any operating system ( I have not tested phones or tablets ).

## Installation
Create a new Bookmark (Internet Explorer calls them "Favorites") in your browser and then:
*  Name it something meaningful, like `DFP Debug Bookmarklet`
*  In the `Location` or `URL` field of your Bookmark, add the appropriate JavaScript code below - it should be on onle line.
*  To use the bookmarklet, simply navigate to the web page you want to debug, and click on your bookmarklet.

## Debug Bookmarklet
### Description
Highlights all ads called on the page, and provides a full report showing errors and miscellaneous details.

### Location

This should be on 1 line, in the `Location` of your Bookmark.
Note: For some reason, Internet Explorer calls Bookmarks `Favorites` and you need to add the code below to the `URL` property of your new `Favorite`.

    javascript:void(
      debug_element=document.createElement('script'));
      void(debug_element.src='https://raw.github.com/dlochrie/DFP-Bookmarklets/master/debug.js');
      void(document.body.appendChild(debug_element)
    );

