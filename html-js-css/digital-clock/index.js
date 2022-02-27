
const pabcdefgObj = {
    '0' : '1111110',
    '1' : '0110000',
    '2' : '1101101',
    '3' : '1111001',
    '4' : '0110011',
    '5' : '1011011',
    '6' : '1011111',
    '7' : '1110000',
    '8' : '1111111',
    '9' : '1111011',
}

const segmentsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const displaysAvailable = ['a', 'b', 'c', 'd', 'e', 'f'];
const displaysArr = {};
displaysAvailable.forEach(function(segment){
    displaysArr[segment] = {};
    displaysArr[segment]['element'] =  document.querySelector(".display."+segment);
    displaysArr[segment]['value'] = '';
});

let now, hours, hoursFormatted, hoursPadded, minutes, minutesPadded, secondsPadded;

now = new Date();
updateSeconds(now);
updateMinutes(now);
updateHours(now);


setInterval(function(){
    now = new Date();
    updateSeconds(now);
}, 1000)

function updateSeconds(now){
    seconds = now.getSeconds();
    if(!seconds){
        updateMinutes(now);
    }
    secondsPadded = seconds.toString().padStart(2, 0);
    displaysArr['e']['value'] = pabcdefgObj[secondsPadded[0]].split('');
    displaysArr['f']['value'] = pabcdefgObj[secondsPadded[1]].split('');
    updatedisplays(['e', 'f']);
}
function updateMinutes(now){
    minutes = now.getMinutes();
    if(!minutes){
        updateHours(now);
    }
    minutesPadded = minutes.toString().padStart(2, 0);
    displaysArr['c']['value'] = pabcdefgObj[minutesPadded[0]].split('');
    displaysArr['d']['value'] = pabcdefgObj[minutesPadded[1]].split('');
    updatedisplays(['c', 'd']);
}

function updateHours(now){
    hours = now.getHours();
    hoursFormatted = hours < 12?hours: (hours  - 12);
    hoursPadded = hoursFormatted.toString().padStart(2, 0);
    displaysArr['a']['value'] = pabcdefgObj[hoursPadded[0]].split('');
    displaysArr['b']['value'] = pabcdefgObj[hoursPadded[1]].split('');
    updatedisplays(['a', 'b']);

}

function updatedisplays(displays){
    displays.forEach(function(display){
        segmentsArr.forEach(function(segment, index){
            const segmentEle = displaysArr[display]['element'].querySelector("."+segment);
            segmentEle.classList.remove('active');
            const value = displaysArr[display]['value'][index];
            const segmentVal = value?parseInt(value):'';
            if(segmentVal){
                segmentEle.classList.add('active');
            }    
        });
    });
}
