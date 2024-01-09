window.onload=()=>{
let from = document.getElementById("from");
let to = document.getElementById("to");
let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let btn = document.getElementById("convert");
let result;

  value1.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
    }
  });

  btn.addEventListener("click",()=>{
    if (!value1.value) {
      alert("Please input a value");
      return;
    }
    //seize operation when nothing is selected
    let checkSelect1 = from.value=="" && to.value=="";
    let checkSelect2 = from.value=="" || to.value=="";
    if (checkSelect1 || checkSelect2) {
      alert("Please pick your selection");
      return;
    }
    
    if (from.value=="celsius" && to.value=="k") {
      result = parseInt(value1.value)+273;
    }
    if (from.value=="celsius" && to.value=="°F") {
      result = (parseInt(value1.value)*9/5) +32;
    }
    if (from.value=="kelvin" && to.value=="°c") {
      result = parseInt(value1.value)-273;
    }
    if (from.value=="kelvin" && to.value=="°F") {
      result = (((parseInt(value1.value)-273.15)*9/5)+32).toFixed("2");
    }
    if (from.value=="fahrenheit" && to.value=="°c") {
      result = ((parseInt(value1.value)-32)*5/9).toFixed("2");
    }
    if (from.value=="fahrenheit" && to.value=="k") {
      result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(3);
      if (result.endsWith("0")) {
        result = (((parseInt(value1.value)-32)*5/9)+273.15).toFixed(2);
      }
    }

      let checkOne = from.value=="celsius" && to.value=="°c";
      let checkTwo = from.value=="kelvin" && to.value=="k";
      let checkThree = from.value=="fahrenheit" && to.value=="°F";

      if (checkOne || checkTwo || checkThree){
        value2.value="";
        return;
      }
    value2.value=result+(to.value);
  });
}