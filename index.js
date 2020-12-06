



var img=[];

img[0]=document.getElementById('image-1');
img[1]=document.getElementById('image-2');
img[2]=document.getElementById('image-3');
img[3]=document.getElementById('image-4');
img[4]=document.getElementById('image-5');
img[5]=document.getElementById('image-6');
img[6]=document.getElementById('image-7');
img[7]=document.getElementById('image-8');
img[8]=document.getElementById('image-9');


var link =[];
link[0]=img[0].src;
link[1]=img[1].src;
link[2]=img[2].src;
link[3]=img[3].src;
link[4]=img[4].src;
link[5]=img[5].src;
link[6]=img[6].src;
link[7]=img[7].src;
link[8]=img[8].src;


var img1=[];
img1[0]=document.getElementById('p-image-1');
img1[1]=document.getElementById('p-image-2');
img1[2]=document.getElementById('p-image-3');
img1[3]=document.getElementById('p-image-4');
img1[4]=document.getElementById('p-image-5');
img1[5]=document.getElementById('p-image-6');
img1[6]=document.getElementById('p-image-7');
img1[7]=document.getElementById('p-image-8');
img1[8]=document.getElementById('p-image-9');
img1[9]=document.getElementById('p-image-10');
img1[10]=document.getElementById('p-image-11');
img1[11]=document.getElementById('p-image-12');


var link1=[];
link1[0]=img1[0].src;
link1[1]=img1[1].src;
link1[2]=img1[2].src;
link1[3]=img1[3].src;
link1[4]=img1[4].src;
link1[5]=img1[5].src;
link1[6]=img1[6].src;
link1[7]=img1[7].src;
link1[8]=img1[8].src;
link1[9]=img1[9].src;
link1[10]=img1[10].src;
link1[11]=img1[11].src;



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}







function makerandon(){

	shuffle(link);

	for(let i=0;i<9;i++)
		{
			img[i].src=link[i];
		}
	
}


function makerandon2(){
	shuffle(link1);

	for(let i=0;i<12;i++)
	{
		img1[i].src=link1[i];
	}
}





var img2=[];
img2[0]=document.getElementById('c-image-1');
img2[1]=document.getElementById('c-image-2');
img2[2]=document.getElementById('c-image-3');
img2[3]=document.getElementById('c-image-4');
img2[4]=document.getElementById('c-image-5');
img2[5]=document.getElementById('c-image-6');
img2[6]=document.getElementById('c-image-7');
img2[7]=document.getElementById('c-image-8');




var link2=[];
link2[0]=img2[0].src;
link2[1]=img2[1].src;
link2[2]=img2[2].src;
link2[3]=img2[3].src;
link2[4]=img2[4].src;
link2[5]=img2[5].src;
link2[6]=img2[6].src;
link2[7]=img2[7].src;
















function makerandon3(){
    shuffle(link2);

    for(let i=0;i<8;i++)
    {
        img2[i].src=link2[i];
    }
}










































