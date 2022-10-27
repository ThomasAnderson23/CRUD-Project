let nameInput = document.getElementById("nameInput");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', e => {

    const nameInputValue = nameInput.value;

    if (nameInputValue) {
        let webUser = localStorage.getItem("localUser")

        if (webUser == null) {
            userObject = [];
        } else {
            userObject = JSON.parse(webUser)
        }

        userObject.push({
            'user': nameInputValue
        });

        localStorage.setItem("localUser", JSON.stringify(userObject));
        nameInput.value = "";
    }
});


function showUser(){
    let webUser = localStorage.getItem("localUSer");
    
}