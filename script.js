document.addEventListener("keydown", (e)=>{
    console.log(e);
    if(e.code === "Enter"){
        window.location.href = 'osnova.html'
    }
});



const body = document.querySelector('body')
const burger = document.querySelector('.burger')
const shaurma = document.querySelector('.shaurma')

    burger.onclick = () => {
        burger.classList.toggle('active')
        shaurma.classList.toggle('active')
        body.classList.toggle('active')
    }

