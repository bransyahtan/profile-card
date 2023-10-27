document.addEventListener("DOMContentLoaded", function () {
  // Kode JavaScript Anda di sini
  let nodeJS = document.getElementsByClassName("fa-node")[0];
  const NodeJsTagP = document.createElement("p");
  NodeJsTagP.classList.add("h5");
  NodeJsTagP.classList.add("pt-3");
  NodeJsTagP.textContent = "Node JS";

  if (nodeJS) {
    nodeJS.parentNode.insertBefore(NodeJsTagP, nodeJS.nextSibling);
  }

  let nextJS = document.getElementsByClassName("fa-vuejs")[0];
  const nextJSTagP = document.createElement("p");
  nextJSTagP.classList.add("h5");
  nextJSTagP.classList.add("pt-3");
  nextJSTagP.textContent = "Next JS";

  if (nextJS) {
    nextJS.parentNode.insertBefore(nextJSTagP, nextJS.nextSibling);
  }

  let reactJS = document.getElementsByClassName("fa-react")[0];
  const reactJSTagP = document.createElement("p");
  reactJSTagP.classList.add("h5");
  reactJSTagP.classList.add("pt-3");
  reactJSTagP.textContent = "React JS";

  if (reactJS) {
    reactJS.parentNode.insertBefore(reactJSTagP, reactJS.nextSibling);
  }

  let typeScript = document.getElementsByClassName("fa-js-square")[0];
  const typeScriptTagP = document.createElement("p");
  typeScriptTagP.classList.add("h5");
  typeScriptTagP.classList.add("pt-3");
  typeScriptTagP.textContent = "TypeScript";

  if (reactJS) {
    typeScript.parentNode.insertBefore(typeScriptTagP, typeScript.nextSibling);
  }
});
