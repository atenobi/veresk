const textEl = document.getElementById("js-text-output");
const sizeButton = document.getElementById("js-text-size-button");


const textSizeFunc = ()=> {
    textEl.classList.toggle('big-text');
}

sizeButton.addEventListener('click', textSizeFunc);