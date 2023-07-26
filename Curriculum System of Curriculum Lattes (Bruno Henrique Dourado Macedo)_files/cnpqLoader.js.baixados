function cnpqLoader(parametros) {

	this.id = typeof parametros.id !="undefined" ? parametros.id : null;
	this.texto = typeof parametros.texto !="undefined" ? parametros.texto : "Aguarde. Carregando...";
	
	this.de = document.documentElement;
	this.pageBody = document.getElementsByTagName("body")[0];
	this.divClass = ['overlay','loading_div'];
	this.divArray = new Array(this.divClass.length);
	
	this.criarEstrutura = function() {
	
		this.pageBody.style.overflow = this.de.style.overflow = "hidden";
		this.pageBody.style.cursor = this.de.style.cursor = "wait";
	
		for (var x=0; x<this.divClass.length; x++) {
		this.divArray[x] = document.createElement("div");
		this.divArray[x].className = this.divClass[x];
		}
		
		this.pageBody.insertBefore(this.divArray[0],this.pageBody.childNodes[0]);
		
		this.pageBody.insertBefore(this.divArray[1],this.pageBody.childNodes[1]);
	
		this.loadingText = document.createElement("p");
		this.loadingText.innerHTML = this.texto;
		this.loadingText.className = "loadingText";
		this.divArray[1].appendChild(this.loadingText);
				
		this.logoCnpq = document.createElement("img");
		this.logoCnpq.src = "img/loader/logo.gif";
		this.logoCnpq.className = "logo";
		this.divArray[1].insertBefore(this.logoCnpq,this.divArray[1].childNodes[0]);
		
		this.loadingGif = document.createElement("img");
		this.loadingGif.src = "img/loader/loading.gif";
		this.loadingGif.className = "loadingGif";
		this.divArray[1].appendChild(this.loadingGif);
		
		this.divArray[0].style.filter = "alpha(opacity=70)";
		this.divArray[0].style.opacity = "0.7";
		this.divArray[0].style.mozOpacity = "0.7";
                this.divArray[0].style.zIndex = "8888";

		this.divArray[1].style.top = this.divArray[0].offsetHeight/2 - this.divArray[1].offsetHeight/2 + "px";
		this.divArray[1].style.left = this.divArray[0].offsetWidth/2 - this.divArray[1].offsetWidth/2 + "px";
		this.divArray[1].style.zIndex = "9999";
	}
	
	this.removerLoader = function() {
		this.divArray[0].parentNode.removeChild(this.divArray[0]);
		this.divArray[1].parentNode.removeChild(this.divArray[1]);
		if (this.id) document.getElementById(this.id).style.display = "block";
		this.pageBody.style.overflow = this.de.style.overflow = "";
		this.pageBody.style.cursor = this.de.style.cursor = "default";
	}
	
	this.criarEstrutura();
	
	var _cnpqLoader = this;

	addListener(window,"load",function(){
		_cnpqLoader.removerLoader();
	})
	
}

function esconderImagemLoading(idImgLoad,idImgScopus){
    var imLoad = document.getElementById(idImgLoad);
    imLoad.style.display = 'none';
    var imScopus = document.getElementById(idImgScopus);
    imScopus.style.display = 'block';
}
