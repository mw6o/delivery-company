/* ===== دارك و لايت مود ===== */
const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

/* ===== login ===== */
const form = document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if(phone==="" || pass===""){
    error.textContent = "يرجى ملئ جميع الحقول";
    return;
  }

  if(phone.length < 11){
    error.textContent = "رقم الهاتف غير صحيح";
    return;
  }

  if(pass.length < 8){
    error.textContent = "كلمة المرور قصيرة";
    return;
  }

  error.style.color="green";
  error.textContent="تم تسجيل الدخول بنجاح";

  setTimeout(()=>{
    window.location.href = "../dashbord/dashboard.html";
  },1200);
});