/**
 * jQuery fadeToggle plugin
 *
 * @author Tomasz Jakub Rup
 */
(function($){
	$.fn.fadeToggle = function(speed) {
		return this.each(function() {
			if($(this).css('display') == 'none') $(this).fadeIn(speed);
			else $(this).fadeOut(speed, function() {
				$(this).css('display','none')
			});
		});
	}
})(jQuery)
