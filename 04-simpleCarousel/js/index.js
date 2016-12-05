/* 
* @Author: Marte
* @Date:   2016-12-04 22:26:47
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-05 21:14:59
*/

$(document).ready(function(){
    var arr = ["吃货福利","夏春新品","韩国进口","真才实木","茗茶上市"];
    var n = 1;

    //顺序播放，注意attr中key不能加引号
    $("#next").click(function(){
    	$(this).addClass("yellow");
    	n+=1;
    	if(n > 5){
    		alert("已经是最后一张了");
            n = 5;
    	}else{
    		$(".img").attr({
                src:"css/img/"+n+".jpg",
                alt:arr[n-1]
            });
    	}
    });

    $("#previous").click(function(){
    	$(this).addClass("yellow");
    	n-=1;
    	if(n <= 0){
    		alert("往前没有图片了");
            n = 1;
    	}else{
    		$(".img").attr({
                src:"css/img/"+n+".jpg",
                alt: arr[n-1]
            });
    	}
    });
});