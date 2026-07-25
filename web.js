// ═══════════════════════════════════════════════════════════
// ROSHANI NET — app.js
// ═══════════════════════════════════════════════════════════
const COURSES = [
  // 1. Architecture / BIM
  {
    id: 1, title: 'AutoCAD Architecture',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    syllabus: ['Architectural Interface & Drawing Setup', 'Wall, Door & Window Tools', 'Structural Grid & Columns', 'Elevations & Section Generation', 'Documentation & Sheet Setup', '3D Massing & Conceptual Models']
  },
  {
    id: 2, title: 'Autodesk Revit Architecture',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Jagruti D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['BIM Interface & Coordination', 'Parametric Modeling (Walls, Roofs, Floors)', 'Custom Families & Components', 'Renderings & Material Application', 'Schedules, Quantities & Sheets', 'Phasing & Design Options']
  },
  {
    id: 3, title: 'BIM Professional Course',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Jagruti D. Shah', duration: '6 Months', level: 'Advanced',
    price: '₹40,000', originalPrice: '₹60,000',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    syllabus: ['BIM Execution Plan (BEP) Development', 'Multi-disciplinary Revit Coordination', 'Navisworks Advanced Coordination', 'BIM 360 & Autodesk Construction Cloud', 'LOD Definitions & Delivery', 'BIM Standards (ISO 19650)']
  },
  {
    id: 4, title: 'Nav Nirman Professional BIM',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Dipak O. Shah', duration: '4 Months', level: 'Advanced',
    price: '₹28,000', originalPrice: '₹40,000',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['Advanced Construction BIM', 'Site Logistics & Planning', '4D Scheduling & Simulation', '5D Cost Estimation', 'BIM for Facility Management', 'Clash Resolution Workflows']
  },
  {
    id: 5, title: 'Trimble SketchUp Pro',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    syllabus: ['SketchUp Workspace & Tools', '3D Modeling from 2D Plans', 'Organizing Models: Groups & Components', 'Applying Materials & Textures', 'Extensions & Plugins', 'Layout Presentation Design']
  },
  {
    id: 6, title: 'Lumion & Enscape Rendering',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹11,000', originalPrice: '₹16,000',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80',
    syllabus: ['Importing Models & Optimization', 'Material Mapping & Realistic Tuning', 'Lighting & Atmospheric Setups', 'Enscape Real-time Rendering', 'Lumion Visual Effects & Cinematic Animation', 'Interactive Virtual Tours']
  },
  {
    id: 7, title: 'Autodesk 3ds Max & V-Ray',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '3 Months', level: 'Beginner–Advanced',
    price: '₹13,000', originalPrice: '₹19,000',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    syllabus: ['3ds Max Interface & Poly Modeling', 'Material Editor & UVW mapping', 'Advanced Lighting Setups', 'V-Ray Rendering Engine Settings', 'Architectural Exterior/Interior Projects', 'Flythrough Camera Animation']
  },
  {
    id: 8, title: 'Rhinoceros 3D & Grasshopper',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Nachiket D. Shah', duration: '2.5 Months', level: 'Intermediate–Advanced',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80',
    syllabus: ['Rhino Workspace & NURBS Curves', 'Surface & Solid Modeling', 'Grasshopper Interface & Data Trees', 'Parametric Design Workflows', 'Generative Algorithms', 'Fabrication & Prototyping Prep']
  },
  {
    id: 9, title: 'Graphisoft ArchiCAD',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Jagruti D. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['ArchiCAD Interface & BIM Concepts', 'Building Element Tools', '3D Documentation & Layouts', 'Teamwork & Collaboration', 'Virtual Building Explorer (BIMx)', 'Quantities & Schedules']
  },
  {
    id: 10, title: 'Bentley MicroStation & OpenRoads',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Dipak O. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    syllabus: ['MicroStation Vector Drafting', 'Cells & References Management', 'OpenRoads Designer Environment', 'Terrain Modeling & Surveying Alignment', 'Corridor Design & Earthworks', 'Plan & Profile Sheets']
  },
  {
    id: 11, title: 'Trimble Tekla Structural Designer',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Jagruti D. Shah', duration: '3 Months', level: 'Intermediate–Advanced',
    price: '₹25,000', originalPrice: '₹50,000',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=600&q=80',
    syllabus: ['Tekla Workspace & Steel/Concrete Modeling', 'Connection & Detailing Tools', 'Concrete Reinforcement Detailing', 'GA Drawings & Assembly Layouts', 'IFC Model Exchange', 'Quantity Take-Off Reports']
  },
  {
    id: 12, title: 'Course on Interior Designing',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '4 Months', level: 'Beginner–Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    syllabus: ['Principles of Space Planning', 'Color Theory & Material Boards', 'Lighting Layouts & Ceilings', 'Furniture & Fixture Details', '2D Plans & 3D Interior Views', 'Estimation & Client Pitching']
  },
  {
    id: 13, title: 'Landscape Design & Site Planning',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹11,000', originalPrice: '₹16,000',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80',
    syllabus: ['Site Analysis & Topography', 'Vegetation & Hardscape Materials', 'Outdoor Lighting & Drainage', 'Grading & Site Features', 'Landscape Design Presentation', '3D Site Walkthroughs']
  },
  {
    id: 14, title: 'Architectural Visualization Studio',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=600&q=80',
    syllabus: ['Realistic Texturing & PBR Shaders', 'Advanced Day/Night Lighting', 'Animation & Post-Production Effects', 'VR Visualizations', 'Cinematic Camera Movements', 'Portfolio Rendering']
  },
  {
    id: 15, title: 'Design Portfolio Development',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '1 Month', level: 'Intermediate',
    price: '₹6,000', originalPrice: '₹10,000',
    img: 'https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80',
    syllabus: ['Layout Planning & Page Grid', 'Selecting Key Projects', 'Post-processing & Graphic Aesthetics', 'CV & Cover Letter Design', 'Digital Portfolio Formats', 'Mock Interviews & Reviews']
  },
  {
    id: 16, title: 'NATA Entrance Coaching',
    category: 'architecture', categoryLabel: 'Architecture / BIM',
    instructor: 'Ujala D. Shah', duration: '3 Months', level: 'Beginner',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    syllabus: ['Perspective Drawing & Sketching Techniques', 'Aesthetic Sensitivity & Architectural History', 'Mental Ability & Logical Reasoning', 'Color Harmony & Design Principles', 'Mock Tests & Exam Practice']
  },

  // 2. Civil Engineering
  {
    id: 17, title: 'AutoCAD Civil 3D',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Dipak O. Shah', duration: '3 Months', level: 'Intermediate–Advanced',
    price: '₹13,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=600&q=80',
    syllabus: ['Civil 3D Interface & Point Data', 'Surfaces & Grading Analysis', 'Corridor & Alignment Design', 'Earthwork Volume Calculations', 'Pipe Networks & Utilities', 'Plan Production & Sheet Sets']
  },
  {
    id: 18, title: 'Autodesk Revit Structure',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Jagruti D. Shah', duration: '2.5 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['Structural Grids, Levels & Columns', 'Foundations & Slabs', 'Steel Framing & Concrete Rebar', 'Structural Analytical Model', 'Schedules, Quantities & Sheets', 'Structural Families & Detailing']
  },
  {
    id: 19, title: 'BIM for Civil Infrastructure',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Jagruti D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹18,000', originalPrice: '₹25,000',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    syllabus: ['Infrastructure BIM Concepts', 'Integrating GIS and BIM', 'Infraworks Concept Design', 'Civil 3D Design Interoperability', 'Navisworks Clash Analysis', 'BIM Workflows for Roads/Bridges']
  },
  {
    id: 20, title: 'Quantity Surveying & Billing',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹11,000', originalPrice: '₹16,000',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    syllabus: ['Introduction to Quantity Surveying', 'Methods of Measurement (IS 1200)', 'Rate Analysis of Concrete & Masonry', 'Bar Bending Schedule (BBS) Preparation', 'Preparing Bills of Quantities (BOQ)', 'Valuation & Reconciliation Reports']
  },
  {
    id: 21, title: 'Estimation & Costing',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    syllabus: ['Estimation Basics & Specifications', 'Taking-off Quantities from Drawings', 'Costing of Residential & Commercial Buildings', 'Tender Documentation & Procedures', 'Project Budgeting & Planning', 'Excel Automation for Estimators']
  },
  {
    id: 22, title: 'Primavera P6 Project Management',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Jagruti D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹17,000',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    syllabus: ['P6 Interface & Project Setup', 'WBS & Activity Networks', 'Resource & Cost Loading', 'Baseline Sync & Tracking', 'Earned Value Management', 'S-Curve & Performance Dashboards']
  },
  {
    id: 23, title: 'Microsoft Project (MSP) Planning',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Jagruti D. Shah', duration: '1.5 Months', level: 'Beginner–Intermediate',
    price: '₹8,000', originalPrice: '₹12,000',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    syllabus: ['MSP Interface & Calendar Setup', 'Tasks, Links & Lead/Lag Times', 'Resource Assignment & Leveling', 'Tracking Progress & Variances', 'Custom Views, Gantt Charts & Filters', 'Generating Project Status Reports']
  },
  {
    id: 24, title: 'Construction Management Professional',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Dipak O. Shah', duration: '4 Months', level: 'Advanced',
    price: '₹22,000', originalPrice: '₹32,000',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
    syllabus: ['Project Lifecycle & Safety Management', 'Quality Assurance & Quality Control', 'Contracts & Dispute Resolution', 'Site Resource Optimization', 'Financial Management & Cost Control', 'Construction Case Studies']
  },
  {
    id: 25, title: 'Structural Detailing & Detailing',
    category: 'civil', categoryLabel: 'Civil Engineering',
    instructor: 'Jagruti D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=600&q=80',
    syllabus: ['Rebar detailing standards', 'Steel Joint Connection Design', 'Detailing Foundation & Columns', 'Drafting Construction Joints', 'Schedules of Steel & RCC', 'Cad detailing workflows']
  },

  // 3. Mechanical Engineering
  {
    id: 26, title: 'AutoCAD Mechanical',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Mechanical Drafting Standards', 'Layer Groups & Shaft Generators', 'Standard Parts Libraries', 'Dimensioning & Tolerance Symbols', 'BOM & Part Lists Creation', 'Assembly Drawings Design']
  },
  {
    id: 27, title: 'SolidWorks Mechanical Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Part Modeling Basics', 'Assembly Design & Mates', '2D Drawings & GD&T Standards', 'Sheet Metal & Weldments', 'Surface Modeling Essentials', 'Motion Study & FEA Simulation']
  },
  {
    id: 28, title: 'CATIA V5 Aerospace Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Dipak O. Shah', duration: '4 Months', level: 'Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80',
    syllabus: ['CATIA Part & Assembly Design', 'Generative Shape Design (GSD)', 'Class-A Surface Design', 'DMU Kinematics & Assembly Fitting', 'Aerospace Sheet Metal Work', 'Aerospace Case Studies']
  },
  {
    id: 29, title: 'Creo Parametric Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Creo UI & Sketcher', 'Part Modeling & Protrusions', 'Assembly & Mechanism Design', 'Flexible Modeling Extension', 'Drafting & Detailing Sheets', 'Casting & Mold Design']
  },
  {
    id: 30, title: 'Siemens NX Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['NX User Interface & Sketching', 'Synchronous Technology Modeling', 'Advanced Freeform Surfacing', 'NX Assembly & Routing', 'Sheet Metal Design', 'NX CAM Integration']
  },
  {
    id: 31, title: 'Autodesk Inventor Professional',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹13,000', originalPrice: '₹19,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Inventor Sketcher & Modeling', 'Assembly & Weldment Design', 'Frame Generator & Tube Piping', 'Sheet Metal Modeling & Flat Pattern', 'Presentation Video Generation', 'FEA Analysis Intro']
  },
  {
    id: 32, title: 'Fusion 360 Product Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '2.5 Months', level: 'Intermediate',
    price: '₹11,000', originalPrice: '₹16,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Cloud Interface & Projects', 'Parametric & Freeform Modeling', 'Joints & Animation', 'Generative Design Concepts', 'Render Engine Setup', 'Fusion 360 CAM Integration']
  },
  {
    id: 33, title: 'ANSYS FEA Engineering Analysis',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['FEA Fundamentals & ANSYS GUI', 'Geometry import & Clean-up', 'Meshing Techniques & Quality Control', 'Static Structural Analysis', 'Modal, Thermal & Buckling Analysis', 'Post-processing & Interpretation']
  },
  {
    id: 34, title: 'HyperMesh FEA Pre-processing',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['HyperMesh UI & Geom Cleanup', '1D, 2D Shell & 3D Solid Meshing', 'Mesh Quality Checks & Refinement', 'Material & Property Cards', 'Loads, Boundary Conditions & Constraints', 'Solver Interfaces (OptiStruct, Abaqus)']
  },
  {
    id: 35, title: 'Abaqus Advanced Simulation',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹20,000', originalPrice: '₹30,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Abaqus CAE Environment', 'Non-linear Material Modeling', 'Contact Formulation & Interaction', 'Abaqus Standard vs Explicit Solver', 'Dynamic & Impact Analysis', 'Post-processing results']
  },
  {
    id: 36, title: 'MasterCAM Design & Toolpath',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Dipak O. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['MasterCAM UI & 2D Geometry', '2D Toolpaths (Contour, Pocket, Drill)', '3D Surface Roughing & Finishing', 'Multi-Axis Toolpath Principles', 'G-Code & M-Code Post Processing', 'Simulation & Verification']
  },
  {
    id: 37, title: 'PowerMILL & EdgeCAM Manufacturing',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Dipak O. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['PowerMILL UI & Model Importing', 'High-Speed Machining (HSM) Toolpaths', '5-Axis Machining Strategies', 'Collision Avoidance & Verification', 'EdgeCAM Tooling Setup & Milling', 'Post Processing Customization']
  },
  {
    id: 38, title: 'CNC Programming & Tool Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['CNC Turning & Milling Program Structure', 'G-code & M-code Commands', 'Tooling Systems & Insert Selection', 'Cutting Parameters calculation', 'Jigs & Fixtures Design Basics', 'CNC Machine Operation Intro']
  },
  {
    id: 39, title: 'GD&T (Geometric Dimensioning & Tolerancing)',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '1 Month', level: 'Intermediate',
    price: '₹7,000', originalPrice: '₹10,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['GD&T Introduction & Symbols', 'Form, Orientation, Profile & Location', 'Datum Reference Frame (DRF) Setup', 'Maximum Material Condition (MMC)', 'Tolerance Stack-Up Analysis', 'Drawing Interpretation Practice']
  },
  {
    id: 40, title: 'Mold & Sheet Metal Design',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Plastic Materials & Mold Design Rules', 'Core & Cavity Extraction', 'Feed System, Runners & Gates Design', 'Sheet Metal Design Rules (K-Factor)', 'Flanges, Bends & Punch Features', 'Flat Pattern Generation']
  },
  {
    id: 41, title: 'Reverse Engineering & 3D Scanning',
    category: 'mechanical', categoryLabel: 'Mechanical Engineering',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Advanced',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['3D Scanning Technology Overview', 'Point Cloud Data Processing', 'Mesh to CAD Surface Modeling', 'Deviations & Quality Analysis', 'Reconstructing Parametric CAD Models', 'Rapid Prototyping Workflows']
  },

  // 4. Electrical / MEP
  {
    id: 42, title: 'AutoCAD Electrical',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹11,000', originalPrice: '₹16,000',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    syllabus: ['Schematic Design & Wire Numbering', 'Panel Layouts & Component Footprints', 'PLC I/O & Terminal Diagrams', 'Project Manager Tools', 'BOM & Wire Report Generation', 'Symbol Library Customization']
  },
  {
    id: 43, title: 'Autodesk Revit MEP',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Jagruti D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['MEP Systems Interface', 'HVAC Duct & Pipe Modeling', 'Electrical Lighting & Cable Tray Modeling', 'Plumbing Fixtures & Pipework Routing', 'MEP Systems Coordination & Sheets', 'Interference Check Workflows']
  },
  {
    id: 44, title: 'HVAC Design & Air Conditioning',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    syllabus: ['HVAC Fundamentals & Load Estimation', 'Duct Design & Air Distribution System', 'Chilled Water Piping Design', 'Equipment Selection (AHU, Chillers)', 'Ventilation & Exhaust Systems', 'Standards & Codes (ASHRAE)']
  },
  {
    id: 45, title: 'Electrical Building Services Design',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    syllabus: ['Electrical Load Calculations', 'Lighting & Power Layout Design', 'Cable Sizing & Selection', 'Single Line Diagrams (SLD)', 'Earthing & Lightning Protection Systems', 'Panel Board Schedules']
  },
  {
    id: 46, title: 'Plumbing & Fire Fighting Design',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    syllabus: ['Water Supply & Drainage Piping Design', 'Fixture Unit Calculations', 'Fire Sprinkler & Hydrant System Layout', 'Pump Head Calculations & Sizing', 'Fire alarm system integration', 'Standards & Codes (NFPA / NBC)']
  },
  {
    id: 47, title: 'MEP Coordination & Clash Detection',
    category: 'mep', categoryLabel: 'Electrical / MEP',
    instructor: 'Jagruti D. Shah', duration: '2 Months', level: 'Advanced',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    syllabus: ['Interdisciplinary Coordination Concepts', 'Navisworks Clash Detective Setup', 'Clash Grouping & Coordination Matrix', 'Clash Resolution in Revit', 'Navisworks TimeLiner & Animation', 'Reporting Coordination Results']
  },

  // 5. Manufacturing & Industrial Design
  {
    id: 48, title: 'CAD/CAM/CAE Integration',
    category: 'manufacturing', categoryLabel: 'Manufacturing Design',
    instructor: 'Nachiket D. Shah', duration: '4 Months', level: 'Advanced',
    price: '₹20,000', originalPrice: '₹30,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['CAD Modeling to CAM Toolpaths Workflow', 'CAE Structural Analysis Integration', 'Design for Manufacturability (DFM)', 'CNC Code Generation & Simulation', 'Data Management & Collaboration', 'Capstone Project: Prototype to Part']
  },
  {
    id: 49, title: 'Product Lifecycle Management (PLM)',
    category: 'manufacturing', categoryLabel: 'Manufacturing Design',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Advanced',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    syllabus: ['PLM Principles & Workflows', 'BOM (Bill of Materials) Management', 'Change Control & Revision Workflows', 'Configuration Management', 'PLM Systems (Windchill/Teamcenter Concepts)', 'ERP Integration Basics']
  },
  {
    id: 50, title: 'Manufacturing Design & Process Planning',
    category: 'manufacturing', categoryLabel: 'Manufacturing Design',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Process Sheet & routing selection', 'Estimating Manufacturing Costs', 'Manufacturing Tolerances & Quality Control', 'Process Capability (Cp & Cpk)', 'Lean Manufacturing basics', 'Production System Optimization']
  },
  {
    id: 51, title: 'Machine Design & Mechanism Analysis',
    category: 'manufacturing', categoryLabel: 'Manufacturing Design',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Advanced',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Machine Elements Design (Shafts, Gears, Springs)', 'Mechanism Kinematics & Dynamics', 'Failure Theories & Stress Concentration', 'Power Transmission Selection', 'SolidWorks Motion Analysis', 'CAD Machine Design Projects']
  },
  {
    id: 52, title: 'Industrial Product Design',
    category: 'manufacturing', categoryLabel: 'Manufacturing Design',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate–Advanced',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Product Conception & Sketching', 'Ergonomics & Aesthetics in Design', 'Material & Process Selection', 'Advanced Surfacing CAD Modeling', 'Rapid Prototyping & DFM Workflows', 'Design Portfolio Development']
  },

  // 6. Software Development / IT
  {
    id: 53, title: 'Software Development Fundamentals',
    category: 'it', categoryLabel: 'Software & IT',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Beginner',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
    syllabus: ['Overview of Software Development Lifecycle (SDLC)', 'Intro to Coding & Logic Design', 'Basic Algorithms & Logic Flow', 'Introduction to Version Control (Git/GitHub)', 'IDE & Code Editors (VS Code)', 'Basic CLI Commands']
  },
  {
    id: 54, title: 'Programming Fundamentals',
    category: 'it', categoryLabel: 'Software & IT',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Beginner–Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
    syllabus: ['C++ & Python Syntax and Control Structures', 'Object Oriented Programming (OOP)', 'Basic Data Structures (Arrays, Lists, Maps)', 'File I/O operations & Exception Handling', 'AutoLISP Programming Basics', 'Scripting for CAD Automation']
  },
  {
    id: 55, title: 'Database Concepts (SQL & MongoDB)',
    category: 'it', categoryLabel: 'Software & IT',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Intermediate',
    price: '₹9,000', originalPrice: '₹14,000',
    img: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
    syllabus: ['Relational vs Non-Relational Databases', 'SQL Query Fundamentals', 'MongoDB CRUD Operations & Shell', 'Indexing & Query Performance', 'Database schema design principles', 'Connecting DBs to Applications']
  },
  {
    id: 56, title: 'Application & Web Development',
    category: 'it', categoryLabel: 'Software & IT',
    instructor: 'Nachiket D. Shah', duration: '4 Months', level: 'Intermediate–Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
    syllabus: ['HTML5, CSS3 & JavaScript Essentials', 'Responsive Web Design principles', 'Frontend Frameworks (React.js Fundamentals)', 'Backend Services (Node.js & Express.js)', 'REST API Design & Integration', 'Deployment & Hosting Workflows']
  },
  {
    id: 57, title: 'Software Engineering Projects',
    category: 'it', categoryLabel: 'Software & IT',
    instructor: 'Nachiket D. Shah', duration: '2 Months', level: 'Advanced',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80',
    syllabus: ['Agile & Scrum Project Planning', 'System Design & Architecture Spec', 'Code Reviews & Collaboration', 'Unit Testing & Bug Tracking', 'Capstone Software Delivery', 'Project Presentation Preparation']
  },

  // 7. Artificial Intelligence & Data
  {
    id: 58, title: 'Artificial Intelligence & Machine Learning',
    category: 'ai', categoryLabel: 'AI & Data',
    instructor: 'Nachiket D. Shah', duration: '4 Months', level: 'Intermediate–Advanced',
    price: '₹22,000', originalPrice: '₹32,000',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    syllabus: ['AI Foundations & Math basics', 'Supervised Learning Algorithms (Regression/Classification)', 'Unsupervised Learning (Clustering)', 'Introduction to Neural Networks & Deep Learning', 'Model Evaluation & Tuning', 'Python AI Project Work']
  },
  {
    id: 59, title: 'Data Analytics & Business Intelligence',
    category: 'ai', categoryLabel: 'AI & Data',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Beginner–Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    syllabus: ['Data Cleaning & Manipulation (Pandas/NumPy)', 'Data Visualization (Matplotlib/Seaborn)', 'SQL Queries for Analytics', 'BI Tool Basics (Power BI / Tableau)', 'Dashboard Design Principles', 'Data-driven Decision Making Case Studies']
  },
  {
    id: 60, title: 'Geographic Information Systems (GIS)',
    category: 'ai', categoryLabel: 'AI & Data',
    instructor: 'Dipak O. Shah', duration: '3 Months', level: 'Beginner–Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
    syllabus: ['GIS Principles & Spatial Data Types', 'ArcGIS Pro Workspace & Operations', 'Coordinate Reference Systems (CRS)', 'Digitizing & Attribute Tables', 'Spatial Queries & Geoprocessing', 'Web Mapping & Publishing Projects']
  },
  {
    id: 61, title: 'Internet of Things (IoT) Systems',
    category: 'ai', categoryLabel: 'AI & Data',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹15,000', originalPrice: '₹22,000',
    img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
    syllabus: ['IoT Architecture & Sensor Basics', 'Microcontrollers (Arduino/Raspberry Pi)', 'IoT Protocols (MQTT, HTTP)', 'Cloud IoT Platforms Integration', 'Node-RED Logic Workflows', 'IoT Smart System Prototype']
  },

  // 8. AR / VR Technologies
  {
    id: 62, title: 'Augmented Reality Application Design',
    category: 'arvr', categoryLabel: 'AR / VR Technologies',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹16,000', originalPrice: '₹24,000',
    img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
    syllabus: ['AR Foundations & Core Concepts', 'AR SDKs (Vuforia, ARCore, ARKit)', 'Marker-based vs Markerless AR', 'Unity Engine Setup for AR', 'Building 3D Assets for AR', 'Building and Deploying AR Mobile Apps']
  },
  {
    id: 63, title: 'Virtual Reality Development',
    category: 'arvr', categoryLabel: 'AR / VR Technologies',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Intermediate–Advanced',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
    syllabus: ['VR Optics, Tracking & Systems', 'Unity / Unreal Engine for VR', 'VR Player Controller & Interaction', 'UI Design for Immersive Spaces', 'Optimizing Performance for VR Headsets', 'Deployment to Standalone VR Headsets']
  },
  {
    id: 64, title: 'Immersive Application Development',
    category: 'arvr', categoryLabel: 'AR / VR Technologies',
    instructor: 'Nachiket D. Shah', duration: '4 Months', level: 'Advanced',
    price: '₹22,000', originalPrice: '₹32,000',
    img: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80',
    syllabus: ['Cross-platform XR SDK (Unity XR Interaction Toolkit)', 'Physics & Hand Tracking Interactions', 'Multiplayer XR Environments', 'Spatial Audio & Audio FX', 'Advanced Graphics optimization for XR', 'Complete XR Capstone Project']
  },

  // 9. Graphic Design & Multimedia
  {
    id: 65, title: 'Adobe Photoshop & Illustrator',
    category: 'graphic', categoryLabel: 'Graphic Design',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Beginner',
    price: '₹9,000', originalPrice: '₹14,000',
    img: 'https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80',
    syllabus: ['Photoshop Tools & Image Retouching', 'Layers, Masks & Selection Techniques', 'Illustrator Workspace & Vector Drawing', 'Typography & Layout Tools', 'Logo & Icon Design Projects', 'Exporting for Print & Web']
  },
  {
    id: 66, title: 'Adobe InDesign & CorelDraw',
    category: 'graphic', categoryLabel: 'Graphic Design',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Beginner',
    price: '₹9,000', originalPrice: '₹14,000',
    img: 'https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80',
    syllabus: ['InDesign Master Pages & Style sheets', 'Multi-page Layout (Magazines, E-books)', 'CorelDraw Workspace & Vector Shapes', 'Text Formatting & Shaping Tools', 'Preparing Print & Plotter Files', 'Branding Identity Capstone']
  },
  {
    id: 67, title: 'Graphic Design & Branding',
    category: 'graphic', categoryLabel: 'Graphic Design',
    instructor: 'Ujala D. Shah', duration: '2 Months', level: 'Beginner–Intermediate',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80',
    syllabus: ['Design Principles & Visual Hierarchy', 'Color Theory & Branding Psychology', 'Creating Brand Style Guides', 'Social Media Graphics Design', 'Packaging & Print Materials Layout', 'Real Brand Identity Projects']
  },
  {
    id: 68, title: 'Video Editing & Post Production',
    category: 'graphic', categoryLabel: 'Graphic Design',
    instructor: 'Ujala D. Shah', duration: '3 Months', level: 'Beginner–Intermediate',
    price: '₹12,000', originalPrice: '₹18,000',
    img: 'https://images.unsplash.com/photo-1561070791-26c113006238?w=600&q=80',
    syllabus: ['Video editing timeline & cut techniques', 'Audio syncing & sound editing', 'Color Grading & Color Correction', 'Introduction to Motion Graphics (After Effects)', 'Transitions & Special Effects', 'Rendering & formats optimization']
  },
  {
    id: 70, title: 'Entertainment Software & Game Art',
    category: 'graphic', categoryLabel: 'Graphic Design',
    instructor: 'Ujala D. Shah', duration: '3 Months', level: 'Intermediate',
    price: '₹14,000', originalPrice: '₹20,000',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    syllabus: ['2D Game Art Concepts', 'Digital Painting & Concept Art', 'Character Design & Sprite Sheet Creation', '3D asset modeling for games', 'Texture mapping for game engines', 'Game UI Design']
  },

  // 10. Corporate & Industrial Training
  {
    id: 71, title: 'Corporate CAD/CAM/CAE Training',
    category: 'corporate', categoryLabel: 'Corporate & Industrial',
    instructor: 'Dipak O. Shah', duration: 'Flexible', level: 'Customized',
    price: 'Custom Quote', originalPrice: 'Varies',
    img: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?w=600&q=80',
    syllabus: ['Company Specific Design Workflows', 'Standard Operating Procedures (SOP) Setup', 'Advanced Part/Assembly Best Practices', 'Efficiency Audits & Tools custom setup', 'Team skill gap training assessments', 'Consultancy support post-training']
  },
  {
    id: 72, title: 'BIM Implementation for Enterprises',
    category: 'corporate', categoryLabel: 'Corporate & Industrial',
    instructor: 'Jagruti D. Shah', duration: 'Flexible', level: 'Customized',
    price: 'Custom Quote', originalPrice: 'Varies',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    syllabus: ['BIM Enterprise Strategy & Standards', 'Template & Family library setup', 'Collaborative CDE Setup', 'Staff BIM Training & Onboarding', 'Pilot Project Execution support', 'ISO 19650 Compliance audit']
  },
  {
    id: 73, title: 'Industrial Automation & Controls',
    category: 'corporate', categoryLabel: 'Corporate & Industrial',
    instructor: 'Nachiket D. Shah', duration: 'Flexible', level: 'Customized',
    price: 'Custom Quote', originalPrice: 'Varies',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    syllabus: ['PLC & SCADA Programming customized', 'Sensor & Actuator Calibration', 'Industrial Networking Protocols (Modbus/Ethernet)', 'Automation System Integration Design', 'Troubleshooting & Maintenance systems', 'Commissioning Workflows']
  },
  {
    id: 74, title: 'Engineering Consultancy Training',
    category: 'corporate', categoryLabel: 'Corporate & Industrial',
    instructor: 'Dipak O. Shah', duration: 'Flexible', level: 'Customized',
    price: 'Custom Quote', originalPrice: 'Varies',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    syllabus: ['Engineering Design Consultancy best practices', 'Proposal writing & cost estimation methods', 'Standards compliance reviews', 'Reviewing third-party engineering plans', 'Client management strategies', 'Project Delivery Frameworks']
  },

  // 11. Certification Programs
  {
    id: 75, title: 'Autodesk Certified Professional Prep',
    category: 'certification', categoryLabel: 'Certifications',
    instructor: 'Dipak O. Shah', duration: '1 Month', level: 'Advanced',
    price: '₹5,000', originalPrice: '₹8,000',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    syllabus: ['Autodesk Certification Exam Syllabus Review', 'Practice Mock Exam Questions', 'Time Management strategies', 'AutoCAD / Revit Advanced Feature Practice', 'Key Command Checklists', 'Official Certification Voucher Info']
  },
  {
    id: 76, title: 'BIM Professional Certification Prep',
    category: 'certification', categoryLabel: 'Certifications',
    instructor: 'Jagruti D. Shah', duration: '1 Month', level: 'Advanced',
    price: '₹6,000', originalPrice: '₹10,000',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    syllabus: ['BIM Standard Concepts & Principles', 'Revit Modeling Certification Checklist', 'Navisworks Clash Management assessment', 'BIM Manager Role Prep', 'Mock Projects review', 'Official Exam details']
  },
  {
    id: 77, title: 'CAD/CAM/CAE Professional Certification',
    category: 'certification', categoryLabel: 'Certifications',
    instructor: 'Nachiket D. Shah', duration: '1 Month', level: 'Advanced',
    price: '₹5,000', originalPrice: '₹8,000',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    syllabus: ['CSWA / CSWP SolidWorks Exam Prep', 'Siemens NX Certification Standards review', 'ANSYS / HyperMesh certification test practice', 'Parametric Modeling Exam Checklist', 'Timed practice modeling exams', 'Certification process guidance']
  },

  // 12. Placement & Professional Programs
  {
    id: 78, title: 'Job-Oriented Core Engineering Program',
    category: 'placement', categoryLabel: 'Placement & Careers',
    instructor: 'Dipak O. Shah', duration: '6 Months', level: 'Career Track',
    price: '₹35,000', originalPrice: '₹50,000',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    syllabus: ['Multi-CAD Tools Professional Mastery', 'GD&T / Standards application in real world', 'Drafting/Detailing Industrial projects', 'Aptitude & Technical test prep', 'Mock Interviews & Technical panel', '100% Placement Assistance']
  },
  {
    id: 79, title: 'Live Industrial Projects & Internship',
    category: 'placement', categoryLabel: 'Placement & Careers',
    instructor: 'Nachiket D. Shah', duration: '3 Months', level: 'Career Track',
    price: '₹18,000', originalPrice: '₹26,000',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    syllabus: ['Onboarding to live company engineering project', 'Understanding client specs & deadlines', 'Project planning & daily updates', 'Iterative corrections & QA reviews', 'Internship Experience Letter & Certificate', 'Presentation to client panel']
  },
  {
    id: 80, title: 'Placement Assistance & Skills Development',
    category: 'placement', categoryLabel: 'Placement & Careers',
    instructor: 'Dipak O. Shah', duration: '2 Months', level: 'Career Track',
    price: '₹10,000', originalPrice: '₹15,000',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    syllabus: ['Resume & Cover Letter builder workshop', 'LinkedIn & job portal optimization', 'Soft skills & presentation development', 'Technical Q&A prep bank', 'Placement portal access & recruiters list', 'Alumni panel mock Q&A']
  }
];
const COMMITTEE = [
  {
    id: 'dipak',
    name: 'Dipak O. Shah',
    role: 'DIRECTOR',
    avatar: 'https://roshani.net/wp-content/uploads/2024/07/image-removebg-preview-74.png',
    bio: 'Providing premium engineering, design, analysis, and project management consultation. An industry leader committed to transforming governance and digital workflow.',
    achievements: [
      'Director - Roshani Technologies Pvt Ltd',
      'Proprietor - Roshani Computer Services',
      'President - Baroda Management Association (Year 2021-22)',
      'Chairman - Computer Society of India (Year 2015-16)'
    ],
    credentials: 'Visionary Leader, Strategic Management',
    mentorship: '40+ Years of Corporate & Educational Governance'
  },
  {
    id: 'jagruti',
    name: 'Jagruti D. Shah',
    role: 'HR',
    avatar: 'assets/jagruti_nobg.png',
    bio: 'Expert in curriculum design and student mentorship. Oversees all academic programs and ensures alignment with the latest industry demands and Autodesk certification standards.',
    achievements: [
      'M.Tech in CAD/CAM',
      'Revit BIM Certified Trainer',
      'NAAC Curriculum Advisor',
      '500+ Students Placed'
    ]
  },
  {
    id: 'nachiket',
    name: 'Nachiket D. Shah',
    role: 'CEO',
    avatar: 'https://roshani.net/wp-content/uploads/2024/07/ca14d42f-d5e6-4d20-96ba-63b099dab2a5-removebg-preview.png',
    bio: 'Spearheading product development, digital simulations, robotics architectures, and strategic technological expansions.',
    achievements: [
      'CEO - Roshani Technologies Pvt Ltd',
      'Lead Automation and Advanced Solutions Strategist'
    ],
    credentials: 'Corporate Vision, Growth & Partnerships',
    mentorship: 'Founder & Tech Innovator, Entrepreneurship Excellence'
  },
  {
    id: 'ujala',
    name: 'Ujala D. Shah',
    role: 'TECHNICAL DIRECTOR',
    avatar: 'https://roshani.net/wp-content/uploads/2024/07/image-removebg-preview-2024-07-24T123138.863.png',
    bio: 'Driving software, CAD, analysis models, hardware testing, and technical system-level integrations.',
    achievements: [
      'Technical Director - Roshani Technologies Pvt Ltd',
      'Chief Infrastructure & Hardware Design Architect'
    ],
    credentials: 'Lead Architect, Specialized Automation & Hardware Solutions',
    mentorship: '15+ Years Designing Research & IoT Infrastructure'
  },
  {
    id: 'roshni',
    name: 'Roshni Parikh',
    role: 'Chief Architect',
    avatar: 'assets/roshni.png',
    bio: 'Lead architectural strategist and BIM consultant with extensive expertise in sustainable design, master planning, and advanced structural modeling.',
    achievements: ['Licensed Senior Architect', 'BIM & Sustainable Design Specialist', 'Council of Architecture Member', '100+ Commercial Projects']
  }
];
const defaultGovLogos = [
  { name: 'GIDC', src: 'assets/gov_gidc.png', height: '50px', description: "Registered and authorized government body supporting Roshani Technologies' educational pipelines and industrial engineering projects." },
  { name: 'VUDA', src: 'assets/gov_vuda.png', height: '70px', description: "Vadodara Urban Development Authority certified approval for infrastructural design training and engineering compliance." },
  { name: 'Govt. of India Science Sector', src: 'assets/gov_science.png', height: '45px', description: "National Science and Technology Council recognized education mapping for skill development." },
  { name: 'ISRO', src: 'assets/gov_isro.png', height: '55px', description: "Indian Space Research Organisation affiliated research project support and industrial prototyping training." },
  { name: 'Indian Railways', src: 'assets/gov_railways.png', height: '55px', description: "Ministry of Railways authorized vendor partnership and design training certification alignment." },
  { name: 'Indian Maritime University', src: 'assets/gov_maritime.png', height: '60px', description: "Leading national maritime training institute partnership for port infrastructure and shipping design." },
  { name: 'Government of India', src: 'assets/gov_india.png', height: '75px', description: "National level institutional authentication for skill development schemes and certifications." },
  { name: 'Kaushalya Skill University', src: 'assets/gov_kaushalya.png', height: '85px', description: "Apex state skill university partnership for professional certification credit hours." },
  { name: 'Sardar Sarovar Narmada', src: 'assets/gov_sardar_sarovar.png', height: '70px', description: "Sardar Sarovar Narmada Nigam Limited design and engineering software curriculum alignment." },
  { name: 'Forest Department', src: 'assets/gov_forest.png', height: '60px', description: "State Forest Department GIS mapping and resource planning project partnerships." },
  { name: 'Govt. of India Roads and Building', src: 'assets/gov_roads_buildings.png', height: '85px', description: "Roads and Buildings Department certified training partner for public works layout designs." },
  { name: 'GUDC', src: 'assets/gov_gudc.png', height: '50px', description: "Gujarat Urban Development Company associated master planning and municipal CAD design training." },
  { name: 'Govt. Town Planning', src: 'assets/gov_town_planning.png', height: '55px', description: "Town Planning and Valuation Department recognized curriculum for structural layouts." },
  { name: 'GIDB', src: 'assets/gov_gidb.png', height: '55px', description: "Gujarat Infrastructure Development Board advisory board partnership for regional development modules." },
  { name: 'AUDA', src: 'assets/gov_auda.png', height: '55px', description: "Ahmedabad Urban Development Authority authorized layout training partner." },
  { name: 'GETCO', src: 'assets/gov_getco.png', height: '65px', description: "Gujarat Energy Transmission Corporation electrical sub-station and grid design training partner." }
];
let GOV_LOGOS = JSON.parse(localStorage.getItem('gov_logos'));
if (!GOV_LOGOS) {
  GOV_LOGOS = defaultGovLogos;
  localStorage.setItem('gov_logos', JSON.stringify(GOV_LOGOS));
}
const PARTNERS = [
  { file: 'assets/partner_navrachana.png', name: 'Navrachana University' },
  { file: 'assets/partner_gtu.png', name: 'GTU' },
  { file: 'assets/partner_adani.png', name: 'Adani University' },
  { file: 'assets/partner_parul.png', name: 'Parul University' },
  { file: 'assets/partner_indus.png', name: 'Indus University' },
  { file: 'assets/partner_ganpat.png', name: 'Ganpat University' },
  { file: 'assets/partner_marwadi.png', name: 'Marwadi University' },
  { file: 'assets/partner_ddu.png', name: 'DDU' },
  { file: 'assets/partner_navrachana.png', name: 'Navrachana University' },
  { file: 'assets/partner_gtu.png', name: 'GTU' },
  { file: 'assets/partner_adani.png', name: 'Adani University' },
  { file: 'assets/partner_parul.png', name: 'Parul University' }
];
const SLIDES = [
  {
    badge: 'Autodesk Authorized Reseller',
    title: "India's Premier\nAutoCAD & BIM Training",
    desc: 'Master industry-standard tools with certified instructors. Hands-on training, real projects, guaranteed placement support.',
    stats: '🎓 10,000+ Trained Professionals',
    bg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80'
  },
  {
    badge: 'Precision Engineering',
    title: 'Mechanical & Aerospace\nBlueprint Lab',
    desc: 'From SolidWorks to CATIA — master precision design tools used by Aerospace, Automotive & Manufacturing giants.',
    stats: '🏭 500+ Industry Partners',
    bg: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&q=80'
  },
  {
    badge: 'International Certification',
    title: 'Globally Recognized\nTechnical Certifications',
    desc: 'Earn Autodesk, Adobe, and Microsoft certifications that open doors across 50+ countries.',
    stats: '🌐 Accepted in 50+ Countries',
    bg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1400&q=80'
  },
  {
    badge: 'Hackathon Season 2026',
    title: 'National Robotics\nHackathon 2026',
    desc: 'Compete, innovate and win. Register your team for India\'s most electrifying student robotics challenge.',
    stats: '🤖 ₹5 Lakh Prize Pool',
    bg: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1400&q=80'
  },
  {
    badge: 'Full-Stack & AI Courses',
    title: 'Advanced Web &\nSoftware Development',
    desc: 'From Python to full-stack web apps and data science — bridge technical design with modern software skills.',
    stats: '💻 100% Placement Assistance',
    bg: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&q=80'
  },
  {
    badge: 'Government Approved',
    title: 'Empowering Technical\nSkills Across Gujarat',
    desc: 'Proudly partnered with 15+ government organizations and 9 universities to deliver skill-India aligned training.',
    stats: '🏛️ 15+ Govt. Partnerships',
    bg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1400&q=80'
  }
];
// ──────────────────────────────────────────────────────────
// State
// ──────────────────────────────────────────────────────────
let currentTab = 'home';
let currentSlide = 0;
let carouselTimer = null;
let activeFilter = 'all';
let activeCommittee = 'dipak';
let currentUser = null;   // { name, email, points, badges, courses }
let openCourse = null;
// ──────────────────────────────────────────────────────────
// Utility helpers
// ──────────────────────────────────────────────────────────
function toast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${type === 'success' ? '✓' : 'ℹ'}</span> ${msg}`;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
function formatDate(d = new Date()) {
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}
function generateStudentId() {
  return 'RCI-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}
// ──────────────────────────────────────────────────────────
// Navigation / Tab routing
// ──────────────────────────────────────────────────────────
function navigateTo(tab, scroll = true) {
  currentTab = tab;
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + tab)?.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.querySelectorAll('.mobile-nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  // Close mobile drawer
  document.getElementById('mobile-drawer')?.classList.remove('open');
  if (scroll) {
    const targetSection = document.getElementById('section-' + tab);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  // Lazy renders
  if (tab === 'home') { renderHomePartners(); renderHomeCourses(); renderHomeGovGrid(); }
  if (tab === 'courses') {
    const q = document.getElementById('course-search')?.value || '';
    renderDirectory(q, activeFilter);
  }
  if (tab === 'about') { renderGovGrid(); renderAboutPartners(); renderCommittee(); }
}
// ──────────────────────────────────────────────────────────
// Hero Carousel
// ──────────────────────────────────────────────────────────
function buildCarousel() {
  const track = document.getElementById('carousel-track');
  const dotsC = document.getElementById('carousel-dots');
  if (!track || !dotsC) return;
  SLIDES.forEach((s, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <img class="carousel-image" src="${s.bg}" alt="${s.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="carousel-overlay"></div>
      <div class="container" style="width:100%">
        <div class="carousel-content">
          <span class="carousel-badge">${s.badge}</span>
          <h1 class="carousel-title">${s.title.replace('\n', '<br>')}</h1>
          <p class="carousel-desc">${s.desc}</p>
          <div class="carousel-meta">
            <button class="carousel-btn" onclick="navigateTo('courses')">Explore Courses</button>
            <span class="carousel-stats">${s.stats}</span>
          </div>
        </div>
      </div>`;
    track.appendChild(slide);
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.onclick = () => goToSlide(i);
    dotsC.appendChild(dot);
  });
}
function goToSlide(idx) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (slides.length === 0) return;
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = (idx + SLIDES.length) % SLIDES.length;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}
function startCarousel() {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

// PW Interactive Actions
function syncSearchInputs(value) {
  ['course-search', 'header-search-input', 'hero-batch-search'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  });
}

