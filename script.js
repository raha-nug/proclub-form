const text = document.getElementById("text");
const password = document.getElementById("password");
const content = document.getElementById("content");
const button = document.getElementById("show");
const submit = document.getElementById("submit");




button.addEventListener("click", function () {
  password.setAttribute("type", "text");
});

submit.addEventListener('click',function(){
    content.innerHTML = text.value
})


// untuk mengubah warna setiap kali input type color berubah
function ubahWarna(value) {
  console.log(value);
  document.body.style.backgroundColor = value;
}
