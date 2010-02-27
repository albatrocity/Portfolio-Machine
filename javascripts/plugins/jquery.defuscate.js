/*
 * Email Defuscator - jQuery plugin 1.0 alpha
 *
 * Copyright (c) 2007 Joakim Stai
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id$
 *
 */

/**
 * Converts obfuscated email addresses into normal, working email addresses.
 *
 * @name defuscate
 * @param Boolean link If true, all defuscated email addresses will be turned into links, defaults to true (optional)
 * @descr Converts obfuscated email addresses into normal email addresses
 */

jQuery.fn.defuscate = function( settings ) {
    settings = jQuery.extend({
        link: true
    }, settings);
    var regex = /\b([A-Z0-9._%-]+)\([^)]+\)((?:[A-Z0-9-]+\.)+[A-Z]{2,6})\b/gi;
    return this.each(function() {
        if ( $(this).is('a[@href]') ) {
            // If it's an <a> element, defuscate the href attribute
            $(this).attr('href', $(this).attr('href').replace(regex, '$1@$2'));
            // Make sure that the element's contents is not made into a link
            var is_link = true;
            //alert($(this).attr('href'));
        }
        // Defuscate the element's contents
        $(this).html($(this).html().replace(regex, (settings.link && !is_link ? '<a href="mailto:$1@$2">$1@$2</a>' : '$1@$2')));
  });
}
