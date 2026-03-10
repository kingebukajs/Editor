<<<<<<< HEAD
/*Project name v5.1*/
console.log("##Code Editor v5.1##");
console.log("👑 King Ebuka 👑");

/**Debounce function**/
=======
/*Project name v4.2*/
console.log("##Code Editor v4.2##");
console.log("👑 King Ebuka 👑");


>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
function debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
};
<<<<<<< HEAD

function pro(text) {
         return new Promise(function(resolve) {
        let promptBox = document.createElement("div");
        let promptText = document.createElement("h2");
        let promptInput = document.createElement("input");
        let promptButton = document.createElement("button");
        let promptBoxStyle = promptBox.style;
        let promptTextStyle = promptText.style;
        let promptInputStyle = promptInput.style;
        let promptButtonStyle = promptButton.style;
        
        
        /**promptBox**/
        promptBox.id = "prompt-box";
        promptBoxStyle.background = "#adadad";
        promptBoxStyle.height = "30vh";
        promptBoxStyle.width = "80vw";
        promptBoxStyle.zIndex = "999";
        promptBoxStyle.maxWidth = "400px";
        promptBoxStyle.maxHeight = "300px";
        promptBoxStyle.position = "fixed";
        promptBoxStyle.top = "50%";
        promptBoxStyle.left = "50%";
        promptBoxStyle.transform = "translate(-50%, -50%)";
        promptBoxStyle.borderRadius = "12px";
        promptBoxStyle.padding = "12px";
        promptBoxStyle.minHeight = "250px";
        promptBoxStyle.boxShadow = "5px 5px 8px 5px #09D89E,-5px -5px 8px 5px #09D89E";
        
        /**promptText**/
        promptText.id = "prompt-text";
        promptText.innerText = text;
        promptTextStyle.position = "absolute";
        promptTextStyle.top = "20%";
        promptTextStyle.left = "50%";
        promptTextStyle.transform = "translate(-50%, -50%)";
        
        /**promptInput**/
        promptInput.id = "prompt-input";
        promptInputStyle.width = "70%";
        promptInputStyle.height = "10%";
        promptInputStyle.background = "#adadad";
        promptInputStyle.borderStyle = "none";
        promptInputStyle.borderBottomStyle = "solid";
        promptInputStyle.borderBottomColor = "#73c7ff";
        promptInputStyle.position = "absolute";
        promptInputStyle.bottom = "30%";
        promptInputStyle.left = "50%";
        promptInputStyle.transform = "translate(-50%, -50%)";
        promptInputStyle.outline = "none";
        
        
        /**promptButton**/
        promptButton.id = "prompt-button";
        promptButton.innerText = "Continue";
        promptButtonStyle.position = "absolute";
        promptButtonStyle.bottom = "5%";
        promptButtonStyle.left = "50%";
        promptButtonStyle.transform = "translate(-50%, -50%)";
        promptButtonStyle.background = "#73c7ff";
        promptButtonStyle.padding = "12px";
        promptButtonStyle.borderRadius = "12px";
        promptButtonStyle.borderStyle = "none";
        promptBox.appendChild(promptText);
        promptBox.appendChild(promptInput);
        promptBox.appendChild(promptButton);
        document.body.appendChild(promptBox);
        promptInput.focus();
        
        promptButton.onclick = function() {
          resolve(promptInput.value);
          promptBox.remove();
      };
      
        
        
        
         });
      }


function verif() {
  if ("isLoaded" in sessionStorage){
    let welcomePage = $("#welcome");
    let main = $("#main");
    welcomePage.style.display = 'none';
    main.style.display = 'block';
  } else {
    showName();
  }
}
function enableButton() {
  document.getElementById("open-button").disabled = false; 
}

