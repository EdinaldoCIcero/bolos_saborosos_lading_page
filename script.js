// BOTÕES PRINCIPAIS

document.getElementById("btn-bolos").onclick = function(){

document.getElementById("bolos").scrollIntoView({
behavior:"smooth"
});

};


document.getElementById("btn-contato").onclick = function(){

document.getElementById("contato").scrollIntoView({
behavior:"smooth"
});

};



// NAVBAR LINKS

document.querySelectorAll(".navbar a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const id = this.getAttribute("href");

document.querySelector(id).scrollIntoView({
behavior:"smooth"
});

});

});