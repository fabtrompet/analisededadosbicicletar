$(document).ready(function(){
	$("#conteudo").load('inicio.php');
	$(function () {
    $(window).on('hashchange', hashchanged);
    hashchanged();
});




function hashchanged() {
	

	$("#conteudo").empty();
    var hash = location.hash.replace(/[#\/]/g, '') || 'home';
    
    $("#conteudo").load(hash + '.php');
   
}



function changeClass() {
    $('.navbar-nav li').removeClass('active');
    $(this).addClass('active');
}	
$('navbar-nav li').on('click', changeClass);
});
