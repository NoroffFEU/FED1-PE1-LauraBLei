export const carousel = () => {
   let prev = document.querySelector(".prevBtn")
   let next = document.querySelector(".nextBtn")
   let dots = document.querySelectorAll('.dot');
   let imgs = document.querySelectorAll(".carouselBox")
   let totalImgs = imgs.length
   let imgPosition = 0

   
   const updatePosition = () => {
       for(let img of imgs){
           img.classList.remove('visible')
           img.classList.add('hidden')
        }
        for (let dot of dots) {
            dot.className = dot.className.replace(" active", "");
         }
           dots[imgPosition].classList.add('active');
        imgs[imgPosition].classList.remove('hidden')
        imgs[imgPosition].classList.add('visible')
    }
    
    updatePosition()

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

    dots.forEach((dot, dotPosition) => {
        dot.addEventListener("click", () => {
          imgPosition = dotPosition
          updatePosition(dotPosition)
        })
      })

    next.addEventListener('click', nextImg)
    prev.addEventListener('click', prevImg)
}




