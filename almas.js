function showAuthor(id){
	const text = "Алмас Турганбаев";
	id.innerHTML = text;
}

function func_onchange_1() {
  const x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}

function func_onchange_2(val) {
  alert("The input value has changed. The new value is: " + val);
}

function func_onchange_3() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function func_onclick_1() {
  document.getElementById("field2").value = document.getElementById("field1").value;
}

function func_onclick_2(elmnt,clr) {
	elmnt.style.color = clr;
}

let y = 0;
function func_onmouseover() {
  document.getElementById("demo2").innerHTML = y+=1;
}

let x = 0;
function func_onmouseout() {
  document.getElementById("demo3").innerHTML = x+=1;
}

function func_onload_1() {
  alert("Страница обновлена! На данном странице будет представлена событий в JavaScript, чтобы увидеть нажмите <OK>");
}