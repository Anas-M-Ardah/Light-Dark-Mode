const isDark = true;
const nav = document.getElementById('nav');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');
const toggleIcon = document.getElementById('toggle-icon');
const toggleSwitch = document.querySelector("input[type='checkbox']");

// Dark or Light Images
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(isDark){
    isDark ? nav.style.backgroundColor = 'rgb(0 0 0 / 50%)' :  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    isDark ? textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' : textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    isDark ? toggleIcon.children[0].textContent = 'Dark Mode' : toggleIcon.children[0].textContent = 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(isDark);
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(!isDark);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(isDark)
    }
}
