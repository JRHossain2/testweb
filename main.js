/*      Get Orientation Change Info      */
/*
window.addEventListener("orientationchange",function(e){
  console.log(e.target.screen.orientation);
  console.log("orientation angle = " + e.target.screen.orientation.angle);
});
*/





//          All Functions    [start]




/*  F_1 : for auto type

autoType(
          container to add text,
          text to type,
          type speed
        );
*/

class autoType {
  
  
  constructor(container, text, speed) {
    this.container = container;
    this.text = text;
    this.givenSpeed = speed;
    this.onSpaceSpeed = this.givenSpeed * 3;
    this.typeSpeed = this.givenSpeed;
    this.print = '';
    this.type();
  }
  
  type() {
    
    const fullTxt = this.text;
    
    this.print = fullTxt.substring(0, this.print.length + 1);
    this.container.innerHTML = this.print;
    
    
    if(fullTxt.substring(this.print.length,this.print.length + 1) == ' '){
      this.typeSpeed = this.onSpaceSpeed;
    }
    else{
      this.typeSpeed = this. givenSpeed;
    }
    
    
    if(this.print != fullTxt){
      setTimeout(() => this.type(), this.typeSpeed);
    }
    
  }
  
  
}


/*  F_2 : for create arrows (L-type) & span for auto writing

addArrow(parent of the arrow);
*/

function addArrow(Parent){
  
  let div_1 = document.createElement('div');
  let text = document.createTextNode('➥');
  div_1.appendChild(text);
  div_1.classList.add('arrow_downRight');
  Parent.appendChild(div_1);
  
  let div_2 = document.createElement('div');
  div_2.classList.add('animated_text_2');
  Parent.appendChild(div_2);
  
}


/*  F_3 : for counting the time of text animation

textAnimationTime(target text,typing speed per letter);
*/

function textAnimationTime(text,speed){
  
  let spaceSpeed = speed * 3,
  total_time = 0;
  
  for(let x in text){
    if(text[x] != ' '){ total_time += speed; }
    else{ total_time += spaceSpeed; }
  }
  
  return total_time;
  
}




//          All Functions    [end]





//  Initialising
//document.addEventListener('DOMContentLoaded', init);
window.onload = init;

function init() {


  //1St Line Type
  let parent_content = document.getElementsByClassName('animated_text_box_2')[0],
  txtElement = document.getElementsByClassName('animated_text_1')[0],
  text = `Hello ! I'm JR Hossain`,
  speed = 120,
  time_delay = [0,0,0],
  forThis_delay = 0;
  
  new autoType(txtElement,text,speed);

  
  //2nd Line Type
  setTimeout(() => addArrow(parent_content),3600 + 300);
  setTimeout(() => { 
    txtElement = document.getElementsByClassName('animated_text_2')[0];
    text = `A life time student`;
    speed = 120;
    
    new autoType(txtElement,text,speed);

  },3600 + 800);
  
  
  //3rd Line Type
  setTimeout(() => addArrow(parent_content),7700 + 300);
  setTimeout(() => {
    txtElement = document.getElementsByClassName('animated_text_2')[1];
    text = `A web developer`;
    speed = 120;
    
    new autoType(txtElement, text, speed);

  }, 7700 + 800);
  
  
  //4th Line Type
  setTimeout(() => addArrow(parent_content),11080 + 300);
  setTimeout(() => {
    txtElement = document.getElementsByClassName('animated_text_2')[2];
    text = `And a UX / UI designer`;
    speed = 120;
    
    new autoType(txtElement, text, speed);
  }, 11080 + 800);
  
  
}