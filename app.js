/**
 * AGENCY 47 REAL ESTATE DEVELOPER
 * Main Application Logic & Listings Data
 */

// ==========================================
// 1. FEATURED INVENTORY DATA STORE
// ==========================================
const PROPERTIES_DATA = [
  {
    id: "prop-1",
    sector: "E-12",
    sectorTag: "Sector E-12",
    title: "3 Dubal Road — Prime Residential Plot",
    type: "plot",
    category: "Plots",
    size: "50x90 (1 Kanal / 500 Sq Yds)",
    dimensions: "50 × 90 ft",
    status: "For Sale",
    price: "PKR 4.25 Crore",
    image: "assets/plot-e12.jpg",
    altText: "Prime 1 Kanal plot on 3 Dubal Road CDA sector E-12 Islamabad with scenic Margalla Hills background",
    description: "Exceptional investment opportunity located on 3 Dubal Road in CDA Sector E-12. Boasts clear legal status, direct 60-foot wide asphalt road access, underground electrification in progress, and panoramic vistas of the Margalla hills.",
    highlights: [
      "CDA Sector Demarcation Verified",
      "Prime 50x90 1-Kanal Standard Cut",
      "Immediate Capital Appreciation Potential",
      "Scenic Margalla Hills Backdrop"
    ],
    features: {
      category: "Residential Land",
      possession: "Under Development (CDA Fast-Track)",
      roadWidth: "60 Feet",
      facing: "North-East Margalla View"
    }
  },
  {
    id: "prop-2",
    sector: "F-11",
    sectorTag: "Sector F-11",
    title: "Executive Heights — 4 Bed Luxury Flat",
    type: "flat",
    category: "Flats & Apartments",
    size: "4 Bed Luxury Apartment",
    dimensions: "Approx. 2,850 Sq Ft",
    status: "For Sale",
    price: "PKR 6.75 Crore",
    image: "assets/apartment-f11.jpg",
    altText: "Luxury 4-bedroom apartment in Executive Heights Sector F-11 Islamabad with modern architecture",
    description: "Prestigious living in one of Islamabad's most established sectors. This high-floor 4-bedroom executive apartment features panoramic glass balconies, premium marble flooring, servant quarter, and 24/7 gated security.",
    highlights: [
      "Prime Location in Developed Sector F-11",
      "4 Spacious En-Suite Bedrooms + Powder Room",
      "Dedicated High-Speed Passenger & Cargo Elevators",
      "Standby Power Generator & Reserved Basement Parking"
    ],
    features: {
      bedrooms: "4 En-Suite",
      bathrooms: "5 Bathrooms",
      parking: "2 Covered Slots",
      flooring: "Imported Spanish Porcelain & Marble"
    }
  },
  {
    id: "prop-3",
    sector: "E-11",
    sectorTag: "Sector E-11",
    title: "Medical Corner — Prime Corner Plot",
    type: "plot",
    category: "Plots",
    size: "42x85 (approx. 396 Sq Yds)",
    dimensions: "42 × 85 ft",
    status: "For Sale",
    price: "PKR 3.90 Crore",
    image: "assets/plot-e12.jpg",
    altText: "Corner residential plot 42x85 near Medical Corner in sector E-11 Islamabad",
    description: "Rare corner plot located right by the landmark Medical Corner hub in E-11. Ideal for high-end multi-unit residence or immediate construction with dual-road accessibility.",
    highlights: [
      "Prime Two-Side Open Corner Position",
      "Dual Wide Road Access",
      "All Utilities (Electricity, Gas, Water) Readily Available",
      "Proximity to Commercial Amenities & Schools"
    ],
    features: {
      category: "Residential Corner Plot",
      possession: "Immediate / Construction Ready",
      roadWidth: "40 & 50 Feet Dual Road",
      facing: "Corner Open"
    }
  },
  {
    id: "prop-4",
    sector: "Airport Enclave",
    sectorTag: "Airport Enclave",
    title: "Commercial Plot for Multi-Storey Plaza",
    type: "commercial",
    category: "Commercial",
    size: "Commercial Multi-Storey Plot",
    dimensions: "100 × 100 ft (1,111 Sq Yds)",
    status: "For Sale",
    price: "PKR 12.50 Crore",
    image: "assets/commercial-plaza.jpg",
    altText: "Commercial multi-storey plot in Airport Enclave Islamabad near main highway",
    description: "High-yield commercial opportunity positioned strategically near the Islamabad International Airport corridor and Kashmir Highway links. Approved for commercial plaza, corporate offices, or retail outlets.",
    highlights: [
      "Direct Main Boulevard Access",
      "Approved for Multi-Storey Commercial Development",
      "High Rental Yield & Corporate Tenant Appeal",
      "Ample Dedicated Front Parking Area"
    ],
    features: {
      category: "Commercial Land",
      approval: "Commercial High-Rise Approved",
      frontage: "100 Feet Main Boulevard",
      idealFor: "Plaza / Corporate Headquarter / Hotel"
    }
  },
  {
    id: "prop-5",
    sector: "G-11/3",
    sectorTag: "Sector G-11, 3",
    title: "The Arch — 7th Floor Flat with Skyline View",
    type: "flat",
    category: "Flats & Apartments",
    size: "3 Bed Executive Flat",
    dimensions: "Approx. 2,150 Sq Ft",
    status: "For Sale",
    price: "PKR 4.80 Crore",
    image: "assets/apartment-f11.jpg",
    altText: "7th floor apartment in The Arch G-11/3 Islamabad with Margalla skyline view",
    description: "Elevated modern lifestyle in 'The Arch', Sector G-11/3. Located on the 7th floor, enjoying uninterrupted views of the Margalla Hills and lush Islamabad greenery. Features designer Italian kitchen cabinetry and soundproof double glazing.",
    highlights: [
      "7th Floor Panoramic Corner Unit",
      "G-11/3 Prime Proximity to Courts & Metro Hub",
      "Designer Italian Kitchen & Luxury Fixtures",
      "Secure RFID Entry & 24/7 Attended Reception"
    ],
    features: {
      bedrooms: "3 En-Suite",
      bathrooms: "4 Bathrooms",
      floor: "7th Floor (Penthouse Level)",
      condition: "Brand New / Unoccupied"
    }
  },
  {
    id: "prop-6",
    sector: "E-11/1",
    sectorTag: "Sector E-11, 1",
    title: "3-Story Luxury Designer House",
    type: "house",
    category: "Houses",
    size: "50x90 (1 Kanal / 500 Sq Yds)",
    dimensions: "50 × 90 ft (Triple Storey)",
    status: "For Sale",
    price: "PKR 14.50 Crore",
    image: "assets/house-e11.jpg",
    altText: "Luxury 3-storey 1 Kanal villa in sector E-11/1 Islamabad with modern travertine facade",
    description: "Architect-designed masterwork in E-11/1. Built with premium reinforced concrete, Italian travertine facade cladding, imported Turkish sanitary ware, solid teak doors, and three independent living floors with servant facilities.",
    highlights: [
      "1 Kanal (50x90) Prime CDA Sector E-11/1",
      "6 Spacious Master Bedrooms with Walk-in Closets",
      "Triple Storey with Multiple Kitchens & Lounges",
      "3-Car Porch & Landscaped Front Green Area"
    ],
    features: {
      storeys: "3 Full Floors (Ground + 1st + Rooftop Suite)",
      bedrooms: "6 Bedrooms",
      bathrooms: "7 Bathrooms",
      carPorch: "3 Large SUVs"
    }
  },
  {
    id: "prop-7",
    sector: "E-11/3",
    sectorTag: "Sector E-11, 3",
    title: "Dubai Unit Architectural House (Investor Rate)",
    type: "house",
    category: "Houses",
    size: "50x90 (1 Kanal / 500 Sq Yds)",
    dimensions: "50 × 90 ft (Dubai Design Unit)",
    status: "For Sale",
    price: "PKR 15.90 Crore",
    image: "assets/house-dubai-unit.jpg",
    altText: "Dubai unit architectural 1 Kanal house with cantilevered glass balconies and swimming pool in E-11/3 Islamabad",
    description: "Inspired by Emirates luxury villas, this exclusive 'Dubai Unit' in E-11/3 offers bespoke minimalist luxury. Highlights include double-height glass atrium, temperature-controlled private plunge pool, smart home automation, and imported Spanish marble throughout.",
    highlights: [
      "Exclusive Dubai Villa Modern Architecture",
      "Private Swimming Pool & Sun Deck",
      "Full Smart-Home Lighting & Climate Automation",
      "Offered at Special Investor Pre-Listing Rate"
    ],
    features: {
      style: "Emirates Contemporary Architecture",
      bedrooms: "5 Ultra-Luxury Suites",
      specialAmenities: "Swimming Pool, Elevator-Ready, Cinema Hall",
      structure: "Steel & Travertine Frame Construction"
    }
  }
];

