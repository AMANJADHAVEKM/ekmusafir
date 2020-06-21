$(document).ready(function(){
$.ajax({
    type: "Get",
    url: "https://amanjadhavekm.github.io/ekmusafir/AJ.json",
    dataType: "json",
    success: function(data) {
    console.log(data)

for(var i=0;i<data.length;i++){
   $('#ap').append(`

<div class="p-4 t md:h-80 md:w-1/2  w3-animate-zoom   w3-round-xlarge   ">
 <div class="   v bg-gray-800 px-6 pt-16 pb-20 w3-card-4  rounded-lg overflow-hidden text-center relative">
<i class="fas fa-quote-left"></i>&nbsp;
    <label  class="copy">${data[i].name}</label>
  &nbsp;<i class="fas fa-quote-right"></i>
  <i  class="fas w3-hover-text-green cop  w3-large  l w3-display-bottomright fa-copy"></i>
  </div>
   </div>


 `);

   }
   $(".cop").click(function() {
   
   let ClickC = $(".v").text();
    $('#myvalue').val(ClickC);
     copyToClipboard();
    
   $(".toast").toggleClass("w3-hide");
   setTimeout(function(){
    $(".toast").toggleClass("w3-animat-zoom , w3-hide");
    }, 1000);


   });

    },
    error: function(){
        alert("no data found");
    }
    
});


$(".cop").click(function() {

let ClickC = $(".v").text();
 $('#myvalue').val(ClickC);
  copyToClipboard();
 
$(".toast").toggleClass("w3-hide");
setTimeout(function(){
 $(".toast").toggleClass("w3-animat-zoom , w3-hide");
 }, 1000);


});

$(".what").click(function(){
document.location.href =  "whatsapp://send?text=https://ekmusafir005.blogspot.com/"
});

function copyToClipboard() {

let textBox = document.getElementById("myvalue");
textBox.select();
  navigator.vibrate([50]);
document.execCommand("copy");
}

    });
