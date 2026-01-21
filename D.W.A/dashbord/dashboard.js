// Dark / Light
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change",()=>{
  document.body.classList.toggle("light");
});

// Sub Menus
document.querySelectorAll(".has-sub").forEach(item=>{
  item.addEventListener("click",()=>{
    const sub = item.querySelector(".sub");
    sub.style.display = sub.style.display === "block" ? "none" : "block";
  });
});

const notifBtn = document.getElementById("notifBtn");
const notifDropdown = document.getElementById("notifDropdown");

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  notifDropdown.style.display =
    notifDropdown.style.display === "block" ? "none" : "block";
});

// Close when clicking outside
document.addEventListener("click", () => {
  notifDropdown.style.display = "none";
});




// Sidebar Toggle (Mobile)
const menuBtn = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click",()=>{
  sidebar.classList.toggle("active");
});