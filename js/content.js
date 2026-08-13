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
  email:    "anirudh.arora.research@gmail.com",
  phone:    "+91-7987188136",
  location: "Hamburg, Germany",

  tagline: "I study tropical precipitation, Indian summer monsoon dynamics, kilometer-scale simulations, large ensembles, and cloud microphysics.",

  /* ── Social Links ──────────────────────────────────────── */
  social: {
    linkedin:      "https://www.linkedin.com/in/anirudharora",
    googleScholar: "https://scholar.google.com/citations?user=kYFyXtcAAAAJ&hl=en",
    orcid:         "",   // e.g. "https://orcid.org/0000-0000-0000-0000"
    bluesky:       "",
    github:        "https://github.com/Arora-Anirudh",
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
    { label: "MPI-M | Climate Surface Interaction Group", dot: "blue", icon: "" },
    { label: "IIT Delhi | DST CoE alumnus", dot: "sand", icon: "" },
    { label: "KAUST | CLIMATics Group alumnus", dot: "none", icon: "" },
    { label: "Rhodes Scholarship India Finalist", dot: "none", icon: "" },
  ],

  /* ── Stats Row ─────────────────────────────────────────── */
  stats: [
    { number: "5+",   label: "Publications & Preprints" },
    { number: "3",    label: "Research Institutions"    },
    { number: "9.22", label: "Overall CPI (out of 10)" },
    { number: "7",    label: "Honours & Awards"         },
  ],

  /* ── Bio ───────────────────────────────────────────────── */
  bio: {
    transition: "BS-MS Environmental Science at IISER Bhopal | Research Assistant at the <strong>Max Planck Institute for Meteorology</strong> | Former researcher at the <strong>DST CoE for Climate Information, IIT Delhi</strong>.",
    paragraphs: [
      "I study <strong>tropical precipitation</strong> and <strong>Indian summer monsoon dynamics</strong>, asking what kilometer-scale simulations and large ensembles can tell us about model performance. My work combines climate-model output with reanalysis and satellite data.",
      "I am particularly interested in what model uncertainty means for climate information and decision-making in South Asia. Alongside modelling, I work on the <strong>ethics and governance of climate action</strong> and on how evidence travels into public debate.",
    ],
    fullParagraphs: [
      "I am a climate researcher studying <strong>tropical precipitation, monsoon dynamics, and the limits of climate-model performance</strong>.",
      "I completed my BS-MS in Environmental Science at IISER Bhopal, with my master's thesis research carried out at KAUST's CLIMATics Group under Prof. Ibrahim Hoteit and co-supervision from Prof. Saroj K. Mishra at IIT Delhi.",
      "I am currently a Research Assistant in the Climate Surface Interaction Group within the Climate Physics Department at the Max Planck Institute for Meteorology, where I work with Dr. Clara Bayley on cloud microphysics and convergence in the superdroplet model CLEO.",
      "Across CMIP-class archives, large ensembles, kilometer-scale simulations, reanalysis, and observational products, I evaluate what model output can reliably say about Indian summer monsoon precipitation and related climate risks.",
      "I also work on science communication and climate governance. I have co-authored public commentary, presented at GeoMIP 2024, and was shortlisted as a Rhodes Scholarship India finalist.",
    ],
  },

  /* ── Skills ────────────────────────────────────────────── */
  skills: [
    "Python", "MATLAB", "NCAR NCL", "Mathematica", "CDO", "NCO", "NetCDF",
    "CMIP5/CMIP6", "nextGEMS", "Large Ensembles", "ERA5", "TROPOMI", "GOSAT",
    "Slurm", "Levante", "Shaheen III", "Bash", "Git", "LaTeX", "HTML5/CSS",
  ],

  /* ── Education ─────────────────────────────────────────── */
  education: [
    {
      degree:      "BS-MS Environmental Science",
      institution: "IISER Bhopal",
      location:    "Bhopal, India",
      period:      "December 2021-May 2026",
      detail:      "Bachelor and Master of Science in Environmental Science. Overall CPI: 9.22/10. Master's CPI: 10.00/10. Master's thesis research carried out at KAUST's CLIMATics Group.",
      badge:       "",
    },
  ],

  /* ── Experience ────────────────────────────────────────── */
  experience: [
    {
      role:       "Research Assistant",
      org:        "Max Planck Institute for Meteorology | Climate Surface Interaction Group",
      location:   "Hamburg, Germany",
      period:     "July-November 2026",
      supervisor: "Dr. Clara Bayley",
      bullets: [
        "Building a reproducible Python and YAML-configured experiment framework for the superdroplet model CLEO, extending zero-dimensional collision-coalescence tests toward cloud-scale configurations.",
        "Quantifying how superdroplet number, stochastic ensemble size, and initialization trade off against accuracy and computational cost using droplet-size distributions, rain-onset timing, and across-ensemble spread.",
      ],
      badge:      "Current",
    },
    {
      role:       "Researcher",
      org:        "DST Centre of Excellence for Climate Information, IIT Delhi",
      location:   "New Delhi, India",
      period:     "May 2023-June 2026",
      supervisor: "Prof. Saroj K. Mishra",
      bullets: [
        "Assessed whether climate-model credibility over the Tropics, particularly South Asia, has improved across CMIP generations by comparing CMIP5 models and their direct CMIP6 successors against observations.",
        "Diagnosed the circulation pathway linking solar geoengineering to regional rainfall change using an eight-model GeoMIP5 multi-model mean and seasonal precipitation with 200 and 850 hPa wind responses.",
        "Contributed to the SARCI regional climate framework through skill-weighted CMIP6 sea-surface temperature and sea-ice lower boundary conditions, bias-corrected against HadISST while preserving low-frequency variability.",
        "Examined the large-scale circulation controls on chronic Indo-Gangetic Plain air pollution and co-authored a perspective in The India Forum.",
      ],
    },
    {
      role:       "Visiting Researcher",
      org:        "CLIMATics Group, KAUST",
      location:   "Saudi Arabia",
      period:     "July 2025-May 2026",
      supervisor: "Prof. Ibrahim Hoteit",
      bullets: [
        "Completed master's thesis work: Toward Reliable Tropical Precipitation Simulations by Assessing the Added Value of Large Ensembles and Kilometer-Scale Simulations.",
        "Evaluated the IFS-FESOM nextGEMS production historical precipitation simulation against IMD, GPCP, ERA5, and CMIP6 multi-model mean benchmarks using PCC-RMSE, intensity distributions, dry-spell statistics, and elevation-binned composites.",
        "Built a Monte Carlo resampling framework to estimate effective ensemble size for precipitation across CESM2-LE, MPI-GE, and CESM2-PPE under four convergence criteria, including a probabilistic Brier Skill Score formulation.",
        "Conducted a long-term satellite-based analysis of atmospheric methane over the Arabian Peninsula using bias-corrected blended TROPOMI+GOSAT XCH4 retrievals, with hotspot and trend analysis.",
      ],
    },
    {
      role:       "Research Intern, Ethnography Studies",
      org:        "IISER Bhopal",
      location:   "Bhopal, India",
      period:     "Aug 2023-Apr 2024",
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
      year:      2026,
      authors:   "Bhuyan, D. P., Upadhyaya, P., Pathak, R., Namdev, P., Salunke, P., Anand, A., Suresh, A. D., <strong>Arora, A.</strong>, Baraik, S. K., Jain, S., Parihar, R. S., Dwivedi, A., Sahany, S., Sharan, M., Dash, S. K., Fasullo, J. T., Behera, S. K., Tribbia, J., & Mishra, S. K.",
      title:     "Advancing Climate Services in South Asia: The SARCI Framework for Actionable Climate Information and Regional Capacity Building",
      venue:     "Bulletin of the American Meteorological Society, 107(3), E564-E584",
      doi:       "10.1175/BAMS-D-25-0172.1",
      url:       "https://doi.org/10.1175/BAMS-D-25-0172.1",
      tags:      ["Climate Services", "South Asia", "Monsoon"],
      highlight: true,
    },
    {
      id:        "nextgems-monsoon-2026",
      type:      "conference",
      status:    "conference",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>, Dasari, H. P., Jha, S. K., Mishra, S. K., Hoteit, I.",
      title:     "Evaluating Indian Summer Monsoon Precipitation in the IFS-FESOM nextGEMS Production Historical Simulation at Kilometre Scale",
      venue:     "km-Scale Global Modelling Summit 2026, Hamburg, Germany",
      doi:       "",
      url:       "",
      tags:      ["nextGEMS", "IFS-FESOM", "Monsoon"],
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
      id:        "nextgems-climatedynamics-2026",
      type:      "journal",
      status:    "under-review",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>, Dasari, H. P., Jha, S. K., Mishra, S. K., Hoteit, I.",
      title:     "Km-scale resolution improves monsoon precipitation characteristics but leaves large-scale dynamical biases: evidence from IFS-FESOM nextGEMS",
      venue:     "Climate Dynamics (under review)",
      doi:       "",
      url:       "",
      tags:      ["nextGEMS", "IFS-FESOM", "Monsoon"],
      highlight: true,
    },
    {
      id:        "npj-kantian-2026",
      type:      "journal",
      status:    "under-review",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>",
      title:     "Public enlightenment and climate action: rethinking Kantian principles for a sustainable future",
      venue:     "npj Climate Action (under review)",
      doi:       "",
      url:       "",
      tags:      ["Climate Ethics", "Philosophy", "Policy"],
      highlight: true,
    },
    {
      id:        "methane-arabian-peninsula-2026",
      type:      "journal",
      status:    "in-prep",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>, Gandhi, H., Hoteit, I.",
      title:     "Methane variability, persistent hotspots, and shamal-driven seasonality over the Arabian Peninsula from blended TROPOMI+GOSAT XCH4 retrievals (2018-2025)",
      venue:     "In preparation for Atmospheric Chemistry and Physics",
      doi:       "",
      url:       "",
      tags:      ["Methane", "Satellite Retrievals", "Arabian Peninsula"],
      highlight: false,
    },
    {
      id:        "gcm-global-south-2026",
      type:      "journal",
      status:    "in-prep",
      year:      2026,
      authors:   "<strong>Arora, A.</strong>, Upadhyaya, P., Mishra, S. K., Bhuyan, D., Behera, S., Fasullo, J., Tribbia, J., Jain, S., Salunke, P., Sahany, S., Dash, S. K.",
      title:     "Climate models doubled in a decade but credibility remains poor over Global South",
      venue:     "In preparation",
      doi:       "",
      url:       "",
      tags:      ["Climate Modeling", "CMIP", "Global South"],
      highlight: true,
    },
    {
      id:        "geomip-poster-2024",
      type:      "conference",
      status:    "conference",
      year:      2024,
      authors:   "<strong>Arora, A.</strong>, Upadhyaya, P., Mishra, S. K.",
      title:     "Regional Climate Responses to Geoengineering Interventions: Implications and Considerations for Climate Mitigation Strategies",
      venue:     "14th Annual GeoMIP Meeting 2024, Cornell University, Ithaca, USA (Poster)",
      doi:       "",
      url:       "",
      tags:      ["Geoengineering", "GeoMIP", "Monsoon"],
      highlight: false,
    },
    {
      id:        "solar-radiation-management-poster-2025",
      type:      "conference",
      status:    "conference",
      year:      2025,
      authors:   "<strong>Arora, A.</strong>, Mishra, S. K., Jha, S. K.",
      title:     "Solar radiation management and its impact on Earth's hydrological cycle",
      venue:     "Department of Earth & Environmental Sciences Annual Retreat 2025, IISER Bhopal, India (Poster)",
      doi:       "",
      url:       "",
      tags:      ["Solar Geoengineering", "Hydrological Cycle", "Monsoon"],
      highlight: false,
    },
    {
      id:        "monsoon-observations-poster-2024",
      type:      "conference",
      status:    "conference",
      year:      2024,
      authors:   "<strong>Arora, A.</strong>, Mishra, S. K.",
      title:     "Navigating the Mist: A Comprehensive Analysis of Observational Data for Summer Monsoon Precipitation over Indian Subcontinent",
      venue:     "Department of Earth & Environmental Sciences Annual Retreat 2024, IISER Bhopal, India (Poster)",
      doi:       "",
      url:       "",
      tags:      ["Monsoon", "Precipitation Products", "Observations"],
      highlight: false,
    },
  ],

  /* ── Talks ─────────────────────────────────────────────── */
  talks: [
    {
      type:     "Poster",
      title:    "Regional Climate Responses to Geoengineering Interventions: Implications and Considerations for Climate Mitigation Strategies",
      event:    "14th Annual GeoMIP Meeting 2024",
      location: "Cornell University, Ithaca, USA",
      date:     "July 10–12, 2024",
      authors:  "Arora, A., Upadhyaya, P., Mishra, S. K.",
      note:     "Full travel & accommodation support awarded",
      url:      "",
    },
    {
      type:     "Poster",
      title:    "Solar radiation management and its impact on Earth's hydrological cycle",
      event:    "Department of Earth & Environmental Sciences Annual Retreat 2025",
      location: "IISER Bhopal, India",
      date:     "2025",
      authors:  "Arora, A., Mishra, S. K., Jha, S. K.",
      note:     "Poster presentation",
      url:      "",
    },
    {
      type:     "Poster",
      title:    "Navigating the Mist: A Comprehensive Analysis of Observational Data for Summer Monsoon Precipitation over Indian Subcontinent",
      event:    "Department of Earth & Environmental Sciences Annual Retreat 2024",
      location: "IISER Bhopal, India",
      date:     "2024",
      authors:  "Arora, A., Mishra, S. K.",
      note:     "Best Presentation Award",
      url:      "",
    },
    {
      type:     "Poster",
      title:    "Evaluating Indian Summer Monsoon Precipitation in the IFS-FESOM nextGEMS Production Historical Simulation at Kilometre Scale",
      event:    "km-Scale Global Modelling Summit 2026",
      location: "Hamburg, Germany",
      date:     "2026",
      authors:  "Arora, A., Dasari, H. P., Jha, S. K., Mishra, S. K., Hoteit, I.",
      note:     "Poster presentation",
      url:      "",
    },
  ],

  /* ── Awards ────────────────────────────────────────────── */
  awards: [
    {
      year:  "2025",
      title: "Rhodes Scholarship 2026 Finalist",
      org:   "University of Oxford | Rhodes Trust",
      desc:  "Among the top 13 students out of 1,000 applicants for the Rhodes Scholarship India.",
    },
    {
      year:  "2025",
      title: "Visiting Student Research Program",
      org:   "King Abdullah University of Science and Technology (KAUST)",
      desc:  "Full scholarship to conduct master's thesis research at KAUST, Saudi Arabia.",
    },
    {
      year:  "2024",
      title: "Full Travel Support, GeoMIP Meeting",
      org:   "Cornell University, Ithaca, USA",
      desc:  "Full travel and accommodation support for the 14th Annual GeoMIP Meeting.",
    },
    {
      year:  "2023",
      title: "Bronze Medal, University Physics Competition",
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
      title:      "Circulation Response to Solar Geoengineering and Regional Rainfall",
      year:       2024,
      category:   "Climate Modeling",
      tier:       "Current / Core Climate Research",
      tierDesc:   "The work that best represents my current climate-science direction.",
      pinned:     true,
      thumbIcon:  "🌐",
      thumbClass: "thumb-climate",
      tags:       ["GeoMIP", "Geoengineering", "Monsoon"],
      methods:    ["GeoMIP5", "G1 / 4×CO₂ / piControl", "8-model multi-model mean", "200/850 hPa winds"],
      summary:    "How circulation change under solar geoengineering translates into regional rainfall.",
      desc:       "Diagnosed the circulation pathway linking solar geoengineering to regional rainfall using an eight-model GeoMIP5 multi-model mean (G1, 4×CO₂, piControl), comparing seasonal precipitation and 200/850 hPa wind responses. Found a strengthened low-latitude meridional circulation, incomplete restoration of the Tibetan anticyclone under G1, and consistent weakening of the mid-latitude westerlies between 30–60° N. Presented at the 14th Annual GeoMIP Meeting, Cornell University.",
      pdf:        "",          // no PDF for this one — linked to poster
      url:        "project-detail.html?id=geomip",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "gcm-credibility",
      title:      "GCM Credibility over the Global South",
      year:       2025,
      category:   "Climate Modeling",
      tier:       "Current / Core Climate Research",
      tierDesc:   "The work that best represents my current climate-science direction.",
      pinned:     true,
      thumbIcon:  "📊",
      thumbClass: "thumb-climate",
      tags:       ["CMIP6", "Model Evaluation", "Global South"],
      methods:    ["CMIP5/CMIP6", "Global South", "Model evaluation", "Regional credibility"],
      summary:    "A model-evaluation project asking where CMIP credibility remains weak over the Global South.",
      desc:       "Systematic evaluation of CMIP5/CMIP6 multi-model ensemble performance over the Global South, examining how model expansion has translated into regional credibility over South Asia and Africa.",
      pdf:        "",
      url:        "project-detail.html?id=gcm-credibility",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "large-ensemble",
      title:      "Tropical Precipitation in Large Ensembles and km-Scale Simulations",
      year:       2025,
      category:   "Climate Modeling",
      tier:       "Current / Core Climate Research",
      tierDesc:   "The work that best represents my current climate-science direction.",
      pinned:     true,
      thumbIcon:  "🌀",
      thumbClass: "thumb-climate",
      tags:       ["nextGEMS", "IFS-FESOM", "Large Ensembles"],
      methods:    ["IFS-FESOM", "nextGEMS", "CESM2-LE", "MPI-GE", "Brier Skill Score"],
      summary:    "Master's thesis research on whether km-scale simulations and large ensembles improve tropical precipitation credibility.",
      desc:       "Master's thesis research completed at KAUST's CLIMATics Group, evaluating tropical and Indian summer monsoon precipitation across IFS-FESOM nextGEMS, CMIP6 benchmarks, and large ensembles to ask what resolution and ensemble size add to model credibility.",
      detail:     "This project is my master's thesis work at KAUST's CLIMATics Group. It evaluates tropical precipitation and Indian summer monsoon precipitation across CMIP6 benchmarks, the IFS-FESOM nextGEMS production historical simulation, and large ensembles including CESM2-LE, MPI-GE, and CESM2-PPE. The central question is whether higher model resolution and larger ensemble size meaningfully improve the reliability of tropical precipitation simulations, or whether structural model limitations remain dominant.",
      thesisTitle:"Toward Reliable Tropical Precipitation Simulations by Assessing the Added Value of Large Ensembles and Kilometer-Scale Model Simulations",
      thesisAccess:"The thesis is not publicly downloadable from this website. Please email me to request a copy.",
      pdf:        "",
      url:        "project-detail.html?id=large-ensemble",
      advisor:    "Prof. Ibrahim Hoteit, KAUST",
    },
    {
      id:         "pollution",
      title:      "Air Pollution Dynamics over the Indo-Gangetic Plain",
      year:       2024,
      category:   "Atmospheric Science",
      tier:       "Atmospheric Science & Policy",
      tierDesc:   "Applied atmospheric work with direct policy and communication consequences.",
      thumbIcon:  "🏭",
      thumbClass: "thumb-atmos",
      tags:       ["Air Quality", "Satellite Data", "IGP"],
      summary:    "Large-scale circulation controls on chronic air pollution over the Indo-Gangetic Plain.",
      desc:       "Examined the large-scale circulation controls on chronic air pollution over the Indo-Gangetic Plain, arguing that persistent subsidence beneath the descending branches of the Hadley and Walker circulations, together with weakening ventilation, sustains a background burden that episodic sources only modulate. Co-authored a perspective in The India Forum.",
      pdf:        "",          // linked to India Forum article instead
      url:        "project-detail.html?id=pollution",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "policy",
      title:      "Sequential Decision-Making for Climate Action",
      year:       2023,
      category:   "Decision Theory",
      tier:       "Atmospheric Science & Policy",
      tierDesc:   "Applied atmospheric work with direct policy and communication consequences.",
      thumbIcon:  "📜",
      thumbClass: "thumb-decision",
      tags:       ["MDPs", "Climate Policy", "Optimization"],
      summary:    "A decision-theory framework for climate action under uncertainty.",
      desc:       "Contributed to a framework for sequential decision-making using Markov Decision Processes (MDPs) to examine efficient climate-action strategies.",
      pdf:        "",
      url:        "project-detail.html?id=policy",
      advisor:    "Prof. Saroj Mishra, IIT Delhi",
    },
    {
      id:         "aerosols",
      title:      "Modeling Atmospheric Aerosols in Climate Systems",
      year:       2024,
      category:   "Climate Modeling",
      tier:       "Atmospheric Science & Policy",
      tierDesc:   "Applied atmospheric work with direct policy and communication consequences.",
      thumbIcon:  "🔬",
      thumbClass: "thumb-climate",
      tags:       ["Aerosols", "GCMs", "Radiative Forcing"],
      summary:    "A technical report on aerosol processes, cloud interactions, and radiative forcing.",
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
      tier:       "Atmospheric Science & Policy",
      tierDesc:   "Applied atmospheric work with direct policy and communication consequences.",
      thumbIcon:  "🌧️",
      thumbClass: "thumb-atmos",
      tags:       ["Aerosols", "Monsoon", "South Asia"],
      summary:    "Review work on how remote aerosol emissions influence South Asian monsoon variability.",
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
      tier:       "Atmospheric Science & Policy",
      tierDesc:   "Applied atmospheric work with direct policy and communication consequences.",
      thumbIcon:  "🔥",
      thumbClass: "thumb-fire",
      tags:       ["Wildfire", "Aerosols", "Smoke Plumes"],
      summary:    "Atmosphere-fire interactions through smoke transport, emissions, and regional air quality.",
      desc:       "Analysis of forest fire dynamics and their interactions with the atmosphere, including smoke plume transport, aerosol emissions, and impacts on regional air quality and climate.",
      pdf:        "Documents/forest-fire.pdf",
      links:      [
        {
          label: "GitHub Repository",
          url:   "https://github.com/saurabh-3110/Forest-fires-in-India/tree/main",
          icon:  "fa-brands fa-github",
          type:  "code",
        },
      ],
      url:        "project-detail.html?id=forest-fire",
      advisor:    "IISER Bhopal",
    },
    {
      id:         "ethnography",
      title:      "Ethnography of Laboratory Life at IISER Bhopal",
      year:       2024,
      category:   "Ethnography",
      tier:       "Interdisciplinary / Earlier Work",
      tierDesc:   "Earlier work that shows range without competing with the climate-science center of the site.",
      thumbIcon:  "🔭",
      thumbClass: "thumb-ethno",
      tags:       ["Ethnography", "Science Studies", "Lab Culture"],
      summary:    "Ethnographic observation of laboratory culture, work practices, and scientific interaction.",
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
      tier:       "Interdisciplinary / Earlier Work",
      tierDesc:   "Earlier work that shows range without competing with the climate-science center of the site.",
      thumbIcon:  "📖",
      thumbClass: "thumb-ethno",
      tags:       ["Ethnography", "Ritual Studies", "Death & Culture"],
      summary:    "Field ethnography on ritual, death, and the socio-cultural role of Garuda Purana.",
      desc:       "Field ethnography study examining the socio-cultural importance of Garuda Purana and death rituals across communities.",
      pdf:        "Documents/Anirudh-EthnographyOfGarudaPurana.pdf",
      url:        "project-detail.html?id=garuda-purana",
      advisor:    "Dr. Renny Thomas, IISER Bhopal",
    },
    {
      id:         "penalty",
      title:      "Modelling the Perfect Penalty Kick",
      year:       2022,
      category:   "Computational Physics",
      tier:       "Interdisciplinary / Earlier Work",
      tierDesc:   "Earlier work that shows range without competing with the climate-science center of the site.",
      thumbIcon:  "⚽",
      thumbClass: "thumb-comp",
      tags:       ["Fluid Dynamics", "Differential Equations", "Sports Science"],
      summary:    "A computational physics project modelling velocity and spin for a football penalty kick.",
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
      desc: "Assessing the performance of CMIP5 and CMIP6 multi-model ensembles over South Asia and the Global South, with attention to regional uncertainty and observational gaps."
    },
    {
      icon: "☁️",
      title: "Solar Geoengineering",
      desc: "Investigating how circulation change under solar geoengineering affects regional rainfall using GeoMIP5 G1, 4×CO₂, and piControl simulations."
    },
    {
      icon: "🌧️",
      title: "Indian Summer Monsoon",
      desc: "Understanding the dynamics, multi-decadal variability, and future projections of the Indian monsoon, including the influence of anthropogenic forcing and geoengineering interventions."
    },
    {
      icon: "🏭",
      title: "Cloud Microphysics",
      desc: "Studying how superdroplet resolution, stochastic sampling, and initialization shape droplet-size distributions and bulk cloud microphysics."
    },
    {
      icon: "📜",
      title: "Climate Policy & Decision Theory",
      desc: "Developing principled frameworks for sequential climate decision-making using Markov Decision Processes (MDPs), and examining the ethical dimensions of geoengineering governance under uncertainty."
    },
    {
      icon: "🧭",
      title: "Science, Society & Philosophy",
      desc: "Exploring the socio-political dimensions of climate action, from transboundary carbon migration to public enlightenment, epistemic justice, and collective responsibility."
    },
  ],

};

