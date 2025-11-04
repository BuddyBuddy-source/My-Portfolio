


function movecircle(){
    window.addEventListener(`mousemove`, function Circle(e){
        document.querySelector(`#minicircle`).style.left = e.pageX-10 + `px`;
        document.querySelector(`#minicircle`).style.top = e.pageY-5 + `px`;
    })
}

movecircle();