var loading1 = document.getElementById("loading1");
var loading2 = document.getElementById("loading2");
var loading3 = document.getElementById("loading3");
var star = document.getElementById("star");
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star4 = document.getElementById("star4");
var star3 = document.getElementById("star3");
var musicon = document.getElementById("music1");
var backmusic = document.getElementById("backmusic");
var musicclose = document.getElementById("music2");
var mainbox = document.getElementById("mainbox");
var wordmusic = document.getElementById("wordmusic"); 
var wordall = document.getElementById("wordall");
var liArray = wordall.getElementsByTagName("li");
var superbody1 = document.getElementById("super_body1");
var phone = document.getElementById("phone");
var chip1 =document.getElementById("chip1");
var chip2 =document.getElementById("chip2");
var chip3 =document.getElementById("chip3");
var chip4 =document.getElementById("chip4");
var chip5 =document.getElementById("chip5");
var chip6 =document.getElementById("chip6");
var chip7 =document.getElementById("chip7");
var chip8 =document.getElementById("chip8");
var xuzheng1 = document.getElementById("xuzheng1");
var xuzheng2 = document.getElementById("xuzheng2");
var xuzheng3 = document.getElementById("xuzheng3");
var xuzheng4 = document.getElementById("xuzheng4");
var xuzheng5 = document.getElementById("xuzheng5");
var xuzheng6 = document.getElementById("xuzheng6");
var xuzheng7 = document.getElementById("xuzheng7");
var xuzheng8 = document.getElementById("xuzheng8");
var star6 = document.getElementById("star6");
var star7 = document.getElementById("star7");
var star8 = document.getElementById("star8");
var star9 = document.getElementById("star9");
var star10 = document.getElementById("star10");
var star11 = document.getElementById("star11");
var star12 = document.getElementById("star12");
var star13 = document.getElementById("star13");
var shineword = document.getElementById("shineword");
var up = document.getElementById("up");
var loadingword = document.getElementById("loadingword");
var timemusic = document.getElementById("timemusic");
var timecount1 = document.getElementById("timecount1");
var firstguan = document.getElementById("firstguan");
var kuang = document.getElementById("kuang");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var imgbox = document.getElementById("imgbox");
var bckopacity = document.getElementById("bckopacity");
var gamefail = document.getElementById("gamefail");
var wordfail = document.getElementById("wordfail");
var wenzi1 = document.getElementById("wenzi1");
var wenzi2 = document.getElementById("wenzi2");
var timer1 = setTimeout(function(){
		mainbox.style.backgroundImage = "url(img/word_bg.jpg)";
		loading1.style.display = "none";
		loading2.style.display = "none";
		loading3.style.display = "none";
		star.style.display = "none";
		star1.style.display = "none";
		star2.style.display = "block";
		star4.style.display = "block";
		star3.style.display = "block";
		wordmusic.play();
	},1000);
