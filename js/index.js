/*Project name v4.1*/
console.log("##Code Editor v3.1##");
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
</html>`;
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
    const $ = (s) => document.querySelector(s);
    let buttons = document.querySelectorAll(".buttons");
    let inputs = document.querySelectorAll(".inputsection");
    let opstyle = output.contentDocument.createElement("style");
    output.contentDocument.head.appendChild(opstyle);
    let elems = document.getElementById("select");
   

function updatePreview() {
    const doc = output.contentDocument;

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
function snip() {
  html.value += elems.value;
}

console.log(html.value.indexOf("head"));