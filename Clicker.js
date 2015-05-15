var tickSpeed = 1;

(function(){
  var bigCookie = document.getElementById("bigCookie");
  
  function tick(){
    bigCookie.click();
    setTimeout(tick, tickSpeed);
  }
  tick();
})();
