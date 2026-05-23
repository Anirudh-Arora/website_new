/**
 * ════════════════════════════════════════════════════════════
 *  CONTENT.JS — Anirudh Arora Portfolio
 *  ─────────────────────────────────────────────────────────
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR SITE.
 *
 *  HOW TO USE:
 *  • Add a new publication?  → Add an object to PUBLICATIONS
 *  • New award?              → Add to AWARDS
 *  • New project?            → Add to PROJECTS
 *  • New talk?               → Add to TALKS
 *  • Change your bio?        → Edit BIO section
 *  • New affiliation?        → Edit AFFILIATIONS
 *
 *  After editing, just save and push to GitHub. Done.
 * ════════════════════════════════════════════════════════════
 */

window.CONTENT = {

  /* ── Personal ──────────────────────────────────────────── */
  name:     "Anirudh Arora",
  email:    ["anirudh21","iiserb.ac.in"].join("@"),
  phone:    "+91-7987188136",
  location: "KAUST, Thuwal, Saudi Arabia",

  typingRoles: [
    "Climate Researcher",
    "Atmospheric Scientist",
    "MS Student @ KAUST",
    "Environmental Scientist",
  ],

  tagline: "Studying climate risk where uncertainty matters most: South Asian monsoon dynamics, aerosol and geoengineering impacts, and the credibility of global climate models over the Global South.",

  /* ── Social Links ──────────────────────────────────────── */
  social: {
    linkedin:      "https://www.linkedin.com/in/anirudharora",
    googleScholar: "https://scholar.google.com/citations?user=kYFyXtcAAAAJ&hl=en",
    orcid:         "",   // e.g. "https://orcid.org/0000-0000-0000-0000"
    bluesky:       "",
    github:        "",
    twitter:       "",
  },

  /* ── Contact Form ────────────────────────────────────────
     Create a Formspree form and paste only the ID here.
     Example endpoint: https://formspree.io/f/xpzgbwkr → formspreeId: "xpzgbwkr"
     If empty, the contact page uses a mailto fallback instead of a broken form.
  */
  formspreeId: "xaqkbegv",

  /* ── Hero Affiliations ─────────────────────────────────── */
  affiliations: [
    { label: "KAUST · CLIMATics Group", dot: "blue", icon: "" },
    { label: "IIT Delhi · DST CoE", dot: "sand", icon: "" },
    { label: "Rhodes Scholarship India Finalist", dot: "none", icon: "" },
  ],

  /* ── Stats Row ─────────────────────────────────────────── */
  stats: [
    { number: "5+",   label: "Publications & Preprints" },
    { number: "2",    label: "Research Institutions"    },
    { number: "9.15", label: "GPA (out of 10)"         },
    { number: "8+",   label: "Honours & Awards"         },
  ],

  /* ── Bio ───────────────────────────────────────────────── */
  bio: {
    transition: "Final-year BS at IISER Bhopal · Now a visiting researcher at <strong>KAUST's CLIMATics Group</strong>, co-supervised by Prof. Ibrahim Hoteit for my master's thesis.",
    paragraphs: [
      "My work sits at the intersection of <strong>atmospheric dynamics</strong>, <strong>climate model evaluation</strong>, and <strong>solar geoengineering</strong>. I use CMIP5/CMIP6 ensembles, GeoMIP simulations, reanalysis products, and large climate datasets to ask where models are credible, where they fail, and what that means for decisions.",
      "The scientific center of gravity is South Asia and the Global South: regions where monsoon risk, aerosol forcing, data gaps, and model uncertainty are not abstract technical issues but practical constraints on climate adaptation.",
      "Alongside the modeling, I work on the <strong>ethics and governance of climate action</strong>: how evidence becomes policy, how uncertainty should be communicated, and how public reason can support more equitable climate decisions.",
    ],
    fullParagraphs: [
      "I am a climate researcher interested in <strong>how atmospheric systems respond to natural variability, anthropogenic forcing, and proposed interventions</strong> — from the Indian summer monsoon to the regional consequences of stratospheric aerosol injection.",
      "My work combines statistical analysis of CMIP5/CMIP6 multi-model ensembles, offline processing of large NetCDF datasets with Python (Xarray, NumPy, Matplotlib), and decision-theoretic approaches to climate policy. I have been fortunate to work with Prof. Saroj Mishra (IIT Delhi) and Prof. Ibrahim Hoteit (KAUST).",
      "A recurring question in my work is credibility: when a global climate model performs poorly over the Global South, what does that mean for the communities expected to use its projections? That question is scientific, political, and ethical at the same time.",
      "Beyond modelling, I am invested in <strong>science communication and climate governance</strong>. I have co-hosted a podcast on climate governance, authored commentary for The India Forum, and presented at the GeoMIP 2024 meeting at Cornell University. I was shortlisted as a <strong>Rhodes Scholarship India finalist</strong>.",
      "Outside research I lead <em>Prayaas</em>, a volunteer organisation working with underprivileged communities through education, and I was formerly president of IISER Bhopal's Debating Society.",
    ],
  },

  /* ── Skills ────────────────────────────────────────────── */
  skills: [
    "Python", "Xarray", "NumPy", "Matplotlib", "NCL",
    "MATLAB", "Mathematica", "CDO", "LaTeX", "SQL", "C", "HTML/CSS",
    "CMIP6", "GeoMIP", "NetCDF",
  ],

  /* ── Education ─────────────────────────────────────────── */
  education: [
    {
      degree:      "Visiting Researcher",
      institution: "King Abdullah University of Science and Technology (KAUST)",
      location:    "Thuwal, Saudi Arabia",
      period:      "July 2025 – Present",
      detail:      "Master's thesis under Prof. Ibrahim Hoteit (CLIMATics Group). Quantifying internal variability in large ensemble climate simulations.",
      badge:       "Current",
    },
    {
      degree:      "BS Environmental Sciences",
      institution: "IISER Bhopal",
      location:    "Bhopal, India",
      period:      "2021 – 2025",
      detail:      "CPI: 9.15/10 · CNR Rao Prize for highest CPI (10/10) in first semester",
      badge:       "",
    },
    {
      degree:      "High School STEM Diploma",
      institution: "St. Paul H.S. School",
      location:    "Indore, India",
      period:      "2006 – 2021",
      detail:      "10th (CBSE): 95.2% · 12th (CBSE): 95.6%",
      badge:       "",
    },
  ],

  /* ── Experience ────────────────────────────────────────── */
  experience: [
    {
      role:       "Visiting Researcher",
      org:        "CLIMATics Group, KAUST",
      location:   "Saudi Arabia",
      period:     "July 2025 – Present",
      supervisor: "Prof. Ibrahim Hoteit",
      bullets: [
        "Co-supervised for master's thesis on large ensemble simulations.",
        "Quantifying internal variability and uncertainty in regional climate responses.",
      ],
    },
    {
      role:       "Research Intern",
      org:        "DST Centre of Excellence for Climate Information, IIT Delhi",
      location:   "New Delhi, India",
      period:     "May 2023 – Present",
      supervisor: "Prof. Saroj Mishra",
      bullets: [
        "CMIP5/CMIP6 multi-model ensemble analysis of historical precipitation and monsoon variability over India.",
        "Developed a novel framework for sequential decision-making for efficient climate actions.",
        "Investigated circulation-driven precipitation changes under solar geoengineering (GeoMIP G1, G6sulfur).",
        "Presented results at the 14th Annual GeoMIP Meeting 2024, Cornell University.",
        "First-authored commentary on China Plus One strategy and transboundary carbon migration.",
        "Multi-scale analysis of air pollution sources over the Indo-Gangetic Plain.",
      ],
    },
    {
      role:       "Research Intern — Ethnography Studies",
      org:        "IISER Bhopal",
      location:   "Bhopal, India",
      period:     "Aug 2023 – Apr 2024",
      supervisor: "Dr. Renny Thomas",
      bullets: [
        "Field ethnography on the socio-cultural importance of Garuda Purana.",
        "Comprehensive ethnographic study of two distinct laboratory environments over four months, examining socio-cultural dynamics, work practices, and scientific interactions.",
      ],
    },
  ],

  /* ── Publications ──────────────────────────────────────── */
  publications: [
    {
      id:        "bams-sarci-2025",
      type:      "journal",
      status:    "published",
      year:      2025,
      authors:   "Bhuyan, D. P., Upadhyaya, P., Pathak, R., Namdev, P., Salunke, P., Anand, A., Suresh, A. D., <strong>Arora, A.</strong>, Baraik, S. K., Jain, S., Parihar, R. S., Dwivedi, A., Sahany, S., Sharan, M., Dash, S. K., Fasullo, J. T., Behera, S. K., Tribbia, J., & Mishra, S. K.",
      title:     "Advancing climate services in South Asia: The SARCI Framework for actionable information, capability, and capacity",
      venue:     "Bulletin of the American Meteorological Society",
      doi:       "10.1175/BAMS-D-25-0172.1",
      url:       "https://doi.org/10.1175/BAMS-D-25-0172.1",
      tags:      ["Climate Services", "South Asia", "Monsoon"],
      highlight: false,
    },
    {
      id:        "india-forum-2025",
      type:      "article",
      status:    "published",
      year:      2025,
      authors:   "Mishra, S. K., Upadhyaya P., <strong>Arora, A.</strong>, Vinod A.J., Jayan N., Dwivedi A.",
      title:     "To Solve North India's Air Crisis, Look Beyond Stubble and Fireworks",
      venue:     "The India Forum",
      date:      "Oct 22, 2025",
      doi:       "",
      url:       "https://www.theindiaforum.in/environment/solve-north-indias-air-crisis-look-beyond-stubble-and-fireworks-0",
      tags:      ["Air Pollution", "Indo-Gangetic Plain", "Policy"],
      highlight: false,
    },
    {
      id:        "npj-kantian-2026",
      type:      "journal",
      status:    "under-review",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>",
      title:     "Public enlightenment and climate action: rethinking Kantian principles for a sustainable future",
      venue:     "npj Climate Action (submitted)",
      doi:       "",
      url:       "",
      tags:      ["Climate Ethics", "Philosophy", "Policy"],
      highlight: true,
    },
    {
      id:        "gcm-global-south-2026",
      type:      "journal",
      status:    "in-prep",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>, Upadhyaya, P., Mishra, S. K., Bhuyan, D., Behera, S., Fasullo, J., Tribbia, J., Jain, S., Salunke, P., Sahany, S., Dash, S. K.",
      title:     "Climate models doubled in a decade but credibility remains poor over the Global South",
      venue:     "In preparation",
      doi:       "",
      url:       "",
      tags:      ["Climate Modeling", "CMIP", "Global South"],
      highlight: true,
    },
    {
      id:        "mdp-climate-2026",
      type:      "journal",
      status:    "in-prep",
      year:      2026,
      authors:   "Mishra, S. K., Ray, P., Srivastava, A., Upadhyaya, P., Ortiz, P., <strong>Arora, A.</strong>, Jain, S., Salunke, P., Schlosser, C.",
      title:     "A principled framework for sequential decision making to promote efficient climate actions",
      venue:     "In preparation",
      doi:       "",
      url:       "",
      tags:      ["Decision Theory", "Climate Policy", "MDPs"],
      highlight: false,
    },
    {
      id:        "geomip-poster-2024",
      type:      "conference",
      status:    "published",
      year:      2024,
      authors:   "<strong>Arora, A.</strong>, Upadhyaya, P., Mishra, S. K.",
      title:     "Circulation Changes under Geoengineering and their Implications in Regional Precipitation and Temperature",
      venue:     "14th Annual GeoMIP Meeting 2024, Cornell University, Ithaca, USA (Poster)",
      doi:       "",
      url:       "",
      tags:      ["Geoengineering", "GeoMIP", "Monsoon"],
      highlight: false,
    },
  ],

  /* ── Talks ─────────────────────────────────────────────── */
  talks: [
    {
      type:     "Poster",
      title:    "Circulation Changes under Geoengineering and their Implications in Regional Precipitation and Temperature",
      event:    "14th Annual GeoMIP Meeting 2024",
      location: "Cornell University, Ithaca, USA",
      date:     "July 10–12, 2024",
      authors:  "Arora, A., Upadhyaya, P., Mishra, S. K.",
      note:     "Full travel & accommodation support awarded",
      url:      "",
    },
  ],

  /* ── Awards ────────────────────────────────────────────── */
  awards: [
    {
      year:  "2025",
      title: "Rhodes Scholarship — India Finalist",
      org:   "University of Oxford · Rhodes Trust",
      desc:  "Among the top 13 students out of 1,000 applicants for the Rhodes Scholarship India.",
    },
    {
      year:  "2025",
      title: "Visiting Student Research Program",
      org:   "King Abdullah University of Science and Technology (KAUST)",
      desc:  "Full scholarship to conduct master's thesis research at KAUST, Saudi Arabia.",
    },
    {
      year:  "2025",
      title: "MPI-M 1-Year Research Funding (Declined)",
      org:   "Max Planck Institute for Meteorology, Hamburg",
      desc:  "Full funding offered under IISER-MPI collaboration. Declined in favour of KAUST.",
    },
    {
      year:  "2024",
      title: "Full Travel Support — GeoMIP Meeting",
      org:   "Cornell University, Ithaca, USA",
      desc:  "Full travel and accommodation support for the 14th Annual GeoMIP Meeting.",
    },
    {
      year:  "2023",
      title: "Bronze Medal — University Physics Competition",
      org:   "Carroll College, Helena, Montana (International)",
      desc:  "Team award in the international University Physics Competition 2022.",
    },
    {
      year:  "2022",
      title: "CNR Rao Education Foundation Prize",
      org:   "IISER Bhopal",
      desc:  "Awarded for securing the highest CPI (10/10) in the first semester of the BS-MS programme.",
    },
    {
      year:  "2019",
      title: "GIZ Sustainable Development Competition",
      org:   "German Embassy, New Delhi",
      desc:  "Felicitated for project on 'Sustainable Development in Indore'.",
    },
    {
      year:  "2019",
      title: "Joseph Memorial Scholarship",
      org:   "St. Paul Higher Secondary School, Indore",
      desc:  "Awarded for exceptional leadership and superior academic performance.",
    },
  ],

  /* ── Projects ──────────────────────────────────────────────────────────────
     pdf:        filename inside your Documents/ folder (e.g. "aerosol.pdf")
                 Leave "" if no PDF exists for that project.
     url:        detail page HTML file — all generated below.
     thumbClass: "thumb-climate" | "thumb-atmos" | "thumb-decision"
                 "thumb-comp" | "thumb-ethno" | "thumb-fire" | "thumb-default"
  ─────────────────────────────────────────────────────────────────────────── */
  projects: [
    {
      id:         "geomip",
      title:      "Stratospheric Aerosol Injection & the South Asian Monsoon",
      year:       2024,
      category:   "Climate Modeling",
      thumbIcon:  "🌐",
      thumbClass: "thumb-climate",
      tags:       ["GeoMIP", "Geoengineering", "Monsoon"],
      desc:       "Analyzed GeoMIP G6 outputs (CESM-WACCM) to assess impacts of SAI on precipitation patterns, temperature gradients, and atmospheric circulation. Presented at GeoMIP 2024, Cornell University.",
      pdf:        "",          // no PDF for this one — linked to poster
      url:        "project-detail.html?id=geomip",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "gcm-credibility",
      title:      "GCM Credibility over the Global South",
      year:       2025,
      category:   "Climate Modeling",
      thumbIcon:  "📊",
      thumbClass: "thumb-climate",
      tags:       ["CMIP6", "Model Evaluation", "Global South"],
      desc:       "Systematic evaluation of CMIP5/CMIP6 multi-model ensemble performance over the Global South. Finds that despite doubling the number of models over a decade, credibility metrics over South Asia and Africa remain poor — raising questions about where and how models are validated.",
      pdf:        "",
      url:        "project-detail.html?id=gcm-credibility",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "large-ensemble",
      title:      "Internal Variability in Large Ensemble Simulations",
      year:       2025,
      category:   "Climate Modeling",
      thumbIcon:  "🌀",
      thumbClass: "thumb-climate",
      tags:       ["Large Ensembles", "Internal Variability", "KAUST"],
      desc:       "Master's thesis research at KAUST's CLIMATics Group. Quantifying the role of internal climate variability versus forced response in regional climate projections using large ensemble simulations, with implications for uncertainty attribution in climate services.",
      pdf:        "",
      url:        "project-detail.html?id=large-ensemble",
      advisor:    "Prof. Ibrahim Hoteit, KAUST",
    },
    {
      id:         "pollution",
      title:      "Air Pollution Dynamics over the Indo-Gangetic Plain",
      year:       2024,
      category:   "Atmospheric Science",
      thumbIcon:  "🏭",
      thumbClass: "thumb-atmos",
      tags:       ["Air Quality", "Satellite Data", "IGP"],
      desc:       "Multi-scale analysis of natural and anthropogenic sources of air pollution using reanalysis and satellite datasets. Co-authored policy commentary in The India Forum.",
      pdf:        "",          // linked to India Forum article instead
      url:        "project-detail.html?id=pollution",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "policy",
      title:      "Sequential Decision-Making for Climate Action",
      year:       2023,
      category:   "Decision Theory",
      thumbIcon:  "📜",
      thumbClass: "thumb-decision",
      tags:       ["MDPs", "Climate Policy", "Optimization"],
      desc:       "Developed a novel framework for sequential decision-making using Markov Decision Processes (MDPs) to promote efficient climate adaptation strategies.",
      pdf:        "",
      url:        "project-detail.html?id=policy",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "aerosols",
      title:      "Modeling Atmospheric Aerosols in Climate Systems",
      year:       2024,
      category:   "Climate Modeling",
      thumbIcon:  "🔬",
      thumbClass: "thumb-climate",
      tags:       ["Aerosols", "GCMs", "Radiative Forcing"],
      desc:       "Comprehensive report on aerosol dynamics and representation in GCMs, focusing on aerosol microphysics, cloud interactions, and radiative forcing.",
      pdf:        "Documents/aerosol.pdf",
      url:        "project-detail.html?id=aerosols",
      advisor:    "Prof. Ramya Sunder Raman, IISER Bhopal",
    },
    {
      id:         "monsoon-aerosols",
      title:      "Aerosol Influence on Indian Monsoon Rainfall",
      year:       2024,
      category:   "Atmospheric Science",
      thumbIcon:  "🌧️",
      thumbClass: "thumb-atmos",
      tags:       ["Aerosols", "Monsoon", "South Asia"],
      desc:       "Co-authored review paper analyzing the influence of remote aerosol emissions on South Asian monsoon variability.",
      pdf:        "Documents/monsoon.pdf",
      url:        "project-detail.html?id=monsoon-aerosols",
      advisor:    "Dr. Shubhi Agrawal, IISER Bhopal",
    },
    {
      id:         "forest-fire",
      title:      "Forest Fire Dynamics & Atmospheric Interactions",
      year:       2024,
      category:   "Atmospheric Science",
      thumbIcon:  "🔥",
      thumbClass: "thumb-fire",
      tags:       ["Wildfire", "Aerosols", "Smoke Plumes"],
      desc:       "Analysis of forest fire dynamics and their interactions with the atmosphere, including smoke plume transport, aerosol emissions, and impacts on regional air quality and climate.",
      pdf:        "Documents/forest-fire.pdf",
      url:        "project-detail.html?id=forest-fire",
      advisor:    "IISER Bhopal",
    },
    {
      id:         "ethnography",
      title:      "Ethnography of Laboratory Life at IISER Bhopal",
      year:       2024,
      category:   "Ethnography",
      thumbIcon:  "🔭",
      thumbClass: "thumb-ethno",
      tags:       ["Ethnography", "Science Studies", "Lab Culture"],
      desc:       "Comprehensive ethnographic study of two distinct laboratory settings over four months, examining socio-cultural dynamics, work practices, and interactions within scientific environments.",
      pdf:        "",
      url:        "project-detail.html?id=ethnography",
      advisor:    "Dr. Renny Thomas, IISER Bhopal",
    },
    {
      id:         "garuda-purana",
      title:      "Socio-Cultural Importance of Garuda Purana",
      year:       2023,
      category:   "Ethnography",
      thumbIcon:  "📖",
      thumbClass: "thumb-ethno",
      tags:       ["Ethnography", "Ritual Studies", "Death & Culture"],
      desc:       "Field ethnography study examining the socio-cultural importance of Garuda Purana and death rituals across communities.",
      pdf:        "",
      url:        "project-detail.html?id=garuda-purana",
      advisor:    "Dr. Renny Thomas, IISER Bhopal",
    },
    {
      id:         "penalty",
      title:      "Modelling the Perfect Penalty Kick",
      year:       2022,
      category:   "Computational Physics",
      thumbIcon:  "⚽",
      thumbClass: "thumb-comp",
      tags:       ["Fluid Dynamics", "Differential Equations", "Sports Science"],
      desc:       "Solved six coupled differential equations with varying initial conditions to obtain optimal velocities and spin values for a perfect football penalty kick.",
      pdf:        "Documents/penalty.pdf",
      url:        "project-detail.html?id=penalty",
      advisor:    "Independent project, IISER Bhopal",
    },
  ],

  /* ── Research Interests ────────────────────────────────── */
  interests: [
    {
      icon: "🌐",
      title: "Climate Model Evaluation",
      desc: "Assessing the performance and credibility of GCMs — especially CMIP5/CMIP6 multi-model ensembles — over South Asia and the Global South, where model uncertainty and observational gaps are greatest."
    },
    {
      icon: "☁️",
      title: "Solar Geoengineering",
      desc: "Investigating the atmospheric and regional climate consequences of stratospheric aerosol injection (SAI) using GeoMIP G1 and G6sulfur simulations, with a focus on monsoon implications and circulation changes."
    },
    {
      icon: "🌧️",
      title: "Indian Summer Monsoon",
      desc: "Understanding the dynamics, multi-decadal variability, and future projections of the Indian monsoon — and how anthropogenic forcing and geoengineering interventions alter its character and predictability."
    },
    {
      icon: "🏭",
      title: "Atmospheric Aerosols & Air Quality",
      desc: "Multi-scale analysis of natural and anthropogenic aerosol sources over the Indo-Gangetic Plain, their interactions with cloud microphysics, radiative forcing, and implications for regional air quality policy."
    },
    {
      icon: "📜",
      title: "Climate Policy & Decision Theory",
      desc: "Developing principled frameworks for sequential climate decision-making using Markov Decision Processes (MDPs), and examining the ethical dimensions of geoengineering governance under uncertainty."
    },
    {
      icon: "🧭",
      title: "Science, Society & Philosophy",
      desc: "Exploring the socio-political dimensions of climate action — from transboundary carbon migration to Kantian frameworks for public enlightenment, epistemic justice, and the moral philosophy of collective climate responsibility."
    },
  ],

};

