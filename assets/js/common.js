// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.classList.toggle("active");
      const content = header.nextElementSibling;
      content.classList.toggle("show");
    });
  });

  document.querySelector(".hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu-sp").classList.toggle("show");

    if (this.classList.contains("active")) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  const btn = document.querySelector(".top-btn");
  window.onscroll = () => {
    if (scrollY > 200) {
      btn.classList.remove("nottop");
    } else {
      btn.classList.add("nottop");
    }
  };
  btn.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

  const menuLinks = document.querySelectorAll(".menu-a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      menuLinks.forEach((a) => a.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
});
