function minimaInit() {
    // grab an element
    var myElement = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();
};

document.addEventListener("DOMContentLoaded", function(event) {
  minimaInit();
});
