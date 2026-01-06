window.onload = function() {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
};

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


const observer = new IntersectionObserver((entries) => {
 
  entries.forEach((entry) => {
  
    if(entry.isIntersecting){
      
      entry.target.classList.add('show');
      setTimeout(typeWrite, 2500);
    }
  })
})


const hidden = document.querySelectorAll('.hid');

hidden.forEach((el) => observer.observe(el));



drawOnScroll = () => {
  
  var path = document.getElementById("myPath");
  var length = path.getTotalLength();

  
  path.style.strokeDasharray = length;
 
  path.style.strokeDashoffset = length;

 
  window.addEventListener("scroll", fillOnScroll);

  function fillOnScroll() {

      
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);

     
      var draw = length * scrollpercent * 0.7;
      console.log(draw)

     
      path.style.strokeDashoffset = (length - draw);
      console.log()
  }
}


drawOnScroll();




var i = 0;
var finished = false;
var text = `I am currently a third-year student at Šiaulių Valstybinė kolegija,
studying information systems technologies.\n
I am still new in this field but I am ready to learn new things and grow
experience.
I have good basics of C++, Front-end development and SQL.
Recently I learned back-end development basics C#, PHP, Windows
Forms.\n I also learned the basics about computer networks and cloud
technologies while working with Cisco Packet Tracer. I studied how to
administer, configure and maintain computer networks.
I am punctual, friendly, responsible and always eager to learn something
new.`;

var textProjects = `In the 10th grade class for my personal project I created a simple computer game using Unity and a bit C# language. 
Creating my first game ever it was a challenge but I managed to do it. And the result was quite good.
\n
My personal project was to create a computer game - a product.
The computer game was developed with the cross-platform game development tool "Unity" and the C# 
programming language, using the "Microsoft Visual Studio" program. 
I tried to create the design of the game also using the 3D design modeling program "Blender"​`;

var target = document.getElementById("cons");
typeWrite(text, target);

function typeWrite(text, element) {
  if (i < text.length) {
    element.innerHTML += text[i];
    i++;
    setTimeout(typeWrite, 40, text, element);
  } else {
    if (!finished) {
      finished = true;
      i = 0;
      var targetProjects = document.getElementById("cons2");
      typeWriteProjects(textProjects, targetProjects);
    }
  }
}

function typeWriteProjects(text, element) {
  if (i < text.length) {
    element.innerHTML += text[i];
    i++;
    setTimeout(typeWriteProjects, 40, text, element);
  }
}
function typeWait(){
  setTimeout(target += "/", 1000);
  setTimeout(target.substring(0, target.length-1), 1100);
}
function typeDelete(){
  document.getElementById("cons").innerHTML = text + text[i].replace('_');
}

  