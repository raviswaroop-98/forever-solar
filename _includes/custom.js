document.addEventListener("DOMContentLoaded", function () {
  const serviceTitleBoxes = document.querySelectorAll(".service-title-box");
  const serviceExplanationDisplay = document.getElementById(
    "service-explanation-display"
  );
  const explanationTitle = serviceExplanationDisplay.querySelector("h2");
  const explanationText = serviceExplanationDisplay.querySelector("p");

  const serviceDescriptions = {
    development: {
      title: "Development Engineering",
      description:
        "Our Development Engineering services focus on the initial phases of your project, including feasibility studies, conceptual design, site assessment, and preliminary system sizing. We help you lay a strong foundation for your solar or energy storage venture, ensuring technical viability and economic attractiveness. This phase is crucial for de-risking your investment and setting clear project objectives.",
    },
    detail: {
      title: "Detail Engineering",
      description:
        "In Detail Engineering, we provide comprehensive design packages that translate concepts into actionable plans. This includes detailed electrical schematics, civil and structural drawings, equipment specifications, bill of materials, and all necessary documentation for procurement and construction. Our meticulous approach ensures smooth project execution and compliance with all relevant standards.",
    },
    independent: {
      title: "Independent Engineering",
      description:
        "Our Independent Engineering services offer unbiased third-party review and due diligence for solar and energy storage projects. We provide critical assessments of technical designs, financial models, and project risks, supporting investors, lenders, and developers with expert insights and ensuring project bankability and long-term success.",
    },
    "power-systems": {
      title: "Power System Studies",
      description:
        "Power System Studies involve advanced analysis of electrical grids to ensure stable, reliable, and efficient integration of renewable energy sources. We conduct studies such as short-circuit analysis, load flow, protection coordination, and transient stability to mitigate risks and optimize system performance, ensuring grid compatibility and operational safety.",
    },
    bess: {
      title: "BESS Design Engineering",
      description:
        "Our Battery Energy Storage System (BESS) Design Engineering provides complete solutions for energy storage projects. This includes battery chemistry selection, inverter sizing, thermal management, safety systems, and control integration. We optimize BESS performance for various applications like peak shaving, load shifting, and grid support, maximizing efficiency and longevity.",
    },
  };

  // Function to update the explanation display
  function updateExplanation(serviceKey) {
    const data = serviceDescriptions[serviceKey];
    if (data) {
      explanationTitle.textContent = data.title;
      explanationText.textContent = data.description;

      // Remove 'active' class from all titles and add to the clicked one
      serviceTitleBoxes.forEach((box) => box.classList.remove("active"));
      document
        .querySelector(`[data-service-key="${serviceKey}"]`)
        .classList.add("active");
    } else {
      explanationTitle.textContent = "Service Not Found";
      explanationText.textContent = "Please select a valid service.";
      serviceTitleBoxes.forEach((box) => box.classList.remove("active"));
    }
  }

  // Set default explanation on page load
  updateExplanation("development"); // Display Development Engineering by default

  // Add click listeners to service title boxes
  serviceTitleBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      const serviceKey = this.dataset.serviceKey;
      updateExplanation(serviceKey);
    });
  });

  $(document).ready(function () {
    $(".slick-carousel-container").slick({
      infinite: true, // Enable infinite looping
      slidesToShow: 3, // Show 3 images at a time on larger screens
      slidesToScroll: 1, // Scroll 1 image at a time
      autoplay: true, // Optional: Auto-play the carousel
      autoplaySpeed: 2000, // Optional: Time between auto-advances
      dots: true, // Show navigation dots
      arrows: true, // Show navigation arrows
      responsive: [
        {
          breakpoint: 992, // md breakpoint
          settings: {
            slidesToShow: 2, // Show 2 images on medium screens
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // sm breakpoint
          settings: {
            slidesToShow: 1, // Show 1 image on small screens
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  const getQuoteButton = document.getElementById("get-free-quote-btn");
  const contactUsSection = document.getElementById("contact-us-section");
  const ProjectsSection = document.getElementById("projects-section");
  const ServicesSection = document.getElementById("services-section");

  const navbarContactLink = document.getElementById("navbar-contact-link");
  const navbarProjectsLink = document.getElementById("navbar-projects-link");
  const navbarServicesLink = document.getElementById("navbar-services-link");

  if (getQuoteButton && contactUsSection) {
    getQuoteButton.addEventListener("click", function () {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (navbarContactLink && contactUsSection) {
    navbarContactLink.addEventListener("click", function () {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // if (navbarProjectsLink && ProjectsSection) {
  //   navbarProjectsLink.addEventListener("click", function () {
  //     ProjectsSection.scrollIntoView({ behavior: "smooth" });
  //   });
  // }

  // if (navbarServicesLink && ServicesSection) {
  //     navbarServicesLink.addEventListener('click', function() {
  //         ServicesSection.scrollIntoView({ behavior: 'smooth' });
  //     });
  // }

  const scrollOffset = 60;

  if (ServicesSection) {
    // Check if the target section exists
    const scrollToServices = function (event) {
      // Only prevent default if it's a link (which it is for the navbar)
      if (event && event.target.tagName === "A") {
        event.preventDefault();
      }

      const elementPosition = ServicesSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - scrollOffset;

      // A threshold to prevent scrolling if already very close to the target
      const nearTargetThreshold = 10; // Pixels
      const currentScrollTop = window.pageYOffset;

      // Only scroll if the current scroll position is not already very close to the target offset position
      if (Math.abs(currentScrollTop - offsetPosition) > nearTargetThreshold) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (navbarContactLink) {
      navbarServicesLink.addEventListener("click", scrollToServices);
    }
  }

  if (ProjectsSection) {
    // Check if the target section exists
    const scrollToProjects = function (event) {
      // Only prevent default if it's a link (which it is for the navbar)
      if (event && event.target.tagName === "A") {
        event.preventDefault();
      }

      const elementPosition = ProjectsSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - scrollOffset;

      // A threshold to prevent scrolling if already very close to the target
      const nearTargetThreshold = 10; // Pixels
      const currentScrollTop = window.pageYOffset;

      // Only scroll if the current scroll position is not already very close to the target offset position
      if (Math.abs(currentScrollTop - offsetPosition) > nearTargetThreshold) {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (navbarContactLink) {
      navbarProjectsLink.addEventListener("click", scrollToProjects);
    }
  }
});
