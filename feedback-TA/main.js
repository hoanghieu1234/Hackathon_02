let usersDB = JSON.parse(localStorage.getItem("item")) ?? [];
// Render
renderForm();
function renderForm() {
    const content = document.querySelector(".box-all");
    let contentList = "";
    usersDB.forEach((data, index) => {
        contentList += `
        <div class="box-1">
            <input type="button" value="${data.id}">
            <p>${data.name}</p>
            <div class="icon-1">
                <i class='bx bxs-edit 'onclick ="handleEdit(${data.id})"></i>
                <i class='bx bx-message-alt-x' onclick="handleDelete(${data.id})"></i>
            </div>
        </div>`;
    });
    content.innerHTML = contentList;
}

// Create
const user = {};
function handleClick(data) { 
    user.id = data.value;
}
function handleSend() {
     usersDB  = JSON.parse(localStorage.getItem("item")); 
    const commnetAdd = document.querySelector("#search").value;
    user.name = commnetAdd;
    usersDB.push(user);
    localStorage.setItem("item", JSON.stringify(usersDB));
    renderForm(user);
}
// Delete
function handleDelete(id) {
    usersDB.forEach((item,index) =>{
        if(item.id == id) {
            usersDB.splice(index,1);
        }
    })
    localStorage.setItem("item",JSON.stringify(usersDB));
    renderForm(usersDB);
}