// ==========================================
// 2. DOM INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderInventory(PROPERTIES_DATA);
  setupFilterTabs();
  setupActionPills();
  setupPropertyModal();
  setupInquiryModal();
  setupAddressToggle();
  setupMobileNav();
  setupContactForm();
  setupSectorBadges();
  setupHeaderScroll();
});

// ==========================================
// 3. RENDER PROPERTY CARDS
// ==========================================
function renderInventory(properties) {
  const container = document.getElementById("propertiesGrid");
  if (!container) return;

  if (properties.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No listings found matching this filter category.</p>
        <button class="btn btn-outline" onclick="filterProperties('all')">View All Listings</button>
      </div>
    `;
    return;
  }

  container.innerHTML = properties.map(prop => `
    <article class="property-card" data-id="${prop.id}" data-type="${prop.type}">
      <div class="card-image-wrap">
        <img src="${prop.image}" alt="${prop.altText}" loading="lazy" class="card-image" />

        <!-- Status Badge -->
        <span class="badge-status ${prop.status.toLowerCase().replace(' ', '-')}">
          ${prop.status}
        </span>

        <!-- Sector Tag -->
        <span class="badge-sector">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          ${prop.sectorTag}
        </span>
      </div>

      <div class="card-body">
        <div class="card-header-info">
          <span class="card-category">${prop.category}</span>
          <span class="card-size">${prop.size}</span>
        </div>

        <h3 class="card-title">${prop.title}</h3>
        
        <p class="card-desc">${prop.description.substring(0, 105)}...</p>

        <div class="card-footer">
          <div class="card-price-wrap">
            <span class="price-label">Price / Value:</span>
            <strong class="card-price">${prop.price}</strong>
          </div>

          <button class="btn btn-gold btn-sm view-details-btn" data-id="${prop.id}">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click listener to detail buttons
  container.querySelectorAll(".view-details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-id");
      openPropertyModal(id);
    });
  });
}

