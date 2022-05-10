document.getElementById("submit").addEventListener('click', () => {
    console.log("Event listner")
    if (document.getElementById("Username").value === "Username" && document.getElementById("Password").value === "Password") {
        location.href = "home.html"
    }
    else {
        alert("User id or Password is incorrect!")
    }
})