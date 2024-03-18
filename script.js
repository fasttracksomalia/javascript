document.addEventListener('DOMContentLoaded', () => {
    // Using getElementById
    const header = document.getElementById('header');
    header.style.color = "red"
    header.textContent = "I love China"



    // Using getElementsByName
    const inputsByName = document.getElementsByName('email');
    inputsByName[0].placeholder = "please enter your email address"

    // Using getElementsByTagName
    const paragraphs = document.getElementsByTagName('p');
    paragraphs[2].innerHTML = "What sball I show you"
    // Using getElementsByClassName
    const textClassElements = document.getElementsByClassName('text');
    textClassElements[1].innerHTML = "Greater London"

    // Using querySelector
    const firstButton = document.querySelector(".action-button");
    firstButton.textContent = "Dont CL"
    // Using querySelectorAll
    const allButtons = document.querySelectorAll('.action-button');
    allButtons[0].textContent = "Dont CLo"
});
