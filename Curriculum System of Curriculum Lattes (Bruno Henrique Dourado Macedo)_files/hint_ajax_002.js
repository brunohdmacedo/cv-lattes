(function($){
	
$.fn.ajaxJCR = function() {
	
	var p = {tag: "data-issn"};

	return this.each(function(index){
		
		this.ajaxRequest = function() {
			
			var _this = this;
			
			var callback = function(data) {
				
				if (data == null) {
					$(_this).remove();
					return;
				}
				
				var link = data["link"],
					issn = data["issn"],
					ano = data["ano"],
					nome = data["nome-periodico"],
					fator = data["fator-impacto"];
				
				var wrapper = $(_this).parents(".layout-cell-pad-5"),
					informacaoJCR = $("<span class='informacao-artigo' data-tipo-ordenacao='jcr' />").html(fator);
				
				wrapper.prepend(informacaoJCR);
				
				var title = nome + " (" + issn + ")" + "<br />Fator de impacto (JCR " + ano + "): " + fator;
				
				$(_this).addClass("jcrTip").attr("original-title", title).removeAttr("style");
				
				$('.jcrTip').tipsy({
					gravity: 's',
					html: true
				});
					
			};
			
            $.ajax({
            	type: "GET",
                url: "visualizacao.do",
                dataType: "json",
                data: "metodo=ajax&acao=jcr&issn=" + $(this).attr(p.tag),
                success: callback
            });

		};
		
		this.ajaxRequest();	
                
	});	
};

$.fn.ajaxCAPES = function() {
	
	var p = {tag: "data-param"};

	return this.each(function(index){
		
		this.ajaxRequest = function() {
			
			var _this = this;
			
			var callback = function(data) {
				if (data == null) {
					$(_this).remove();
					return;
				}
				
				var conceito = data["conceito"];
				
				$(_this).html(" (" + conceito + ")");
				
			};
			
            $.ajax({
            	type: "GET",
                url: "visualizacao.do",
                dataType: "json",
                data: "metodo=ajax&acao=capes" + $(this).attr(p.tag),
                success: callback
            });

		};
		
		this.ajaxRequest();	
                
	});	
};

$.fn.ajaxINPI = function() {
	
	var p = {tag: "data-param"};

	return this.each(function(index){
		
		this.ajaxRequest = function() {
			
			var _this = this;
			
			var callback = function(data) {				
				if (data == null) {
					$(_this).remove();
					return;
				}
				
				var link = data["link"],
					imagem = $("<a class='icone-producao icone-inpi' target='_blank' />").attr("href", link).appendTo(_this);
				
			};
			
            $.ajax({
            	type: "GET",
                url: "servletRegistroPatenteINPI",
                dataType: "json",
                data: $(this).attr(p.tag),
                success: callback
            });

		};
		
		this.ajaxRequest();	
                
	});	
};
		
})(jQuery);