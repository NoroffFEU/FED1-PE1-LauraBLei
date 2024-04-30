export const carousel = () => {
   let prev = document.querySelector(".prevBtn")
   let next = document.querySelector(".nextBtn")
   let imgs = document.querySelectorAll(".carouselImage")
   let totalImgs = imgs.length
   let imgPosition = 0

  

    const updatePosition = () => {
        for(let img of imgs){
            img.classList.remove('visible')
            img.classList.add('hidden')
        }
        imgs[imgPosition].classList.remove('hidden')
        imgs[imgPosition].classList.add('visible')
    }
    

    const nextImg = () => {
        if (imgPosition === totalImgs -1){
            imgPosition = 0
        }else{
            imgPosition++
        }
        updatePosition()
    }
    
    const prevImg = () => {
        if(imgPosition === 0){
            imgPosition = totalImgs-1
        }else{
            imgPosition--
        }
        updatePosition()
    }

    next.addEventListener('click', nextImg)
    prev.addEventListener('click', prevImg)
}




