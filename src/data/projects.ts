import type { Project, ProjectDomain, ProjectGroup } from '../types/project';

export const standaloneProjects: Project[] = [];

export const projectGroups: ProjectGroup[] = [
  {
    id: 'design-cad',
    title: 'Design & CAD Projects',
    shortDesc:
      'Advanced mechanical design: cam mechanisms, biomedical implants, and aeronautical braking modeled in CATIA V5 and validated analytically or with FEA/CFD.',
    coverImage: '/projects/design-cad/cover.png',
    domains: ['mechanical'],
    tags: ['CATIA V5', 'STARCCM+', 'ABAQUS', 'CFD', 'CAE', 'Biomechanics'],
    featured: true,
    projects: [
      {
        id: 'heart-pump',
        title: 'Design of a Heart Pump',
        subtitle: 'Centrifugal pump for cardiac applications',
        year: 2025,
        duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'STARCCM+', 'CFD', 'Biomechanics', 'GSD'],
        shortDesc:
          'Centrifugal cardiac pump design and CFD simulation. Efficiency improved from 49% to 59% through iterative design cycles combining prototypes and STARCCM+ simulations.',
        fullDesc: `
## Objective
Design a centrifugal pump for cardiac assist, then simulate blood flow to obtain
characteristic curves and assess physiological suitability.

## Design Process
Impeller, housing, and internal flow passages modeled in **CATIA V5 (GSD)** with
focus on manufacturability. A critical constraint was **preventing platelet aggregation**:
excessive velocity or turbulence can trigger thrombosis.

## CFD Simulation — STARCCM+
| Parameter | Influence |
|-----------|-----------|
| Mesh size | Accuracy vs. computation time |
| Inlet flow velocity | Laminar / turbulent regime |
| Fluid properties | Blood substituted by water at certain flowrates |

## Results
- **Efficiency: 49% → 59%** through iterative design-test cycles.
- Peak efficiency of **58.5% at 8 L/min** — oversized vs. the physiological 5 L/min target.
- Proposed fix: reducing rotor speed shifts the peak toward 5 L/min and yields **~10% energy gain**.
        `,
        coverImage: '/projects/design-cad/heart-pump/cover.png',
        images: [
          {
            src: '/projects/design-cad/heart-pump/img-01.png',
            alt: 'CATIA V5 impeller and housing',
            caption: 'FIG. 01 — CATIA V5: centrifugal impeller and housing (GSD)',
          },
          {
            src: '/projects/design-cad/heart-pump/img-02.png',
            alt: 'STARCCM+ volumetric mesh',
            caption: 'FIG. 02 — Volumetric mesh for blood flow simulation (STARCCM+)',
          },
          {
            src: '/projects/design-cad/heart-pump/img-03.png',
            alt: 'CFD velocity field',
            caption: 'FIG. 03 — Velocity field and streamlines from CFD results',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'aircraft-brake',
        title: 'Aircraft Brake Design',
        subtitle: 'Structural sizing and CAD of a mobile-caliper disc brake',
        year: 2025,
        duration: 'Sept. 2024 – Feb. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Structural Sizing', 'Aeronautics'],
        shortDesc:
          'Full sizing and CAD of an aircraft disc brake with FEA validation against aerospace safety factors: 800 kg aircraft, −4 m/s² and 204 Nm braking torque.',
        fullDesc: `
## Sizing Methodology
| Parameter | Value |
|-----------|-------|
| Aircraft mass | 800 kg |
| Max deceleration | −4 m/s² |
| Braking time | 14 s |
| Braking torque | 204 Nm |

Components sized in sequence: brake disc, caliper, then bearings, shaft, and fasteners.

## Structural Validation — ABAQUS FEA
Operational loads, stress distributions, and fatigue cycles were simulated.
All results were verified against aerospace safety factors.

## Deliverables
Five-sheet technical drawing set (A3, scale 1:2), full CATIA V5 assembly,
and a bill of materials covering 11 referenced components.
        `,
        coverImage: '/projects/design-cad/aircraft-brake/cover.png',
        images: [
          {
            src: '/projects/design-cad/aircraft-brake/img-01.png',
            alt: 'Assembly drawing',
            caption: 'FIG. 01 — Assembly: cross-section and isometric view (scale 1:2)',
          },
          {
            src: '/projects/design-cad/aircraft-brake/img-02.png',
            alt: 'Brake disc detail',
            caption: 'FIG. 02 — Detail: brake disc and caliper',
          },
          {
            src: '/projects/design-cad/aircraft-brake/img-03.png',
            alt: 'Rolling assembly',
            caption: 'FIG. 03 — Detail: shaft, bearings and rolling assembly',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'shoulder-prosthesis',
        title: 'Design & Optimization of a Shoulder Prosthesis',
        subtitle: 'FEA simulation and fatigue testing of a glenoid implant',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'Team project (5 members, team lead) — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'ABAQUS', 'FEA', 'Fatigue Testing', 'Biomechanics', 'Team Lead'],
        shortDesc:
          'Led a five-member team through full prosthesis design: FEA, physical fatigue testing, and redesign with structural pegs to reduce implant loosening.',
        fullDesc: `
## Team Lead
Coordinated CATIA V5 modeling, FEA, and prototype testing across five engineers.
Organized design reviews and delivered validated outputs on schedule.

## Phase 1 — FEA (ABAQUS)
Stress and strain fields under physiological loading identified candidate materials
and critical zones.

## Phase 2 — Fatigue Testing
Cyclic loading on a fatigue machine showed loosening at zones matching FEA-predicted
stress concentrations.

## Phase 3 — Redesign
**Structural pegs** were introduced at weak zones, increasing bone-implant contact
area and redistributing stresses away from loosening initiation sites.
        `,
        coverImage: '/projects/design-cad/shoulder-prosthesis/cover-implant.png',
        images: [
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-01-implant.png',
            alt: 'CATIA prosthesis drawing',
            caption: 'FIG. 01 — CATIA V5: prosthesis technical drawing (scale 7:1)',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-02-implant.png',
            alt: 'ABAQUS stress field',
            caption: 'FIG. 02 — FEA: stress field and deformation (ABAQUS)',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-03-implant.png',
            alt: 'Fatigue test setup',
            caption: 'FIG. 03 — Fatigue testing: glenoid loosening under cyclic loading',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-04-implant.png',
            alt: 'Redesign — structural pegs',
            caption: 'FIG. 04 — Redesign: structural pegs reducing bone-implant loosening',
          },
          {
            src: '/projects/design-cad/shoulder-prosthesis/img-05-implant.png',
            alt: 'Final validation results',
            caption: 'FIG. 05 — Final stress redistribution after peg integration',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'capping-machine',
        title: 'Automatic Bottle Capping Machine',
        subtitle: 'Cam-follower mechanism — 1,800 bottles/hour',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['CATIA V5', 'Mechanism Design', 'Cam-Follower', 'Industrial Automation'],
        shortDesc:
          'Cam-follower mechanism for 1,800 bottles per hour with full analytical validation, CATIA V5 modeling, and a three-sheet drawing set.',
        fullDesc: `
## Motion Law — 3-4-5 Polynomial
Cam at 30 rpm. The 3-4-5 law was selected for zero velocity and acceleration
at stroke endpoints.

## Mechanical Validation
| Criterion | Status |
|-----------|--------|
| Non-detachment | ✓ Spring force > inertia force at all positions |
| Hertz contact pressure | ✓ Within allowable limit |
| Geometric interference | ✓ Cam profile never intersects follower |

Full mechanism modeled in CATIA V5 (GSD). A three-sheet manufacturing drawing set was delivered.
        `,
        coverImage: '/projects/design-cad/capping-machine/cover.png',
        images: [
          {
            src: '/projects/design-cad/capping-machine/img-01.png',
            alt: 'Vue d\'ensemble — front and isometric views',
            caption: 'FIG. 01 — Assembly: front views (1:4, 1:7) and isometric view (1:6)',
          },
          {
            src: '/projects/design-cad/capping-machine/img-02.png',
            alt: 'Glissière — cross-section and detail',
            caption: 'FIG. 02 — Slide assembly: cross-section B-B and detail A (scale 1:2)',
          },
          {
            src: '/projects/design-cad/capping-machine/img-03.png',
            alt: 'Transmission de mouvement — fork component',
            caption: 'FIG. 03 — Motion transmission: fork geometry and isometric view (scale 1:3)',
          },
        ],
        links: [],
        status: 'completed',
      },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Projects',
    shortDesc:
      'End-to-end manufacturing work: sand casting, conventional machining, 5-axis drilling, and dimensional validation against ISO 2768 tolerances.',
    coverImage: '/projects/manufacturing/cover.png',
    domains: ['mechanical'],
    tags: ['Sand Casting', 'Machining', 'Turning', 'Milling', '5-Axis', 'GD&T'],
    featured: true,
    projects: [
      {
        id: 'mixer-bearing',
        title: 'Mixer Bearing — Full Manufacturing Cycle',
        subtitle: 'Sand casting to 5-axis drilling and dimensional validation',
        year: 2024,
        duration: 'Sept. 2023 – Feb. 2024',
        context: 'Course project — Arts et Métiers, Paris',
        domains: ['mechanical'],
        tags: ['Sand Casting', 'Aluminum', 'Turning', 'Milling', '5-Axis Drilling', 'GD&T'],
        shortDesc:
          'Complete manufacturing cycle of an aluminum mixer bearing: sand casting, turning and milling, 5-axis drilling, and dimensional validation against ISO 2768.',
        fullDesc: `
## Production Chain
1. **Process planning** from the engineering drawing (ISO 2768).
2. **Sand casting** — mold, aluminum pour, extraction.
3. **Conventional machining** — turning and milling.
4. **5-axis drilling** — compound-angle holes unreachable with 3-axis tooling.
5. **Dimensional validation** — metrology versus ISO 2768 tolerances.

## Outcome
The final part was validated as conformant after the full production chain.
        `,
        coverImage: '/projects/manufacturing/mixer-bearing/Cover_mixer.png',
        images: [
          {
            src: '/projects/manufacturing/mixer-bearing/img-01-mixer.png',
            alt: 'Technical drawing — Mixer Bearing',
            caption: 'FIG. 01 — Engineering drawing (A3, 1:1, ISO 2768 MK) — AlSi13/A-S13',
          },
          {
            src: '/projects/manufacturing/mixer-bearing/img-02-mixer.png',
            alt: 'Sand casting process',
            caption: 'FIG. 02 — Sand mold preparation and aluminum pour extraction',
          },
          {
            src: '/projects/manufacturing/mixer-bearing/img-03-mixer.png',
            alt: 'CNC machining — 5-axis drilling',
            caption: 'FIG. 03 — 5-axis drilling: compound-angle holes on CNC center',
          },
        ],
        links: [],
        status: 'completed',
      },
    ],
  },
  {
    id: 'research',
    title: 'Research & Industry Projects',
    shortDesc:
      'R&D engineering across academic and industrial settings: plasma hydrogen reactor, offshore liquid hydrogen transport, and multi-scale data center thermal analysis.',
    coverImage: '/projects/research/cover.png',
    domains: ['research'],
    tags: ['COMSOL', 'Python', 'CFD', 'Hydrogen', 'R&D', 'Thermal Systems'],
    featured: true,
    projects: [
      {
        id: 'hydrogen-reactor',
        title: 'CO₂-Free Hydrogen Reactor',
        subtitle: 'Microwave plasma reactor for methane cracking — UC Berkeley',
        year: 2025,
        duration: 'Sept. 2025 – Present',
        context: 'R&D Engineer — UC Berkeley',
        domains: ['research'],
        tags: ['COMSOL Multiphysics', 'CFD', 'Electromagnetics', 'Heat Transfer', 'Experimental Validation'],
        shortDesc:
          'Design and multiphysics modeling of a microwave plasma reactor for CO₂-free hydrogen production, coupling EM, thermal, and flow simulation in COMSOL.',
        fullDesc: `
## Context
R&D at **UC Berkeley** on microwave-induced plasma cracking of methane,
producing hydrogen and solid carbon with zero CO₂ emissions.

## Reactor Mechanical Design
Cavity geometry, waveguide interfaces, and gas injection hardware were engineered
via parametric CAD and iteratively refined for stable plasma conditions.

## COMSOL Multiphysics — 3D Coupled Model
| Domain | Role |
|--------|------|
| Electromagnetic propagation | Microwave field and energy deposition |
| Conjugate heat transfer | Temperature field and cooling channel sizing |
| Compressible flow | Gas injection dynamics and residence time |

## Experimental Validation
The reactor was instrumented with thermocouples and flow meters.
Measurements were correlated with COMSOL outputs to improve thermal efficiency and plasma stability.
        `,
        coverImage: '/projects/research/hydrogen-reactor/cover-capstone.png',
        images: [
          {
            src: '/projects/research/hydrogen-reactor/img-01-capstone.png',
            alt: 'Electric field in the plasma reactor — COMSOL',
            caption: 'FIG. 01 — COMSOL: electric field distribution inside the plasma reactor',
          },
          {
            src: '/projects/research/hydrogen-reactor/img-02-capstone.png',
            alt: 'Electron density in the plasma reactor — COMSOL',
            caption: 'FIG. 02 — COMSOL: electron density field inside the plasma reactor',
          },
        ],
        links: [{ label: 'Full report — coming soon', url: '', type: 'pdf', disabled: true }],
        status: 'in-progress',
      },
      {
        id: 'hydrogen-transport',
        title: 'Offshore Liquid Hydrogen Transport',
        subtitle: 'System architecture and techno-economic modeling — Hynamics, Paris',
        year: 2025,
        duration: 'Jan. 2025 – Jun. 2025',
        context: 'R&D Engineer Intern — Hynamics, Paris',
        domains: ['research'],
        tags: ['Hydrogen', 'Thermodynamics', 'System Architecture', 'Techno-Economic Modeling'],
        shortDesc:
          'Sizing and multi-criteria evaluation of liquid hydrogen offshore-to-onshore transport architectures, with thermodynamic modeling of cryogenic storage and piping.',
        fullDesc: `
## Context
Six-month R&D internship at **Hynamics** on liquid hydrogen offshore-to-onshore
transport chain architectures.

*Detailed technical results are proprietary to Hynamics. Overview only.*

## System Sizing
- LH₂ storage tanks — volume, insulation, and boil-off rates.
- Piping networks — pressure drop and flow rate optimization.
- Thermodynamic modeling of cryogenic systems at −253°C.

## Techno-Economic Analysis
| Criterion | Description |
|-----------|-------------|
| CAPEX / OPEX | Capital and operational cost estimation |
| Boil-off rate | Hydrogen loss during transport |
| Energy consumption | Total budget across the transport chain |

Output: ranked architecture concepts and client-ready recommendations.
        `,
        coverImage: '/projects/research/hydrogen-transport/cover.png',
        images: [
          {
            src: '/projects/research/hydrogen-transport/img-01.png',
            alt: 'Hydrogen transport system overview',
            caption: 'FIG. 01 — Offshore hydrogen transport system (illustrative)',
          },
        ],
        links: [],
        status: 'completed',
      },
      {
        id: 'datacenter-thermal',
        title: 'Multi-Scale Thermal Analysis of Data Centers',
        subtitle: 'Five-project portfolio spanning chip to cooling tower — UC Berkeley ME 193E',
        year: 2026,
        duration: 'Spring 2026',
        context: 'Course project — ME 193E/292E, UC Berkeley',
        domains: ['research'],
        tags: ['Python', 'COMSOL', 'CFD', 'Reality DC', 'Thermal Systems', 'Data Centers'],
        shortDesc:
          'Five interconnected projects analyzing data center cooling across six orders of magnitude, from chip-scale conduction to room-scale CFD and PUE optimization.',
        fullDesc: `
## Overview
A deliberate **zoom-in, zoom-out** methodology spanning six length scales —
from transistor junctions to cooling towers — unified by a consistent set of physical parameters.

## Project 1 — System COP
10 MW data center modeled with three operating modes. COP ranges from **3** to **30+**
depending on wet-bulb temperature.

## Project 2 — Chip Conduction (Python)
- 1D heat kernel with explicit FTCS on 2000 nodes.
- 2D chip conduction with Gauss-Seidel on a 181×65 grid.
- Lumped capacitance validity confirmed with Biot number < 0.1.

## Project 3 — Boundary Layer + Python CFD
Blasius ODE solved by shooting method and validated with a custom SIMPLE solver
showing second-order spatial convergence.

## Project 4 — COMSOL
Flat-plate boundary layer modeled on uniform and wall-refined meshes, both collapsing
onto the Blasius curve.

## Project 5 — Reality DC Room Simulation
Cold-aisle containment eliminates hot-air recirculation, lowers maximum cabinet inlet
temperature, and achieves **100% ASHRAE 2021 compliance** with **PUE 1.186**.
        `,
        coverImage: '/projects/research/datacenter-thermal/cover.png',
        images: [
          {
            src: '/projects/research/datacenter-thermal/img-01.png',
            alt: 'COP versus wet-bulb temperature curve',
            caption: 'FIG. 01 — System COP vs. wet-bulb temperature across operating modes',
          },
          {
            src: '/projects/research/datacenter-thermal/img-02.png',
            alt: 'Reality DC baseline temperature field',
            caption: 'FIG. 02 — Reality DC baseline temperature field with hot-aisle recirculation',
          },
          {
            src: '/projects/research/datacenter-thermal/img-03.png',
            alt: 'Cold-aisle containment results',
            caption: 'FIG. 03 — Cold-aisle containment: ASHRAE compliance and PUE 1.186',
          },
        ],
        links: [],
        status: 'completed',
      },
    ],
  },
  {
    id: 'software-ml',
    title: 'Software & Web Projects',
    shortDesc:
      'Web applications and product engineering: building energy simulators and an AI-powered caregiver support platform.',
    coverImage: '/projects/software-ml/cover.png',
    domains: ['software'],
    tags: ['React', 'TypeScript', 'Python', 'LLM', 'AI', 'Web App'],
    featured: true,
    projects: [
      {
        id: 'building-thermal',
        title: 'Building Thermal Efficiency Simulator',
        subtitle: 'Interactive web tool for building energy modeling',
        year: 2026,
        duration: '2026',
        context: 'Personal project',
        domains: ['software'],
        tags: ['React', 'TypeScript', 'Thermal Modeling', 'Energy', 'Web App'],
        shortDesc:
          'Web app for modeling heating and ventilation energy consumption of a customizable building, including floors, windows, insulation, and climate data.',
        fullDesc: `
## Building Customization
| Parameter | Options |
|-----------|---------|
| Number of floors | Custom integer |
| Floor surface area | m² per floor |
| Window surface and count | Per wall, per floor |
| Window type | Single / double / triple glazing, low-e |
| Insulation material | Wool, polystyrene, polyurethane, etc. |
| Insulation thickness | mm — directly impacts U-value |
| Climate profile | Annual temperature dataset |

## Thermal Engine
Computes U-values per component, heat losses through the envelope,
heating demand over 12 months, ventilation consumption, and annual cost estimate.

## Output
Monthly consumption charts, annual summary, and sensitivity analysis.

*Currently running locally — live demo link to be added on deployment.*
        `,
        coverImage: '/projects/software-ml/thermosim/cover.png',
        images: [
          {
            src: '/projects/software-ml/thermosim/img-01.png',
            alt: 'Building configurator UI',
            caption: 'FIG. 01 — Building configurator: floors, insulation, and window selection',
          },
          {
            src: '/projects/software-ml/thermosim/img-02.png',
            alt: 'Energy results dashboard',
            caption: 'FIG. 02 — Results dashboard: monthly heating and ventilation consumption',
          },
        ],
        links: [{ label: 'Live demo', url: 'https://maximedns5.github.io/ThermoSim/', type: 'demo' }],
        status: 'in-progress',
      },
      {
        id: 'wellbe',
        title: 'Well.Be',
        subtitle: 'AI-powered caregiver burnout prevention — Co-founder',
        year: 2026,
        duration: '2026 – Present',
        context: 'Co-founder & Product/Backend — Well.Be startup',
        domains: ['software'],
        tags: ['LLM', 'AI', 'Product', 'Backend', 'Startup', 'MVP', 'TypeScript', 'Python'],
        shortDesc:
          'Co-founded Well.Be, an AI-driven platform for informal caregiver support with LLM-based feedback modules and an MVP live with around 200 beta users.',
        fullDesc: `
## Context
**Well.Be** addresses caregiver burnout, a major health issue affecting
millions of informal caregivers.

## Product Architecture
The platform is structured around three caregiver-journey dimensions:
fatigue, sleep, and emotional load.

## AI-Driven Support
**LLM-based modules** generate contextualized feedback from caregiver responses,
linking prompts to risk factors such as work intensity, emotional demands, and autonomy.

## MVP
Launched with **~200 beta users** to validate usage patterns and perceived value
of AI-generated recommendations.

*Platform is in private beta — screenshots show the interface at a high level.*
        `,
        coverImage: '/projects/software-ml/wellbe/cover-well.be.png',
        images: [
          {
            src: '/projects/software-ml/wellbe/img-01-well.be.png',
            alt: 'Well.Be dashboard',
            caption: 'FIG. 01 — Well.Be: caregiver journey dashboard',
          },
          {
            src: '/projects/software-ml/wellbe/img-02-well.be.png',
            alt: 'AI feedback view',
            caption: 'FIG. 02 — Well.Be: AI-generated feedback and recommendations',
          },
          {
            src: '/projects/software-ml/wellbe/img-03-well.be.png',
            alt: 'Well.Be platform view',
            caption: 'FIG. 03 — Well.Be: platform overview',
          },
        ],
        links: [],
        status: 'in-progress',
      },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Projects',
    shortDesc:
      'Physics-informed neural networks, genetic algorithms, and end-to-end forecasting pipelines applied to thermal engineering and energy systems.',
    coverImage: '/projects/machine-learning/cover.png',
    domains: ['machine-learning'],
    tags: ['Python', 'Keras', 'TensorFlow', 'Random Forest', 'PINN', 'Neural Networks', 'scikit-learn'],
    featured: true,
    projects: [
      {
        id: 'ml-thermal-engineering',
        title: 'Machine Learning for Thermal Engineering',
        subtitle: 'Genetic algorithms, neural networks, PINNs, and optimal control — UC Berkeley ME249',
        year: 2025,
        duration: 'Fall 2025',
        context: 'Course project — ME249, UC Berkeley',
        domains: ['machine-learning'],
        tags: ['Python', 'Keras', 'TensorFlow', 'Genetic Algorithm', 'PINN', 'Neural Networks'],
        shortDesc:
          'Four ML projects applied to thermal systems: genetic algorithms on NASA data, neural networks for gas turbines, a PINN for 2D heat conduction, and PV control classification.',
        fullDesc: `
## Overview — Methodological Progression
A coherent progression from gradient-free optimization to physics-embedded
loss functions, applied to real thermal engineering datasets.

## Project 1 — Nucleate Boiling in Microgravity
Power-law model fitted to NASA KC-135 campaign data, quantitatively showing that
Marangoni effects compensate for buoyancy loss in microgravity.

## Project 2 — Hybrid Solar/Fossil Gas Turbine
Manual backpropagation implementation validated against Keras with comparable weights
and accuracy.

## Project 3 — PV Panel: Deep Learning and PINN
A PINN was trained to satisfy the 2D Laplace equation using only boundary measurements,
reaching sub-degree temperature accuracy at the center point.

## Project 4 — Multi-Panel PV System
Three wiring modes classified via a softmax output with dropout added to mitigate overfitting.
        `,
        coverImage: '/projects/software-ml/ml-thermal-engineering/cover.png',
        images: [
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-01-ml.png',
            alt: 'Measured vs predicted — training and validation',
            caption: 'FIG. 01 — Neural network: measured vs predicted output (training & validation)',
          },
          {
            src: '/projects/software-ml/ml-thermal-engineering/img-02-ml.png',
            alt: 'PINN 2D temperature heatmap',
            caption: 'FIG. 02 — PINN: 2D temperature field heatmap',
          },
        ],
        links: [{ label: 'Full report (PDF)', url: '/projects/software-ml/ml-thermal-engineering/thermal-systems-ml.pdf', type: 'pdf' }],
        status: 'completed',
      },
      {
        id: 'electricity-forecasting',
        title: 'Electricity Consumption Forecasting',
        subtitle: 'Multi-zone Random Forest pipeline — Tetouan SCADA dataset',
        year: 2026,
        duration: '2026',
        context: 'Personal project',
        domains: ['machine-learning'],
        tags: ['Python', 'Random Forest', 'scikit-learn', 'Time Series', 'Feature Engineering'],
        shortDesc:
          'End-to-end forecasting pipeline for three electricity distribution zones using the Tetouan SCADA dataset, reaching average R² around 0.9975 with extended features.',
        fullDesc: `
## Dataset
Tetouan SCADA dataset with **52,416 observations** at 10-minute resolution
across three electricity distribution zones.

## Pipeline
1. Data cleaning.
2. Exploratory analysis.
3. Feature engineering with weather, time, lags, and rolling statistics.
4. Modeling with linear regression baseline and **Random Forest**.
5. Evaluation with R², MAE, and diagnostic visualizations.

## Results
Extended features consistently outperform constrained academic feature sets,
quantifying the tradeoff between reproducibility and accuracy.

## Key Takeaways
- Temporal feature engineering is the main driver of performance gains.
- Random Forest consistently outperforms linear baselines.
- Shareable result tables and structured reports were produced for collaboration.
        `,
        coverImage: '/projects/software-ml/electricity-forecasting/cover-tetouan.png',
        images: [
          {
            src: '/projects/software-ml/electricity-forecasting/img-01-tetouan.png',
            alt: 'Random Forest prediction — three zones',
            caption: 'FIG. 01 — Random Forest: predicted vs actual consumption across three zones',
          },
          {
            src: '/projects/software-ml/electricity-forecasting/img-02-tetouan.png',
            alt: 'Feature importance',
            caption: 'FIG. 02 — Feature importance: influence of parameters on predicted consumption',
          },
        ],
        links: [{ label: 'Full report — coming soon', url: '', type: 'pdf', disabled: true }],
        status: 'completed',
      },
    ],
  },
];

export const getGroupById = (groupId: string): ProjectGroup | undefined =>
  projectGroups.find((group) => group.id === groupId);

export const getProjectInGroup = (groupId: string, projectId: string): Project | undefined =>
  getGroupById(groupId)?.projects.find((project) => project.id === projectId);

export const getAllProjects = (): Project[] => [
  ...standaloneProjects,
  ...projectGroups.flatMap((group) => group.projects),
];

export const getProjectById = (projectId: string): Project | undefined =>
  getAllProjects().find((project) => project.id === projectId);

export const getProjectLocation = (
  projectId: string,
): { groupId?: string; project: Project } | undefined => {
  const standaloneProject = standaloneProjects.find((project) => project.id === projectId);
  if (standaloneProject) {
    return { project: standaloneProject };
  }

  for (const group of projectGroups) {
    const match = group.projects.find((project) => project.id === projectId);
    if (match) {
      return { groupId: group.id, project: match };
    }
  }

  return undefined;
};

export const getProjectPath = (projectId: string): string => {
  const location = getProjectLocation(projectId);
  if (!location) {
    return '/projects';
  }

  return location.groupId
    ? `/projects/${location.groupId}/${location.project.id}`
    : `/projects/${location.project.id}`;
};

export const getProjectsByDomain = (domain: 'all' | ProjectDomain): Project[] =>
  domain === 'all'
    ? getAllProjects()
    : getAllProjects().filter((project) => project.domains.includes(domain));

export const getFeaturedGroups = (): ProjectGroup[] =>
  projectGroups.filter((group) => group.featured);

export const getActiveGroups = (): ProjectGroup[] =>
  projectGroups.filter((group) => group.projects.length > 0);

export const getAllDomains = (): Array<'all' | ProjectDomain> => [
  'all',
  ...Array.from(new Set(getAllProjects().flatMap((project) => project.domains))),
];