function executeSearch(query) {
  activeFilter = 'all';
  syncSearchInputs(query);
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === 'all');
  });
  renderDirectory(query, 'all');
  if (currentTab !== 'courses') {
    navigateTo('courses');
  }
}

function handleHeroSearch(value) {
  syncSearchInputs(value);
  if (currentTab === 'courses') {
    renderDirectory(value, activeFilter);
  }
}

function renderSearchDropdown(query = '') {
  const dropdown = document.getElementById('search-dropdown');
  if (!dropdown) return;

  const q = query.trim().toLowerCase();

  // Filter courses based on query
  const filtered = COURSES.filter(c => {
    return !q || c.title.toLowerCase().includes(q) || c.categoryLabel.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q);
  });

  dropdown.innerHTML = '';

  // Header
  const header = document.createElement('div');
  header.className = 'search-dropdown-header';
  header.textContent = q ? 'Search Results' : 'All Batches / Courses';
  dropdown.appendChild(header);

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'search-dropdown-empty';
    empty.textContent = `No matches found for "${query}"`;
    dropdown.appendChild(empty);
  } else {
    filtered.forEach(c => {
      const item = document.createElement('div');
      item.className = 'search-dropdown-item';
      item.onclick = (e) => {
        e.stopPropagation();
        openCourseModal(c.id);
        dropdown.classList.remove('open');
      };
      item.innerHTML = `
        <img src="${c.img}" alt="${c.title}" class="search-dropdown-img">
        <div class="search-dropdown-info">
          <div class="search-dropdown-title">${c.title}</div>
          <div class="search-dropdown-meta">
            <span>⏱ ${c.duration}</span>
            <span>🏷 ${c.categoryLabel}</span>
          </div>
        </div>
      `;
      dropdown.appendChild(item);
    });
  }

  dropdown.classList.add('open');
}

