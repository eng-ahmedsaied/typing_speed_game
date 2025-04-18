const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];
  
  // Setting Levels
  const lvls = {
    "Easy": 5,
    "Normal": 3, //seconds number
    "Hard": 2
  };
  
  // Default Level
  let defaultLevelName = "Normal"; // Change Level From Here
  let defaultLevelSeconds = lvls[defaultLevelName];
  
  // Catch Selectors
  let startButton = document.querySelector(".start");
  let lvlNameSpan = document.querySelector(".message .lvl");
  let secondsSpan = document.querySelector(".message .seconds");
  let theWord = document.querySelector(".the-word");
  let upcomingWords = document.querySelector(".upcoming-words");
  let input = document.querySelector(".input");
  let timeLeftSpan = document.querySelector(".time span");
  let scoreGot = document.querySelector(".score .got");
  let scoreTotal = document.querySelector(".score .total");
  let finishMessage = document.querySelector(".finish");


  lvlNameSpan.innerHTML = defaultLevelName;
  secondsSpan.innerHTML = defaultLevelSeconds;
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  scoreTotal.innerHTML = words.length;


  input.onpaste = function () {
    return false;
  }

  startButton.onclick=function(){
    this.remove();
    input.focus();

    genWords();
  }


  function genWords(){

    let randomWord =words[Math.floor(Math.random()*words.length)];

     // Get Word Index
     let wordIndex=words.indexOf(randomWord);
    //شيل الرقم اللي طلع من الاراي
     words.splice(wordIndex,1);

    // Show The Random Word
    theWord.innerHTML=randomWord;

    upcomingWords.innerHTML = '';

    for (let i = 0; i < words.length; i++) {
        
     // Create Div Element
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);

    }
    startPlay();
  }


  function startPlay(){

timeLeftSpan.innerHTML = defaultLevelSeconds;

let start =setInterval(() => {

timeLeftSpan.innerHTML--;

if(timeLeftSpan.innerHTML==="0"){

    clearInterval(start);

    if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){

    input.value='';

    scoreGot.innerHTML++;

    if (words.length > 0) {

        genWords();
        
    }else{
        let span = document.createElement("span");
        span.className = 'good';
        let spanText = document.createTextNode("Congratz");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
        // Remove Upcoming Words Box
        upcomingWords.remove();
    }
    }else{

        let span = document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
    }
}
    
}, 1000);
  }