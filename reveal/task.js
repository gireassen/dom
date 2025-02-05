window.addEventListener('scroll', function(){
    const block = document.querySelectorAll('.reveal')
    for (let i of block) {
        const {top, bottom} = i.getBoundingClientRect()
            if (bottom < window.innerHeight) {
                i.classList.add('reveal_active')
            }
            else {
                i.classList.remove('reveal_active')
            }
        }
}
)