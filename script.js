document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("meme-form");
    const memeDisplayContainer = document.getElementById("meme-display-container");

    memeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const imageUrlInput = document.getElementById("image-url-input");
        const textTopInput = document.getElementById("text-top-input");
        const textBottomInput = document.getElementById("text-bottom-input");

        if (imageUrlInput.value === "" || textTopInput === "" || textBottomInput === "") {
            alert("There are missing fields. Please provide all inputs so we can start creating your meme (:");
            return;
        }

        const newMeme = document.createElement("div");
        newMeme.setAttribute('id', "meme-display");

        const newImage = document.createElement("img");
        newImage.src = imageUrlInput.value;

        const newText1 = document.createElement("h3");
        newText1.innerText = textTopInput.value;
        newText1.setAttribute('id', "meme-text");

        const newText2 = document.createElement("h3");
        newText2.innerText = textBottomInput.value;
        newText2.setAttribute('id', "meme-text2");

        const hoverDiv = document.createElement("div");
        hoverDiv.setAttribute('id', "hover-image");

        const hoverImage = document.createElement("img");
        hoverImage.src = "pinkdelete.png";
        hoverImage.setAttribute('id', "delete");

        hoverDiv.append(hoverImage);

        newMeme.append(newImage);
        newMeme.append(newText1);
        newMeme.append(newText2);
        newMeme.append(hoverDiv);
        memeDisplayContainer.appendChild(newMeme);

        memeForm.reset();
    });

    memeDisplayContainer.addEventListener("click", function (event) {
        const memeClicked = event.target.id.toLowerCase();

        if (memeClicked === "hover-image") {
            event.target.parentElement.remove();
        } else if (memeClicked === "delete") {
            event.target.parentElement.parentElement.remove();
        }
    });
});