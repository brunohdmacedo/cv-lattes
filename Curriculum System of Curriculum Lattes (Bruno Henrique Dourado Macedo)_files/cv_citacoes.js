(function($){

$.citacoes = function(holder) {

	var citacao = {
		ajaxComplete:function() {
			holder.removeClass("citacoes").addClass("citado");
		},
		ajaxSuccess:function(data) {
			holder.html(data);
		},
		ajaxRequest:function() {
		
			$.ajax({
				type: "GET",
				dataType: "html",
				url: holder.attr("cvURI"),
				success: function(data) {citacao.ajaxSuccess(data)},
				//error: function(err) {alert(err)},
				complete: citacao.ajaxComplete
			});
		
		},
		init:function() {
			citacao.ajaxRequest();
		}
	};
	
	citacao.init();
	
};

$.fn.verificarCitacoes = function() {

	return this.each(function(index){
		var holder = $(this);
		$.citacoes(holder);
	});
	
};

})(jQuery);