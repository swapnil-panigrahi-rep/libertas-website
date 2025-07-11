function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

function filterArticles(topic) {
  const allCards = document.querySelectorAll(".card");
  const toggle = document.querySelector(".dropdown-toggle");

  toggle.innerText = topic === 'all' ? "All Topics ▾" : topic.charAt(0).toUpperCase() + topic.slice(1) + " ▾";

  allCards.forEach(card => {
    const tags = card.getAttribute("data-tags");
    if (topic === 'all' || tags.includes(topic)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  document.getElementById("dropdownMenu").classList.remove("show");
}

// Close dropdown on outside click
window.addEventListener("click", function (e) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(e.target)) {
    document.getElementById("dropdownMenu").classList.remove("show");
  }
});

