
for(var i =0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var value = this.innerHTML;

    makeSound(value);

  });
}

document.addEventListener("keydown",function(event){


makeSound(event.key);

});


function makeSound(value)
{
    runAnimation(value);

  var path = "";
      switch(value)
      {
        case 'w':
        path = "tom-1.mp3";
        break;

        case 'a':
        path = "tom-2.mp3";
        break;

        case 's':
        path = "tom-3.mp3";
        break;

        case 'd':
        path = "tom-4.mp3";
        break;

        case 'j':
        path = "snare.mp3";
        break;

        case 'k':
        path = "crash.mp3";
        break;

        case 'l':
        path = "Big_Thwack_120.mp3";
        break;
      }

      var audio = new Audio(path);
      audio.play();

}

function runAnimation(key)
{
  var currentKey = document.querySelector("."+key);

  currentKey.classList.add("pressed");

  setTimeout(function(){
    currentKey.classList.remove("pressed");
  },150);
}
