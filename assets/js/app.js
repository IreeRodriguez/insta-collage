
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};

window.onload = function () {
    let button = document.getElementById('btn');
    
}

btn.addEventListener('click', function(event) { 
    event.preventDefault();
    let login = document.getElementById('login');
    let collage = document.getElementById('collage');
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var minpass = /^.{6,}$/;
    
    if (pattern.test(email) && minpass.test(password) && password !== '123456' ) {
        login.classList.add("d-none");
        collage.classList.remove("d-none");
    }

});

