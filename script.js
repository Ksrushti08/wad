document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Push data to an array
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(jsonData);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to the new page with the data list
    window.location.href = "dataList.html";
  });

