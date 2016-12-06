/* 
* @duthor: Marte
* @Date:   2016-12-06 08:28:49
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-06 10:34:51
*/

$(document).ready(function(){
    var imgs = [
    	"css/img/a.jpg",
    	"css/img/b.jpg",
    	"css/img/c.jpg",
    	"css/img/d.jpg",
    	"css/img/e.jpg"
    ];

    var titles = [
    	"page 1",
    	"page 2",
    	"page 3",
    	"page 4",
    	"page 5"
    ]

    var status = "xunhuan"; //默认是循环模式
    var n = 0;
    var len = imgs.length;

    $(".cycle").click(function(){
    	status = "xunhuan";
    	$(this).addClass("yellow");
    	$(".order").removeClass('yellow');
    });

    $(".order").click(function(){
    	status = "shunxu";
    	$(this).addClass("yellow");
    	$(".cycle").removeClass('yellow');
    });

    $(".next").click(function(){
    	n++;
    	if(n > len -1){
    		if(status == "xunhuan"){
    			n = 0;
    			$(".image").attr({
		    		src:imgs[n]
		    	});
    			$(".title1").html(titles[n] );
    			$(".title2").html( (n+1)+"/"+len );
    		}else if(status == "shunxu"){
    			n = len - 1;
    			alert("这已是最后一张图片");
    		}
    	}

    	$(".image").attr({
    		src:imgs[n]
    	});
    	$(".title1").html(titles[n] );
    	$(".title2").html( (n+1)+"/"+len );
    });


    $(".previous").click(function(){
    	n--;
    	if(n < 0){
    		if(status == "xunhuan"){
    			n = len - 1;
    			$(".image").attr({
		    		src:imgs[n]
		    	});
    			$(".title1").html("page" + (n+1) );
    			$(".title2").html( (n+1)+"/"+len );
    		}else if(status == "shunxu"){
    			n = 0;
    			alert("这已是第一张图片");
    		}
    	}

    	$(".image").attr({
    		src:imgs[n]
    	});
    	$(".title1").html(titles[n] );
    	$(".title2").html( (n+1)+"/"+len );
    })


});