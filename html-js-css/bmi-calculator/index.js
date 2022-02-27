const metricWrapperElement = document.querySelector(".metric-wrapper");
const usunitWrapperElement = document.querySelector(".usunit-wrapper");
const resultWrapperElement = document.querySelector(".result-wrapper");

let ele,weight, height, bmi;
onUnitChange('metric');
function onUnitChange(value){
    resultWrapperElement.style.display = 'none';
    metricWrapperElement.style.display = value === 'metric'?'block':'none';
    usunitWrapperElement.style.display = value === 'us'?'block':'none';
    ele = metricWrapperElement.style.display !== 'none'?metricWrapperElement:usunitWrapperElement;
    ele.querySelector('.weight').value = 0;
    ele.querySelector('.height').value = 0;
}

function calculate(){
    resultWrapperElement.style.display = 'none';
    ele = metricWrapperElement.style.display !== 'none'?metricWrapperElement:usunitWrapperElement;
    isMetric = metricWrapperElement.style.display !== 'none'?true:false;
    weight = ele.querySelector('.weight').value;
    height = ele.querySelector('.height').value;
    if(!weight || isNaN(weight) ||!parseFloat(weight)){
        alert("enter weight value");
        return;
    }
    if(!height || isNaN(height) || !parseFloat(height)){
        alert("enter height value");
        return;
    }
    bmi = parseFloat(parseFloat(weight)/parseFloat(height)).toFixed(2);
    if(isNaN(bmi)){
        alert("Invalid values entered");
        return;
    }
    if(!isMetric){
        bmi = bmi * 703;
    }
    resultWrapperElement.style.display = 'block';
    resultWrapperElement.querySelector(".result").innerHTML = bmi;
}