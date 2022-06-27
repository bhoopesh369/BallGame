var inGame = false;
// var inPlat = false;
var chances = 0;
var score = 0;
var HighscoreBlueBall = 0;

// window.localStorage.setItem(HighscoreBlueBall, 0);

console.log(window.localStorage.getItem(HighscoreBlueBall));


document.addEventListener('keypress',GameMain);
document.addEventListener('click',GameMain);


function chanceSound(){
    var aud = new Audio("sounds/chance.mp3");
    aud.play();
}

function gameOverSond(){
    var aud = new Audio("sounds/gameover.mp3");
    aud.play();
}

function GameMain(){

    document.querySelector(".life").style.display = 'block';  
    document.querySelector("h3").style.display = 'block';  

    if(inGame == true){
        return;
    }
    inGame = true;
   
    document.querySelector('h1').remove();

    let canvas3= document.getElementById('w');
    const context1= canvas3.getContext('2d');
    canvas3.width = window.innerWidth;
    canvas3.height = window.innerHeight;
    
    context1.fillStyle = "#FF5B00";
    
    var width = (window.innerWidth)/25 ;
    
    
    for(let i =1; i<26; i++){
        context1.moveTo(0 + width*(i-1), 0);
        context1.lineTo(width*i, 0);
        context1.lineTo(width/2*(2*i-1), 0.6*(width));
        context1.fill();
        context1.closePath();
    
    }
    
    
    // context1.beginPath();
    // context1.moveTo(80,90);
    // context1.lineTo(190,90);
    // context1.lineTo(190,97);
    // context1.lineTo(80,97);
    // context1.fillStyle = "gray";
    // context1.fill();
    // context1.closePath();
    
    
    // context1.beginPath();
    // context1.rect(440, 200, 120, 8);
    // context1.fill();
    // context1.closePath();



    // var canvas1 = document.getElementById("myCanvas2");
    // var ctx1 = canvas1.getContext("2d");
    // var x1 = 750;
    // var y1 = 350;
    // var dx1 = 2;
    // var dy1 = 2;

    // ctx1.fillStyle = "red";

    // function displayPlatform(X,Y,l,b) {
    //     ctx1.beginPath();
    //     ctx1.rect(x1,y1,120,8);
    //     ctx1.fill();
    //     ctx1.closePath();
    
    
    // }
    
    // function drawPlatform() {
    //     if(y1>=window.innerHeight - 16){
    //         clearInterval(platInter);
    //     }
    //     if(x1>=window.innerWidth - 16){
    //         clearInterval(platInter);
    //     }

    //     ctx1.clearRect(0, 0, canvas.width , canvas.height);
    //    displayPlatform(750,400,120,8);
    //    y1 -= 2;

    // }   
    
    // const platInter = setInterval(drawPlatform, 10);


    var canvas2 = document.getElementById("myCanvas");
    var ctx2 = canvas2.getContext("2d");
    var x = 800;
    var y = 50;
    var dx = 2;
    var dy = 2;
    
    ctx2.fillStyle = "#0095DD";
    
    
    function displayBall() {
        ctx2.beginPath();
        ctx2.arc(x, y, 15, 0, Math.PI*2);
        ctx2.fill();
        ctx2.closePath();
    
    
    }
    
    function drawB() {
        if(y>=window.innerHeight - 16 || y<40){
            
            if(chances<2){
                chanceSound();
            }
            y=90;
            dy=2;
            chances++;
            document.querySelectorAll("span")[3 - chances].style.display = 'none'; 
            
            var temp = 0 + window.localStorage.getItem(HighscoreBlueBall);

            if(score> temp){
                window.localStorage.setItem(HighscoreBlueBall, score);
            }

            if(chances == 3){
                gameOverSond();

                setTimeout(()=>{

                alert("HighScore : " + Math.floor(window.localStorage.getItem(HighscoreBlueBall)+10) + "");      
                location.reload();
              },900);
                
            }
        }
    
        window.onkeydown = function(event) {
            var keyPr = event.keyCode; 
    
            if(keyPr === 39 && x<=window.innerWidth - 16){ 
                x = x+18; 
            }
            else if(keyPr === 37 && x>5){
                x = x-18;
            }
            // else if(keyPr === 38 && y>10) {
            //     y = y-10; 
            // }
            // else if(keyPr === 40 && y<+window.innerHeight){
            //     y = y+10; 
            // }
    
    };
  
      
       ctx2.clearRect(0, 0, canvas.width , canvas.height);
       displayBall();
       //  x += dx;
       y += dy;

       if(dy>0){
        score = score + 0.1;
        document.querySelector("h3").innerHTML = "Score : " + Math.floor(score) ;
       } 
   }
  
    const ballInter = setInterval(drawB, 10);

    var canvas = document.getElementById("canvas");

   var context = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;
console.log(window_width);

canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#ff8";

class Platform {
    constructor(xpos, ypos, radius, speed, color, text, inPlat, length) {

        this.position_x = xpos;
        this.position_y = ypos;

        this.radius = radius;

        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;

        this.text = text;

        this.color = color;

        this.inPlat = inPlat;
        this.length = length;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        // context.fillText(this.text, this.position_x, this.position_y);
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "30px Arial";
        context.lineWidth = 5;
        // context.arc(this.position_x, this.position_y, this.radius, 0, Math.PI * 2);
        context.rect(this.position_x, this.position_y, 4*this.length ,7);
        context.fill();
        context.stroke();
        context.closePath();
    
       

    }

    update() {

        

       
        if(x<(this.position_x + 4*(this.length)) && x>(this.position_x)  && y>(this.position_y -20) && y<(this.position_y)){
            dy = -0.9;
            this.inPlat = true;
        }

        if(this.inPlat){
            if(x>(this.position_x  + 4*(this.length)) || x<(this.position_x)){
                dy = 2;
                
            }
        }
        
        this.draw(context);


        if ( (this.position_x - this.radius) < 0 ) {
            context.clearRect(0,0,canvas.width,canvas.height);
            return;
            
        }

        if ( (this.position_y - this.radius) < 0 ) {
            context.clearRect(0,0,canvas.width,canvas.height);
            return;
        }


        // this.position_x += this.dx;
        this.position_y -= this.dy; 

        
    }
}


let randomNumber = function(min, max) {
  var result = Math.random() * (max - min) * 0.5 + min;
  return result;
};


var all_circles = [];

for (var i = 0; i < 500; i++) {
    platDelay();
}

function platDelay(){

    
    setTimeout(()=>{  
        var radius = 50;
        var random_x = randomNumber(radius, (window_width - 4*radius));
        var random_y = randomNumber(window_height- 1*radius, (window_height - radius));
        var len = 60*(0.5 + Math.random());
      
        // for( var a = 0; a < all_circles.length; a++) {
        //   if ( (getDistance(random_x, random_y, all_circles[a].xpos, all_circles[a].ypos) - radius + all_circles[a].radius < 0) ) {
        //     random_x = randomNumber(radius, (window_width-radius));
        //     random_y = randomNumber(radius, (window_height-radius));
        //   }
        //   a = all_circles.length;
        // }
      
        let myPlatform = new Platform(2*random_x, random_y, radius, 1.5, 'Black', 'A' , false , len);
        all_circles.push(myPlatform);
       },1500*i);
}

let updatePlatform = function() {
    
  requestAnimationFrame(updatePlatform);
  context.clearRect(0, 0, window_width, window_height);

  all_circles.forEach(element => {
    element.update();
  });
};

updatePlatform();
  
}
  
  



  
  
  
  
  
  
  
  
  
  
  // function draw() {
   //     context.beginPath();
   //     // context.arc(x, y, 20, 0, 2 * Math.PI);
   //     context.fillStyle = 'rgba(250,0,0,0.4)';
   //     context.fill();
   
//     x += 2;
//     context.fillStyle = "rgba(34,45,23,0.4)";
//     context.fillRect(0, 0, can.width, can.height);
//     requestAnimationFrame(draw);
//     // context.clearRect(0,0,can.width,can.height);
// }
// draw();


// context.strokeStyle = '#666666';
// context.stroke();
// context.lineWidth = 10;
// context.strokeStyle = '#666666';
// context.stroke();





