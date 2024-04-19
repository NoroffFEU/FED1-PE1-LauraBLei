

const makePage = () => {
    let main = document.querySelector("main")

    let container = document.createElement("div")
    
    let headline = document.createElement("h1")
    headline.innerHTML = "Create Post"

    let imageBox = document.createElement("div")
    
    let image = document.createElement("img")

    let addImage = document.createElement("img")
    addImage.src = "../pictures/addImage.png"
    addImage.alt = "Add Image button"

    main.appendChild(container)
    container.append(headline, imageBox)
}

makePage()