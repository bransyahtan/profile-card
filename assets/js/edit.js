document.addEventListener("DOMContentLoaded", () => {
  const NodeJS = document.getElementsByClassName("fa-node")[0];
  NodeJS ? (NodeJS.innerHTML = "Node_JS") : "";
  const NextJS = document.getElementsByClassName("fa-vuejs")[0];
  NextJS ? (NextJS.innerHTML = "Next_JS") : "";
  const ReactJS = document.getElementsByClassName("fa-react")[0];
  ReactJS ? (ReactJS.innerHTML = "React_JS") : "";
  const TypeScript = document.getElementsByClassName("fa-js-square")[0];
  TypeScript ? (TypeScript.innerHTML = "Type_Script") : "";

  if (NodeJS) {
    const nodeJSCheckBOX = document.querySelector("#nodeJS");
    nodeJSCheckBOX.setAttribute("checked", true);
  }

  if (NextJS) {
    const nextJSCheckBOX = document.getElementById("next_js");
    nextJSCheckBOX.setAttribute("checked", true);
  }

  if (ReactJS) {
    const reactJSCheckbox = document.getElementById("react_js");
    reactJSCheckbox.setAttribute("checked", true);
  }

  if (TypeScript) {
    const typeScriptCheckbox = document.getElementById("typeScript");
    typeScriptCheckbox.setAttribute("checked", true);
  }
});
