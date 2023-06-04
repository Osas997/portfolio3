
//nav blur fixed
window.addEventListener("scroll", () =>{
    const nav = document.querySelector('nav')
    const navOff = nav.offsetTop;
    window.scrollY > navOff ? nav.classList.add('nav-fixed') : nav.classList.remove('nav-fixed')
        
})
//hamburger
const tombol = document.querySelector("#toogle")
tombol.addEventListener("click", () => {
    const navRespon = document.querySelector("nav ul")
    navRespon.classList.toggle("datang")
})

//darkmode
// const toDark = document.getElementById("dark")
// toDark.addEventListener('click', () => {
//     const html = document.querySelector('html')
//     html.classList.toggle('dark')
// })
