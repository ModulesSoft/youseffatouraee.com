function CheckScroll(scrollY, scrollDirection, allowScroll, callbackfn) {
  if (scrollY > 10 && scrollDirection === "up" && allowScroll) {
    callbackfn();
  }
}
export default CheckScroll;
