console.clear();

const result = document.querySelector('.result'); // get result element to display result

const unitsa = document.getElementById("unitsa");
const unitsb = document.getElementById("unitsb");
const valsa = document.getElementById("valsa");
const valsb = document.getElementById("valsb");
const conversionTable = document.getElementById("conversionTable")
const conversionTableThead = conversionTable.querySelector('thead');
const conversionTableTheadTr = conversionTable.querySelector('tr');
const conversionTableTbody = conversionTable.querySelector('tbody');
const conversionTableTbodyTrs = conversionTable.querySelectorAll('tr');


function capture(){ // capture the values
result.style.display = "none"; // hide the result element
const args = {
 unita : unitsa.value,
 unitb : unitsb.value,
 vala : valsa.value,
 valb : valsb.value,
}
if((!args.vala && !args.valb) || (args.vala && args.valb)){
alert("Fill either first input or second input");
return;
}
args.from = args.vala? args.unita:args.unitb;
args.to = args.vala? args.unitb:args.unita;
findInTable(args);

}

function findInTable(args){
	let columnIndex = -1;	
	let rowIndex = -1;
	let multiplier = 0;

	const columns = conversionTableTheadTr.querySelectorAll('th');
	columns.forEach(function(ele, index){
	if(ele.innerText === args.to){
	   columnIndex = index-1; // -1 because the first header is empty
	}
	});
	
	conversionTableTbodyTrs.forEach(function(row, index){
		const th = row.querySelector('th');
		if(th.innerText == args.from){
		rowIndex = index;
		const tds = row.querySelectorAll('td');
		tds.forEach(function(td, tdindex){
		 if(tdindex === columnIndex){
		 multiplier = td.innerText?td.innerText:0;
		 }
		})
		}
	
	});
		
	if(args.vala){
	  valsb.value = parseFloat(args.vala) * parseFloat(multiplier);
	}
	if(args.valb){
		  valsa.value = parseFloat(args.valb) * parseFloat(multiplier);
	}

	result.innerText = `Row Index: ${rowIndex}, Column Index: ${(columnIndex+1)} multiplier:${multiplier}`;
	result.style.display = 'block';
}