function handleHeaderSearch(value) {
  syncSearchInputs(value);
  renderSearchDropdown(value);
  if (currentTab === 'courses') {
    renderDirectory(value, activeFilter);
  }
}

function selectQuickCategory(category) {
  activeFilter = category;
  syncSearchInputs('');
  // Update active class on filter tabs
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  renderDirectory('', category);
  navigateTo('courses');
}

function toggleFaq(item) {
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if (!isActive) {
    item.classList.add('active');
  }
}
// ──────────────────────────────────────────────────────────
// Home — Popular courses (top 6)
// ──────────────────────────────────────────────────────────
function renderHomeCourses() {
  const grid = document.getElementById('home-courses-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  COURSES.slice(0, 6).forEach(c => {
    const el = document.createElement('div');
    el.className = 'course-card';
    el.innerHTML = courseCardHTML(c);
    grid.appendChild(el);
  });
}
function getCourseIconData(title) {
  const lower = title.toLowerCase();
  if (lower.includes('autocad') && lower.includes('electrical')) {
    return { icon: '⚡', gradient: 'linear-gradient(135deg, #f59e0b, #eab308)' };
  }
  if (lower.includes('autocad')) {
    return { icon: '📐', gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)' };
  }
  if (lower.includes('revit') && lower.includes('dynamo')) {
    return { icon: '🤖', gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)' };
  }
  if (lower.includes('revit')) {
    return { icon: '🏢', gradient: 'linear-gradient(135deg, #0d9488, #14b8a6)' };
  }
  if (lower.includes('solidworks')) {
    return { icon: '⚙️', gradient: 'linear-gradient(135deg, #dc2626, #ef4444)' };
  }
  if (lower.includes('catia')) {
    return { icon: '✈️', gradient: 'linear-gradient(135deg, #1e40af, #3b82f6)' };
  }
  if (lower.includes('3ds max')) {
    return { icon: '🛋️', gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' };
  }
  if (lower.includes('rhinoceros') || lower.includes('rhino')) {
    return { icon: '⬢', gradient: 'linear-gradient(135deg, #ec4899, #f472b6)' };
  }
  if (lower.includes('python')) {
    return { icon: '💻', gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)' };
  }
  if (lower.includes('photoshop') || lower.includes('adobe') || lower.includes('illustrator') || lower.includes('indesign') || lower.includes('coreldraw')) {
    return { icon: '🎨', gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)' };
  }
  if (lower.includes('tally')) {
    return { icon: '📊', gradient: 'linear-gradient(135deg, #10b981, #34d399)' };
  }
  if (lower.includes('navisworks')) {
    return { icon: '🔍', gradient: 'linear-gradient(135deg, #0f766e, #14b8a6)' };
  }
  if (lower.includes('primavera')) {
    return { icon: '📅', gradient: 'linear-gradient(135deg, #b45309, #d97706)' };
  }
  if (lower.includes('mongodb')) {
    return { icon: '🍃', gradient: 'linear-gradient(135deg, #10b981, #059669)' };
  }
  if (lower.includes('lisp')) {
    return { icon: '💻', gradient: 'linear-gradient(135deg, #4f46e5, #6366f1)' };
  }
  if (lower.includes('tekla')) {
    return { icon: '🏗️', gradient: 'linear-gradient(135deg, #0f766e, #14b8a6)' };
  }
  if (lower.includes('sketchup')) {
    return { icon: '🏡', gradient: 'linear-gradient(135deg, #eab308, #ca8a04)' };
  }
  if (lower.includes('render') || lower.includes('lumion') || lower.includes('enscape') || lower.includes('twinmotion') || lower.includes('d5')) {
    return { icon: '🖼️', gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)' };
  }
  if (lower.includes('piping')) {
    return { icon: '🛢️', gradient: 'linear-gradient(135deg, #475569, #334155)' };
  }
  if (lower.includes('gis') || lower.includes('arcgis')) {
    return { icon: '🗺️', gradient: 'linear-gradient(135deg, #10b981, #06b6d4)' };
  }
  if (lower.includes('entrance') || lower.includes('nata') || lower.includes('nid') || lower.includes('uceed')) {
    return { icon: '📝', gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)' };
  }
  return { icon: '🎓', gradient: 'linear-gradient(135deg, #475569, #64748b)' };
}

function courseCardHTML(c) {
  const iconData = getCourseIconData(c.title);
  return `
    <div class="course-details-wrap">
      <div class="course-header-badge">
        <span class="course-category-tag-inline">${c.categoryLabel}</span>
      </div>
      <div class="course-icon-container" style="background: ${iconData.gradient}">
        <span class="course-icon-symbol">${iconData.icon}</span>
      </div>
      <h3 class="course-title">${c.title}</h3>
      <div class="course-meta-tags">
        <span class="meta-tag">⏱ ${c.duration}</span>
        <span class="meta-tag">📊 ${c.level}</span>
      </div>
      <div class="course-price-wrap" style="justify-content: center;">
        <button class="btn-view-syllabus" style="width: 100%; text-align: center;" onclick="openCourseModal(${c.id})">View Details</button>
      </div>
    </div>`;
}
// ──────────────────────────────────────────────────────────
// Home — Partners marquee
// ──────────────────────────────────────────────────────────
function renderHomePartners() {
  const track = document.getElementById('home-marquee-track');
  if (!track || track.dataset.rendered) return;
  track.dataset.rendered = '1';
  // Duplicate for seamless loop
  [...PARTNERS, ...PARTNERS].forEach(p => {
    const el = document.createElement('div');
    el.className = 'marquee-item';
    el.title = p.name;
    el.innerHTML = `
      <img src="${p.file}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="partner-text-fallback" style="display:none; font-family:var(--font-heading); font-weight:700; font-size:0.9rem; color:var(--text-light); border:1px solid var(--border-color); padding:0.4rem 1rem; border-radius:8px; white-space:nowrap; background:#fff; align-items:center; justify-content:center;">${p.name}</div>
    `;
    track.appendChild(el);
  });
}
// ──────────────────────────────────────────────────────────
// Courses Directory
// ──────────────────────────────────────────────────────────
function renderDirectory(query = '', filter = activeFilter) {
  const grid = document.getElementById('directory-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const q = query.toLowerCase();
  const filtered = COURSES.filter(c => {
    const matchFilter = filter === 'all' || c.category === filter;
    const matchSearch = !q || c.title.toLowerCase().includes(q) || c.categoryLabel.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });
  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-muted)">
      <div style="font-size:48px;margin-bottom:1rem">🔍</div>
      <p style="font-size:16px;font-weight:600">No courses found for "<em>${query}</em>"</p>
    </div>`;
    return;
  }
  filtered.forEach(c => {
    const el = document.createElement('div');
    el.className = 'course-card';
    el.innerHTML = courseCardHTML(c);
    grid.appendChild(el);
  });
}
// ──────────────────────────────────────────────────────────
// Course Detail Modal
// ──────────────────────────────────────────────────────────
function openCourseModal(id) {
  openCourse = COURSES.find(c => c.id === id);
  if (!openCourse) return;
  const c = openCourse;
  document.getElementById('course-modal-img').src = c.img;
  document.getElementById('course-modal-title').textContent = c.title;
  document.getElementById('course-modal-cat').textContent = c.categoryLabel;
  document.getElementById('course-modal-duration').textContent = c.duration;
  document.getElementById('course-modal-level').textContent = c.level;
  document.getElementById('course-modal-instructor').textContent = c.instructor;
  const sylList = document.getElementById('course-modal-syllabus');
  sylList.innerHTML = c.syllabus.map(item => `<li>${item}</li>`).join('');
  openModal('course-modal');
}
function enrollFromModal() {
  if (!openCourse) return;
  closeModal('course-modal');
  // Reset the admission view to show the form instead of any previous receipt
  resetAdmission();
  // Pre-fill course in admission
  const sel = document.getElementById('admission-course');
  if (sel) {
    for (let opt of sel.options) {
      if (opt.value === openCourse.title || opt.text === openCourse.title) {
        sel.value = opt.value;
        break;
      }
    }
  }
  navigateTo('admission', false);
  document.getElementById('admission-form-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
// ──────────────────────────────────────────────────────────
// About — Committee
// ──────────────────────────────────────────────────────────
function renderCommittee() {
  setCommitteeMember(activeCommittee);
}
function setCommitteeMember(id) {
  activeCommittee = id;
  const m = COMMITTEE.find(c => c.id === id);
  if (!m) return;
  // Update sidebar active state
  document.querySelectorAll('.committee-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.member === id);
  });
  // Render card
  const card = document.getElementById('committee-card');
  const avatarContent = m.avatar
    ? `<img src="${m.avatar}" alt="${m.name}" style="width:100%;height:100%;border-radius:20px;object-fit:contain;position:relative;z-index:1;" loading="lazy">`
    : `<div style="display:flex;align-items:center;justify-content:center;font-size:56px;font-weight:800;font-family:var(--font-heading);position:relative;z-index:1;">${m.name[0]}</div>`;
  const extraBlocks = (m.credentials || m.mentorship) ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:20px;margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.15);">
        ${m.credentials ? `<div>
          <div style="font-size:12px;font-weight:800;letter-spacing:1px;color:#facc15;text-transform:uppercase;margin-bottom:6px;">CREDENTIALS & BACKGROUND</div>
          <div style="font-size:15px;font-weight:700;color:#ffffff;line-height:1.4;text-shadow:0 1px 2px rgba(0,0,0,0.5);">${m.credentials}</div>
        </div>` : ''}
        ${m.mentorship ? `<div>
          <div style="font-size:12px;font-weight:800;letter-spacing:1px;color:#facc15;text-transform:uppercase;margin-bottom:6px;">MENTORSHIP EXPERIENCE</div>
          <div style="font-size:15px;font-weight:700;color:#ffffff;line-height:1.4;text-shadow:0 1px 2px rgba(0,0,0,0.5);">${m.mentorship}</div>
        </div>` : ''}
      </div>
  ` : '';

  card.innerHTML = `
    <div class="committee-card-decor"></div>
    <div style="width:230px;height:290px;border-radius:20px;border:3px solid rgba(255,255,255,0.2);background: radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(37, 99, 235, 0.1) 60%, rgba(255, 255, 255, 0.05) 100%);flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden;margin:0 auto;position:relative;box-shadow: 0 10px 25px rgba(0,0,0,0.3);">${avatarContent}</div>
    <div class="committee-details">
      <div>
        <h3 style="font-size: 2rem; font-weight: 800; color: #ffffff; margin-bottom: 4px; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">${m.name}</h3>
        <p class="role" style="font-size: 1.1rem; font-weight: 800; color: #facc15; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 1rem;">${m.role}</p>
      </div>
      
      <div style="margin-bottom: 1.2rem;">
        <div style="font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #facc15; text-transform: uppercase; margin-bottom: 8px;">ROLES & LEADERSHIP HANDLES</div>
        <ul class="committee-list" style="display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; list-style: none;">
          ${m.achievements.map(a => `<li style="font-size: 0.98rem; font-weight: 700; color: #ffffff; display: flex; align-items: center; gap: 8px; text-shadow: 0 1px 2px rgba(0,0,0,0.5);"><span style="color:#facc15;font-size:1.1rem;">✦</span> ${a}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.2rem; background: rgba(0,0,0,0.25); padding: 14px 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="font-size: 12px; font-weight: 800; letter-spacing: 1px; color: #facc15; text-transform: uppercase; margin-bottom: 6px;">ABOUT</div>
        <p class="bio" style="font-size: 0.98rem; font-weight: 500; color: #f8fafc; line-height: 1.6; margin: 0; text-shadow: 0 1px 2px rgba(0,0,0,0.4);">${m.bio}</p>
      </div>

      ${extraBlocks}
    </div>`;
}
// ──────────────────────────────────────────────────────────
// About — Government Approvals Grid
// ──────────────────────────────────────────────────────────
function renderGovGrid() {
  const grid = document.getElementById('gov-logos-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  GOV_LOGOS.forEach(g => {
    const el = document.createElement('div');
    el.className = 'gov-card';
    el.title = g.name;
    el.style.minHeight = '120px';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.cursor = 'pointer';
    el.onclick = () => showGovDetail(g);
    el.innerHTML = `
      <img src="${g.src}" alt="${g.name}" style="height: ${g.height}; max-height: none; width: auto; object-fit: contain;" loading="lazy">
    `;
    grid.appendChild(el);
  });
}
// ──────────────────────────────────────────────────────────
// Home — Government Approvals Grid
// ──────────────────────────────────────────────────────────
function renderHomeGovGrid() {
  const grid = document.getElementById('home-gov-logos-grid');
  if (!grid || grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  GOV_LOGOS.forEach(g => {
    const el = document.createElement('div');
    el.className = 'gov-card';
    el.title = g.name;
    el.style.minHeight = '120px';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.style.cursor = 'pointer';
    el.onclick = () => showGovDetail(g);
    el.innerHTML = `
      <img src="${g.src}" alt="${g.name}" style="height: ${g.height}; max-height: none; width: auto; object-fit: contain;" loading="lazy">
    `;
    grid.appendChild(el);
  });
}
function showGovDetail(g) {
  document.getElementById('gov-modal-img').src = g.src;
  document.getElementById('gov-modal-img').alt = g.name;
  document.getElementById('gov-modal-title').textContent = g.name;
  document.getElementById('gov-modal-desc').textContent = g.description || 'Verified government approval supporting Roshani Technologies\' educational training programs.';
  openModal('gov-modal');
}
// ──────────────────────────────────────────────────────────
// About — University Partners (marquee)
// ──────────────────────────────────────────────────────────
function renderAboutPartners() {
  const track = document.getElementById('about-marquee-track');
  if (!track || track.dataset.rendered) return;
  track.dataset.rendered = '1';
  [...PARTNERS, ...PARTNERS].forEach(p => {
    const el = document.createElement('div');
    el.className = 'marquee-item';
    el.title = p.name;
    el.innerHTML = `
      <img src="${p.file}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
      <div class="partner-text-fallback" style="display:none; font-family:var(--font-heading); font-weight:700; font-size:0.9rem; color:var(--text-light); border:1px solid var(--border-color); padding:0.4rem 1rem; border-radius:8px; white-space:nowrap; background:#fff; align-items:center; justify-content:center;">${p.name}</div>
    `;
    track.appendChild(el);
  });
}
// ──────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────
// Scroll Progress Bar
// ──────────────────────────────────────────────────────────
let scrollTick = false;
window.addEventListener('scroll', () => {
  if (!scrollTick) {
    window.requestAnimationFrame(() => {
      const el = document.getElementById('scroll-progress');
      if (el) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        el.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
      }
      scrollTick = false;
    });
    scrollTick = true;
  }
});
// ──────────────────────────────────────────────────────────
// Modal helpers
// ──────────────────────────────────────────────────────────
let scrollPosition = 0;

const preventDefault = (e) => {
  const modal = document.getElementById('auth-modal');
  if (modal && modal.classList.contains('open')) {
    let target = e.target;
    while (target && target !== document.body) {
      if (target.classList.contains('modal-box') || target.id === 'auth-modal') {
        return;
      }
      target = target.parentElement;
    }
  }
  e.preventDefault();
};

const keysToPrevent = ['Space', ' ', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'End', 'Home'];
const preventDefaultKeys = (e) => {
  if (keysToPrevent.includes(e.key) || keysToPrevent.includes(e.code)) {
    const modal = document.getElementById('auth-modal');
    if (modal && modal.classList.contains('open')) {
      let target = e.target;
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable;
      if (isInput) {
        return;
      }
      while (target && target !== document.body) {
        if (target.classList.contains('modal-box') || target.id === 'auth-modal') {
          return;
        }
        target = target.parentElement;
      }
    }
    e.preventDefault();
    return false;
  }
};

function lockScroll() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';

  window.addEventListener('wheel', preventDefault, { passive: false });
  window.addEventListener('touchmove', preventDefault, { passive: false });
  window.addEventListener('keydown', preventDefaultKeys, { passive: false });
}

function unlockScroll() {
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollPosition);

  window.removeEventListener('wheel', preventDefault, { passive: false });
  window.removeEventListener('touchmove', preventDefault, { passive: false });
  window.removeEventListener('keydown', preventDefaultKeys, { passive: false });
}

function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  if (id === 'auth-modal') {
    lockScroll();
  }
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  if (id === 'auth-modal') {
    unlockScroll();
    document.getElementById('auth-form')?.reset();
  }
}
// ──────────────────────────────────────────────────────────
// Auth — Password Toggle
// ──────────────────────────────────────────────────────────
function toggleAuthPasswordVisibility() {
  const passInput = document.getElementById('auth-password');
  const icon = document.getElementById('pass-eye-icon');
  if (!passInput) return;
  if (passInput.type === 'password') {
    passInput.type = 'text';
    if (icon) {
      icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
    }
  } else {
    passInput.type = 'password';
    if (icon) {
      icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
    }
  }
}

// ──────────────────────────────────────────────────────────
// Auth — Sign In / Sign Up
// ──────────────────────────────────────────────────────────
function showSignIn() { openModal('auth-modal'); setAuthMode('signin'); }
function showSignUp() { openModal('auth-modal'); setAuthMode('signup'); }
function setAuthMode(mode) {
  const title = document.getElementById('auth-modal-title');
  const signupExtras = document.getElementById('auth-signup-extras');
  const submitBtn = document.getElementById('auth-submit-btn');
  const switchText = document.getElementById('auth-switch-text');
  const passLabel = document.getElementById('auth-pass-label');
  const emailLabel = document.getElementById('auth-email-label');
  const badge = document.getElementById('auth-modal-badge');
  const disclaimer = document.getElementById('auth-disclaimer');

  // SVG badge icons depending on state
  const registerIcon = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  `;
  const loginIcon = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  `;

  if (mode === 'signin') {
    title.textContent = 'STUDENT SIGN IN';
    if (badge) badge.innerHTML = loginIcon;
    signupExtras.style.display = 'none';
    if (emailLabel) emailLabel.textContent = 'STUDENT E-MAIL ID';
    if (passLabel) passLabel.textContent = 'PASSWORD';
    submitBtn.textContent = 'SIGN IN';
    if (disclaimer) disclaimer.style.display = 'none';
    switchText.innerHTML = `Don't have an account? <button type="button" onclick="setAuthMode('signup')">Sign Up</button>`;
  } else {
    title.textContent = 'REGISTER STUDENT PROFILE';
    if (badge) badge.innerHTML = registerIcon;
    signupExtras.style.display = 'block';
    if (emailLabel) emailLabel.textContent = 'STUDENT E-MAIL ID';
    if (passLabel) passLabel.textContent = 'CHOOSE PASSWORD';
    submitBtn.textContent = 'CREATE ACCOUNT';
    if (disclaimer) disclaimer.style.display = 'block';
    switchText.innerHTML = `Already have an account? <button type="button" onclick="setAuthMode('signin')">Sign in</button>`;
  }
  document.getElementById('auth-modal').dataset.mode = mode;
}
async function handleAuthSubmit(e) {
  e.preventDefault();
  const mode = document.getElementById('auth-modal').dataset.mode;
  const email = document.getElementById('auth-email').value.trim();
  const pass = document.getElementById('auth-password').value;
  const name = document.getElementById('auth-name')?.value.trim();

  if (!email || email === '') {
    toast('Email cannot be empty.', 'error');
    return;
  }
  if (!pass || pass === '') {
    toast('Password cannot be empty.', 'error');
    return;
  }
  if (mode === 'signup' && (!name || name === '')) {
    toast('Name cannot be empty.', 'error');
    return;
  }

  const submitBtn = document.getElementById('auth-submit-btn');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = mode === 'signup' ? 'Registering...' : 'Signing In...';

  try {
    const apiBase = window.location.origin.includes(':5000') ? '' : 'http://localhost:5000';
    const endpoint = mode === 'signup' ? '/api/auth/register' : '/api/auth/login';
    
    const bodyData = mode === 'signup' 
      ? { name, email, password: pass }
      : { email, password: pass };

    const res = await fetch(`${apiBase}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Authentication failed');
    }

    if (data.token) {
      localStorage.setItem('token', data.token);
    }

    currentUser = {
      name: data.user.name,
      email: data.user.email,
      studentId: generateStudentId(),
      points: 100,
      badges: ['Early Joiner', 'Roshani Scholar'],
      courses: [],
      joinDate: formatDate()
    };

    updateHeaderUser();
    closeModal('auth-modal');
    toast(`Welcome, ${currentUser.name}! 🎉`);
  } catch (error) {
    toast(error.message || 'An error occurred during authentication.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
}
function signOut() {
  currentUser = null;
  localStorage.removeItem('token');
  updateHeaderUser();
  closeDrawer();
  toast('Signed out successfully.');
}
function updateHeaderUser() {
  const authArea = document.getElementById('nav-auth-area');
  if (!authArea) return;

  if (currentUser) {
    authArea.innerHTML = `
      <div class="user-header-pill">
        <div class="user-header-info">
          <span class="user-header-name">${currentUser.name}</span>
          <span class="user-header-points">+${currentUser.points} PTS</span>
        </div>
        <div class="profile-avatar-trigger" onclick="openDrawer()" id="profile-avatar-btn">
          <span style="font-size:18px;font-weight:700;color:var(--accent-blue)">${currentUser.name[0].toUpperCase()}</span>
        </div>
      </div>`;
  } else {
    authArea.innerHTML = `
      <button class="btn-signin" id="btn-signin" onclick="showSignIn()">Sign In</button>
      <button class="btn-signup" id="btn-signup" onclick="showSignUp()">Get Started</button>`;
  }
}
// ──────────────────────────────────────────────────────────
// Profile Drawer
// ──────────────────────────────────────────────────────────
function openDrawer() {
  if (!currentUser) { showSignIn(); return; }
  renderDrawer();
  document.getElementById('drawer-backdrop').classList.add('open');
  document.getElementById('profile-drawer').classList.add('open');
}
function closeDrawer() {
  document.getElementById('drawer-backdrop').classList.remove('open');
  document.getElementById('profile-drawer').classList.remove('open');
}
function renderDrawer() {
  const body = document.getElementById('drawer-body');
  const u = currentUser;
  body.innerHTML = `
    <div class="student-card-details">
      <div class="student-cabinet-avatar">${u.name[0].toUpperCase()}</div>
      <div class="student-cabinet-info">
        <h4>${u.name}</h4>
        <p>${u.email}</p>
        <p style="font-size:12px;font-family:var(--font-mono);color:var(--accent-green);font-weight:700;margin-top:0.25rem">${u.studentId}</p>
      </div>
    </div>
    <div class="student-points-container">
      <div class="points-card">
        <div class="num">${u.points}</div>
        <div class="lbl">Points</div>
      </div>
      <div class="points-card">
        <div class="num">${u.badges.length}</div>
        <div class="lbl">Badges</div>
      </div>
      <div class="points-card">
        <div class="num">${u.courses.length}</div>
        <div class="lbl">Enrolled</div>
      </div>
      <div class="points-card">
        <div class="num" style="color:var(--accent-green)">Active</div>
        <div class="lbl">Status</div>
      </div>
    </div>
    <div>
      <div class="drawer-section-title">Badges Unlocked</div>
      <div class="badges-grid">
        ${u.badges.map(b => `<span class="badge-tag">🏅 ${b}</span>`).join('')}
      </div>
    </div>
    ${u.courses.length ? `<div>
      <div class="drawer-section-title">Enrolled Courses</div>
      <div style="display:flex;flex-direction:column;gap:0.5rem">
        ${u.courses.map(c => `<div style="background:white;border:1px solid var(--border-color);border-radius:10px;padding:0.75rem;font-size:13px;font-weight:600;color:var(--text-dark)">${c}</div>`).join('')}
      </div>
    </div>` : ''}
    <div>
      <div class="drawer-section-title">Member Since</div>
      <p style="font-size:13px;color:var(--text-light)">${u.joinDate}</p>
    </div>`;
}
// ──────────────────────────────────────────────────────────
// Admission Form
// ──────────────────────────────────────────────────────────
async function handleAdmissionSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('adm-name').value.trim();
  const email = document.getElementById('adm-email').value.trim();
  const phone = document.getElementById('adm-phone').value.trim();
  const course = document.getElementById('admission-course').value;
  const dob = document.getElementById('adm-dob').value;
  const qual = document.getElementById('adm-qualification').value;
  const address = document.getElementById('adm-address').value.trim();
  const message = document.getElementById('adm-message').value.trim();

  if (!name || !email || !phone || !course || !dob || !qual || !address) {
    toast('Please fill all required fields.', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast('Please enter a valid email address.', 'error');
    return;
  }

  const cleanedPhone = phone.replace(/\s+/g, '').replace(/^\+91/, '');
  if (!/^\d{10}$/.test(cleanedPhone)) {
    toast('Mobile number must contain exactly 10 digits.', 'error');
    return;
  }

  const submitBtn = document.getElementById('adm-submit-btn');
  const originalBtnText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  try {
    const apiBase = window.location.origin.includes(':5000') ? '' : 'http://localhost:5000';
    const res = await fetch(`${apiBase}/api/admissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: name,
        email: email,
        mobileNumber: cleanedPhone,
        selectedCourse: course,
        dateOfBirth: dob,
        highestQualification: qual,
        address: address,
        message: message
      })
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Submission failed');
    }

    // Save to leads in localStorage
    const leads = JSON.parse(localStorage.getItem('leads') || '[]');
    leads.push({
      type: 'Admission',
      name,
      email,
      phone: cleanedPhone,
      course,
      details: `DOB: ${dob || 'N/A'}, Qual: ${qual || 'N/A'}, Address: ${address}`,
      date: new Date().toLocaleString()
    });
    localStorage.setItem('leads', JSON.stringify(leads));

    // If user is logged in, add course to their profile
    if (currentUser) {
      if (!currentUser.courses.includes(course)) {
        currentUser.courses.push(course);
        currentUser.points += 50;
        currentUser.badges.push('Enrolled Student');
      }
      updateHeaderUser();
    }
    // Show receipt
    renderReceipt({ name, email, phone: cleanedPhone, course, dob, qual });
    document.getElementById('admission-form-wrapper').style.display = 'none';
    document.getElementById('admission-receipt').style.display = 'block';
    
    // Clear form
    document.getElementById('admission-form').reset();
    
    toast('Your admission application has been submitted successfully. Our team will contact you soon.');
  } catch (error) {
    toast(error.message || 'An error occurred during submission. Please try again.', 'error');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalBtnText;
  }
}
function renderReceipt({ name, email, phone, course, dob, qual }) {
  const id = generateStudentId();
  const today = formatDate();
  document.getElementById('receipt-student-id').textContent = id;
  document.getElementById('receipt-name').textContent = name;
  document.getElementById('receipt-email').textContent = email;
  document.getElementById('receipt-phone').textContent = phone;
  document.getElementById('receipt-course').textContent = course;
  document.getElementById('receipt-date').textContent = today;
  document.getElementById('receipt-barcode-text').textContent = id;
  // Build barcode visual
  const lines = document.getElementById('barcode-lines');
  lines.innerHTML = '';
  const pattern = [2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 2, 1, 1, 2];
  pattern.forEach((w, i) => {
    const s = document.createElement('span');
    if (i % 2 === 1) { s.className = 'space'; } else if (w === 3) { s.className = 'thick'; }
    lines.appendChild(s);
  });
}
function resetAdmission() {
  document.getElementById('admission-form-wrapper').style.display = 'block';
  document.getElementById('admission-receipt').style.display = 'none';
  document.getElementById('admission-form').reset();
}
function downloadReceipt() {
  window.print();
}
// ──────────────────────────────────────────────────────────
// Contact Form
// ──────────────────────────────────────────────────────────
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value.trim();
  const email = document.getElementById('contact-email')?.value.trim();
  const phone = document.getElementById('contact-phone')?.value.trim() || '';
  const subject = document.getElementById('contact-subject')?.value || 'General';
  const message = document.getElementById('contact-message')?.value.trim();

  if (!name) {
    toast('Please enter your name.', 'error');
    return;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast('Please enter a valid email address.', 'error');
    return;
  }
  if (!message) {
    toast('Please enter your message.', 'error');
    return;
  }

  // Save to leads in localStorage
  const leads = JSON.parse(localStorage.getItem('leads') || '[]');
  leads.push({
    type: 'Contact',
    name,
    email,
    phone,
    course: subject,
    details: message,
    date: new Date().toLocaleString()
  });
  localStorage.setItem('leads', JSON.stringify(leads));

  toast('Message sent! We\'ll respond within 24 hours. ✉️');
  e.target.reset();
}
// ──────────────────────────────────────────────────────────
// Mobile Menu Toggle
// ──────────────────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobile-drawer').classList.toggle('open');
}
// ──────────────────────────────────────────────────────────
// Close modals on backdrop click
// ──────────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
  const searchBar = document.querySelector('.hero-search-box');
  const dropdown = document.getElementById('search-dropdown');
  if (dropdown && searchBar && !searchBar.contains(e.target)) {
    dropdown.classList.remove('open');
  }

  // Close explore dropdown when clicked outside
  const exploreContainer = document.querySelector('.explore-dropdown-container');
  if (exploreContainer && !exploreContainer.contains(e.target)) {
    exploreContainer.classList.remove('open');
    document.getElementById('explore-dropdown-menu')?.classList.remove('open');
  }
});

