// Search functionality
const searchInput = document.getElementById("searchInput");
const blogCards = document.querySelectorAll(".blog-card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  blogCards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    if(title.includes(value)){
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
});

// Scroll animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
},{threshold:0.25});

document.querySelectorAll(".reveal").forEach(el=>{
  observer.observe(el);
});
