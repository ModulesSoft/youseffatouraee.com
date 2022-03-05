function CheckScroll(scrollY, scrollDirection, allowScroll, callbackfn) {
  console.log(scrollY, scrollDirection, allowScroll);
  if (scrollY > 10 && scrollDirection === "up" && allowScroll) {
    callbackfn();
  }
}
export default CheckScroll;
