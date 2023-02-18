function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light");

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) {

        img.setAttribute("src", "./assents/avatar-light.png")
    }
    else {

        img.setAttribute("src", "./assents/avatar.png")
    }
    
}

function youTube() {
    alert('Atualmente não possuo canal no YouTube')
}