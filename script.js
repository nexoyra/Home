// On load animation
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("active");
});

// Scroll reveal
const reveals = document.querySelectorAll(".card, .why h2, .subtitle, .cta, footer");

reveals.forEach(el => el.classList.add("reveal"));

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
window.addEventListener("scroll",()=>{
  const nav=document.querySelector(".navbar");
  if(window.scrollY>20){
    nav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
  }
});
const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  toggle.textContent="☀️";
}

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
    toggle.textContent="☀️";
  }else{
    localStorage.setItem("theme","light");
    toggle.textContent="🌙";
  }
});

