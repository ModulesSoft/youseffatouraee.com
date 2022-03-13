export const GetScroll = (result) => {
  // scroll event listener
  var lastScrollTop = 0;
  var counter = 0;
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener(
    "scroll",
    function () {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        counter++;
      } else {
        // upscroll code
        counter--;
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      return result(counter);
    },
    false
  );
};

export default GetScroll;
