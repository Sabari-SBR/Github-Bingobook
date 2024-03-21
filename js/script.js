
var settingsmenu = document.querySelector(".settings-menu");
var darkLightBtn = document.getElementById("dark-light-btn");


function settingsMenuToggle() {
        settingsmenu.classList.toggle("settings-menu-on");
}

darkLightBtn.onclick = function()
{
        darkLightBtn.classList.toggle("dark-light-btn-on");
        document.body.classList.toggle("dark-theme");

        if (localStorage.getItem("theme") == "light") {
                localStorage.setItem("theme", "dakr");
        }
        else {
                localStorage.setItem("theme", "light");
        }
}

if (localStorage.getItem("theme") == "light") {
        darkLightBtn.classList.remove("dark-light-btn-on");
        document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
        darkLightBtn.classList.add("dark-light-btn-on");
        document.body.classList.add("dark-theme");
}
else {
        localStorage.setItem("theme", "light");
}
