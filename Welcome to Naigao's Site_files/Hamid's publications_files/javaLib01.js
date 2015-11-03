$(document).ready(function(){
	 $(window).load(function(){$("#MainInnerBox").slideUp(0)});
	 $(window).load(function(){$("#MainInnerBox").slideDown(1000)})
}) 

$(document).ready(function(){
		
	 // Webpage name
     $("#HP_image1").mouseover (
	 	function(){
			$("#HP_image1").attr("src","images/headers/headerPicB.png");
		})
     $("#HP_image1").mouseleave(
	 	function(){
			$("#HP_image1").attr("src","images/headers/headerPicF.png");		
		}
	 )	 

     $("#footerText").mouseover (
	 	function(){
			var offTop  = $("#footerText").offset().top;
			var offLeft = $("#footerText").offset().left;			
			$(".flagCnt").animate({"height":300,"opacity":1,"top":offTop+30,"left":5},1);
			$(".flagCnt").animate({"height":300,"opacity":1,"top":offTop+30,"left":offLeft},650);
		})
     $("#footerText").mouseleave(
	 	function(){
			var offTop  = $("#footerText").offset().top;
			var offLeft = $("#footerText").offset().left;			
			$(".flagCnt").fadeTo(1,0);
			$(".flagCnt").animate({"height":300,"top":offTop+30,"left":5},1);
		}
	 )	 

	      	
	 // Icons
     $("#SNIcon_tu").mouseover (function(){
        $("#SNIcon_tu").attr("src","images/socialNetIcons/tu_iconB.png");
        var offTop  = $("#SNIcon_tu").offset().top;
        var offLeft = $("#SNIcon_tu").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_tu").attr("class","box_icon_disp");})
     $("#SNIcon_tu").mouseleave(function(){
        $("#SNIcon_tu").attr("src","images/socialNetIcons/tu_iconF.png");
        $("#box_tu").attr("class","box_icon");})
     $("#SNIcon_mt").mouseover (function(){
        $("#SNIcon_mt").attr("src","images/socialNetIcons/mt_iconB.png");
        var offTop  = $("#SNIcon_mt").offset().top;
        var offLeft = $("#SNIcon_mt").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_mt").attr("class","box_icon_disp");})
     $("#SNIcon_mt").mouseleave(function(){
        $("#SNIcon_mt").attr("src","images/socialNetIcons/mt_iconF.png");
        $("#box_mt").attr("class","box_icon");})
     $("#SNIcon_li").mouseover (function(){
        $("#SNIcon_li").attr("src","images/socialNetIcons/li_iconB.png");
        var offTop  = $("#SNIcon_li").offset().top;
        var offLeft = $("#SNIcon_li").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_li").attr("class","box_icon_disp");})
     $("#SNIcon_li").mouseleave(function(){
        $("#SNIcon_li").attr("src","images/socialNetIcons/li_iconF.png");
        $("#box_li").attr("class","box_icon");})
     $("#SNIcon_gs").mouseover (function(){
        $("#SNIcon_gs").attr("src","images/socialNetIcons/gs_iconB.png");
        var offTop  = $("#SNIcon_gs").offset().top;
        var offLeft = $("#SNIcon_gs").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_gs").attr("class","box_icon_disp");})
     $("#SNIcon_gs").mouseleave(function(){
        $("#SNIcon_gs").attr("src","images/socialNetIcons/gs_iconF.png");
        $("#box_gs").attr("class","box_icon");})
     $("#SNIcon_gp").mouseover (function(){
        $("#SNIcon_gp").attr("src","images/socialNetIcons/gp_iconB.png");
        var offTop  = $("#SNIcon_gp").offset().top;
        var offLeft = $("#SNIcon_gp").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_gp").attr("class","box_icon_disp");})
     $("#SNIcon_gp").mouseleave(function(){
        $("#SNIcon_gp").attr("src","images/socialNetIcons/gp_iconF.png");
        $("#box_gp").attr("class","box_icon");})
     $("#SNIcon_gm").mouseover (function(){
        $("#SNIcon_gm").attr("src","images/socialNetIcons/gm_iconB.png");
        var offTop  = $("#SNIcon_gm").offset().top;
        var offLeft = $("#SNIcon_gm").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_gm").attr("class","box_icon_disp");})
     $("#SNIcon_gm").mouseleave(function(){
        $("#SNIcon_gm").attr("src","images/socialNetIcons/gm_iconF.png");
        $("#box_gm").attr("class","box_icon");})
     $("#SNIcon_fb").mouseover (function(){
        $("#SNIcon_fb").attr("src","images/socialNetIcons/fb_iconB.png");
        var offTop  = $("#SNIcon_fb").offset().top;
        var offLeft = $("#SNIcon_fb").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_fb").attr("class","box_icon_disp");})
     $("#SNIcon_fb").mouseleave(function(){
        $("#SNIcon_fb").attr("src","images/socialNetIcons/fb_iconF.png");
        $("#box_fb").attr("class","box_icon");})
     $("#SNIcon_yt").mouseover (function(){
        $("#SNIcon_yt").attr("src","images/socialNetIcons/yt_iconB.png");
        var offTop  = $("#SNIcon_yt").offset().top;
        var offLeft = $("#SNIcon_yt").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_yt").attr("class","box_icon_disp");})
     $("#SNIcon_yt").mouseleave(function(){
        $("#SNIcon_yt").attr("src","images/socialNetIcons/yt_iconF.png");
        $("#box_yt").attr("class","box_icon");})
     $("#SNIcon_rs").mouseover (function(){
        $("#SNIcon_rs").attr("src","images/socialNetIcons/rs_iconB.png");
        var offTop  = $("#SNIcon_rs").offset().top;
        var offLeft = $("#SNIcon_rs").offset().left;
        $(".box_icon").css({left:offLeft, top:offTop+40});
        $("#box_rs").attr("class","box_icon_disp");})
     $("#SNIcon_rs").mouseleave(function(){
        $("#SNIcon_rs").attr("src","images/socialNetIcons/rs_iconF.png");
        $("#box_rs").attr("class","box_icon");})

	
	 var menuAnimationDelay = 400;
	 var menuAnimationDuration=500;
     $("#Phd_menuParrent").hover (		
	    function(){
			var offTop  = $("#BL_Phd").offset().top;
			var offLeft = $("#BL_Phd").offset().left+150;
			var Max =  0;
			var Min = -0;
			var randNum = [Math.floor(Math.random()*(Max-Min)) + Min,
						   Math.floor(Math.random()*(Max-Min)) + Min,
						   Math.floor(Math.random()*(Max-Min)) + Min,
						   Math.floor(Math.random()*(Max-Min)) + Min];
			var h = 32;
			$(".Phd_Children").css({left:offLeft, top:offTop, display:"block"});
			$("#Pub_ch02F").animate({"top" : offTop+1*h,"left":offLeft+randNum[0]},650);
			$("#Pub_ch03F").animate({"top" : offTop+2*h,"left":offLeft+randNum[2]},500);
			$("#Pub_ch04F").animate({"top" : offTop+3*h,"left":offLeft+randNum[3]},350);
			$("#Pub_ch05F").animate({"top" : offTop+4*h,"left":offLeft+randNum[4]},200);
			$("#MainInnerBox .class_mainIneerboxFadable").delay(menuAnimationDelay).fadeTo(500,.1);
	 })
     $("#Phd_menuParrent").mouseleave (	
			function(){
			$("#MainInnerBox .class_mainIneerboxFadable").stop(true, true);
			$(".Phd_Children").stop(true, true);
			$(".Phd_Children").css({left:0,right:0,display:"none"})
			$("#MainInnerBox .class_mainIneerboxFadable").fadeTo(200,1);
	 });

     $("#Dwl_menuParrent").hover (		
	    function(){
			var offTop  = $("#BL_Dwl").offset().top;
			var offLeft = $("#BL_Dwl").offset().left;
			var h = 32;
			$(".Dwl_Children").css({left:offLeft+150, top:offTop, display:"block"});
			$("#Dwl_ch02F").animate({"top" : offTop+1*h},500);
			$("#Dwl_ch03F").animate({"top" : offTop+2*h},350);
			$("#Dwl_ch04F").animate({"top" : offTop+3*h},200);
			$("#MainInnerBox .class_mainIneerboxFadable").delay(menuAnimationDelay).fadeTo(400,.1);
	 })
	 
     $("#Dwl_menuParrent").mouseleave (	
		function(){
			$("#MainInnerBox .class_mainIneerboxFadable").stop(true, true);
			$(".Dwl_Children").stop(true, true);
			$(".Dwl_Children").css({left:0,right:0,display:"none"})
			$("#MainInnerBox .class_mainIneerboxFadable").fadeTo(200,1);
	 });
	
     
     $("#BL_Hom").mouseover (function(){$("#BL_Hom").attr("src","images/linkButtons/HomB.png");})
     $("#BL_Hom").mouseleave(function(){$("#BL_Hom").attr("src","images/linkButtons/HomF.png");})
     $("#BL_Phd").mouseover (function(){$("#BL_Phd").attr("src","images/linkButtons/PhdB.png");})
     $("#BL_Phd").mouseleave(function(){$("#BL_Phd").attr("src","images/linkButtons/PhdF.png");})
     $("#BL_Pub").mouseover (function(){$("#BL_Pub").attr("src","images/linkButtons/PubB.png");})
     $("#BL_Pub").mouseleave(function(){$("#BL_Pub").attr("src","images/linkButtons/PubF.png");})
     $("#BL_Res").mouseover (function(){$("#BL_Res").attr("src","images/linkButtons/ResB.png");})
     $("#BL_Res").mouseleave(function(){$("#BL_Res").attr("src","images/linkButtons/ResF.png");})
     $("#BL_Wrk").mouseover (function(){$("#BL_Wrk").attr("src","images/linkButtons/WrkB.png");})
     $("#BL_Wrk").mouseleave(function(){$("#BL_Wrk").attr("src","images/linkButtons/WrkF.png");})
     $("#BL_Skl").mouseover (function(){$("#BL_Skl").attr("src","images/linkButtons/SklB.png");})
     $("#BL_Skl").mouseleave(function(){$("#BL_Skl").attr("src","images/linkButtons/SklF.png");})
     $("#BL_Rsc").mouseover (function(){$("#BL_Rsc").attr("src","images/linkButtons/RscB.png");})
     $("#BL_Rsc").mouseleave(function(){$("#BL_Rsc").attr("src","images/linkButtons/RscF.png");})
     $("#BL_Dwl").mouseover (function(){$("#BL_Dwl").attr("src","images/linkButtons/DwlB.png");})
     $("#BL_Dwl").mouseleave(function(){$("#BL_Dwl").attr("src","images/linkButtons/DwlF.png");})
     $("#BL_Lnk").mouseover (function(){$("#BL_Lnk").attr("src","images/linkButtons/LnkB.png");})
     $("#BL_Lnk").mouseleave(function(){$("#BL_Lnk").attr("src","images/linkButtons/LnkF.png");})
     $("#BL_Cnt").mouseover (function(){$("#BL_Cnt").attr("src","images/linkButtons/CntB.png");})
     $("#BL_Cnt").mouseleave(function(){$("#BL_Cnt").attr("src","images/linkButtons/CntF.png");})
	 
     $("#BL_Pub_ch01").mouseover (function(){$("#BL_Pub_ch01").attr("src","images/linkButtons/Pub_ch01B.png");})
     $("#BL_Pub_ch01").mouseleave(function(){$("#BL_Pub_ch01").attr("src","images/linkButtons/Pub_ch01F.png");})
     $("#BL_Pub_ch02").mouseover (function(){$("#BL_Pub_ch02").attr("src","images/linkButtons/Pub_ch02B.png");})
     $("#BL_Pub_ch02").mouseleave(function(){$("#BL_Pub_ch02").attr("src","images/linkButtons/Pub_ch02F.png");})
     $("#BL_Pub_ch03").mouseover (function(){$("#BL_Pub_ch03").attr("src","images/linkButtons/Pub_ch03B.png");})
     $("#BL_Pub_ch03").mouseleave(function(){$("#BL_Pub_ch03").attr("src","images/linkButtons/Pub_ch03F.png");})
     /*$("#BL_Pub_ch04").mouseover (function(){$("#BL_Pub_ch04").attr("src","images/linkButtons/Pub_ch04B.png");})
     $("#BL_Pub_ch04").mouseleave(function(){$("#BL_Pub_ch04").attr("src","images/linkButtons/Pub_ch04F.png");})
     $("#BL_Pub_ch05").mouseover (function(){$("#BL_Pub_ch05").attr("src","images/linkButtons/Pub_ch05B.png");})
     $("#BL_Pub_ch05").mouseleave(function(){$("#BL_Pub_ch05").attr("src","images/linkButtons/Pub_ch05F.png");})*/
     $("#BL_Dwl_ch01").mouseover (function(){$("#BL_Dwl_ch01").attr("src","images/linkButtons/Dwl_ch01B.png");})
     $("#BL_Dwl_ch01").mouseleave(function(){$("#BL_Dwl_ch01").attr("src","images/linkButtons/Dwl_ch01F.png");})
     /*$("#BL_Dwl_ch02").mouseover (function(){$("#BL_Dwl_ch02").attr("src","images/linkButtons/Dwl_ch02B.png");})
     $("#BL_Dwl_ch02").mouseleave(function(){$("#BL_Dwl_ch02").attr("src","images/linkButtons/Dwl_ch02F.png");})
     $("#BL_Dwl_ch03").mouseover (function(){$("#BL_Dwl_ch03").attr("src","images/linkButtons/Dwl_ch03B.png");})
     $("#BL_Dwl_ch03").mouseleave(function(){$("#BL_Dwl_ch03").attr("src","images/linkButtons/Dwl_ch03F.png");})
     $("#BL_Dwl_ch04").mouseover (function(){$("#BL_Dwl_ch04").attr("src","images/linkButtons/Dwl_ch04B.png");})
     $("#BL_Dwl_ch04").mouseleave(function(){$("#BL_Dwl_ch04").attr("src","images/linkButtons/Dwl_ch04F.png");})
     $("#BL_Dwl_ch05").mouseover (function(){$("#BL_Dwl_ch05").attr("src","images/linkButtons/Dwl_ch05B.png");})
     $("#BL_Dwl_ch05").mouseleave(function(){$("#BL_Dwl_ch05").attr("src","images/linkButtons/Dwl_ch05F.png");})*/
	 
	 // email pic
     $("#TMP_Email").mouseover (function(){$("#TMP_Email").attr("src","images/headers/tmpEmailB.jpg");})
     $("#TMP_Email").mouseleave(function(){$("#TMP_Email").attr("src","images/headers/tmpEmailF.jpg");})
	 
	 // footer icon
     $("#HelpIcon").mouseover (function(){$("#HelpIcon").attr("src","images/socialNetIcons/helpIconB.png");})
     $("#HelpIcon").mouseleave(function(){$("#HelpIcon").attr("src","images/socialNetIcons/helpIconF.png");})
	 
	 //
/*	 $("#underLinkButtonsLower").mouseover(function(){
	 	// get the position of the footer
		var offTop  = $("#BL_Cnt").offset().top;
		var offLeft = $("#BL_Cnt").offset().left;
		$("#underLinkButtonsLower").animate({"top" : offTop+32,"left":offLeft},0);
		
		var offTop  = $("#Footer").offset().top;
		var offLeft = $("#Footer").offset().left;
		$("#underLinkButtonsLower").animate({"top" : offTop-120,"left":offLeft},2000);
	 })*/
	 
})

// Fotterbox	
		var cX = 0; var cY = 0; var rX = 0; var rY = 0;
		function UpdateCursorPosition(e){ 
			cX = e.pageX; cY = e.pageY;
		}
		function UpdateCursorPositionDocAll(e){ cX = event.clientX; cY = event.clientY;}
			if(document.all) { document.onmousemove = UpdateCursorPositionDocAll; }
			else { document.onmousemove = UpdateCursorPosition; 
		}
		function AssignPosition(d,tb) {
			if(self.pageYOffset) {
			 rX = self.pageXOffset;
			 rY = self.pageYOffset;
			 }
			else if(document.documentElement && document.documentElement.scrollTop) {
			 rX = document.documentElement.scrollLeft;
			 rY = document.documentElement.scrollTop;
			 }
			else if(document.body) {
			 rX = document.body.scrollLeft;
			 rY = document.body.scrollTop;
			 }
			if(document.all) {
			 cX += rX; 
			 cY += rY;
			 }
			 if(tb==1){
				 d.style.left = (cX+10) + "px";
				 d.style.top  = (cY-110) + "px";
			 }else{
				 d.style.left = (cX+10) + "px";
				 d.style.top  = (cY+20) + "px";
			 }
		}
		function HideText(d) {
			if(d.length < 1) { return; }
			document.getElementById(d).style.display = "none";
		}
		function ShowText(d,tb) {
			if(d.length < 1) { return; }
			var dd = document.getElementById(d);
			AssignPosition(dd,tb);
			dd.style.display = "block";
		}
		function ReverseContentDisplay(d,tb) {
			if(d.length < 1) { return; }
			var dd = document.getElementById(d);
			AssignPosition(dd,tb);
			if(dd.style.display == "none") { dd.style.display = "block"; }
			else { dd.style.display = "none"; }
		}
	
		function MM_findObj(n, d) { //v4.01
		  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
			d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
		  if(!x && d.getElementById) x=d.getElementById(n); return x;
		}
		
$(document).ready(function(e) {
    
	// Cool functions
	$("#underLinkButtonsLower").click(function(){

		var r1  = (Math.floor(Math.random() * 100));
		var r2  = (Math.floor(Math.random() * 100));
		var r3  = (Math.floor(Math.random() * 100));
		var hue = 'rgb('
		+ (Math.floor(Math.random() * 0+r1)) + ','
		+ (Math.floor(Math.random() * 0+r2)) + ','
		+ (Math.floor(Math.random() * 0+r3)) + ')';
		$("body").css({"background":"none","background-color":hue});
		
		/*
		var nH = 25;
		var nW = 25;
		var wH = $(window).height();
		var wW = $(window).width();
		var H  = Math.floor(wH/nH);
		var W  = Math.floor(wW/nW);
		var x;
		var y;
		for(var i = 0;i<nH;i++){
			for(var j = 0;j<nW;j++){
				x = H*i;
				y = W*j;
				var myBox = $("<div></div>");
				var r1  = (Math.floor(Math.random() * 30+150));
				var r2  = (Math.floor(Math.random() * 30+150));
				var r3  = (Math.floor(Math.random() * 30+150));
				var hue = 'rgb('
				+ (Math.floor(Math.random() * 30+r1)) + ','
				+ (Math.floor(Math.random() * 30+r2)) + ','
				+ (Math.floor(Math.random() * 30+r3)) + ')';
				myBox.addClass("myBoxFill");
/*				if(i==nH-1 && j==nW-1){
						myBox.css({"top":x,"left":y,"background-color":hue,"height":wH-H*(nH-1) ,"width":W-(nW-1)*W, "opacity":0})	
					}else{
						if(i==nH-1){
							myBox.css({"top":x,"left":y,"background-color":hue,"height":wH-H*(nH-1),"width":W, "opacity":0})	
						}else{
							if(j == nW-1){
								myBox.css({"top":x,"left":y,"background-color":hue,"height":H ,"width":wW-(nW-1)*W, "opacity":0})							
							}else{*/
								//myBox.css({"top":x,"left":y,"background-color":hue,"height":H ,"width":W, "opacity":1})							
							/*}
						}
				}*/
				//$("#marginBox").append(myBox);					
			//}
		//}
		/*
		for(var i = 0;i<nH;i++)
		  for(var j = 0;j<nW;j++){ 
		  var k = (i)*nW+j;
			$(".myBoxFill:eq("+k+")").delay(i*10).animate({"opacity":1},10);
		}
		*/
	})
});			
