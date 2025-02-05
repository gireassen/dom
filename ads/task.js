const rotator = document.querySelectorAll('.rotator__case')
let i = 0
setInterval(() => {
    rotator[i].classList.remove('rotator__case_active')
    if (i < rotator.length-1){
        rotator[i].nextElementSibling.classList.add('rotator__case_active')
        i++
        }
    else {
            rotator[0].classList.add('rotator__case_active')
            i = 0
        }
},1000)