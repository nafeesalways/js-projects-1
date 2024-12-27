let on = document.querySelector(".on");
let off = document.querySelector(".off");
let img = document.querySelector(".img");

on.addEventListener("click", function () {
  img.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});
off.addEventListener("click", function () {
  img.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});

let inc = document.querySelector(".incre");
let input = document.querySelector(".input");
let dec = document.querySelector(".decre");
let btn = document.querySelector(".btn");
let menu = document.querySelector(".menu");
let pass = document.querySelector(".passwordToggler");
let inputidk = document.querySelector(".form-input input");

inc.addEventListener("click", function () {
  if (Number(input.value) < 10) {
    input.value = Number(input.value) + 1;
  } else {
    inc.style.cursor = "not-allowed";
  }
});

dec.addEventListener("click", function () {
  if (Number(input.value) <= 10) {
    if (Number(input.value) == 1) {
      dec.style.cursor = "not-allowed";
    } else {
      input.value = Number(input.value) - 1;
    }
  }
});

btn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  menu.style.background = `rgb(${red},${green},${blue})`;
});
// let password =(name)=>{
//  alert('Your password is ' + name);
// }
// pass.addEventListener('click',() =>  password('123456'));

let password = () => {
  // if(inputidk.type == 'password'){
  //   inputidk.type = 'text';
  //  }
  //   else{
  //     inputidk.type = 'password';
  //   }
  inputidk.type == 'password'
    ? inputidk.type = 'text'
    : inputidk.type = 'password'; //ternary operator
  inputidk.type == 'password'
    ? pass.innerHTML = `<i class="bi bi-eye-slash"></i>`
    : pass.innerHTML = `<i class="bi bi-eye"></i>`;
}

// let{type} = inputidk;
// type == 'password' ? type = 'text' : type = 'password';

// inputidk.type = type ;
// console.log(type);
// }
pass.addEventListener('click',password); 

const showTogglerBtn = () => {
    
  // Element.classList.add
  // Element.classList.remove
  console.log(inputidk.classList);
  

  inputidk.value.length > 6 ? 
  pass.classList.add('show') : 
  pass.classList.remove('show'); 
  
  
}
inputidk.addEventListener('keyup',showTogglerBtn );



let guest = {
  name: "John",
  age: "30",
  id: "1234",
  college: "mit",
};
const { name, age, id } = guest; //destructuring

console.log(guest.name, guest.age, guest.id);


const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event) => {

  const  {pageX: left, pageY: top} = event;
  console.log(top);
  
  cursor.style.top = top+'px'
  cursor.style.left = left+'px'
  cursorSm.style.top = top+'px'
  cursorSm.style.left = left+'px'
  
  
}


window.addEventListener('mousemove', customMouseCursor);

