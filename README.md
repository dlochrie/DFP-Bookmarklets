# DFP-Bookmarklets
## Overview
Bookmarklet(s) for debugging web pages display ads via Google DFP. Note: This ONLY works for DFP Premium; it will not work for DFP Small Business or DART.

## Installation
Drag the link to your bookmark-toolbar. If this works, then skip the next steps.
*  Right-Click on the link
*  Select "bookmark link"
*  (Optional) Rename the suggested link name
*  To use the bookmarklet, simply navigate to the web page you want to debug, and click on your bookmarklet.

## Debug Bookmarklet
### Description
Highlights all ads called on the page, and provides a full report showing errors and miscellaneous details.

### Link Location

    javascript:void(debug_element=document.createElement('script'));
    void(debug_element.src='https://raw.github.com/dlochrie/DFP-Bookmarklets/master/debug.js');
    void(document.body.appendChild(debug_element));

