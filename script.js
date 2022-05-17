document.getElementById("submit").addEventListener('click', () => {
    console.log("Event listner")
    if (document.getElementById("Username").value === "Username" && document.getElementById("Password").value === "Password") {
        location.href = "home.html"
        arr = ["Username", "Password"]
        localStorage.setItem("pass", JSON.stringify(arr))
    }
    else {
        alert("User id or Password is incorrect!")
    }
})

function checkSaved() {
    arr = JSON.parse(localStorage.getItem("pass"))
    if (arr[0] === "Username", arr[1] === "Password") {
        location.href = "home.html"
    }
}

checkSaved()