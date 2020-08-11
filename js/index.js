// Your code goes here
//Unique Events

const title = document.querySelector(".logo-heading");
title.addEventListener("click", () => {
    title.style.color = "hotpink";
});

const parText = document.querySelectorAll("p");
parText.forEach((p) => {
    p.addEventListener("mouseover", (e) => {
        e.target.style.color = "red";
        e.stopPropagation();
    });
    p.addEventListener("mouseleave", (e) => {
        e.target.style.color = "black";
    });
});

const body = document.querySelector('body');
body.addEventListener("click", (e) => {
    body.style.backgroundColor = "purple";
});
body.addEventListener("keydown", (e) => {
    body.style.color = "lime";
});
body.addEventListener("keyup", (e) => {
    body.style.color = "cyan";
});

function changeColor () {
    const header = document.querySelector('.main-navigation');
    header.addEventListener('click', () => {
        header.style.backgroundColor = 'hotpink';
    });
};

const largeImg = document.querySelectorAll("p");
largeImg.forEach((p) => {
    p.addEventListener("wheel", (e) => {
        e.target.style.fontSize = "40px";
    });
});

goText = document.querySelectorAll("h2");
goText.forEach((h2) => {
    h2.addEventListener('dblclick', (e) => {
        console.log('This is so neat!');
        e.stopPropagation();
    });
});

copyThis = document.querySelectorAll("p");
copyThis.forEach((p) => {
    p.addEventListener("copy", (ev) => {
        alert("You copied text!");
    });
});

const Heads = document.querySelectorAll("h2");
Heads.forEach((h2) => {
    h2.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});