/**Show and save user name**/
function showName() {
  let welcuser = document.getElementById('user-name');
  if ("userName" in localStorage) {
  welcuser.innerText = localStorage.getItem("userName")
  display1();
  } else {
    (async () => {
        let userName = await pro("Welcome to KingCode, please enter your name to continue...");
        localStorage.setItem("userName", userName);
        welcuser.innerText = userName;
        display1();
    })();
}
}

/**Fake typing logs**/
   
    let log1 = document.getElementById('log1');
    let log2 = document.getElementById('log2');
    let log3 = document.getElementById('log3');
    let log4 = document.getElementById('log4');
    let log5 = document.getElementById('log5');
    let log6 = document.getElementById('log6');
    let message1 = ">_Booting_King_Ebuka_Code_Editor...";
    let message2 = ">_Checking_system_environment...";
    let message3 = ">_Loading_editor_engine...";
    let message4 = ">_Loading_developer_console...";
    let message5 = ">_Initializing_IDE_modules...";
    let message6 = ">_Editor_ready._Open_KingCode!";
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let i4 = 0;
    let i5 = 0;
    let i6 = 0;
    function display1() {
  log1.innerText += message1.charAt(i1);
 i1++;
setTimeout(display1, 30);

if(i1 == message1.length){
  display2();
}
}

    function display2() {
  log2.innerText += message2.charAt(i2);
 i2++;
setTimeout(display2, 30);
if(i2 == message2.length){
  display3();
}
}

    function display3() {
  log3.innerText += message3.charAt(i3);
 i3++;
setTimeout(display3, 30);
if(i3 == message3.length){
  display4();
}
};

    function display4() {
  log4.innerText += message4.charAt(i4);
 i4++;
setTimeout(display4, 30)
if(i4 == message4.length){
  display5();
}
}

    function display5() {
  log5.innerText += message5.charAt(i5);
 i5++;
setTimeout(display5, 30)
if(i5 == message5.length){
  display6();
}
}

    function display6() {
  log6.innerText += message6.charAt(i6);
 i6++;
setTimeout(display6, 30)
if(i6 == message6.length){
  enableButton();
}
}

  
  
function openEditor() {
  let welcomePage = $("#welcome");
  let main = $("#main");
  welcomePage.style.display = 'none';
  main.style.display = 'block';
  sessionStorage.setItem("isLoaded", true);
}

/**load saved code**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
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
<<<<<<< HEAD


/**assign variables**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
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

<<<<<<< HEAD
/**update code**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
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

<<<<<<< HEAD

/**show or hide inputs**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
function show(inp) {
  king = inp;
  if (king == 'htmlinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});
   buttons.forEach(button => {
<<<<<<< HEAD
     button.style.borderTopColor = "#2e2e2e"
   });
    html.style.display = "block";
    $('#hbtn').style.borderTopColor = '#e3cc00';
=======
     button.style.background = "grey"
   });
    html.style.display = "block";
    $('#hbtn').style.background = '#ed9a5a';
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
    html.focus();
  }
  
  else if (king == 'cssinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
<<<<<<< HEAD
     button.style.borderTopColor = "#2e2e2e"
   });
    css.style.display = "block";
    $('#cbtn').style.borderTopColor = '#e3cc00';
=======
     button.style.background = "grey"
   });
    css.style.display = "block";
    $('#cbtn').style.background = '#ed9a5a';
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
    css.focus();
  }
  
  else {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
<<<<<<< HEAD
     button.style.borderTopColor = "#2e2e2e"
   });
    js.style.display = "block";
    $('#jbtn').style.borderTopColor = '#e3cc00';
=======
     button.style.background = "grey"
   });
    js.style.display = "block";
    $('#jbtn').style.background = '#ed9a5a';
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
    js.focus();
  }
}

<<<<<<< HEAD
/**snippets**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
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

<<<<<<< HEAD

/**move caret**/
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
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
<<<<<<< HEAD

/**  **/
function func(){
  
}
=======
>>>>>>> 7eff275bb82c027bd7d1d0465139541b3808e3c8
