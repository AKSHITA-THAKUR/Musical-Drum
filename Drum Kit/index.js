var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML); 

    buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound (key) {
    
    switch (key) {
        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "r":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
          case "m":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
          case "f":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
          case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
          case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
          case "t":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        default: console.log(buttonInnerHTML);
  
      }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100);
}