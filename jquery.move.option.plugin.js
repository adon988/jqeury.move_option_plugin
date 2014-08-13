(function($){
	$.fn.selected_controller = function(a){
		var tg = $(this);
	    tg.find(a.off_arrow).on('click', function(){
	            var l=tg.find(a.selected+' option:selected').length;
	            if(!l) { 
	                return false;
	            }
	            
	            tg.find(a.selected+' option:selected').each(function(){
	                tg.find(a.unselected).append($(this));
	            });
	    });

	    tg.find(a.on_arrow).on('click', function(){
	            var l=tg.find(a.unselected+' option:selected').length;
	            if(!l) { 
	                return false;
	            }
	            
	            tg.find(a.unselected+' option:selected').each(function(){
	                tg.find(a.selected).append($(this));
	            });
	    });
	}
})( jQuery );
