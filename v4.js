function sortWordsByLength(text) {
  return text
    .trim() 
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .join(" ");
}

console.log(sortWordsByLength("Bu yerda juda qiziqarli masalalar bor"));

console.log(sortWordsByLength("JavaScriptni o'rganish juda qiziq"));

console.log(sortWordsByLength(""));