function toggleExploreDropdown() {
  const container = document.querySelector('.explore-dropdown-container');
  const menu = document.getElementById('explore-dropdown-menu');
  if (container && menu) {
    container.classList.toggle('open');
    menu.classList.toggle('open');
  }
}

function handleHeroBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('hb-name').value.trim();
  const phone = document.getElementById('hb-phone').value.trim();
  const email = document.getElementById('hb-email').value.trim();
  const course = document.getElementById('hb-course').value;

  if (!name || !phone || !email || !course) {
    toast('Please fill in all the required fields.', 'error');
    return;
  }

  // Save to leads in localStorage
  const leads = JSON.parse(localStorage.getItem('leads') || '[]');
  leads.push({
    type: 'Counseling',
    name,
    email,
    phone,
    course,
    details: 'Requested free counseling session',
    date: new Date().toLocaleString()
  });
  localStorage.setItem('leads', JSON.stringify(leads));

  toast(`Thank you, ${name}! Your free counseling slot is booked. 📞`);
  e.target.reset();
}

// ──────────────────────────────────────────────────────────
// Typewriter & Stats Counter Upgrades
// ──────────────────────────────────────────────────────────
function initTypewriter() {
  const words = ["Learn Skills", "Build Your Career", "Get Placed", "Achieve Success"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById('typing-text');
  if (!target) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1800; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before starting next word
    }

    setTimeout(type, typeSpeed);
  }
  type();
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const speed = 100;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
          const count = +counter.innerText.replace(/,/g, '');
          const inc = target / speed;
          if (count < target) {
            counter.innerText = Math.ceil(count + inc).toLocaleString();
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => observer.observe(counter));
}

