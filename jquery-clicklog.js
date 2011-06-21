/*!
 * jQuery ClickLog Plugin v0.1
 * http://www.istvan-antal.ro/jquery-clicklog.html
 *
 * Copyright 2011, Antal István Miklós
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.istvan-antal.ro/open-source.html
 *
 */
(function ($) {
    $.extend($.fn, {
        clicklog: function () {
            $(this).bind('click', function (e) {
                console.log('Click', 'y:', e.pageY, 'x:', e.pageX, e);
            });
        }
    });
}(jQuery));