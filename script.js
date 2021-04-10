 var images=[
     'im1.jpg',
     'im2.jpg',
     'im3.jpg',
     'im4.jpg',
     'im5.jpg'
    ]

var cpt=0

function change(){
    var img =document.getElementById('img-slider')
    img.setAttribute('src','images/'+images[cpt])
}



function next(){
    cpt++;
    if (cpt>4) cpt=0;
    change()
}
function previous(){
    cpt--;
    if(cpt<0) cpt=4;
    change()
}