// ==========================================
// 4. CATEGORY FILTER TABS
// ==========================================
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-filter");
      filterProperties(category);
    });
  });
}

function filterProperties(category) {
  if (category === "all") {
    renderInventory(PROPERTIES_DATA);
  } else {
    const filtered = PROPERTIES_DATA.filter(p => p.type === category);
    renderInventory(filtered);
  }
}

// ==========================================
// 5. HERO ACTION PILLS (Invest / Buy / Sell / Rent)
// ==========================================
function setupActionPills() {
  const pills = document.querySelectorAll(".action-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const action = pill.getAttribute("data-action");
      
      // Update UI active state
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      if (action === "buy") {
        document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
        filterProperties("all");
      } else if (action === "rent") {
        document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
        // Since sample inventory is mostly sales, inform user or filter
        openInquiryModal("Rentals & Leasing in Islamabad CDA Sectors");
      } else if (action === "invest") {
        openInquiryModal("High-Return CDA Investment Opportunities");
      } else if (action === "sell") {
        openInquiryModal("List / Sell My Property with Agency 47");
      }
    });
  });
}

// ==========================================
// 6. PROPERTY DETAIL MODAL (<dialog>)
// ==========================================
let currentProperty = null;

function setupPropertyModal() {
  const modal = document.getElementById("propertyModal");
  const closeBtn = document.getElementById("closePropertyModal");

  if (!modal) return;

  closeBtn?.addEventListener("click", () => {
    modal.close();
  });

  // Close when clicking outside dialog backdrop
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  // WhatsApp prefilled inquiry button in modal
  const waBtn = document.getElementById("modalWhatsAppBtn");
  waBtn?.addEventListener("click", () => {
    if (!currentProperty) return;
    const msg = encodeURIComponent(
      `Hello Agency 47 Real Estate Developer,\n\nI saw your listing on www.agency47.com:\n"${currentProperty.title}" in Sector ${currentProperty.sector} (${currentProperty.size}) priced at ${currentProperty.price}.\n\nPlease share availability and legal documentation details.`
    );
    window.open(`https://wa.me/923329600009?text=${msg}`, "_blank");
  });
}

