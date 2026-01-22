/* ===== دارك و لايت مود ===== */
const toggle = document.getElementById("themeToggle");

if (toggle) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  });
}

/* ===== login ===== */
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // يمنع إعادة تحميل الصفحة

  const phone = document.getElementById("phone").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // تفريغ الرسالة القديمة
  error.textContent = "";
  error.style.color = "red";

  if (phone === "" || pass === "") {
    error.textContent = "يرجى ملء جميع الحقول";
    return;
  }

  if (phone.length < 11) {
    error.textContent = "رقم الهاتف غير صحيح";
    return;
  }

  if (pass.length < 8) {
    error.textContent = "كلمة المرور قصيرة";
    return;
  }

  // نجاح تسجيل الدخول
  error.style.color = "green";
  error.textContent = "تم تسجيل الدخول بنجاح";

  // تأخير بسيط قبل التحويل
  setTimeout(() => {
    window.location.href = "../dashaboard/dashboard.html";
  }, 800);
});