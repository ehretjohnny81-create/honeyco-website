document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("quoteForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const location = document.getElementById("location").value.trim();
  const details = document.getElementById("details").value.trim();

  const subject = encodeURIComponent("Honeyco Junk Removal Quote Request");
  const body = encodeURIComponent(
`Honeyco Junk Removal Quote Request

Name: ${name}
Phone: ${phone}
City / Area: ${location || "Not provided"}

Items / Job Details:
${details}

Please contact me with a quote.`
  );

  window.location.href =
    `mailto:honeycotrans@gmail.com?subject=${subject}&body=${body}`;
});
