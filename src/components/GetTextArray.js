function GetTextArray() {
  let elements = document.getElementsByClassName("text-animation");
  let elementsParrentsID = [];
  [...elements].forEach((element) => {
    elementsParrentsID.push(element.parentElement.id);
  });
  // remove duplications
  elementsParrentsID = [...new Set(elementsParrentsID)];
  // final object of text arrays
  let texts = {};
  elementsParrentsID.forEach((id) => {
    texts = { ...texts, [id]: getTexts(id) };
  });
  return texts;

  function getTexts(id) {
    let temp = document.getElementById(id).children;
    let result = [];
    for (let i = 0; i < temp.length; i++) {
      result.push(temp[i].innerText);
    }
    return result;
  }
}
export default GetTextArray;
