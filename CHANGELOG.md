# Changelog

Items starting with `DEPRECATION` are important deprecation notices.

## (NOT YET RELEASE ) Release 0.2.0

### New Features

+ Added options to make header move smoother
+ Allow adding custom CSS and JS to the theme using `customCSS` and `customJS`
  site parameters

### Bug fixes

+ Fixed localization for footer to use parameters
+ Fixed use of URL for logo display
+ Fixed JS console error
+ Fixed use of HTML language property

## (2017-07-17) Release 0.1.0

### New Features

+ Switch to use system fonts
+ Switch to mobile first styles
+ Added headroom.js to hide/display header on scroll
+ Added schema tags
+ Improve SEO based on <http://smo.knowem.com/>
+ Added section list template
+ Added support for favicons
+ Added page footer with support for icons
+ Added support for banners in `single` display mode
+ Added google webmaster tools verification support
+ Generate site menu from `.Site.Menus`
+ Added build system for SASS
+ Created initial structure for Jekyll "Minima" theme port

### Bug fixes

+ Fixed `.footer-links` margin
+ Added title to banner images
+ Give banners a rounded border
+ Get rid of footer margin
+ Moved HTML closing tags into footer partial
+ Fixed page metadata by using SEO tagging with Open Graph,
  Google News and Twitter support.

### Maintenance

+ Switch to using SVG file for icons
+ Transition to [WowStack group](https://git01.kogitoapp.com/wowstack)
+ Notify chat only on status changes
