/**
 * jQuery fadeToggle plugin
 *
 * @author Tomasz Jakub Rup
 */
(function($){
	$.fn.fadeToggle = function(speed, callback) {
		return this.each(function() {
			if($(this).css('display') == 'none') $(this).fadeIn(speed, callback);
			else $(this).fadeOut(speed, function() {
				$(this).css('display','none');
				if(callback != undefined) callback();
			});
		});
	}
})(jQuery)
