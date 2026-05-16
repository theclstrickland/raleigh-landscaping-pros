/**
 * SITE CONFIG — Single source of truth for the entire site.
 *
 * All pages, schema, meta tags, and content pull from here.
 * This is The Plant Firm's lead-gen site for Raleigh landscaping.
 */

export const site = {
  name: 'Raleigh Landscaping Pros',
  domain: 'raleighlandscapingpros.com',
  url: 'https://raleighlandscapingpros.com',
  phone: '(919) 355-9932',
  phoneTel: '+19193559932',
  tagline: 'Landscaping & Lawn Care Services',
  description:
    'Professional landscaping, lawn care, hardscaping, and outdoor design across the Raleigh, NC metro. Free estimates. Licensed & insured.',
  city: 'Raleigh',
  state: 'NC',
  county: 'Wake',
  region: 'Triangle',
  geo: { lat: 35.7796, lng: -78.6382 },
  hours: 'Mon – Sat: 7 AM – 6 PM',
  hoursNote: 'Emergency storm cleanup available 24/7',

  services: [
    {
      name: 'Lawn Care & Maintenance',
      slug: 'lawn-care',
      short: 'Weekly mowing, edging, fertilization, and seasonal lawn programs to keep your yard healthy year-round.',
      headline: 'Professional Lawn Care & Maintenance in Raleigh, NC',
      intro: 'A lush, green lawn doesn\'t happen by accident. Our lawn care programs cover everything from weekly mowing and edging to deep-root fertilization and weed control — customized for Wake County\'s climate and soil conditions.',
      body: 'Raleigh\'s humid subtropical climate means your lawn faces unique challenges: summer heat stress, winter dormancy transitions, and aggressive weed pressure from crabgrass, clover, and nutsedge. Our certified lawn care technicians build seasonal programs around your specific turf type — whether that\'s Bermuda, Fescue, Zoysia, or a blend. Every visit includes mowing at the correct blade height for the season, string trimming along all borders, edging driveways and walkways, and blowing clean. Our fertilization programs include soil testing, pre-emergent weed prevention in early spring, balanced NPK applications through the growing season, and fall aeration and overseeding for cool-season grasses.',
      benefits: ['Weekly or bi-weekly mowing programs','Custom fertilization & weed control plans','Core aeration & overseeding','Seasonal cleanups (spring & fall)','Irrigation system checks included','No long-term contracts required'],
      priceRange: '$45 – $150 per visit',
    },
    {
      name: 'Landscape Design & Installation',
      slug: 'landscape-design',
      short: 'Custom landscape design and professional installation — from foundation plantings to full property transformations.',
      headline: 'Landscape Design & Installation in Raleigh, NC',
      intro: 'Transform your outdoor space with a landscape design built for Raleigh\'s climate. We handle everything from initial concept through final installation — native plants, ornamental beds, grading, drainage, and irrigation.',
      body: 'Great landscape design balances aesthetics with function. Our designers start with a site analysis — evaluating sun exposure, soil drainage, existing trees, and your home\'s architecture — then build a planting plan that thrives in Wake County\'s Zone 7b/8a conditions. We specialize in native and adapted plant selections: crepe myrtles, knockout roses, loropetalum, ornamental grasses, hollies, and seasonal color beds. Every installation includes proper soil amendment, root-zone preparation, strategic mulching, and drip irrigation where needed. We also handle grading and drainage corrections to protect your foundation and prevent standing water.',
      benefits: ['Free on-site design consultations','Native & climate-adapted plant selections','Foundation plantings & curb appeal packages','Grading & drainage solutions included','Drip irrigation installation','1-year plant replacement guarantee'],
      priceRange: '$1,500 – $15,000+',
    },
    {
      name: 'Hardscaping',
      slug: 'hardscaping',
      short: 'Patios, retaining walls, walkways, fire pits, and outdoor living spaces built to last.',
      headline: 'Hardscaping Services in Raleigh, NC',
      intro: 'Add structure and function to your outdoor space with professional hardscaping. From flagstone patios to engineered retaining walls, we build outdoor living areas that handle Raleigh\'s clay soils and drainage challenges.',
      body: 'Hardscaping is where landscape meets construction. Raleigh\'s heavy clay soils require proper base preparation — compacted gravel, geotextile fabric, and engineered drainage — to prevent shifting, settling, and frost heave. Our crews are experienced with pavers, natural stone, poured concrete, and segmental retaining wall systems. We build patios designed for entertaining, walkways that improve accessibility, retaining walls that solve grade changes, fire pits for year-round outdoor living, and outdoor kitchen foundations. Every project includes a detailed scope of work, material specifications, and timeline before we break ground.',
      benefits: ['Paver & natural stone patios','Retaining walls (up to 6 feet)','Walkways & stepping stone paths','Fire pits & outdoor fireplaces','Outdoor kitchen foundations','Proper drainage & base engineering'],
      priceRange: '$3,000 – $25,000+',
    },
    {
      name: 'Mulching & Bed Maintenance',
      slug: 'mulching',
      short: 'Fresh mulch installation, pine straw, bed edging, and weed prevention for clean, polished landscape beds.',
      headline: 'Mulching & Bed Maintenance in Raleigh, NC',
      intro: 'Crisp bed edges and fresh mulch transform your property\'s appearance instantly. We install hardwood mulch, pine straw, and decorative stone — plus handle weeding, pruning, and bed renovation.',
      body: 'Mulch does more than look good. In Wake County\'s hot summers, a 2-3 inch mulch layer retains soil moisture, regulates root temperature, and suppresses weed germination. We offer double-shredded hardwood mulch (the most popular in the Triangle), long-leaf pine straw for a natural Carolina look, and decorative stone for low-maintenance beds. Our bed maintenance service includes hand-pulling weeds, cutting clean edges with a bed edger, pruning overgrown shrubs, removing dead plant material, and refreshing mulch to the proper depth. Most residential properties need mulch refreshed once or twice per year.',
      benefits: ['Hardwood mulch, pine straw, or decorative stone','Precise bed edging & shaping','Weed removal & pre-emergent treatment','Shrub pruning & dead-heading','Bulk mulch delivery available','Spring & fall refresh programs'],
      priceRange: '$200 – $1,200',
    },
    {
      name: 'Tree & Shrub Care',
      slug: 'tree-shrub-care',
      short: 'Tree trimming, shrub pruning, removal, stump grinding, and deep-root fertilization.',
      headline: 'Tree & Shrub Care Services in Raleigh, NC',
      intro: 'Keep your trees and shrubs healthy, safe, and looking their best. We handle everything from routine pruning and canopy shaping to hazardous tree removal and stump grinding.',
      body: 'Raleigh\'s mature tree canopy is one of the city\'s best features — but trees need regular maintenance to stay healthy and safe. Storm damage, dead limbs, crossing branches, and overgrown canopies can threaten your home, power lines, and neighboring properties. Our ISA-informed approach focuses on proper pruning cuts, canopy thinning for wind resistance, crown raising for clearance, and deadwood removal. For shrubs, we provide seasonal pruning schedules timed to each species\' bloom cycle — pruning spring bloomers after flowering and summer bloomers in late winter. We also offer deep-root fertilization for established trees showing signs of stress, chlorosis, or decline.',
      benefits: ['Tree trimming & canopy shaping','Hazardous tree removal','Stump grinding (below grade)','Shrub pruning on seasonal schedules','Deep-root tree fertilization','Storm damage cleanup & emergency response'],
      priceRange: '$150 – $2,500+',
    },
    {
      name: 'Sod Installation',
      slug: 'sod-installation',
      short: 'New lawn installation with premium sod — Bermuda, Zoysia, or Fescue — graded, prepped, and laid same-day.',
      headline: 'Sod Installation Services in Raleigh, NC',
      intro: 'Skip the wait for seed. We install premium sod — Bermuda, Zoysia, and Fescue varieties — with proper soil prep, grading, and same-day laying for an instant lawn that establishes fast.',
      body: 'Sod gives you an instant lawn — no waiting months for seed to germinate and fill in. Our sod installation process starts with a soil test, then we strip or till the existing surface, correct grading for proper drainage, amend the soil with compost, and lay fresh sod in tight seams. We source our sod from local farms so it\'s harvested and installed the same day for maximum root viability. We offer Bermuda for full-sun lawns, Zoysia for a dense luxury feel, and Tall Fescue for shaded yards. After installation, we provide a detailed watering schedule and 30-day care guide to ensure establishment.',
      benefits: ['Bermuda, Zoysia, and Fescue varieties','Soil testing & amendment included','Proper grading for drainage','Same-day installation from harvest','Post-install watering schedule & care guide','New construction & full renovation projects'],
      priceRange: '$1.50 – $3.00 per sq ft installed',
    },
  ],

  locations: [
    { name: 'Cary', slug: 'cary', county: 'Wake', description: 'Serving Cary\'s established neighborhoods and growing subdivisions with full-service landscaping, lawn care, and hardscaping. From Preston to Lochmere, we know Cary\'s HOA standards and design expectations.' },
    { name: 'Apex', slug: 'apex', county: 'Wake', description: 'Professional landscaping for Apex homeowners — from historic downtown properties to the Bella Casa and Scotts Mill communities. We handle lawn care, landscape design, and outdoor living installations across Apex.' },
    { name: 'Holly Springs', slug: 'holly-springs', county: 'Wake', description: 'Full-service landscaping for Holly Springs\' rapidly growing communities. Whether you need lawn maintenance for a new build or a complete landscape transformation, we serve all of Holly Springs and the 12 Oaks area.' },
    { name: 'Wake Forest', slug: 'wake-forest', county: 'Wake', description: 'Landscaping and lawn care for Wake Forest residents — from Heritage to Hasentree. We provide year-round maintenance, seasonal plantings, and hardscape installations throughout Wake Forest.' },
    { name: 'Garner', slug: 'garner', county: 'Wake', description: 'Reliable landscaping services for Garner homeowners. We handle lawn care, mulch installation, tree trimming, and full landscape renovations across Garner and the White Oak area.' },
    { name: 'Fuquay-Varina', slug: 'fuquay-varina', county: 'Wake', description: 'Professional landscaping for Fuquay-Varina — from downtown to the Bentwinds and Southgate communities. Lawn care, landscape design, hardscaping, and seasonal maintenance programs.' },
    { name: 'Knightdale', slug: 'knightdale', county: 'Wake', description: 'Serving Knightdale\'s growing neighborhoods with expert lawn care, landscape installation, and hardscaping. From Widewaters to Planters Walk, we keep Knightdale properties looking sharp.' },
    { name: 'Durham', slug: 'durham', county: 'Durham', description: 'Extending our professional landscaping services to Durham homeowners. Lawn maintenance, landscape design, hardscaping, and seasonal programs — serving Durham, Southpoint, and Research Triangle Park areas.' },
  ],

  whyUs: [
    { title: 'Licensed & Insured', text: 'Fully licensed NC landscape contractor with general liability and workers\' comp coverage on every crew.' },
    { title: 'Free Estimates', text: 'Detailed written estimates with clear scope, materials, and pricing — no surprises, no hidden fees.' },
    { title: 'Local Plant Expertise', text: 'We know which plants thrive in Wake County\'s Zone 7b/8a climate and heavy clay soils.' },
    { title: 'Reliable Scheduling', text: 'Consistent weekly service with GPS route tracking. You\'ll know when we\'re coming and when we\'re done.' },
    { title: 'Responsive Communication', text: 'Direct line to your account manager. Texts, calls, and emails answered same-day.' },
    { title: 'Satisfaction Guaranteed', text: 'If you\'re not happy with a service visit, we\'ll come back and make it right at no charge.' },
  ],

  pricing: [
    { service: 'Weekly Lawn Mowing (avg residential)', price: '$45 – $85' },
    { service: 'Mulch Installation (per yard)', price: '$75 – $95' },
    { service: 'Pine Straw (per bale, installed)', price: '$8 – $12' },
    { service: 'Landscape Design & Install', price: '$1,500 – $15,000+' },
    { service: 'Paver Patio (per sq ft)', price: '$18 – $30' },
    { service: 'Retaining Wall (per linear ft)', price: '$35 – $75' },
    { service: 'Tree Trimming', price: '$150 – $800' },
    { service: 'Sod Installation (per sq ft)', price: '$1.50 – $3.00' },
    { service: 'Seasonal Cleanup', price: '$200 – $500' },
  ],

  faqs: [
    { q: 'What areas do you serve around Raleigh?', a: 'We serve all of Wake County including Raleigh, Cary, Apex, Holly Springs, Wake Forest, Garner, Fuquay-Varina, Knightdale, and Morrisville. We also extend into parts of Durham and Johnston counties for larger projects.' },
    { q: 'How often should I have my lawn mowed in Raleigh?', a: 'During the active growing season (April through October), weekly mowing is ideal for Bermuda and Zoysia lawns. Fescue lawns can go 7-10 days between cuts. In winter, most lawns need mowing every 2-3 weeks or not at all depending on the turf type.' },
    { q: 'Do you offer contracts or can I pay per visit?', a: 'Both. We offer monthly maintenance agreements for lawn care and landscape maintenance, but we also do one-time projects like mulching, sod installation, and hardscaping. No long-term contracts are required for any service.' },
    { q: 'When is the best time to install new landscaping in Raleigh?', a: 'Fall (September through November) is the best time to install trees, shrubs, and perennials in the Triangle — cooler temperatures and fall rains help roots establish before summer heat. Spring works well too. We avoid major plantings in July and August unless irrigation is in place.' },
    { q: 'Do you handle HOA-required landscaping standards?', a: 'Yes. Many Raleigh-area HOAs have specific landscaping requirements for bed maintenance, lawn height, tree clearance, and seasonal color. We work with HOA guidelines and can coordinate directly with your management company if needed.' },
    { q: 'What type of mulch do you recommend for Raleigh?', a: 'Double-shredded hardwood mulch is the most popular and cost-effective choice for the Triangle. It breaks down slowly, retains moisture well, and looks clean. For a more natural look, we also install long-leaf pine straw, which is abundant in eastern NC and works great on slopes.' },
  ],

  disclaimer: 'Raleigh Landscaping Pros is a locally owned and operated landscaping company serving the Raleigh-Durham metro area.',
};