var i=-1;
var timer2 = setInterval(function(){
	i++;
	liArray[i].style.display ="block"; 
	
	if(i==11){
	wordmusic.pause();
	clearInterval(timer2);
	}
	
},1000);
setTimeout(function(){
	wordall.style.display = "none";
},15000);
    var j=0;
	setInterval(function(){
		j++;
		superbody1.src = "img/super_body"+j+".png";
	0
		if(j>=3){
			j=0;
		}
	},500);
 musicon.onclick = function(){
 	
	musicon.style.display = "none";
	musicclose.style.display = "block";
	backmusic.pause();
    wordmusic.pause();

}
	musicclose.onclick = function(){
	musicon.style.display = "block";
	musicclose.style.display = "none";
	backmusic.play();
    if(i<11){
    	 wordmusic.play();
    }
	}
	setTimeout(function(){
		    star2.style.display = "none";
		    star3.style.display = "none";
		    star4.style.display = "none";
		    star5.style.display = "none";
			phone.style.display="block";
	},21000);
	setTimeout(function(){
		  chip1.style.display = "block";
		  chip2.style.display = "block";
		  chip3.style.display = "block";
		  chip4.style.display = "block";
		  chip5.style.display = "block";
		  chip6.style.display = "block";
		  chip7.style.display = "block";
		  chip8.style.display = "block";
		 
	},24000);
	setTimeout(function(){
	xuzheng1.style.display = "block";
	xuzheng2.style.display = "block";
	xuzheng3.style.display = "block";
	xuzheng4.style.display = "block";
	xuzheng5.style.display = "block";
	xuzheng6.style.display = "block";
	xuzheng7.style.display = "block";
	xuzheng8.style.display = "block";
	 star6.style.display = "block";
		   star7.style.display = "block";
		    star8.style.display = "block";
		     star9.style.display = "block";
		      star10.style.display = "block";
		       star11.style.display = "block";
		        star12.style.display = "block";
		         star13.style.display = "block";
},25500);
	setTimeout(function(){
	phone.style.display = "none";
},26000);
	
	setTimeout(function(){
	chip1.style.display = "none";
	chip2.style.display = "none";
	chip3.style.display = "none";
	chip4.style.display = "none";
	chip5.style.display = "none";
	chip6.style.display = "none";
	chip7.style.display = "none";
	chip8.style.display = "none";
	xuzheng1.style.display = "none";
	xuzheng2.style.display = "none";
	xuzheng3.style.display = "none";
	xuzheng4.style.display = "none";
	xuzheng5.style.display = "none";
	xuzheng6.style.display = "none";
	xuzheng7.style.display = "none";
	xuzheng8.style.display = "none";
	shineword.style.display ="block";
	up.style.display = "block";
},30000);

	shineword.onclick  = function(){
		 star6.style.display = "none";
		 star7.style.display = "none";
		 star8.style.display = "none";
		 star9.style.display = "none";
		 star10.style.display = "none";
		 star11.style.display = "none";
		 star12.style.display = "none";
		 star13.style.display = "none";
		this.style.display = "none";
		 up.style.display = "none";
		  mainbox.style.backgroundImage = "";
		 loadingword.style.display = "block";
		 musicon.style.display = "none";
	
	setInterval(function(){
		 musicclose.style.display = "block";
		 backmusic.pause();
		 mainbox.style.backgroundImage = "url(img/bg.jpg)";
		 loadingword.style.display = "none";
		  timemusic.play();
		 timecount1.style.display = "block";
		 kuang.style.display = "block";
		 imgbox.style.display = "block";
		 firstguan.style.display = "block";
		 pic1.style.display = "block";
		 pic2.style.display = "block";
		 pic3.style.display = "block"; 
		  var count1 = 3000000;
		  
	       var timer3 = setInterval(function(){
	       	 count1-=0.01;
	       	 count1 = count1.toFixed(2);
	       	 timecount1.innerHTML = count1;
	       	 
	       	 
	       	 
	       	 
	       	 if(count1<=0){
	       	 	bckopacity.style.display = "block";
	       	 	gamefail.style.display = "block";
	       	 	wordfail.style.display = "block";
	       	 	wenzi1.style.display = "block";
	       	 	wenzi2.style.display = "block";
	       	 	clearInterval(timer3);
	       	 	
	       	 	
	       	 	
	       	 	
	       	 	
	       	 	
	       	 	
	       	  }
	       	 
	       },10);
           setimg();
           console.log(img2);
           img2.onclick= function(){
           	console.log(44444);
           };

           


         
	     
		
		 
		 
	
		 
		 
		 
		 
		 
		 },12000 );
		  setTimeout(function(){
		 	timemusic.pause();
		 },30000);
	}
	up.onclick = function(){
		 star6.style.display = "none";
		 star7.style.display = "none";
		 star8.style.display = "none";
		 star9.style.display = "none";
		 star10.style.display = "none";
		 star11.style.display = "none";
		 star12.style.display = "none";
		 star13.style.display = "none";
		 shineword.style.display = "none";
		 this.style.display = "none";
		 mainbox.style.backgroundImage = "";
		 loadingword.style.display = "block";
		 musicon.style.display = "none";
		 setTimeout(function(){
		 musicclose.style.display = "block";
		 backmusic.pause();
		 mainbox.style.backgroundImage = "url(img/bg.jpg)";
		 loadingword.style.display = "none";
		 timemusic.play();
		 timecount1.style.display = "block";
		 kuang.style.display = "block";
		 imgbox.style.display = "block";
		 firstguan.style.display = "block";
		 pic1.style.display = "block";
		 pic2.style.display = "block";
		 pic3.style.display = "block";
		  var count1 = 300000000;
	       var timer3 = setInterval(function(){
	       	 count1-=0.01;
	       	 count1 = count1.toFixed(2);
	       	 timecount1.innerHTML = count1;
	       	 if(count1<=0){
	       	 	bckopacity.style.display = "block";
	       	 	gamefail.style.display = "block";
	       	 	wordfail.style.display = "block";
	       	 	wenzi1.style.display = "block";
	       	 	wenzi2.style.display = "block";
	       	 	clearInterval(timer3);
	       	 	
	       	  }
	       	 
	       },10);
	    setimg();
	    console.log(img2);	
img2.onclick=function(){
           	console.log(44444);
           };


//	     document.getElementById("musicon").className = 'musicrotate';
		 },2000);
		 setTimeout(function(){
		 	timemusic.pause();
		 },31500)
	}
	
	var imgnumber =2;
	function setimg(){
			var imgsumnumber = imgnumber*imgnumber;
		    var imgwidth = (imgbox.clientWidth-20*imgnumber)/imgnumber;
		    var random = parseInt(Math.random()*(imgnumber*imgnumber-1));
			for(var i=0;i<imgsumnumber;i++){
				img = document.createElement("div");
				img1 = document.createElement("img");
				img2 = document.createElement("img");
				img1.src = "img/baobei.png";
				img2.src = "img/xuzheng.png/";
				$(img2).addClass("haha");
//				 document.getElementById("musicon").className = 'musicrotate';
				img.style.width = imgwidth+"px";
				img.style.height = imgwidth+"px";
				img.style.marginTop = imgwidth*2%+"px";
				img.style.backgroundImage="url(img/kuang_bg.png)";
	            imgbox.appendChild(img);
	            if(i==random){
	            img.appendChild(img2);
	            }else{
	            	img.appendChild(img1);
	            }
    

           
           
		
	}


		
		}
	