function openPropertyModal(propId) {
  const prop = PROPERTIES_DATA.find(p => p.id === propId);
  if (!prop) return;

  currentProperty = prop;
  const modal = document.getElementById("propertyModal");
  if (!modal) return;

  document.getElementById("modalImg").src = prop.image;
  document.getElementById("modalImg").alt = prop.altText;
  document.getElementById("modalSector").textContent = prop.sectorTag;
  document.getElementById("modalTitle").textContent = prop.title;
  document.getElementById("modalSize").textContent = prop.size;
  const modalPriceEl = document.getElementById("modalPrice");
  if (modalPriceEl) {
    modalPriceEl.textContent = prop.price;
  }
  document.getElementById("modalDesc").textContent = prop.description;

  // Features list
  const highlightsContainer = document.getElementById("modalHighlights");
  if (highlightsContainer) {
    highlightsContainer.innerHTML = prop.highlights.map(h => `
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${h}</span>
      </li>
    `).join("");
  }

  // Specifications table
  const specsContainer = document.getElementById("modalSpecs");
  if (specsContainer) {
    specsContainer.innerHTML = Object.entries(prop.features).map(([key, val]) => `
      <div class="spec-row">
        <span class="spec-key">${formatSpecKey(key)}:</span>
        <span class="spec-val">${val}</span>
      </div>
    `).join("");
  }

  modal.showModal();
}

function formatSpecKey(key) {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());
}

// ==========================================
// 7. GENERAL INQUIRY MODAL
// ==========================================
function setupInquiryModal() {
  const modal = document.getElementById("inquiryModal");
  const closeBtn = document.getElementById("closeInquiryModal");
  const form = document.getElementById("inquiryForm");

  if (!modal) return;

  closeBtn?.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("inqName").value;
    const phone = document.getElementById("inqPhone").value;
    const topic = document.getElementById("inqTopic").value;
    const msgText = document.getElementById("inqMessage").value;

    const waText = encodeURIComponent(
      `*New Inquiry via Website (www.agency47.com)*\nName: ${name}\nPhone: ${phone}\nTopic: ${topic}\nMessage: ${msgText}`
    );

    // Provide choice to launch WhatsApp or show confirmation
    window.open(`https://wa.me/923329600009?text=${waText}`, "_blank");
    modal.close();
    showToast("Thank you! Your inquiry is being sent directly to CEO Aalamgeer Khan's desk via WhatsApp.");
  });
}

function openInquiryModal(defaultTopic = "General Real Estate Advisory") {
  const modal = document.getElementById("inquiryModal");
  if (!modal) return;
  const topicSelect = document.getElementById("inqTopic");
  if (topicSelect) {
    // If option exists, select it or add it
    let found = false;
    for (let opt of topicSelect.options) {
      if (opt.value === defaultTopic) {
        opt.selected = true;
        found = true;
        break;
      }
    }
    if (!found) {
      const opt = new Option(defaultTopic, defaultTopic, true, true);
      topicSelect.add(opt);
    }
  }
  modal.showModal();
}

