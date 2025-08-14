// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  // WP Cards
  const wpData = [
    {
      title: "1500+ SKUs",
      desc: "Sustainable products catalog."
    },
    {
      title: "34+ Countries Covered",
      desc: "Multi-modal freight."
    },
    {
      title: "139+ White Labelling Projects",
      desc: "Branding & packaging."
    },
    {
      title: "MOQ starts with 5 cbm",
      desc: "Flexible order size."
    }
  ];

  const wpContainer = document.getElementById("wp-cards-container");
  wpData.forEach((card) => {
    wpContainer.innerHTML += `
      <div class="wp-card">
        <h3>${card.title}</h3>
        <p>${card.desc}</p>
      </div>
    `;
  });

  // Services Section
  const servicesData = [
    {
      title: "Supplier Consolidation",
      desc: "Many vendors, one contact. No chaos.",
      icon: "icons/supplier.svg",
      bg: "#E0F2F1"
    },
    {
      title: "SKU Curation",
      desc: "Only products proven to sell in your market.",
      icon: "icons/curation.svg",
      bg: "#F3E5F5"
    },
    {
      title: "Freight Consolidation",
      desc: "One shipment from multiple factories.",
      icon: "icons/freight.svg",
      bg: "#E8EAF6"
    },
    {
      title: "Pre-Shipment QC",
      desc: "We inspect before it leaves India.",
      icon: "icons/qc.svg",
      bg: "#FFF3E0"
    },
    {
      title: "Lead Time Compliance",
      desc: "We ship when promised. No delays.",
      icon: "icons/timing.svg",
      bg: "#FFFDE7"
    },
    {
      title: "Destination Warehousing & 3PL",
      desc: "We store and deliver from your market.",
      icon: "icons/3pl.svg",
      bg: "#E8F5E9"
    }
  ];

  const servicesGrid = document.getElementById("services-grid");
  servicesGrid.innerHTML = servicesData.map(s => `
    <div class="card service-card">
      <div class="service-icon" style="background: ${s.bg}">
        <img src="${s.icon}" alt="${s.title} icon" loading="lazy">
      </div>
      <div class="service-text">
        <div class="font-semibold">${s.title}</div>
        <p class="text-sm muted-text mt-2">${s.desc}</p>
      </div>
    </div>
  `).join('');

  // Workflow Steps
  const flowSteps = [
    "Order Confirmation",
    "Manufacturing Begins",
    "First Quality Inspection",
    "Packaging Starts",
    "Final Quality Inspection",
    "Shipment Dispatch",
    "Shipment Sails & Documentation",
    "Warehouse Landing",
    "3PL Integration"
  ];

  const flowList = document.getElementById("flow-list");
  flowSteps.forEach((step, index) => {
    flowList.innerHTML += `
      <li class="flow-card">
        <div class="flow-number">${index + 1}</div>
        <div>${step}</div>
      </li>
    `;
  });

  // Reviews
  const reviewsGrid = document.getElementById("reviews-grid");
  const dummyReviews = [
    "Great service and eco-friendly products!",
    "Fast shipping and amazing customer support.",
    "Highly recommend for bulk orders!",
    "Best sourcing experience I’ve had with India."
  ];
  dummyReviews.forEach((review) => {
    reviewsGrid.innerHTML += `
      <div class="card">
        <p>${review}</p>
      </div>
    `;
  });

  // Contact Grid (kept for future extension)
  const contactGrid = document.getElementById("contact-grid");
  if (contactGrid) {
    contactGrid.innerHTML = `
      <div>
        <p><strong>Email:</strong> contact@arbhuenterprises.com</p>
        <p><strong>Phone:</strong> +91 6381509553</p>
      </div>
      <div>
        <p><strong>Location:</strong> India, Global Shipping Available</p>
      </div>
      <div>
        <p><strong>Business Hours:</strong> Mon–Sat, 10AM–6PM IST</p>
      </div>
    `;
  }

  // Quick Links for Product Categories
  const quickLinksContainer = document.getElementById("quick-links-container");
  const categories = [
    "All",
    "Palm Leaf Plates",
    "Birchwood Cutlery",
    "Bagasse Tableware",
    "Bamboo Tissue",
    "Bamboo Toothbrush",
    "Sal Leaf Disposables"
  ];

  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.className = "quick-link";
    if (index === 0) button.classList.add("active");
    quickLinksContainer.appendChild(button);
  });
});
