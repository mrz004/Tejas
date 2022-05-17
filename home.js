document.getElementById("logoutbtn").addEventListener("click", () => {
    localStorage.removeItem("pass")
    location.href = "index.html"
})

function showCard() {
    
}

function hideCard() {
    Array.from(document.getElementsByClassName("card")).forEach((element) =>{
        element.style.display = "none"
    })
    
}
