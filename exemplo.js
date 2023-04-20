$(document).ready(function(){
	//ready - pronto
	//função é chamada quando o documento termina
	//de renderizar (exibir todos os componentes)
	
	//$ -> construtor (seletor)
	$("#f1").click(function(){
		//$("#f1") -> selecionei componente com id f1
		// #-> id, . ->class, sem nada é componente HTML
		// .click -> tornei sensivel a ser clicado
		
		$("#cor").css("color", "red");
	});
	
	$("#f2").click(function(){
		$("#area").css("width", "500px");
	});
	
	$("#f3").click(function(){
		$("p", $("#area")).css("bacground", "black");
	});
	
	$("#11").click(function(){
		$("li:first").css("background", "blue");
	});
	
	$("#12").click(function(){
		$("li:last").css("background", "green");
	});
	
	$("#13").click(function(){
		$("li:odd").css("background", "purple");
	});
	
	$("#14").click(function(){
		$("li:even").css("background", "pink");
	});
	
	$("#15").click(function(){
		$("li:eq(3)").css("background", "yellow");
	});
	
	$("#foto").click(function(){
		var arquivo = $("#foto").attr("src");
		$("#foto").fadeOut("slow");
		//lê um atributo do componente
		alert(arquivo);
		
		$("#foto").attr("src", "images.jpg");
		$("#foto").slideDown("slow");
	});
	$("#foto").mouseover(function(){
		$("#foto").addClass("destaqueFoto");
	});
});