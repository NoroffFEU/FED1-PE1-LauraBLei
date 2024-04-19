

const makePage = () => {
    let main = document.querySelector("main")

    let container = document.createElement("div")
    container.className = "container"
    
    let headline = document.createElement("h1")
    headline.innerHTML = "Create Post"

    let imageBox = document.createElement("div")
    imageBox.className = "addImageBox"
    
    let image = document.createElement("img")
    image.className = "createPostAddImage"

    let addImage = document.createElement("img")
    addImage.src = "../pictures/addImage.png"
    addImage.alt = "Add Image button"
    addImage.className = "addImageButton"

    
    
    main.appendChild(container)
    container.append(headline, imageBox)
    imageBox.append(image, addImage)
    makeForms(container)
}


const makeForms = (container) => {
let form = document.createElement("form");
form.className = "flexContainerCenterCol form"

let titleFormBox = document.createElement("div");
titleFormBox.className = "flexContainerCenterRow"


let titleLabel = document.createElement("label");
titleLabel.innerHTML = "Title:";
titleLabel.setAttribute("for", "title");
titleLabel.className = "headerTwo"

let titleInput = document.createElement("input");
titleInput.className = "titleInput"
titleInput.type = "text";
titleInput.id = "title";
titleInput.name = "title";
titleInput.placeholder = "Insert text here..";

let textFormBox = document.createElement("div");
textFormBox.className = "flexContainerCenterRow"


let textInput = document.createElement("textarea");
textInput.className = "textInput"
textInput.id = "text";
textInput.name = "text";
textInput.placeholder = "Add text here..";


let submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Save";
submitButton.className = "blueButton"

let deleteButton = document.createElement("button")
deleteButton.innerText = "Cancel"
deleteButton.className = "smallBlueButton"

container.append(form, deleteButton)
form.append(titleFormBox, textFormBox, submitButton)
titleFormBox.append(titleLabel,titleInput)
textFormBox.append(textInput)
}

makePage()