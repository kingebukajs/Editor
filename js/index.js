/*Project name v4.2*/
console.log("##Code Editor v4.2##");
console.log("👑 King Ebuka 👑");


function debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
};
function loadCode() {
  let template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  
  </style>
  <title></title>
</head>
<body>
  
  <script>
  </script>
</body>
</html>



`;
  if ("html" in localStorage && "css" in localStorage && "js" in localStorage) {
  document.getElementById("html").value =  localStorage.getItem("html");
  document.getElementById("css").value =  localStorage.getItem("css");
  document.getElementById("js").value =  localStorage.getItem("js");
  updatePreview();
  }
  else {
  document.getElementById("html").value =  template;
  updatePreview();
  }
}
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let output = document.getElementById("output");
    let buttons = document.querySelectorAll(".buttons");
    let inputs = document.querySelectorAll(".inputsection");
    let its = document.querySelectorAll(".inputsection");
    let opstyle = document.createElement("style");
    output.contentDocument.head.appendChild(opstyle);
    let hsnippets = document.getElementById("hselect");
    let csnippets = document.getElementById("cselect");

function updatePreview() {
    const doc = output.contentDocument || output.contentWindow.document;

    // Update HTML
    doc.body.innerHTML = html.value;

    // Update CSS
    opstyle.textContent = css.value;

    // Remove old script if present
    const oldScript = doc.getElementById("injected-js");
    if (oldScript) oldScript.remove();

    // Inject new script
    let opjs = doc.createElement("script");
    opjs.id = "injected-js";
    opjs.textContent = js.value;
    doc.body.appendChild(opjs);
    localStorage.setItem("html", html.value);
    localStorage.setItem("css", css.value);
    localStorage.setItem("js", js.value);
};

    const debouncedUpdate = debounce(updatePreview, 500);
    
    inputs.forEach(input => {
  input.addEventListener('input', debouncedUpdate);
});

function show(inp) {
  king = inp;
  if (king == 'htmlinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});
   buttons.forEach(button => {
     button.style.background = "grey"
   });
    html.style.display = "block";
    $('#hbtn').style.background = '#ed9a5a';
    html.focus();
  }
  
  else if (king == 'cssinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
     button.style.background = "grey"
   });
    css.style.display = "block";
    $('#cbtn').style.background = '#ed9a5a';
    css.focus();
  }
  
  else {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
     button.style.background = "grey"
   });
    js.style.display = "block";
    $('#jbtn').style.background = '#ed9a5a';
    js.focus();
  }
}

function snip(txtarea) {
  if (txtarea == 'html') {
  let pos = html.selectionStart;
  console.log(pos);
  let voj = pos;
  let snips = hsnippets.value;
  html.value = html.value.slice(0, voj) + snips + html.value.slice(pos);
  updatePreview();
}
  else if (txtarea == 'css') {
  let pos = css.selectionStart;
  console.log(pos);
  let voj = pos;
  let snips = csnippets.value;
  css.value = css.value.slice(0, voj) + snips + css.value.slice(pos);
  updatePreview();
}
}

function moveCaret(destination) {
  let kingEdit = window.currentInput;
  let currentPos = kingEdit.selectionStart;
  let prevChar = currentPos - 1;
  let nextChar = currentPos + 1;
  let going = destination;
  if (going == 'left') {
    let pos = Math.max(0, prevChar);
    kingEdit.selectionStart = pos;
    kingEdit.selectionEnd = pos;
    kingEdit.focus();
  } 
  else if (going == 'right') {
    let pos = Math.min(kingEdit.value.length, nextChar);
    kingEdit.selectionStart = pos;
    kingEdit.selectionEnd = pos;
    kingEdit.focus();
  }
}
