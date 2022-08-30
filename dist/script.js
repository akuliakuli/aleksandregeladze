let rocketBtn = document.querySelector(".main_descr"),
    rocket = document.querySelector(".rocketitm");

let pos = 2500;
rocketBtn.addEventListener("click",(e) => {
    e.preventDefault();

    requestAnimationFrame(myAnimation)
}
)

function myAnimation() {
    pos += 10
    rocket.style.display = 'none'
    rocket.style.bottom = pos + "px"; 
    if (pos < 4200) {
        rocket.style.display = 'block'
        requestAnimationFrame(myAnimation);
    }
}


let boxes = document.querySelectorAll(".project"),
    tabs = document.querySelectorAll(".btns");


function hideBoxes(){
    boxes.forEach(item => {
        item.classList.remove('show')
        item.classList.add("hide");
    })
    tabs.forEach(item => {
        item.classList.remove("active");
    })
}

function showBox(i = 0){
    boxes[i].classList.remove("hide");
    boxes[i].classList.add("show");

    tabs[i].classList.add("active");
}
hideBoxes()
showBox()

tabs.forEach(item => {
    item.addEventListener('click',(e) => {
        if(e.target && e.target.matches(".btns")){
            tabs.forEach((item,i) =>{
                if(e.target == item){
                    hideBoxes();
                    showBox(i);
                }})
        }
    })
})