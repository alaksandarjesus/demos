const windowHeight = window.screen.height;
const windowWidth = window.screen.width;

let i, x, y;

for(i =0; i < 1000; i++){
    x = getRandomInRange(0, windowWidth, 0);
    y = getRandomInRange(0, windowWidth, 0);
    const divEle = document.createElement('div');
    divEle.classList.add('star');
    divEle.style.top = x+'px';
    divEle.style.left = y+'px';
    document.body.appendChild(divEle);
}


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}