function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
};

window.onload = function () {
    let button = document.getElementById('btn');
    getLocal();    
}

btn.addEventListener('click', function(event) { 
    event.preventDefault();
    let login = document.getElementById('login');
    let collage = document.getElementById('collage');
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let minpass = /^.{6,}$/;
    
    if (pattern.test(email) && minpass.test(password) && password !== '123456' ) {
        login.classList.add("d-none");
        collage.classList.remove("d-none");
        saveLocal();
    }
});

function saveLocal () {
    let user = {
        email : document.getElementById('email').value,
        password : document.getElementById('pass').value
    };

    localStorage.setItem('user', JSON.stringify(user));
}

function getLocal () {
    if (localStorage.getItem('user')){
        let user = JSON.parse(localStorage.getItem('user'));
        document.getElementById('email').value = user.email;
        document.getElementById('pass').value = user.password;
        
        console.log(user);
    } else {
        document.getElementById('email').value = '';
        document.getElementById('pass').value = '';
    }
    
}
