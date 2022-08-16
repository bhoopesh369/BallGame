var inGame = false;
// var inPlat = false;
var chances = 0;
var score = 0;
var HighscoreBlueBall = 0;

var Name = window.prompt("Enter your name: ");


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

function lifeUpSound(){
    var aud = new Audio("sounds/lifeup.wav");
    aud.play();
}



function GameMain(){

    document.querySelector(".life").style.display = 'block';  
    document.querySelector("h3").style.display = 'block'; 
    document.querySelector("body").classList.add("body1");
    // document.querySelector("body").classList.remove("blur");


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
    var dx = 0;
    var dy = 3;
    
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
            y=150;
            dy=1.5;
            chances++;
            document.querySelectorAll("span")[3 - chances].style.display = 'none'; 
            
            var temp = 0 + window.localStorage.getItem(HighscoreBlueBall);

            
            if(chances == 3){
                gameOverSond();
                dy=0;

                    if(score> temp){
                        window.localStorage.setItem(HighscoreBlueBall, score);
                    }
        
                 gameOverDisplay();   
               
            }
        }

            document.addEventListener("keydown",function(event){
            var keyPr = event.key; 
    
            if(keyPr == "ArrowRight" && x<=window.innerWidth - 16){ 
                
                 dx = 5;
                 dy = 1;

            }
            else if(keyPr == "ArrowLeft" && x>5){

                dx = -5;
                dy = 1; 
    
            }
            // else if(keyPr === 38 && y>10) {
            //     y = y-10; 
            // }
            // else if(keyPr === 40 && y<+window.innerHeight){
            //     y = y+10; 
            // }
    
    });

    document.addEventListener("keyup",function(event){
        var keyPr = event.key; 

        if(keyPr == "ArrowRight" && x<=window.innerWidth - 16){
            dx = 0;
            dy = 3;
        }
        else if(keyPr == "ArrowLeft" && x>5){
            dx = 0;
            dy = 3;
        }

    });
  
      
       ctx2.clearRect(0, 0, canvas.width , canvas.height);
       displayBall();
        x += dx;
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
canvas.style.background = "";

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
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "30px Arial";
        context.lineWidth = 5;
        // context.arc(this.position_x, this.position_y, this.radius, 0, Math.PI * 2);
        
        context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15); 
        
        context.rect(this.position_x, this.position_y, 4*this.length ,7);
        context.fill();
        context.stroke();
        context.closePath();
    
       

    }

    update() {
        
        //  
        if(x<(this.position_x + 2*(this.length) + 22.5) && x>(this.position_x + this.length +5) && (y > (this.position_y - 40)) && (y < this.position_y) && this.text == '💓'){
            this.text = "";
            // context.font = "12px Arial";
            // context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15);
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            document.querySelectorAll("span")[3 - chances].style.display = 'inline'; 
            chances--;

        }

        if(x<(this.position_x + 4*(this.length)) && x>(this.position_x)  && y>(this.position_y -18) && y<(this.position_y + 25) ){
            dy = -3;
            this.inPlat = true;
        }
        

        if(this.inPlat){
            if(x>(this.position_x  + 4*(this.length)) || x<(this.position_x) || y<this.position_y-48){
                dy = 1.5;
                this.inPlat = false;
            }
        }
        // this.inPlat = false;
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


var all_platforms = [];

for (var i = 0; i < 500; i++) {
    platDelay();
}

function platDelay(){

    
    setTimeout(()=>{  
        var radius = 50;
        var random_x = randomNumber(radius, (window_width - 4*radius));
        var random_y = randomNumber(window_height- 1*radius, (window_height - radius));
        var len = 60*(0.5 + Math.random());

        var rando = Math.random();

        var pickup = "";
        if(rando > 0.95 && chances > 0){
           pickup = '💓';
        }
      
        let myPlatform = new Platform(2*random_x, random_y, radius, 1.5, 'Black', pickup , false , len);
        all_platforms.push(myPlatform);
       },1500*i);
}

let updatePlatform = function() {
    
  requestAnimationFrame(updatePlatform);
  context.clearRect(0, 0, window_width, window_height);

  all_platforms.forEach(element => {
    element.update();
  });
};

updatePlatform();

function gameOverDisplay(){
    const Body = document.querySelector("body");
    Body.innerHTML="";
    Body.innerHTML=`
    <div class="scorecard">
        <div class="header">
            Game Over
        </div>
        <div class="stats">
            <p>Hi ${Name}</p>
            <p>YourScore : ${Math.floor(score)}</p>
            <p>HighScore : ${Math.floor(window.localStorage.getItem(HighscoreBlueBall)+1)}</p>
            <p>Better luck next time🙃</p>
            <button id="restart" class="btn">Play Again</button>
        </div>
    </div>
    `;
    // Body.classList.add("blur");

    const gameButton= document.getElementById('restart');
    gameButton.addEventListener('click',()=>{
       location.reload();
    });
} 
  
}

  



