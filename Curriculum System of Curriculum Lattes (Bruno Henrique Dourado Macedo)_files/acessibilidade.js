jQuery(document).ready(function () {
	
  //Ativa Modal
  jQuery(".avisa-modal").focus();
  jQuery.ativaModal = function (i) {
    jQuery(".modalFiltros").eq(i).find(".avisa-modal").focus();
  };
  jQuery.desativaModal = function (i) {
    jQuery("#filtro" + i++).focus();
  };
  //
  
  //Aplica tabindex(0)
  var jq = jQuery("h1, h2, h3, h4, h5, h6");
  for (var i = 0, len = jq.length; i < len; i++) {
    jq.eq(i).attr('tabindex', '0');
  }
  //
//Aplica aria-labelleby
  var jq = jQuery("fieldset:visible");
  for (var i = 0, len = jq.length; i < len; i++) {
    var id = jq.eq(i).children("legend").attr('id');
    jq.eq(i).find("input[type='checkbox']").eq(0).attr('aria-labelledby',id);
  }
  
//Aplica tabindex(0)
  var jq = jQuery("input[type='checkbox']");
  for (var i = 0, len = jq.length; i < len; i++)
  { 
	  jq.eq(i).attr('role', 'menuitem');
  }//
//filtros.buscaNome
  //Fechar modal com a tecla Esc
  jQuery.fecharModalEsc = function () {
    jQuery(document).bind('keydown', function (e) {
      if (e.keyCode == 27) {
        jQuery(".bt-fechar:visible:last", window.parent.document)[0].focus();
        jQuery(".bt-fechar:visible:last", window.parent.document)[0].click();
      }
    });
  };
  jQuery.fecharModalEsc();
  //

  //ALTO CONTRASTE
  jQuery(".icons-top-contraste").click(function () {
      if (!jQuery(this).hasClass("selected")){
    	  jQuery("body").addClass("altoContraste");
    	  jQuery(this).addClass("selected");
    	  jQuery.cookie('contraste', "alto"); 
    	  jQuery(this).attr("title","Alto contraste");
      } else{
    	jQuery("body").removeClass("altoContraste");
  		jQuery(this).removeClass("selected");
  		jQuery(this).attr("title","Baixo contraste");
  		jQuery.cookie('contraste', "baixo"); 
      }
      return false;
  });
  
  jQuery(".icons-top-contraste-en").click(function () {
      if (!jQuery(this).hasClass("selected")){
    	  jQuery("body").addClass("altoContraste");
    	  jQuery(this).addClass("selected");
    	  jQuery.cookie('contraste', "alto"); 
    	  jQuery(this).attr("title","High contrast");
      } else{
    	jQuery("body").removeClass("altoContraste");
  		jQuery(this).removeClass("selected");
  		jQuery(this).attr("title","Low contrast");
  		jQuery.cookie('contraste', "baixo"); 
      }
      return false;
  });

  if(jQuery.cookie('contraste')=='alto'){
	  jQuery("body").addClass("altoContraste");
	  jQuery(".icons-top-contraste").addClass("selected");
	  jQuery(".icons-top-contraste-en").addClass("selected");
  }
  //ALTO CONTRASTE - fim

});