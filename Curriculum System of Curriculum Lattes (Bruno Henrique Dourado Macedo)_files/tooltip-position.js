// JavaScript Document
  $(function() {
    
    $('#example-1').tipsy();
    
    $('.titBottom').tipsy({gravity: 'n'});
    $('.titTop').tipsy({gravity: 's'});
    $('.titEsq').tipsy({gravity: 'e'});
    $('.titDir').tipsy({gravity: 'w'});
    
    $('#auto-gravity').tipsy({gravity: $.fn.tipsy.autoNS});
    
    $('#example-fade').tipsy({fade: true});
    
    $('#example-custom-attribute').tipsy({title: 'id'});
    $('#example-callback').tipsy({title: function() { return this.getAttribute('original-title').toUpperCase(); } });
    $('#example-fallback').tipsy({fallback: "Where's my tooltip yo'?" });
    
    $('#example-html').tipsy({html: true });
    
  });