/*section*/
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");
    const windowHeight = window.innerHeight;
  
    function checkSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
  
            if (rect.top < windowHeight * 1.00) {
                section.classList.add("reveal");
            }
        });
    }
  
    window.addEventListener("scroll", checkSection);
    checkSection(); // Check for visible sections on page load
  });


  