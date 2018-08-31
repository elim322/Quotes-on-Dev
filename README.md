# Quotes on Dev 

Quotes on Dev is a website that randomizes quotes about developers and quotes are sorted by categories, tags, and authors. The site also allows users to submit user generated quotes, but will have to be approved before it publishes on the page. 

## Installation

### 1. Download me (don't clone me!)

Download the theme and add it to wp-content/themes. 

### 2. Install the dev dependencies

Next run `npm install` **inside your theme directory** to install Gulp.

### 3. Update the proxy in `gulpfile.js`

Lastly, be sure to update `gulpfile.js` with the appropriate URL for the Browsersync proxy (so change `localhost[:port-here]/[your-dir-name-here]` to the appropriate localhost URL).

## Main Components 

* GET post using REST API 
  * Calls the Ajax method when the user hits the "Show me Another!" button. 
  * Injects page slug into URL, which allows the user to press forward and back buttons on website without reloading the site. 
* Built with SASS, PHP, and jQuery. 

