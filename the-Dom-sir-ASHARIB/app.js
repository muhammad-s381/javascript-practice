// var newpera=document.createElement('p')
// newpera.innerText='this is my pera '
// newpera.style.backgroundColor='red'
// document.body.appendChild(newpera)
// console.log(newpera)

// let arr=['img/saleem.jpg' , 'img/ahmed.jpg' , 'img/ali.jpg' , 'img/saad.jpg'];

// var slider=document.getElementById('box-img');

// var i=0;
// setInterval(function(){
//     i++
//     if(index==arr.length){
//         index=0;

//     } 
//     slider.src=arr[index]
        
// // }, 1500);
// var mainDiv = document.getElementById('main');
//  let colors=['red', 'blue', 'yellow', 'green', 'white', 'black'];
//  let boxes = [];

// for (let i = 1; i <=50; i++) {
//     var newBox=document.createElement('div');
//     newBox.innerText='this is my box from my class'+i;
//      newBox.className = 'box';
//     var rndmIndex = Math.floor(Math.random() * colors.length);  /// random index for colors
//     newBox.style.backgroundColor = colors[rndmIndex];
//     mainDiv.appendChild(newBox);
//     boxes.push(newBox);
// }
// console.table(boxes) // it shows the array of boxes in a table formate in console

// var nam = "my name is muhammad"
// var newPera=document.getElementByTag('div').innerText= nam


// console.log(newPera)
// var nam = 


let arr = [
    'img/saleem.jpg',
    'img/ahmed.jpg',
    'img/ali.jpg',
    'img/saad.jpg'
];

var slider = document.getElementById('box-img');

var index = 0;

function changeImage(direction) {

    index += direction;

    if (index >= arr.length) {
        index = 0;
    }

    if (index < 0) {
        index = arr.length - 1;
    }

    slider.src = arr[index];
}



document.write("<br/>")
function textShow() {
var myText=document.getElementById('you').value;
 document.getElementById('myBoxses').innerText = myText;

    
}


// var myPera=document.createElement('p');
// myPera.innerText='this is muhammad saleem '
// myPera.style.backgroundColor='red'
// myPera.style.size='20px'
// document.body.appendChild(myPera)
