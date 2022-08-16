var inGame = false;
// var inPlat = false;
var chances = 0;
var chances1 = 0;
var score = 0;
var score1 = 0;
var HighscoreBlueBall = 0;

var Name = window.prompt("Enter Player 1 name: ");
var Name1 = window.prompt("Enter Player 2 name: ");


console.log(window.localStorage.getItem(HighscoreBlueBall));


document.addEventListener('keypress',GameMain);
document.addEventListener('click',GameMain);

var aud;

function chanceSound(){
    aud = new Audio("sounds/chance.mp3");
    aud.play();
}

function gameOverSond(){
    aud = new Audio("sounds/MultEnd.wav");
    aud.play();
}

function lifeUpSound(){
    aud = new Audio("sounds/lifeup.wav");
    aud.play();
}

function GameMain(){

    document.querySelector(".life").style.display = 'block';  
    document.querySelector(".lifeB1").style.display = 'block';  
    document.querySelector(".sc1").style.display = 'block';  
    document.querySelector(".sc").style.display = 'block';  

    document.querySelector("body").classList.add("body1");


    if(inGame == true){
        return;
    }
    inGame = true;
   
    document.querySelector('h1').remove();

    let canvas3= document.getElementById('w');
    const context1= canvas3.getContext('2d');
    canvas3.width = window.innerWidth;
    canvas3.height = window.innerHeight;
    
    context1.fillStyle = "Black";
    
    var width = (window.innerWidth)/25 ;
    
    
    for(let i =1; i<26; i++){
        context1.moveTo(0 + width*(i-1), 0);
        context1.lineTo(width*i, 0);
        context1.lineTo(width/2*(2*i-1), 0.6*(width));
        context1.fill();
        context1.closePath();
    
    }


    var canvas2 = document.getElementById("myCanvas");
    var ctx2 = canvas2.getContext("2d");
    var x = 1100;
    var y = 50;
    var dx = 0;
    var dy = 1.5;

    var z = 1.37;
    
    ctx2.fillStyle = "rgb(20, 0, 255)";

    
    
    function displayBall(X,Y) {
        ctx2.beginPath();
        ctx2.arc(X, Y, 15, 0, Math.PI*2);
        ctx2.fill();
        ctx2.closePath();
    }


    function checkChance(){
        var temp = 0 + window.localStorage.getItem(HighscoreBlueBall);
            
            if(chances<2){
                document.querySelectorAll("span")[2 - chances].style.display = 'none'; 
                chanceSound();
                dy= z;
                dx = 0;
                y = 160;
                x = window_height;
            }
           
            chances++;
            
            if(chances == 3){
                document.querySelectorAll("span")[0].style.display = 'none'; 
                x = window_height;
                y = 40;
                z = 0;
                dy = 0;
                dy1 = 0;
                dx1 = 0;
                dx = 0;
                gameOverSond();
                
        
               gameOverDisplay("Green");
               return; 
            }
    }

    function checkChance1(){
        var temp = 0 + window.localStorage.getItem(HighscoreBlueBall);
            
            if(chances1<2){
                chanceSound();
                dy1= z;
                dx1 = 0;
                document.querySelectorAll("#b2")[2 - chances1].style.display = 'none'; 
                y1 = 160;
                x1 = window_height;
            }
           
            chances1++;
            
            if(chances1 == 3){
                document.querySelectorAll("#b2")[0].style.display = 'none'; 
                y1 = 40;
                x1 = window_height;
                z = 0;
                dy1 = 0;
                dx1 = 0;
                dy = 0;
                dx = 0;
                gameOverSond();
                
         
                    // if(score> temp){
                    //     window.localStorage.setItem(HighscoreBlueBall, score);
                    // }
        
                gameOverDisplay("Blue");
                return 5;
            }
    }


    
    function drawB() {
        if(y>=window.innerHeight - 16 || y<40){

            checkChance();
        }
    
        if(x>window.innerWidth - 16 || x<16){
            dx = -dx;
        }
       ctx2.clearRect(0, 0, canvas.width , canvas.height);
       displayBall(x,y);
       x += dx;
       y += dy;

       if(dy>0){
        score = score + 0.1;
        document.querySelector(".sc1").innerHTML = "Score : " + Math.floor(score) ;
       } 

   }
  

    var canvas1 = document.getElementById("myCanvas1");
    var ctx1 = canvas1.getContext("2d");

    ctx1.fillStyle = "rgb(9, 180, 9)";

    var x1 = 400;
    var y1 = 50;
    var dx1 = 0;
    var dy1 = 1.5;
      

    function displayBall1(X,Y) {
        ctx1.beginPath();
        ctx1.arc(X, Y, 15, 0, Math.PI*2);
        ctx1.fill();
        ctx1.closePath();
    }

    function drawB2() {
        if(y1>=window.innerHeight - 16 || y1<40){
    
            checkChance1();
        }
        if(dy1>0){
            score1 = score1 + 0.1;
            document.querySelector(".sc").innerHTML = "Score : " + Math.floor(score1) ;
        } 
    
        if(x1>window.innerWidth - 16 || x1<16){
            dx1 = -dx1;
        }

        window.onkeydown = function(event) {
            var keyPr1 = event.keyCode; 
    
            if(keyPr1 === 68 && x1<=window.innerWidth - 16){ 
                dx1 = 2.0;
            }
            
            if(keyPr1 === 65 && x1>5){
                dx1 = -2.0;
            }

            if(keyPr1 === 39 && x<=window.innerWidth - 16){ 
                dx = 2.0;
            }

            if(keyPr1 === 37 && x>5){
                // x = x-18;
                dx = -2.0;
            }

            
    };
    
       ctx1.clearRect(0, 0, canvas.width , canvas.height);
       displayBall1(x1,y1);
       x1 += dx1;
       y1 += dy1;

    //    if(dy1>0){
    //     score = score + 0.1;
    //     document.querySelector(".sc1").innerHTML = "Score : " + Math.floor(score) ;
    //    } 
   }


   const ballInter1 = setInterval(drawB2, 10);
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
    constructor(xpos, ypos, radius, speed, color, text, inPlat, inPlatB2, length , text1 , weak, spiked) {

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
        
        this.spiked = spiked;

        this.inPlat = inPlat;
        this.inPlatB2 = inPlatB2;

        this.length = length;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "30px Arial";
        context.lineWidth = 5;

        //Rotating Platforms

        // context.translate(this.position_x + 2 * this.length , this.position_y + 7.5 );
        // context.rotate(Math.PI / 2);
        // context.translate(-(this.position_x + 2 * this.length) , -(this.position_y + 7.5) );
        // context.arc(this.position_x, this.position_y, this.radius, 0, Math.PI * 2);
        
        context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15); 
        if(this.text != '💓'){
            context.fillText(this.text1, this.position_x + 2*(this.length), this.position_y - 15); 
            
        }
        if(this.text1 != '⏳' && this.text != '💓'){
            context.fillText(this.spiked, this.position_x + 2*(this.length), this.position_y - 15); 
        }

        
        context.rect(this.position_x, this.position_y, 4*this.length ,7);
        context.fill();
        context.stroke();
        context.closePath();

    }


    update() {

         // Game Speed up with progress

        if(score>100){
            z = 1.45;
        }
        if(score>150){
            z = 1.55;
        }
        if(score>250){
            z = 1.65;
        }
        if(score>350){
            z = 1.75;
        }
        if(score>450){
            z = 1.85;
        }
        if(score>550){
            z = 1.95;
        }

        if(score>650){
            z = 2;
        }

        //  Life Upgrade

        //Ball 1
        if(x<(this.position_x + 2*(this.length) + 22.5) && x>(this.position_x + this.length +5) && (y > (this.position_y - 40)) && (y < this.position_y) && this.text == '💓'){
            this.text = "";
            // context.font = "12px Arial";
            // context.fillText(this.text, this.position_x + 2*(this.length), this.position_y - 15);
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            document.querySelectorAll("span")[3 - chances].style.display = 'inline'; 
            chances--;
        }
        //Ball2
        if(x1<(this.position_x + 2*(this.length) + 22.5) && x1>(this.position_x + this.length +5) && (y1 > (this.position_y - 40)) && (y1 < this.position_y) && this.text == '💓'){
            this.text = "";
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            document.querySelectorAll("#b2")[3 - chances1].style.display = 'inline'; 
            chances1--;
        }


        // Game Slowdown Boost

        //Ball1
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
        //Ball2
        if(x1<(this.position_x + 2*(this.length) + 22.5) && x1>(this.position_x + this.length +5) && (y1 > (this.position_y - 40)) && (y1 < this.position_y) && this.text1 == '⏳'){
            this.text1 = "";
            lifeUpSound();
            context.clearRect(this.position_x,this.position_y-20, this.position_x+20, this.position_y );
            this.dy = 1;
            dy1 = 1;
            z = 1;
            setTimeout(()=>{
               this.dy = 1.5;
               dy1 = 1.5;
               z = 1.5;
            },5000);

        }

        //Spiked Platforms
        //Ball1
        if(x>(this.position_x) && x<(this.position_x + 4*(this.length)) && y>(this.position_y - 40) && (y < this.position_y) && this.spiked != ''){
           chanceSound();
           y = 0;
           x = this.position_x + 4* this.length + 100;
           checkChance();
        }
        //Ball2
        if(x1>(this.position_x) && x1<(this.position_x + 4*(this.length)) && y1>(this.position_y - 40) && (y1 < this.position_y) && this.spiked != ''){
            chanceSound();
            y1 = 0;
            x1 = this.position_x + 4* this.length + 100;
            checkChance1();
 
         }

        //Collision

        if(x<(this.position_x + 4*(this.length)) && x>(this.position_x)  && y>(this.position_y -18) && y<(this.position_y + 25) ){
            dy = -2*z;
            if(dx>0)
              dx = 1.5;
            if(dx<0)
              dx = -1.5;
            this.inPlat = true;
        }
        
        if(x1<(this.position_x + 4*(this.length)) && x1>(this.position_x)  && y1>(this.position_y -18) && y1<(this.position_y + 25) ){
            dy1 = -2*z;
            if(dx1>0)
              dx1 = 1.5;
            if(dx1<0) 
              dx1 = -1.5;
            this.inPlatB2 = true;
        }
        

        if(this.inPlat){
            if(x>(this.position_x  + 4*(this.length)) || x<(this.position_x) || y<this.position_y-45){
                dy = z;
                this.inPlat = false;
            }
            if(x>(this.position_x  + 4*(this.length)) || x<(this.position_x) || y>this.position_y + 16){
                if(dx>0)
                 dx = 2.0;
                if(dx<0)
                 dx = -2.0;
            }
        }

        if(this.inPlatB2){
            if(x1>(this.position_x  + 4*(this.length)) || x1<(this.position_x) || y1<this.position_y-45){
                dy1 = z;
                this.inPlatB2 = false;
            }
            if(x1>(this.position_x  + 4*(this.length)) || x1<(this.position_x) || y1>this.position_y + 16){
                if(dx1>0)
                 dx1 = 2.0;
                if(dx1<0) 
                 dx1 = -2.0;
            }
        }

        if(this.weak == 1){
        //   this.color = "red";  
          setTimeout(()=>{
            // context.clearRect(0,0,canvas.width,canvas.height);
            this.length = 0;
            this.color =  "rgb(130, 225, 255)";
            this.text = "";
            this.text1 = "";
            this.spiked = "";
            // all_platforms.pop(this);
            return;
          },(Math.random()*5 + 1) * 3500);
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
        var len = 60*(0.7 + Math.random());

        var col = 'Black';

        var rando = Math.random();

        //Health
        var pickup = "";
        if(rando > 0.90 && chances > 0){
           pickup = '💓';
        }

        //Slowdown
        var rando1 = Math.random();
        var pickup1 = "";
        if(rando1 > 0.95 && score > 50){
           pickup1 = '⏳';
        }

        //Spiked Platform
        var rando2 = Math.random();
        var spiked = "";
        if(rando2 > 0.90 && score > 30  && pickup1 == '' && pickup == ''){
           let spike1 = '🔺';
           var multi = Math.floor(len/10 + 0.45);
           spiked = spike1.repeat(multi);
        }

        // Disappearing Platforms
      
        var wp = Math.random();
        var wpa = 0;
        if(wp>0.85 && pickup1 == '' && pickup == '' && spiked == ''){
            wpa = 1;
            col = 'Red';
        }

        // var sp = Math.random();
        // var spa = 0;
        // if(sp>0.5){
        //     spa = 1;
        // }

        let myPlatform = new Platform(2*random_x, random_y, radius, z, col , pickup , false , false, len, pickup1, wpa, spiked);
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
  
function gameOverDisplay(bname){
    const Body = document.querySelector("body");
    Body.innerHTML="";
    Body.innerHTML=`
    <div class="scorecard">
        <div class="header">
            Game Over
        </div>
        <div class="stats">
            <p>Hi ${Name} and ${Name1}</p>
            <p id="wintag">${bname} ball wins!</p>
            <p>Blue Score : ${Math.floor(score + (3-chances)*30)}</p>
            <p>Green Score: ${Math.floor(score1 + (3-chances1)*30)}</p>
            <p>Good Game🙃</p>
            <button id="restart" class="btn">Play Again</button>
        </div>
    </div>
    `;
    const gameButton= document.getElementById('restart');
    gameButton.addEventListener('click',()=>{
       location.reload();
    });
} 


}
  
  
