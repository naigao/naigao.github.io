$(document).ready(function(){
	
	$(window).load(
	function(){
		for(var i = 0;i<20;i++)
		$("#PubSearchFilterIMG").fadeToggle(1000,
		function(){
				$("#PubSearchFilterIMG").attr("src","images/socialNetIcons/PubSearchFilterB.png",
				function(){
					$("#PubSearchFilterIMG").fadeToggle(1000,
					function(){
							$("#PubSearchFilterIMG").attr("src","images/socialNetIcons/PubSearchFilterF.png");
						       });
			               });														
	               })
	})
	$("#PubSearchFilterIMG").click(function(){
		$("#PubSearchFilterIMG").stop(true, true);		
		$("#PubSearchFilterIMG").fadeIn(0);
	})
})

var PubFilterVar = 1;
$(document).ready(function(){

function PubFilterOptionDisp(){
	$("#PubSearchAllIMG").attr("src","images/socialNetIcons/PubSearchAllF.png");
	$("#PubSearchJournalsIMG").attr("src","images/socialNetIcons/PubSearchJournalsF.png");
	$("#PubSearchConfIMG").attr("src","images/socialNetIcons/PubSearchConfF.png");
	$("#PubSearch2013IMG").attr("src","images/socialNetIcons/PubSearch2013F.png");
	$("#PubSearch2012IMG").attr("src","images/socialNetIcons/PubSearch2012F.png");
	$("#PubSearchThesisIMG").attr("src","images/socialNetIcons/PubSearchThesisF.png");
	$("#PubSearchOthersIMG").attr("src","images/socialNetIcons/PubSearchOthersF.png");
	     if(PubFilterVar==1)
		$("#PubSearchAllIMG").attr("src","images/socialNetIcons/PubSearchAllB.png");
	else if(PubFilterVar==2) 
		$("#PubSearchJournalsIMG").attr("src","images/socialNetIcons/PubSearchJournalsB.png");
	else if(PubFilterVar==3) 
		$("#PubSearchConfIMG").attr("src","images/socialNetIcons/PubSearchConfB.png");
	else if(PubFilterVar==4) 
		$("#PubSearch2013IMG").attr("src","images/socialNetIcons/PubSearch2013B.png");
	else if(PubFilterVar==5) 
		$("#PubSearch2012IMG").attr("src","images/socialNetIcons/PubSearch2012B.png");
	else if(PubFilterVar==6) 
		$("#PubSearchThesisIMG").attr("src","images/socialNetIcons/PubSearchThesisB.png");
	else if(PubFilterVar==7) 
		$("#PubSearchOthersIMG").attr("src","images/socialNetIcons/PubSearchOthersB.png");
}
	
	var slideDelay = 500;
	
	$("#PubSearchAll").click(function(){
		$(".PubDiv").slideDown(slideDelay);
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();	
		PubFilterVar = 1;	
		PubFilterOptionDisp();
	})

	$("#PubSearchJournals").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").hide();
		$(".PubJournal").slideDown(slideDelay);
		PubFilterVar = 2;	
		PubFilterOptionDisp();
	})

	$("#PubSearchConf").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").hide();
		$("#PubHeaderConf").show();
		$(".PubConf").slideDown(slideDelay);
		PubFilterVar = 3;	
		PubFilterOptionDisp();
	})

	$("#PubSearch2013").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();
		$(".Pub2013").slideDown(slideDelay);
		PubFilterVar = 4;	
		PubFilterOptionDisp();
	})

	$("#PubSearch2012").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();
		$(".Pub2012").slideDown(slideDelay);
		PubFilterVar = 5;	
		PubFilterOptionDisp();
	})

	$("#PubSearchThesis").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();
		$(".PubThesis").slideDown(slideDelay);
		PubFilterVar = 6;	
		PubFilterOptionDisp();
	})
	
	$("#PubSearchOthers").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();
		$(".PubOthers").slideDown(slideDelay);
		PubFilterVar = 7;	
		PubFilterOptionDisp();
	})
	
	
	$("#PubSearch2014").click(function(){
		$(".PubDiv").hide();
		$("#PubHeaderJournal").show();
		$("#PubHeaderConf").show();
		$(".Pub2014").slideDown(slideDelay);
		PubFilterVar = 8;	
		PubFilterOptionDisp();
	})


   
   var hOff = -40;
   $("#PubSearchFilterIMG").mouseover (function(){
	   $("#PubSearchFilterIMG").attr("src","images/socialNetIcons/PubSearchFilterB.png");
        var offTop  = $("#PubSearchFilterIMG").offset().top;
        var offLeft = $("#PubSearchFilterIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxFilter").attr("class","PubBox_icon_disp");})
		
	
   $("#PubSearchFilterIMG").mouseleave(function(){
//	   $("#PubSearchFilterIMG").attr("src","images/socialNetIcons/PubSearchFilterF.png");
		PubFilterOptionDisp();
	   $("#PubBoxFilter").attr("class","PubBox_icon");})
   
   $("#PubSearchAllIMG").mouseover (function(){
	   $("#PubSearchAllIMG").attr("src","images/socialNetIcons/PubSearchAllB.png");
        var offTop  = $("#PubSearchAllIMG").offset().top;
        var offLeft = $("#PubSearchAllIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxA").attr("class","PubBox_icon_disp");})
   $("#PubSearchAllIMG").mouseleave(function(){
//	   $("#PubSearchAllIMG").attr("src","images/socialNetIcons/PubSearchAllF.png");
		PubFilterOptionDisp();
	   $("#PubBoxA").attr("class","PubBox_icon");})

   $("#PubSearchJournalsIMG").mouseover (function(){
	   $("#PubSearchJournalsIMG").attr("src","images/socialNetIcons/PubSearchJournalsB.png");
        var offTop  = $("#PubSearchJournalsIMG").offset().top;
        var offLeft = $("#PubSearchJournalsIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxJ").attr("class","PubBox_icon_disp");})
   $("#PubSearchJournalsIMG").mouseleave(function(){
//	   $("#PubSearchJournalsIMG").attr("src","images/socialNetIcons/PubSearchJournalsF.png");
		PubFilterOptionDisp();
	   $("#PubBoxJ").attr("class","PubBox_icon");})

   $("#PubSearchConfIMG").mouseover (function(){
	   $("#PubSearchConfIMG").attr("src","images/socialNetIcons/PubSearchConfB.png");
        var offTop  = $("#PubSearchConfIMG").offset().top;
        var offLeft = $("#PubSearchConfIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxC").attr("class","PubBox_icon_disp");})
   $("#PubSearchConfIMG").mouseleave(function(){
//	   $("#PubSearchConfIMG").attr("src","images/socialNetIcons/PubSearchConfF.png");
		PubFilterOptionDisp();
	   $("#PubBoxC").attr("class","PubBox_icon");})
	   

   $("#PubSearch2013IMG").mouseover (function(){
	   $("#PubSearch2013IMG").attr("src","images/socialNetIcons/PubSearch2013B.png");
        var offTop  = $("#PubSearch2013IMG").offset().top;
        var offLeft = $("#PubSearch2013IMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBox13").attr("class","PubBox_icon_disp");})
   $("#PubSearch2013IMG").mouseleave(function(){
//	   $("#PubSearch2013IMG").attr("src","images/socialNetIcons/PubSearch2013F.png");
		PubFilterOptionDisp();
	   $("#PubBox13").attr("class","PubBox_icon");})

   $("#PubSearch2012IMG").mouseover (function(){
	   $("#PubSearch2012IMG").attr("src","images/socialNetIcons/PubSearch2012B.png");
        var offTop  = $("#PubSearch2012IMG").offset().top;
        var offLeft = $("#PubSearch2012IMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBox12").attr("class","PubBox_icon_disp");})
   $("#PubSearch2012IMG").mouseleave(function(){
//	   $("#PubSearch2012IMG").attr("src","images/socialNetIcons/PubSearch2012F.png");
		PubFilterOptionDisp();
	   $("#PubBox12").attr("class","PubBox_icon");})

   $("#PubSearchThesisIMG").mouseover (function(){
	   $("#PubSearchThesisIMG").attr("src","images/socialNetIcons/PubSearchThesisB.png");
	    var offTop  = $("#PubSearchThesisIMG").offset().top;
        var offLeft = $("#PubSearchThesisIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxT").attr("class","PubBox_icon_disp");})
   $("#PubSearchThesisIMG").mouseleave(function(){
//	   $("#PubSearchThesisIMG").attr("src","images/socialNetIcons/PubSearchThesisF.png");
		PubFilterOptionDisp();
	   $("#PubBoxT").attr("class","PubBox_icon");})

   $("#PubSearchOthersIMG").mouseover (function(){
	   $("#PubSearchOthersIMG").attr("src","images/socialNetIcons/PubSearchOthersB.png");
	    var offTop  = $("#PubSearchOthersIMG").offset().top;
        var offLeft = $("#PubSearchOthersIMG").offset().left;
        $(".PubBox_icon").css({left:offLeft, top:offTop+hOff});
        $("#PubBoxO").attr("class","PubBox_icon_disp");})	   
   $("#PubSearchOthersIMG").mouseleave(function(){
//	   $("#PubSearchOthersIMG").attr("src","images/socialNetIcons/PubSearchOthersF.png");
		PubFilterOptionDisp();
	   $("#PubBoxO").attr("class","PubBox_icon");})

   $(".PubSearchIMG").mouseover(function(){
	   $(this).attr("src","images/socialNetIcons/PubSearchB.png");
   });
   $(".PubSearchIMG").click(function(){
	   for(var i = 0 ; i < 16;i++){
		   $("#PubSearchTools .PubSearchIMG:eq("+i+")").delay(i*100).animate({"opacity":.01},100);
	   }
	   })
   $(".PubSearchIMG").mouseleave(function(){
	   $(".PubSearchIMG").attr("src","images/socialNetIcons/PubSearchF.png");
	   //$(".PubSearchIMG").fadeIn(0);
	   //$(".PubSearchIMG").stop(true, true);
	   //$(".PubSearchIMG").css({opacity:1})
	   })

	
})

