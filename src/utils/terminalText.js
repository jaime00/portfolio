export default function terminalText(words, id, colors) {
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  // target.setAttribute('style', 'color:' + colors[0]);
  const stringToRender = words[0];

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = stringToRender.substring(0, letterCount) + '<span style="visibility: hidden;">' + stringToRender.substring(letterCount, stringToRender.length + 1) + '</span>';
      window.setTimeout(function () {
        // var usedColor = colors.shift();
        // colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        // target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      if (!words[0]) debugger;
      target.innerHTML = stringToRender.substring(0, letterCount) + '<span style="visibility: hidden;">' + stringToRender.substring(letterCount, stringToRender.length + 1) + '</span>'
      letterCount += x;
    }
  }, 120);
}
