/* 
* @Author: Marte
* @Date:   2016-12-04 18:57:13
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-04 20:20:58
*/

;$(document).ready(function(){

	//1.点击头像的时候，来回切换
	var user = true;//src=zhuai.png
    $("#avatar").click(function(){
    	if(user){
    		$(this).attr("src","./css/img/xiaohei.png");
    		user = false;
    	}else{
    		$(this).attr("src","./css/img/zhuai.png");
    		user = true;
    	}
    });

    //点击"发送"按钮
    $("#btn").click(function(){
    	var val = $("#mes").val();
    	var className = "";
    	if(val !==""){
    		if(user){//user为true说明目前是zhuai.png
    			className = "zhuai";
    		}else{
    			className = "xiaohei";
    		}

    		$(".list").append('<p class="'+className+'">'
    				+'<img src="css/img/'+className+'.png"/>'
    				+'<span>'+val+'</span>'
    			+'</p>' );
    		$("#mes").val("");
    	}
    });




});