/* ═══════════════════════════════════════════════════════════
   RENDER ENGINE — do not edit below this line
═══════════════════════════════════════════════════════════ */
window.RENDER = {

  startTyping: function(id) {
    var phrases=CONTENT.typingRoles, el=document.getElementById(id);
    if(!el||!phrases.length) return;
    var pi=0,ci=0,del=false;
    function tick(){
      var cur=phrases[pi];
      if(del){ci--;el.textContent=cur.slice(0,ci);}else{ci++;el.textContent=cur.slice(0,ci);}
      var d=del?45:80;
      if(!del&&ci===cur.length){d=2200;del=true;}
      else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;d=400;}
      setTimeout(tick,d);
    }
    setTimeout(tick,800);
  },

  stats: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.stats.map(function(s){
      return '<div class="stat-card"><div class="stat-number">'+s.number+'</div><div class="stat-label">'+s.label+'</div></div>';
    }).join('');
  },

  affiliations: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.affiliations.map(function(a){
      var dot=a.dot==='blue'?'<span class="dot"></span>':a.dot==='sand'?'<span class="dot sand"></span>':'';
      var icon=a.icon?'<span style="font-size:0.9rem;">'+a.icon+'</span>':'';
      return '<div class="affiliation-chip">'+dot+icon+a.label+'</div>';
    }).join('');
  },

  bio: function(id, full) {
    var el=document.getElementById(id); if(!el) return;
    var paras=full?CONTENT.bio.fullParagraphs:CONTENT.bio.paragraphs;
    el.innerHTML=paras.map(function(p){return '<p style="margin-bottom:16px;">'+p+'</p>';}).join('');
  },

  skills: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.skills.map(function(s){return '<span class="skill-pill">'+s+'</span>';}).join('');
  },

  education: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.education.map(function(e,i){
      return '<div class="timeline-item">'
        +'<div class="timeline-dot'+(i===0?'':' sand')+'"></div>'
        +'<div class="timeline-period">'+e.period+'</div>'
        +'<div class="timeline-title">'+e.degree+(e.badge?'<span class="timeline-badge">'+e.badge+'</span>':'')+'</div>'
        +'<div class="timeline-org">'+e.institution+' · '+e.location+'</div>'
        +'<div class="timeline-detail">'+e.detail+'</div>'
        +'</div>';
    }).join('');
  },

  experience: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.experience.map(function(e,i){
      var bullets=e.bullets.map(function(b){return '<li style="font-size:0.85rem;color:var(--text-muted);margin-bottom:4px;">'+b+'</li>';}).join('');
      return '<div class="timeline-item">'
        +'<div class="timeline-dot'+(i===0?'':' sand')+'"></div>'
        +'<div class="timeline-period">'+e.period+'</div>'
        +'<div class="timeline-title">'+e.role+'</div>'
        +'<div class="timeline-org">'+e.org+' · '+e.location+'</div>'
        +'<div class="timeline-detail">Supervised by '+e.supervisor+'</div>'
        +'<ul style="margin-top:8px;padding-left:18px;">'+bullets+'</ul>'
        +'</div>';
    }).join('');
  },

  featuredPubs: function(id) {
    var el=document.getElementById(id); if(!el) return;
    var featured=CONTENT.publications.filter(function(p){return p.status==='published'||p.highlight;}).slice(0,3);
    el.innerHTML=featured.map(function(p){return RENDER._pubCard(p);}).join('');
  },

  allPubs: function(listId, countId) {
    var list=document.getElementById(listId); if(!list) return;
    var groups={
      published:  {label:'Published',items:[]},
      'under-review':{label:'Under Review',items:[]},
      'in-prep':  {label:'In Preparation',items:[]},
      conference: {label:'Conference',items:[]}
    };
    CONTENT.publications.forEach(function(p){
      var key=p.type==='conference'?'conference':p.status;
      if(groups[key]) groups[key].items.push(p);
    });
    var html='';
    Object.keys(groups).forEach(function(k){
      var g=groups[k]; if(!g.items.length) return;
      html+='<div class="section-divider"><h3>'+g.label+'</h3></div>';
      html+='<div class="pub-list">'+g.items.map(function(p){return RENDER._pubCard(p);}).join('')+'</div>';
    });
    list.innerHTML=html;
    if(countId){var c=document.getElementById(countId); if(c) c.textContent=CONTENT.publications.length;}
  },

  _pubCard: function(p) {
    var viewBtn=p.url?'<a href="'+p.url+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:8px 14px;font-size:0.8rem;margin-top:8px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View</a>':'';
    var doiStr=p.doi?' · <a href="https://doi.org/'+p.doi+'" target="_blank" rel="noopener" style="color:var(--accent);">DOI</a>':'';
    var dateStr=p.date?' · '+p.date:'';
    return '<div class="pub-card'+(p.highlight?' highlight':'')+'" data-status="'+p.status+'" data-type="'+p.type+'" data-year="'+p.year+'">'
      +'<div class="pub-card-body">'
      +'<div class="pub-authors">'+p.authors+'</div>'
      +'<div class="pub-title">'+p.title+'</div>'
      +'<div class="pub-venue">'+p.venue+doiStr+dateStr+'</div>'
      +'<div class="pub-tags" style="margin-top:10px;"><span class="badge-status '+p.status+'">'+p.status.replace('-',' ')+'</span>'
      +p.tags.map(function(t){return '<span class="badge-tag">'+t+'</span>';}).join('')+'</div>'
      +'</div>'
      +'<div class="pub-card-meta"><div class="pub-year">'+p.year+'</div>'+viewBtn+'</div>'
      +'</div>';
  },

  awards: function(id, limit) {
    var el=document.getElementById(id); if(!el) return;
    var list=limit?CONTENT.awards.slice(0,limit):CONTENT.awards;
    el.innerHTML=list.map(function(a){
      return '<div class="award-card">'
        +'<div class="award-year">'+a.year+'</div>'
        +'<div><div class="award-title">'+a.title+'</div>'
        +'<div class="award-org">'+a.org+'</div>'
        +'<div class="award-desc">'+a.desc+'</div></div>'
        +'</div>';
    }).join('');
  },

  interests: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.interests.map(function(i){
      return '<div class="interest-card"><span class="interest-icon">'+i.icon+'</span><h3>'+i.title+'</h3><p>'+i.desc+'</p></div>';
    }).join('');
  },

  projects: function(id) {
    var el=document.getElementById(id); if(!el) return;
    el.innerHTML=CONTENT.projects.map(function(p){
      var readMore=p.url
        ?'<div style="margin-top:20px;"><a href="'+p.url+'" class="btn btn-outline" style="padding:8px 16px;font-size:0.85rem;">Read More <i class="fa-solid fa-arrow-right"></i></a></div>'
        :'';
      return '<div class="project-card" data-category="'+p.category+'">'
        +'<div class="project-thumb '+p.thumbClass+'">'
        +'<span class="project-category-pill">'+p.category+'</span>'
        +'<div class="project-thumb-icon">'+p.thumbIcon+'</div>'
        +'</div>'
        +'<div class="project-body">'
        +'<div class="project-meta">'+p.year+'</div>'
        +'<div class="project-title">'+(p.url?'<a href="'+p.url+'">'+p.title+'</a>':p.title)+'</div>'
        +'<div class="project-desc">'+p.desc+'</div>'
        +'<div class="project-tags">'+p.tags.map(function(t){return '<span class="badge-tag">'+t+'</span>';}).join('')+'</div>'
        +readMore
        +'</div></div>';
    }).join('');
  },

  talks: function(id) {
    var el=document.getElementById(id); if(!el) return;
    if(!CONTENT.talks.length){el.innerHTML='<p style="color:var(--text-muted);padding:20px 0;">More talks coming soon.</p>';return;}
    el.innerHTML=CONTENT.talks.map(function(t){
      return '<div class="talk-card">'
        +'<div class="talk-type-badge">'+t.type+'</div>'
        +'<div>'
        +'<div class="talk-title">'+t.title+'</div>'
        +'<div class="talk-meta"><strong>'+t.event+'</strong></div>'
        +'<div class="talk-meta">'+t.location+' · '+t.date+'</div>'
        +'<div class="talk-meta" style="font-style:italic;margin-top:4px;">'+t.authors+'</div>'
        +(t.note?'<div class="talk-note">'+t.note+'</div>':'')
        +(t.url?'<a href="'+t.url+'" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:12px;padding:7px 14px;font-size:0.82rem;">View</a>':'')
        +'</div></div>';
    }).join('');
  },

  socialLinks: function(id) {
    var el=document.getElementById(id); if(!el) return;
    var s=CONTENT.social, html='';
    if(s.linkedin)      html+='<a href="'+s.linkedin+'" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>';
    if(s.googleScholar) html+='<a href="'+s.googleScholar+'" target="_blank" rel="noopener" class="social-link" aria-label="Google Scholar"><i class="fa-brands fa-google-scholar"></i></a>';
    if(s.orcid)         html+='<a href="'+s.orcid+'" target="_blank" rel="noopener" class="social-link" aria-label="ORCID"><i class="fa-brands fa-orcid"></i></a>';
    if(s.bluesky)       html+='<a href="'+s.bluesky+'" target="_blank" rel="noopener" class="social-link" aria-label="Bluesky"><i class="fa-brands fa-bluesky"></i></a>';
    if(s.github)        html+='<a href="'+s.github+'" target="_blank" rel="noopener" class="social-link" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>';
    html+='<a href="mailto:'+CONTENT.email+'" class="social-link" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>';
    el.innerHTML=html;
  },
};
