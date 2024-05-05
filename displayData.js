document.addEventListener("DOMContentLoaded", function () {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userList = document.getElementById("userList");
  users.forEach(function (user) {
    const listItem = document.createElement("li");
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
    userList.appendChild(listItem);
  });
});
