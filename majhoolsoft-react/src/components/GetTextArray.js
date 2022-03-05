function GetTextArray() {
  return {
    // resume
    laptop: getTexts("laptop"),
    degree: getTexts("degree"),
    os: getTexts("os"),
    frontEndOne: getTexts("frontEndOne"),
    frontEndTwo: getTexts("frontEndTwo"),
    backEnd: getTexts("backEnd"),
    notebookOne: getTexts("notebookOne"),
    notebookTwo: getTexts("notebookTwo"),
    // hobbies
    microphone: getTexts("microphone"),
    motorcycle: getTexts("bike"),
    garden: getTexts("garden"),
    mountain: getTexts("mountain"),
  };
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
