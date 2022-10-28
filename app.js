showUser();
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let levelSelect = document.getElementById("levelSelect");
let submitButton = document.getElementById("submitButton");
let saveUserButton = document.getElementById("saveUserButton");
let currentIndex = 0;

submitButton.addEventListener("click", (e) => {
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const levelSelectValue = levelSelect.value;

  if (nameInputValue) {
    let webUser = localStorage.getItem("localUser");

    if (webUser == null) {
      userObject = [];
    } else {
      userObject = JSON.parse(webUser);
    }

    userObject.push({
      user: nameInputValue,
      email: emailInputValue,
      level: levelSelectValue,
    });

    localStorage.setItem("localUser", JSON.stringify(userObject));
    nameInput.value = "";
  }
});

function showUser() {
  let webUser = localStorage.getItem("localUser");
  if (webUser == null) {
    userObject = [];
  } else {
    userObject = JSON.parse(webUser);
  }
  let html = "";
  let addedUserList = document.getElementById("addedUserList");
  userObject.forEach((item, index) => {
    html += `<tr>
                    <th scope="col">${index + 1}</th>
                    <td>${item.user} </td>
                    <td>${item.email} </td>
                    <td>${item.level} </td>
                        <td><button type="button" onclick="editUser(${index})" class="btn btn-primary btn-sm">Edit</button></td>

                        <td><button type="button" onclick="deleteUser(${index})" class="btn btn-danger btn-sm">Delete</button></td>
                    </tr>`;
  });

  addedUserList.innerHTML = html;
}

function editUser(index) {
  currentIndex = 0;
  let webUser = localStorage.getItem("localUser");
  let userObject = JSON.parse(webUser);

  nameInput.value = userObject[index]["user"];
  emailInput.value = userObject[index]["email"];
  levelSelect.value = userObject[index]["level"];

  submitButton.style.display = "none";
  saveUserButton.style.display = "inline-block";

  currentIndex = index;
  //añadir scroll up
}

saveUserButton.addEventListener("click", function (e) {
  let webUser = localStorage.getItem("localUser");
  let userObject = JSON.parse(webUser);

  userObject[currentIndex].user = nameInput.value;
  userObject[currentIndex].email = emailInput.value;
  userObject[currentIndex].level = levelSelect.value;
 
  submitButton.style.display = "none;";
  saveUserButton.style.display = "inline-block";

  localStorage.setItem("localUser", JSON.stringify(userObject));
  nameInput.value = "";
  emailInput.value = "";
  levelSelect.value = "";
  showUser();
});

function deleteUser(index){
let webUser = localStorage.getItem("localUser");
let userObject = JSON.parse(webUser);

userObject.splice(index, 1);

localStorage.setItem("localUser", JSON.stringify(userObject));
showUser();
}

