const textEl = document.getElementsByClassName("main-text");
const sizeButton = document.getElementById("js-text-size-button");


const textSizeFunc = ()=> {
    [...textEl].forEach((el)=> {
        el.classList.toggle('big-text');
    })

    // for (let i = 0; i < textEl.length; i++) {
    //     textEl[i].classList.toggle('big-text');
    //   }
}

sizeButton.addEventListener('click', textSizeFunc);