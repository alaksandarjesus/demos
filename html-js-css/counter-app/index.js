const counterEle = document.getElementById('counter'); // get the counter display element
let counter = 0; // let the starting value of counter = 0
counterEle.innerText = counter; //set the counter value to the element to display  in html


function onBtnClick(val) {
  counter = counter + parseInt(val); // parseInt to convert to integer
  counterEle.innerText = counter; // update the counter text
}


/* Method 2 */
document.querySelectorAll('.btn').forEach(function (ele) {
  ele.addEventListener('click', function (event) {
    const value = event.target.getAttribute('data-value');
    onBtnClick(value);
  });
});