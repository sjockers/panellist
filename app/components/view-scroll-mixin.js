var latestKnownScrollY = 0;
var ticking = false;
var callbacks = {};

function update() {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;

  Object.keys(callbacks).forEach(function(key) {
    callbacks[key](latestKnownScrollY);
  });  
}

function requestTick() {
  if(!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

function onScroll() {
  latestKnownScrollY = window.scrollY;
  requestTick();
}

function addScrollHandler(callbackFn, cid, scope) {
  callbacks[cid] = function(returnValue) {
    callbackFn.call(scope, returnValue);
  };
}

module.exports = {
  registerViewportScrollHandler: function(callbackFn) {

    window.addEventListener('scroll', onScroll);

    addScrollHandler(callbackFn, this.cid, this);
  }
};