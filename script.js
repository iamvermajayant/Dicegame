const dicevalue = document.querySelector('#dicevalue');
const dicetype = document.querySelector('#dice-type');
const btn = document.querySelector('#btn');
const result = document.querySelector('#results');

function dice(sides) {
    return Math.floor(Math.random() * sides) + 1 ;
}

function rolldice(e) {
    e.preventDefault()
    results.innerHTML = '';
    const Dvalue = dicevalue.value;
    const dtype = dicetype.value;
  
  if(!Dvalue) {
        alert('please enter dice amount');
        dicevalue.focus();
        return;
    }
    else if(!dtype) {
        alert('please enter dice type');
        dicetype.focus();
        return;
    }
 
  for(let i = 0; i < Dvalue; i++) {
        const theRoll = dice(dtype);
        const dicediv = document.createElement('div');
        dicediv.classList.add('dice');
        dicediv.textContent = theRoll;
        results.appendChild(dicediv);
    }
}
btn.addEventListener('click', e =>{
    rolldice(e);
})
document.body.addEventListener('keypress', e =>{
    if(e.code !== 'Enter')
    return

    rolldice(e)
})