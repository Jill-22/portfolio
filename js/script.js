document.addEventListener("DOMContentLoaded", () => {
  const hiddenEls = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            observer.unobserve(entry.target);
          }, index * 150);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  hiddenEls.forEach((el) => observer.observe(el));
});

document.querySelectorAll(".project-slider").forEach((slider) => {
  const images = slider.querySelectorAll("img");
  let current = 0;

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((container) => {
    const images = container.querySelectorAll(".carousel-image");
    const dots = container.querySelectorAll(".dot");
    let index = 0;

    const showSlide = (i) => {
      images.forEach((img, idx) => {
        img.classList.toggle("active", idx === i);
        dots[idx].classList.toggle("active", idx === i);
      });
    };

    const nextSlide = () => {
      index = (index + 1) % images.length;
      showSlide(index);
    };

    let interval = setInterval(nextSlide, 3000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
      });
    });

    showSlide(index);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