// ──────────────────────────────────────────────────────────
// Dark / Light Theme
// ──────────────────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

// ──────────────────────────────────────────────────────────
// Init
// ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  buildCarousel();
  startCarousel();
  // Hook carousel nav buttons
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (prevBtn) prevBtn.onclick = () => { goToSlide(currentSlide - 1); };
  if (nextBtn) nextBtn.onclick = () => { goToSlide(currentSlide + 1); };
  // Filter tabs for courses
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.onclick = () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      renderDirectory(document.getElementById('course-search')?.value || '', activeFilter);
    };
  });
  // Search input
  const searchInput = document.getElementById('course-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      syncSearchInputs(e.target.value);
      renderDirectory(e.target.value, activeFilter);
    });
  }

  // Handle Enter key on hero search and header search
  const heroSearch = document.getElementById('hero-batch-search');
  if (heroSearch) {
    heroSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeSearch(e.target.value);
      }
    });
  }
  const headerSearch = document.getElementById('header-search-input');
  if (headerSearch) {
    headerSearch.addEventListener('focus', () => {
      renderSearchDropdown(headerSearch.value);
    });
    headerSearch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeSearch(e.target.value);
        document.getElementById('search-dropdown')?.classList.remove('open');
      }
    });
  }
  // Committee buttons
  document.querySelectorAll('.committee-btn').forEach(btn => {
    btn.onclick = () => setCommitteeMember(btn.dataset.member);
  });
  // Initial render
  navigateTo('home');
  updateHeaderUser();
  initTypewriter();
  animateCounters();
});
