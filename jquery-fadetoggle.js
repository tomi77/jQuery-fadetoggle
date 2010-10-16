/**
 * jQuery fadeToggle plugin
 *
 * @author Tomasz Jakub Rup
 */
(function($){
	$.fn.fadeToggle = function(speed, callbackIn, callbackOut) {
		return this.each(function() {
			if($(this).css('display') == 'none') $(this).fadeIn(speed, callbackIn);
			else $(this).fadeOut(speed, function() {
				$(this).css('display','none');
				if(callbackOut != undefined) callbackOut();
			});
		});
	}
})(jQuery)
