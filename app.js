
showUser()
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let submitButton = document.getElementById("submitButton");
let levelSelect = document.getElementById("levelSelect");

submitButton.addEventListener('click', e => {

    const nameInputValue = nameInput.value;
    const emailInputValue = emailInput.value;
    const levelSelectValue = levelSelect.value;




    if (nameInputValue) {
        let webUser = localStorage.getItem("localUser")

        if (webUser == null) {
            userObject = [];
        } else {
            userObject = JSON.parse(webUser)
        }

        userObject.push({
            'user': nameInputValue,
            'email': emailInputValue,
            'level': levelSelectValue,
        });

        localStorage.setItem("localUser", JSON.stringify(userObject));
        nameInput.value = "";
    }
    showUser()
});


function showUser() {
    let webUser = localStorage.getItem("localUser");
    if (webUser == null){
        userObject = [];
    } else {
        userObject = JSON.parse(webUser);
    }
    let html = "";
    let addedUserList = document.getElementById("addedUserList");
    userObject.forEach((item, index) => {
        html += `<tr>
                    <th scope="col">${index+1}</th>
                    <td>${item.user} </td>
                    <td>${item.email} </td>
                    <td>${item.level} </td>
                        <td><button type="button onclick="editUser(${index})" class="text-primary">Edit</button></td>

                        <td><button type="button onclick="editUser(${index})" class="text-danger">Delete</button></td>
                    </tr>`;
    });

    addedUserList.innerHTML = html;
}