// ==========================================
// 8. OFFICE ADDRESS VERIFICATION TOGGLE
// ==========================================
function setupAddressToggle() {
  const toggleButtons = document.querySelectorAll(".address-toggle-btn");
  const addressText = document.getElementById("activeAddressDisplay");
  const addressNotice = document.getElementById("addressStatusNotice");
  const mapFrame = document.getElementById("gmapFrame");

  // Verified coordinates / embed queries for both locations
  const addresses = {
    pamphlet: {
      title: "Office #35, 1st Floor, Crown Business Center, E-11/2, Islamabad",
      detail: "Exact address stated in official print marketing materials & pamphlets.",
      mapQuery: "Crown+Business+Center+E-11+Islamabad"
    },
    gmaps: {
      title: "Office #06, 2nd Floor, Taha Arcade, MPCHS E-11/3, Islamabad",
      detail: "Address indexed on Google Maps business listing (4.8★ rating).",
      mapQuery: "Taha+Arcade+E-11+MPCHS+Islamabad"
    }
  };

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const locationKey = btn.getAttribute("data-location");
      const loc = addresses[locationKey];
      if (loc && addressText) {
        addressText.innerHTML = `<strong>${loc.title}</strong>`;
        if (addressNotice) {
          addressNotice.textContent = loc.detail;
        }
        if (mapFrame) {
          mapFrame.src = `https://maps.google.com/maps?q=${loc.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        }
      }
    });
  });
}

// ==========================================
// 9. CDA SECTOR DIRECTORY CHIPS
// ==========================================
function setupSectorBadges() {
  const chips = document.querySelectorAll(".sector-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const sector = chip.getAttribute("data-sector");
      // Find if we have listings for this sector
      const matching = PROPERTIES_DATA.filter(p => p.sector.includes(sector));
      if (matching.length > 0) {
        document.getElementById("inventory")?.scrollIntoView({ behavior: "smooth" });
        renderInventory(matching);
        showToast(`Showing available listings in Sector ${sector}`);
      } else {
        openInquiryModal(`Property Inquiry for CDA Sector ${sector}`);
      }
    });
  });
}

// ==========================================
// 10. CONTACT FORM SUBMISSION
// ==========================================
function setupContactForm() {
  const form = document.getElementById("mainContactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contactName").value;
    const phone = document.getElementById("contactPhone").value;
    const sector = document.getElementById("contactSector")?.value || "All CDA Sectors";
    const msg = document.getElementById("contactMsg").value;

    const waMsg = encodeURIComponent(
      `*New Contact Form Message (Agency 47 Website)*\n` +
      `Client Name: ${name}\n` +
      `Phone Number: ${phone}\n` +
      `Target Sector: ${sector}\n` +
      `Message: ${msg}`
    );

    // Prompt user to route immediately to WhatsApp for fastest response
    window.open(`https://wa.me/923329600009?text=${waMsg}`, "_blank");
    showToast("Inquiry generated! Directing to WhatsApp for instant 1-on-1 assistance.");
    form.reset();
  });
}

// ==========================================
// 11. MOBILE DRAWER & NAVBAR BEHAVIOR
// ==========================================
function setupMobileNav() {
  const burger = document.getElementById("mobileMenuToggle");
  const closeBtn = document.getElementById("mobileMenuClose");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!burger || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.toggle("open");
    burger.classList.toggle("active", isOpen);
    overlay?.classList.toggle("active", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  };

  const closeNav = () => {
    navMenu.classList.remove("open");
    burger.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
  };

  burger.addEventListener("click", toggleNav);
  closeBtn?.addEventListener("click", closeNav);
  overlay?.addEventListener("click", closeNav);

  navLinks.forEach(link => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      closeNav();
    }
  });
}

// ==========================================
// 12. STICKY HEADER & SCROLL BEHAVIOR
// ==========================================
function setupHeaderScroll() {
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (header) {
      if (scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }
  }, { passive: true });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================
// 13. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}
