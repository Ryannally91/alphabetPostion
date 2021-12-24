function alphabetPosition(text) {
  let textArr = text.toUpperCase();
  let numStr = [];
  for (i = 0; i < textArr.length; i++) {
    if (textArr.charCodeAt(i) > 64 && textArr.charCodeAt(i) < 91)
      numStr.push(textArr.charCodeAt(i) - 64);
  }

  numStr = numStr.join(" ");
  console.log(numStr);
  return numStr;
}

alphabetPosition(";7z@!zyw");
