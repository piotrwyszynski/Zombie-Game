document.addEventListener("DOMContentLoaded", function () {
   var board = document.querySelector(".plansza");
   var count = 0;
   var button = document.getElementById("clickme");

   timer = setInterval(function () {
       var zombie = document.createElement("div");
       zombie.classList.add("zombie");
       board.appendChild(zombie);

       var random= Math.floor(Math.random() * (250 - 50 + 1) + 50);
       var randomScale= (Math.random() * (0.8 - 0.3 + 1) + 0.3);
       zombie.style.bottom=random + "px";
       zombie.style.transform="scale("+randomScale+")";
       zombie.addEventListener("click", function (e) {
           this.remove();
           
           count += 1;
           button.innerHTML = "" + count;

       });
       zombie.style.animationDuration = "0,5s" + random + "s";

       zombie.addEventListener("animationend",function (event) {
           console.log(event);
           this.remove();
       })
   }, 1000)
});