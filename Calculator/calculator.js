function f1(objButton) {
  var a = objButton.value;
  document.getElementById("alltext").textContent += a;
  console.log(document.getElementById("alltext").value);
}
function f2() {
  var cal = eval(document.getElementById("alltext").value);
  console.log(cal);
  document.getElementById("alltext").textContent = cal;
}
function f3() {
  document.getElementById("alltext").textContent = "";
}
