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

function lifeUpSound(){
    var aud = new Audio("sounds/lifeup.wav");
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
    var dy = 1.5;

    var z = 1.5;
    
    ctx2.fillStyle = "#0095DD";
    
    
    function displayBall() {
        ctx2.beginPath();
        ctx2.arc(x, y, 15, 0, Math.PI*2);
        ctx2.fill();
        ctx2.closePath();
    
    
    }
    
    function drawB() {
        if(y>=window.innerHeight - 16 || y<40){

            var temp = 0 + window.localStorage.getItem(HighscoreBlueBall);
            
            if(chances<2){
                chanceSound();
                dy= z;
                document.querySelectorAll("span")[2 - chances].style.display = 'none'; 
                y = 130;
                x = window_height;
            }
           
            chances++;
            
            if(chances == 3){
                y = 40;
                z = 0;
                dy = 0;
                gameOverSond();
                
         
                    if(score> temp){
                        window.localStorage.setItem(HighscoreBlueBall, score);
                    }
        
              setTimeout(()=>{ 
                alert("HighScore : " + Math.floor(window.localStorage.getItem(HighscoreBlueBall)+10) + "");
                location.reload();
              },200);
                
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
    constructor(xpos, ypos, radius, speed, color, text, inPlat, length , text1 , weak) {

        this.position_x = xpos;
        this.position_y = ypos;

        this.radius = radius;

        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;

        this.text = text;
        this.text1 = text1;

        this.color = color;

        this.weak = weak;
        // this.spike = spike;

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
        if(this.text != '💓'){
            context.fillText(this.text1, this.position_x + 2*(this.length), this.position_y - 15); 
        }


        context.rect(this.position_x, this.position_y, 4*this.length ,7);
        context.fill();
        context.stroke();
        context.closePath();

    
    }


    update() {


        //  Life Upgrade

        if(x<(this.position_x + 2*(this.length) + 22.5) && x>(this.position_x + this.length +5) && (y > (this.position_y - 40)) && (y < this.position_y) && this.text == '💓'){
            this.text = "";
            // context.font = "12px Arial";
            // context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15);
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            document.querySelectorAll("span")[3 - chances].style.display = 'inline'; 
            chances--;

        }


        // Game Slowdown Boost

        if(x<(this.position_x + 2*(this.length) + 22.5) && x>(this.position_x + this.length +5) && (y > (this.position_y - 40)) && (y < this.position_y) && this.text1 == '⏳'){
            this.text1 = "";
            // context.font = "12px Arial";
            // context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15);
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            this.dy = 1;
            dy = 1;
            z = 1;
            setTimeout(()=>{
               this.dy = 1.5;
               dy = 1.5;
               z = 1.5;
            },5000);

        }

        if(x<(this.position_x + 4*(this.length)) && x>(this.position_x)  && y>(this.position_y -18) && y<(this.position_y + 25) ){
            dy = -2*z;
            this.inPlat = true;
        }
        

        if(this.inPlat){
            if(x>(this.position_x  + 4*(this.length)) || x<(this.position_x) || y<this.position_y-45){
                dy = z;
                this.inPlat = false;
            }
        }

        if(this.weak == 1){
        //   this.color = "red";  
          setTimeout(()=>{
            // context.clearRect(0,0,canvas.width,canvas.height);
            this.length = 0;
            this.color = "#ff8";
            this.text = "";
            this.text1 = "";
            // all_platforms.pop(this);
            return;
          },(Math.random() + 0.5) * 1500);
        }      
    
        // this.inPlat = false;
        this.draw(context);

                 //Disappearing Platforms

               
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

        var rando1 = Math.random();
        var pickup1 = "";
        if(rando1 > 0.94 && score > 50){
           pickup1 = '⏳';
        }
      
        var wp = Math.random();
        var wpa = 0;
        if(wp>0.81){
            wpa = 1;
        }

        // var sp = Math.random();
        // var spa = 0;
        // if(sp>0.5){
        //     spa = 1;
        // }


        let myPlatform = new Platform(2*random_x, random_y, radius, z, 'Black', pickup , false , len, pickup1, wpa);
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
  
}
  
  
