const buttons = document.querySelectorAll('button');
const resultDisplayer = document.getElementById('result-display')
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const result_btn = document.getElementById('result');



const addEventListenerList = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id.length === 0) {
      list[i].addEventListener('click', e => resultDisplayer.value += e.target.name);
    }
  }
}


addEventListenerList(buttons)
clear.addEventListener('click', () => resultDisplayer.value = '');
backspace.addEventListener('click', () => resultDisplayer.value = resultDisplayer.value.slice(0, -1));
result_btn.addEventListener('click', () => {
  try {
    resultDisplayer.value = eval(resultDisplayer.value).toString();
  } catch (err) {
    resultDisplayer.value = "Error"
  }
})





