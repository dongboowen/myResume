
$(function(){
	$(window).resize();
	//resize() 方法触发 resize 事件，或规定当发生 resize 事件时运行的函数。
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	$("#block-nav").navFixed();

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
		//event.preventDefault() 方法阻止元素发生默认的行为,防止打开URL
	});
});

$(window).resize(function(){ 

	//首页满屏
	$("#block-firstPage").css("height", $(window).height());
	//首页文字效果
	$('.blockTitle').stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	},500); 

	$("#block-wantMore").css("height", $(window).height()-52 + "px");
	$('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px"); 
});
