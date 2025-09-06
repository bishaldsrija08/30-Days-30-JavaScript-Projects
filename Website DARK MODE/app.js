var icon = document.getElementById("icon")

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
}

var theme = localStorage.getItem("theme")
if (theme == "light") {
    icon.src = "/dark theme icon/moon.png"
    document.body.classList.remove("dark-theme")
} else if (theme == "dark") {
    icon.src = "/dark theme icon/sun.png"
    document.body.classList.add("dark-theme")
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "/dark theme icon/sun.png"
        localStorage.setItem("theme", "dark")
    } else {
        icon.src = "/dark theme icon/moon.png"
        localStorage.setItem("theme", "light")
    }
}