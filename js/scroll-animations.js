// Scroll animations
const elements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
elements.forEach(el => observer.observe(el));

// Smooth scrolling for nav links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// =========================
// Plant Popup Functions
// =========================
function openPlantPopup(
  title,
  image,
  description,
  benefits = [],
  closeBtnColor = "white",
  closeBtnHoverColor = "red"
) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupHeaderImage").style.backgroundImage = `url('${image}')`;
  document.getElementById("popupDescription").textContent = description;

  const closeBtn = document.querySelector("#plantPopup .close-btn");
  closeBtn.style.color = closeBtnColor;

  // Set hover color dynamically
  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.color = closeBtnHoverColor;
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.color = closeBtnColor;
  });

  // Fill benefits list
  const benefitsList = document.getElementById("popupBenefits");
  benefitsList.innerHTML = "";
  benefits.forEach(benefit => {
    const li = document.createElement("li");
    li.textContent = benefit;
    benefitsList.appendChild(li);
  });

  document.getElementById("plantPopup").style.display = "flex";
  document.querySelector(".popup-scrollable").scrollTop = 0;
}



function closePlantPopup() {
  document.getElementById("plantPopup").style.display = "none";
}