/* ═══════════════════════════════════════════════════════════
   RENDER ENGINE — do not edit below this line
═══════════════════════════════════════════════════════════ */
window.RENDER = {

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
        +'<div class="timeline-title">'+e.role+(e.badge?'<span class="timeline-badge">'+e.badge+'</span>':'')+'</div>'
        +'<div class="timeline-org">'+e.org+' · '+e.location+'</div>'
        +'<div class="timeline-detail">Supervised by '+e.supervisor+'</div>'
        +'<ul style="margin-top:8px;padding-left:18px;">'+bullets+'</ul>'
        +'</div>';
    }).join('');
  },

  featuredPubs: function(id) {
    var el=document.getElementById(id); if(!el) return;
    var featured=CONTENT.publications
      .filter(function(p){return p.status==='published'||p.status==='accepted'||p.highlight;})
      .sort(function(a,b){
        if(a.id==='bams-sarci-2025') return -1;
        if(b.id==='bams-sarci-2025') return 1;
        return (b.year||0)-(a.year||0);
      })
      .slice(0,3);
    el.innerHTML=featured.map(function(p){return RENDER._pubCard(p);}).join('');
  },

  allPubs: function(listId, countId) {
    var list=document.getElementById(listId); if(!list) return;
    var groups={
      accepted:   {label:'Accepted',items:[]},
      published:  {label:'Published',items:[]},
      conference: {label:'Conference',items:[]},
      'under-review':{label:'Under Review',items:[]},
      'in-prep':  {label:'In Preparation',items:[]}
    };
    CONTENT.publications.forEach(function(p){
      var key=p.type==='conference'?'conference':p.status;
      if(groups[key]) groups[key].items.push(p);
    });
    var html='';
    Object.keys(groups).forEach(function(k){
      var g=groups[k]; if(!g.items.length) return;
      html+='<div class="section-divider"><h2>'+g.label+'</h2></div>';
      html+='<div class="pub-list">'+g.items.map(function(p){return RENDER._pubCard(p);}).join('')+'</div>';
    });
    list.innerHTML=html;
    if(countId){var c=document.getElementById(countId); if(c) c.textContent=CONTENT.publications.length;}
  },

  _pubCard: function(p) {
    var viewBtn=p.url?'<a href="'+p.url+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:8px 14px;font-size:0.8rem;margin-top:8px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View</a>':'';
    var citeBtn=(p.status==='published'||p.status==='accepted')?'<button type="button" class="btn btn-outline citation-copy" data-pub-id="'+p.id+'" style="padding:8px 14px;font-size:0.8rem;margin-top:8px;"><i class="fa-regular fa-copy"></i> Copy citation</button>':'';
    var doiStr=p.doi?' · <a href="https://doi.org/'+p.doi+'" target="_blank" rel="noopener" style="color:var(--accent);">DOI</a>':'';
    var dateStr=p.date?' · '+p.date:'';
    var statusLabel=p.type==='conference'?'Poster':p.status.replace('-',' ');
    return '<div class="pub-card'+(p.highlight?' highlight':'')+'" data-status="'+p.status+'" data-type="'+p.type+'" data-year="'+p.year+'">'
      +'<div class="pub-card-body">'
      +'<div class="pub-authors">'+p.authors+'</div>'
      +'<div class="pub-title">'+p.title+'</div>'
      +'<div class="pub-venue">'+p.venue+doiStr+dateStr+'</div>'
      +'<div class="pub-tags" style="margin-top:10px;"><span class="badge-status '+p.status+'">'+statusLabel+'</span>'
      +p.tags.map(function(t){return '<span class="badge-tag">'+t+'</span>';}).join('')+'</div>'
      +'</div>'
      +'<div class="pub-card-meta"><div class="pub-year">'+p.year+'</div><div class="pub-actions">'+viewBtn+citeBtn+'</div></div>'
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
    var tiers=[
      "Current / Core Climate Research",
      "Atmospheric Science & Policy",
      "Interdisciplinary / Earlier Work"
    ];
    var projectOrder={
      "large-ensemble": 1,
      "gcm-credibility": 2,
      "geomip": 3
    };
    function card(p){
      var readMore=p.url
        ?'<a href="'+p.url+'" class="btn btn-outline" style="padding:8px 16px;font-size:0.85rem;">'+(p.pdf?'View Report':'Read More')+' <i class="fa-solid fa-arrow-right"></i></a>'
        :'';
      var externalLinks=(p.links||[]).map(function(l){
        return '<a href="'+l.url+'" target="_blank" rel="noopener" class="btn btn-outline" style="padding:8px 16px;font-size:0.85rem;"><i class="'+(l.icon||'fa-solid fa-arrow-up-right-from-square')+'"></i> '+l.label+'</a>';
      }).join('');
      var actions=(readMore||externalLinks)?'<div class="project-actions">'+readMore+externalLinks+'</div>':'';
      var methodChips=(p.methods&&p.methods.length)?'<div class="project-methods">'+p.methods.map(function(m){return '<span>'+m+'</span>';}).join('')+'</div>':'';
      var pin=p.pinned?'<span class="project-pin-inline">Selected</span>':'';
      return '<div class="project-card'+(p.pinned?' pinned':'')+'" data-category="'+p.category+'" data-tier="'+(p.tier||'Other')+'">'
        +'<div class="project-body">'
        +'<div class="project-card-head"><span class="project-category-inline">'+p.category+'</span><span class="project-head-badges">'+pin+'</span></div>'
        +'<div class="project-meta">'+p.year+'</div>'
        +'<h3 class="project-title">'+(p.url?'<a href="'+p.url+'">'+p.title+'</a>':p.title)+'</h3>'
        +'<div class="project-desc">'+(p.summary||p.desc)+'</div>'
        +methodChips
        +'<div class="project-tags">'+p.tags.map(function(t){return '<span class="badge-tag">'+t+'</span>';}).join('')+'</div>'
        +actions
        +'</div></div>';
    }
    el.innerHTML=tiers.map(function(tier){
      var items=CONTENT.projects
        .filter(function(p){return (p.tier||'Other')===tier;})
        .sort(function(a,b){
          var ao=projectOrder[a.id]||100;
          var bo=projectOrder[b.id]||100;
          if(ao!==bo) return ao-bo;
          if(!!a.pinned!==!!b.pinned) return a.pinned?-1:1;
          return (b.year||0)-(a.year||0);
        });
      if(!items.length) return '';
      var desc=items[0].tierDesc||'';
      return '<section class="project-tier" data-tier="'+tier+'">'
        +'<div class="project-tier-head"><div><span class="section-label">Research group</span><h2 class="project-tier-title">'+tier+'</h2>'+(desc?'<p>'+desc+'</p>':'')+'</div><span class="project-tier-count">'+items.length+' items</span></div>'
        +'<div class="projects-grid project-tier-grid">'+items.map(card).join('')+'</div>'
        +'</section>';
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
