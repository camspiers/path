/*
 *
 * Copyright (c) 2009 Cam Spiers (camspiers [at] gmail [dot] com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 */

/*
 * jQuery path plugin
 *
 * Returns a selector which can pick the same element out of the original DOM.
 *
 * @name     path
 * @version  0.1
 * @author   Cam Spiers (camspiers [at] gmail [dot] com)
 * @requires jQuery
 * @example  jQuery('#SomeElement').path();
 *
 */
(function($){

  $.fn.path = function(context){

    var el = this[0], $el = this, path = [], tagName;

    if(el){

      while(el && el.parentNode && el != context) {
        tagName = $el.attr('tagName');

		if ($el.attr('id') !== '') {

			path.push( '#' + $el.attr('id') );

			break;

		} else {

			path.push( tagName.toLowerCase() + ":eq(" + $el.prevAll(tagName).size() + ")" );

		}

        el = el.parentNode;

        $el = $(el);
      }

      path.reverse();

    }

    return path.join(' > ');
    
  };

}(jQuery));