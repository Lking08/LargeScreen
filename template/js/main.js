
$('.back_intro').on("click", function() {
	window.history.go(-1);
});
$('.menu').on('click', function() {
	$('.menu_content').toggle();
	$('.play_main').show();
	$('.pause_main').show();
});

function requestFullScreen(element) {
	// 判断各种浏览器，找到正确的方法
	var requestMethod = element.requestFullScreen || //W3C
		element.webkitRequestFullScreen || //Chrome等
		element.mozRequestFullScreen || //FireFox
		element.msRequestFullScreen; //IE11
	if(requestMethod) {
		requestMethod.call(element);
	} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if(wscript !== null) {
			wscript.SendKeys("{Enter}");
		}
	}

	$('.back_intro').hide();
	$('.menu').hide();
	$('.menu_content').hide();

	$('.play_main').hide();
	$('.back_intro').hide();
	$('.pause_main').hide();
	$('.jquery-slider-navigation').hide();
	$('.jquery-slider-selectors').hide();

	$('.rotation').click(function(e) {
		var ele = e ? e.target : window.event.srcElement;
		if(ele.id !== 'menuPic') {
			document.getElementById('menuPic').style.display = 'none';
			$('.rotation').click(function() {
				$('#menuPic').show();
			})
		}
		return false; 
	})

}

//退出全屏 判断浏览器种类
function exitFull() {
	// 判断各种浏览器，找到正确的方法
	var exitMethod = document.exitFullscreen || //W3C
		document.mozCancelFullScreen || //Chrome等
		document.webkitExitFullscreen || //FireFox
		document.webkitExitFullscreen; //IE11
	if(exitMethod) {
		exitMethod.call(document);
	} else if(typeof window.ActiveXObject !== "undefined") { //for Internet Explorer
		var wscript = new ActiveXObject("WScript.Shell");
		if(wscript !== null) {
			wscript.SendKeys("{Enter}");
		}
	}
	$('.back_intro').show();
	$('.menu').show();
	$('.menu_content').show();
	$('.play_main').show();
	$('.back_intro').show();
	$('.pause_main').show();
	$('.jquery-slider-navigation').show();
	$('.jquery-slider-selectors').show();
}

$(document).bind("keydown", function(e) {

	　　 // 兼容FF和IE和Opera

	　　
	var theEvent = e || window.event;

	　　
	var code = theEvent.keyCode || theEvent.which || theEvent.charCode;

	　　
	if(code == 13) {
		exitFull();
	}
	if(code == 27) {
		//阻止浏览器的默认行为 
		function stopDefault( e ) { 
		    //阻止默认浏览器动作(W3C) 
		    if ( e && e.preventDefault ) 
		        e.preventDefault(); 
		    //IE中阻止函数器默认动作的方式 
		    else{window.event.returnValue = false; } 
		        
		    return false; 
		}
		stopDefault();
		exitFull();
		$('.back_intro').show();
		$('.menu').show();
		$('.menu_content').show();
		$('.play_main').show();
		$('.back_intro').show();
		$('.pause_main').show();
		$('.jquery-slider-navigation').show();
		$('.jquery-slider-selectors').show();
	}
	if(code == 122) {
		requestFullScreen(document.documentElement);
		return false; 
	}

});