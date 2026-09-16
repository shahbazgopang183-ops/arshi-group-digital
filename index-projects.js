/* =============================================
   AG Portfolio – Index Page Featured Projects
   Fetches and renders 4 featured projects on the homepage
   ============================================= */

document.addEventListener('DOMContentLoaded', async () => {

  const featureContainer = document.getElementById('featureProjectContainer');
  const gridContainer = document.getElementById('featuredProjectGrid');
  
  if (!featureContainer || !gridContainer) return;

  function showFeaturedSkeletons() {
    featureContainer.innerHTML = `
      <div class="skeleton-card" style="display:flex;flex-direction:row;height:400px;grid-column:1/-1;">
        <div class="skeleton-img" style="width:60%;height:100%;"></div>
        <div class="skeleton-body" style="width:40%;padding:40px;">
          <div class="skeleton-line"></div><div class="skeleton-line"></div>
        </div>
      </div>
    `;
    gridContainer.innerHTML = `
      <div class="skeleton-card" style="height:350px"><div class="skeleton-img" style="height:200px"></div><div class="skeleton-body"><div class="skeleton-line"></div></div></div>
      <div class="skeleton-card" style="height:350px"><div class="skeleton-img" style="height:200px"></div><div class="skeleton-body"><div class="skeleton-line"></div></div></div>
      <div class="skeleton-card" style="height:350px"><div class="skeleton-img" style="height:200px"></div><div class="skeleton-body"><div class="skeleton-line"></div></div></div>
    `;
  }

  showFeaturedSkeletons();

  // Fetch 4 featured projects
  const featured = await ProjectsCMS.getFeatured(4);
  
  if (!featured || featured.length === 0) {
    featureContainer.innerHTML = '<p class="text-gray-500 py-10">Projects coming soon.</p>';
    gridContainer.innerHTML = '';
    return;
  }

  // First array item goes to the big Feature block
  const heroProject = featured[0];
  
  featureContainer.innerHTML = `
    <div class="feature-project gs-reveal">
      <div class="fp-image" style="background:linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);">
        ${heroProject.thumbnail 
          ? `<img src="${heroProject.thumbnail}" alt="${heroProject.title}" style="width:100%;height:100%;object-fit:cover;" />` 
          : `<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl"><i class="ph ph-image"></i></div>`
        }
      </div>
      <div class="fp-content">
        <h3 class="fp-title">${heroProject.title}</h3>
        <div class="fp-subtitle">${heroProject.category}</div>
        <p class="fp-desc">${heroProject.description || 'A complete end-to-end design and build. Featuring seamless performance and micro-interactions.'}</p>
        <div class="fp-meta">
          <div class="fp-meta-item">
            <div class="meta-label">Client</div>
            <div class="meta-value">${heroProject.client || 'Personal Project'}</div>
          </div>
          <div class="fp-meta-item">
            <div class="meta-label">Duration</div>
            <div class="meta-value">${heroProject.duration || 'N/A'}</div>
          </div>
          <div class="fp-meta-item">
            <div class="meta-label">Category</div>
            <div class="meta-value">${heroProject.category}</div>
          </div>
        </div>
        <a href="projects.html#${heroProject.id}" class="fp-link">View Project Details <i class="ph ph-arrow-right"></i></a>
      </div>
    </div>
  `;

  // Next 3 go to grid
  const rest = featured.slice(1);
  if (rest.length > 0) {
    gridContainer.innerHTML = `
      <div class="project-grid gs-reveal gs-stagger-parent">
        ${rest.map(p => `
          <div class="project-card gs-stagger-child">
            <div class="pc-image" style="background:linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);">
              ${p.thumbnail 
                ? `<img src="${p.thumbnail}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;" />`
                : `<div class="w-full h-full flex items-center justify-center text-gray-400 text-4xl"><i class="ph ph-image"></i></div>`
              }
              <div class="pc-overlay">
                <a href="projects.html#${p.id}" class="overlay-btn">View Project</a>
              </div>
            </div>
            <div class="pc-body">
              <h4 class="pc-title">${p.title}</h4>
              <div class="pc-tags">
                ${p.tags.slice(0, 8).map(t => `<span class="pc-tag">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    gridContainer.innerHTML = '';
  }

  // Trigger GSAP ScrollTrigger refresh so reveals work on new DOM
  setTimeout(() => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }, 100);

});
