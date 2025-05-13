//your code here

let inputValue = document.getElementById('evaluatedText');
let h3 = document.getElementById('letterCount');

inputValue.addEventListener('input' , (e)=>{
	h3.innerText = inputValue.value.length;
})