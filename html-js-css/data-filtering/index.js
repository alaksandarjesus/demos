const dataTable = document.getElementById("dataTable");
const trs = dataTable.querySelectorAll('tbody tr');
let display= '';

function onInputChange(event){
const value = event.target.value;

trs.forEach(function(tr){
display = 'table-row';
const tdName = tr.querySelector('.name');
if(tdName.innerText && value && tdName.innerText.toLowerCase().indexOf(value.toLowerCase()) === -1){
	display = 'none';
}
tr.style.display = display;

});
}