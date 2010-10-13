/**
 * jQuery fadeToggle plugin
 *
 * @author Tomasz Jakub Rup
 */
(function($){
	$.fn.fadeToggle = function() {
		return this.each(function() {
			if($(this).css('display') == 'none') $(this).fadeIn();
			else $(this).fadeOut('slow', function() {
				$(this).css('display','none')
			});
		});
	}
})(jQuery)
