/* ================================================================ 
This copyright notice must be untouched at all times.

The original version of this script and the associated (x)html
is available at http://www.stunicholls/gallery/left_right_click.html
Copyright (c) 2005-2007 Stu Nicholls. All rights reserved.
This script and the associated (x)html may be modified in any 
way to fit your requirements.
=================================================================== */


clickMenu = function(gallery) 
	{
	var getImg = document.getElementById("gallery").getElementsByTagName("IMG");
	var getLi = document.getElementById("gallery").getElementsByTagName("LI");

	for (var i=0; i<getImg.length; i++) {
			getImg[i].onclick=function() {
			if ((this.className.indexOf('left'))!=-1) {
				for (var x=getLi.length-1; x>0; x--) {
					if ((getLi[x].className.indexOf('chosen'))!=-1)	{
						getLi[x].className=getLi[x].className.replace("chosen", "");
						x--;
						if (x>-1) {
							getLi[x].className+=" chosen";
								if (x>-1 && x<getLi.length-7){
								getLi[x].className=getLi[x].className.replace("hide", "");
									if ((getLi[x+7].className.indexOf('hide'))==-1)
									{
										getLi[x+7].className+=" hide";
									}
								}
							}
						}
					}
				}

			if ((this.className.indexOf('right'))!=-1) {
				for (var x=0; x<getLi.length-1; x++) {
					if ((getLi[x].className.indexOf('chosen'))!=-1)	{
						getLi[x].className=getLi[x].className.replace("chosen", "");
						x++;
						if (x<getLi.length) {
							getLi[x].className+=" chosen";
								if (x>6 && x<getLi.length) {
								getLi[x].className=getLi[x].className.replace("hide", "");
									if ((getLi[x-7].className.indexOf('hide'))==-1)
									{
										getLi[x-7].className+=" hide";
									}
								}
							}
						}
					}
				}
			}
		}


		for (var i=0; i<getLi.length; i++) {
			getLi[i].onclick=function() {
				for (var x=0; x<getLi.length; x++) {
					if ((getLi[x].className.indexOf('chosen'))!=-1)	{
						getLi[x].className=getLi[x].className.replace("chosen", "");
					}
				}
			this.className+=" chosen";		
			}
		}
	}
