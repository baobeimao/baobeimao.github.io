/* 
* @Author: Marte
* @Date:   2016-12-03 17:12:53
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-03 21:23:51
*/

$(document).ready(function(){

    //1.当点击设置按照时，dialog弹出，mask弹出
    $('.click-set').click(function(){
    	$('.dialog').show();
    	$('.mask').show();
    })

    //2. 当点击dialog中的颜色时
    $('.color-list span').click(function(){
    	$('.square div').removeClass();
    	var attr = $(this).attr("class");
    	$('.square div').addClass(attr+"-click");
    })
    //3. 当点击dialog中的颜色时
    $('.width span').click(function(){
    	var inner =  $(this).html();
    	$('.square div').css("width",inner+"px");
    })

     $('.height span').click(function(){
    	var inner =  $(this).html();
    	$('.square div').css("height",inner+"px");
    })

    $('.recover').click(function(){
    	$('.square div').css({
    		"width": "100px",
    		"height": "100px"
    	}).removeClass();
    })

    $('.sure').click(function(){
    	$('.dialog').hide();
    	$('.mask').hide();
    })
});