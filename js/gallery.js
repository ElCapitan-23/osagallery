

/*function upDate(previewPic){
 
    document.getElementById('image').style.backgroundImage = "url('"  +previewPic.src+  "')";

    document.getElementById('image').innerHTML = previewPic.alt ;

    
    
    
    
  
	}

	function unDo(){
   
    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById('image').innerHTML = "Hover over an image below to display here" ;

	}*/

   /*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
  
    // document.getElementById('image').style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";

    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').innerHTML = previewPic.alt;
    
  
  }
  
  function unDo() {
    /* In this function you should 
      1) Update the url for the background image of the div with the id = "image" 
      back to the orginal-image.  You can use the css code to see what that original URL was
      
      2) Change the text  of the div with the id = "image" 
      back to the original text.  You can use the html code to see what that original text was
      */
  
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";
  
  }

 
  /*function myFunction(x) {
     document.getElementById('image').addEventListener("focus", myFunction);
     x.style.image = upDate;
     
  }

    function myFunction2(y) {
  document.getElementById('image').addEventListener("blur", myFunction2);
  y.style.image = unDo;
      
  }*/

 

function myFunction(previewPic) {
 document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
    document.getElementById('image').innerHTML = previewPic.alt; 
}

function myFunction2() {
document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')";   
}

  
function loopImages(){
    /*options = ["bacon_in_the_woods.png", "bacon_near_the_fort.png", "hollow_tree.png", "lake_view.JPG", "bend_in_the_road.png","BaconGallupPark.jpg"]*/
    currentImages = document.querySelectorAll(".preview")
    for (var i = 0; i < currentImages.length; i++) { 
        console.log  ("Image"+i)
        /*randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        currentImages[i].src= randomImg */
        currentImages[i].setAttribute("tabindex","0")
    }
}