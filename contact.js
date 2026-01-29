// Scroll & load animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }else{
      entry.target.classList.remove("active");
    }
  });
},{threshold:0.25});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});
