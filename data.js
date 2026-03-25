// ============================================================
//  AnatomyConnect — Puzzle Data
//  Each puzzle has 4 groups × 4 words (16 tiles total).
//  At least 1 red herring per puzzle (a word that plausibly
//  fits another category but belongs to a different one).
//  Difficulty colours: yellow (easiest) → purple (hardest)
// ============================================================

const SYSTEMS = [
  { id: "cardiovascular",   name: "Cardiovascular",   icon: "🫀", color: "#c0392b" },
  { id: "musculoskeletal",  name: "Musculoskeletal",  icon: "🦴", color: "#8b6914" },
  { id: "nervous",          name: "Nervous",          icon: "🧠", color: "#7c4fa0" },
  { id: "digestive",        name: "Digestive",        icon: "🫁", color: "#2e7d52" },
  { id: "urogenital",       name: "Urogenital",       icon: "🔬", color: "#1565a8" },
  { id: "endocrine",        name: "Endocrine",        icon: "⚗️", color: "#b36200" },
  { id: "combo",            name: "Combo",            icon: "🔀", color: "#555" },
];

// ============================================================
//  CARDIOVASCULAR — 10 puzzles
// ============================================================
const cardiovascularPuzzles = [
  {
    id: "cv-01",
    groups: [
      {
        title: "Layers of the Heart Wall",
        color: "yellow",
        words: ["EPICARDIUM", "MYOCARDIUM", "ENDOCARDIUM", "PERICARDIUM"],
        hint: "Think from outside → in"
      },
      {
        title: "Atrioventricular Valves",
        color: "green",
        words: ["MITRAL", "TRICUSPID", "CHORDAE TENDINEAE", "PAPILLARY MUSCLE"],
        hint: "Structures controlling flow between atria and ventricles"
      },
      {
        title: "Blood Vessel Tunics",
        color: "blue",
        words: ["TUNICA INTIMA", "TUNICA MEDIA", "TUNICA ADVENTITIA", "ENDOTHELIUM"],
        hint: "Layers of an artery wall — one is a red herring within the theme"
      },
      {
        title: "Cardiac Conduction System",
        color: "purple",
        words: ["SA NODE", "AV NODE", "BUNDLE OF HIS", "PURKINJE FIBRES"],
        hint: "Electrical pathway of the heart"
      }
    ]
  },
  {
    id: "cv-02",
    groups: [
      {
        title: "Chambers of the Heart",
        color: "yellow",
        words: ["LEFT ATRIUM", "RIGHT ATRIUM", "LEFT VENTRICLE", "RIGHT VENTRICLE"],
        hint: "The four hollow spaces"
      },
      {
        title: "Pulmonary Circuit Vessels",
        color: "green",
        words: ["PULMONARY ARTERY", "PULMONARY VEIN", "PULMONARY TRUNK", "PULMONARY CAPILLARY"],
        hint: "Vessels of the lung circuit — beware of 'trunk'"
      },
      {
        title: "Major Branches of the Aorta",
        color: "blue",
        words: ["CELIAC TRUNK", "RENAL ARTERY", "SUBCLAVIAN ARTERY", "COMMON ILIAC"],
        hint: "Arteries arising directly from the aorta"
      },
      {
        title: "Cardiac Cycle Phases",
        color: "purple",
        words: ["SYSTOLE", "DIASTOLE", "ISOVOLUMETRIC CONTRACTION", "RAPID EJECTION"],
        hint: "Events in one heartbeat"
      }
    ]
  },
  {
    id: "cv-03",
    groups: [
      {
        title: "Types of Blood Vessel",
        color: "yellow",
        words: ["ARTERIOLE", "VENULE", "CAPILLARY", "METARTERIOLE"],
        hint: "Microcirculation vessels"
      },
      {
        title: "Semilunar Valves Context",
        color: "green",
        words: ["AORTIC VALVE", "PULMONARY VALVE", "THREE CUSPS", "SINUS OF VALSALVA"],
        hint: "Features of the semilunar valves"
      },
      {
        title: "Determinants of Cardiac Output",
        color: "blue",
        words: ["HEART RATE", "STROKE VOLUME", "PRELOAD", "AFTERLOAD"],
        hint: "Factors that determine how much blood the heart pumps"
      },
      {
        title: "Jugular Venous System",
        color: "purple",
        words: ["INTERNAL JUGULAR", "EXTERNAL JUGULAR", "SUPERIOR VENA CAVA", "SUBCLAVIAN VEIN"],
        hint: "Veins draining the head and neck — one is a red herring"
      }
    ]
  },
  {
    id: "cv-04",
    groups: [
      {
        title: "Arrhythmia Types",
        color: "yellow",
        words: ["BRADYCARDIA", "TACHYCARDIA", "ATRIAL FIBRILLATION", "VENTRICULAR FIBRILLATION"],
        hint: "Abnormal heart rhythms"
      },
      {
        title: "Coronary Arteries",
        color: "green",
        words: ["LEFT ANTERIOR DESCENDING", "CIRCUMFLEX ARTERY", "RIGHT CORONARY ARTERY", "MARGINAL ARTERY"],
        hint: "Blood supply to the heart muscle"
      },
      {
        title: "Blood Pressure Regulation",
        color: "blue",
        words: ["BARORECEPTOR", "RENIN", "ALDOSTERONE", "VASOPRESSIN"],
        hint: "Mechanisms controlling BP — contains cross-system red herrings"
      },
      {
        title: "ECG Waves & Intervals",
        color: "purple",
        words: ["P WAVE", "QRS COMPLEX", "T WAVE", "PR INTERVAL"],
        hint: "Components of an electrocardiogram"
      }
    ]
  },
  {
    id: "cv-05",
    groups: [
      {
        title: "Components of Blood",
        color: "yellow",
        words: ["ERYTHROCYTE", "LEUCOCYTE", "PLATELET", "PLASMA"],
        hint: "What's in a blood sample?"
      },
      {
        title: "Coagulation Pathway",
        color: "green",
        words: ["PROTHROMBIN", "THROMBIN", "FIBRINOGEN", "FIBRIN"],
        hint: "Steps in clot formation"
      },
      {
        title: "Portal System Features",
        color: "blue",
        words: ["HEPATIC PORTAL VEIN", "MESENTERIC VEIN", "SPLENIC VEIN", "HEPATIC VEIN"],
        hint: "The portal circulation — hepatic vein is a red herring"
      },
      {
        title: "Starling Forces",
        color: "purple",
        words: ["HYDROSTATIC PRESSURE", "ONCOTIC PRESSURE", "FILTRATION", "REABSORPTION"],
        hint: "Capillary fluid exchange"
      }
    ]
  },
  {
    id: "cv-06",
    groups: [
      {
        title: "Fetal Circulation Structures",
        color: "yellow",
        words: ["FORAMEN OVALE", "DUCTUS ARTERIOSUS", "DUCTUS VENOSUS", "UMBILICAL VEIN"],
        hint: "Unique to the fetal circulation"
      },
      {
        title: "Lymphatic Vessels",
        color: "green",
        words: ["THORACIC DUCT", "RIGHT LYMPHATIC DUCT", "CISTERNA CHYLI", "LACTEAL"],
        hint: "Lymph drainage vessels"
      },
      {
        title: "Aortic Arch Branches",
        color: "blue",
        words: ["BRACHIOCEPHALIC TRUNK", "LEFT COMMON CAROTID", "LEFT SUBCLAVIAN", "VERTEBRAL ARTERY"],
        hint: "Vessels arising from the aortic arch — vertebral is red herring"
      },
      {
        title: "Cardiac Muscle Physiology",
        color: "purple",
        words: ["INTERCALATED DISC", "GAP JUNCTION", "REFRACTORY PERIOD", "PLATEAU PHASE"],
        hint: "Unique features of cardiac muscle cells"
      }
    ]
  },
  {
    id: "cv-07",
    groups: [
      {
        title: "Right Heart Structures",
        color: "yellow",
        words: ["RIGHT ATRIUM", "TRICUSPID VALVE", "RIGHT VENTRICLE", "PULMONARY VALVE"],
        hint: "Structures of the right heart"
      },
      {
        title: "Venous Drainage of Lower Limb",
        color: "green",
        words: ["GREAT SAPHENOUS", "SMALL SAPHENOUS", "FEMORAL VEIN", "POPLITEAL VEIN"],
        hint: "Veins of the leg"
      },
      {
        title: "Shock Types",
        color: "blue",
        words: ["HYPOVOLAEMIC", "DISTRIBUTIVE", "CARDIOGENIC", "OBSTRUCTIVE"],
        hint: "Classifications of cardiovascular shock"
      },
      {
        title: "Endocarditis-Related Terms",
        color: "purple",
        words: ["VEGETATION", "BACTERAEMIA", "OSLER NODE", "JANEWAY LESION"],
        hint: "Signs and features of infective endocarditis"
      }
    ]
  },
  {
    id: "cv-08",
    groups: [
      {
        title: "Arteries of the Arm",
        color: "yellow",
        words: ["BRACHIAL ARTERY", "RADIAL ARTERY", "ULNAR ARTERY", "AXILLARY ARTERY"],
        hint: "Upper limb arterial supply"
      },
      {
        title: "Heart Sounds",
        color: "green",
        words: ["S1", "S2", "S3", "MURMUR"],
        hint: "Auscultatory findings of the heart"
      },
      {
        title: "Vasoactive Molecules",
        color: "blue",
        words: ["NITRIC OXIDE", "ENDOTHELIN", "PROSTACYCLIN", "THROMBOXANE A2"],
        hint: "Endothelial-derived vasoactive agents"
      },
      {
        title: "Myocardial Infarction Markers",
        color: "purple",
        words: ["TROPONIN I", "TROPONIN T", "CK-MB", "MYOGLOBIN"],
        hint: "Biomarkers released after a heart attack"
      }
    ]
  },
  {
    id: "cv-09",
    groups: [
      {
        title: "Blood Types (ABO System)",
        color: "yellow",
        words: ["TYPE A", "TYPE B", "TYPE AB", "TYPE O"],
        hint: "The four ABO blood groups"
      },
      {
        title: "Ventricular Septum Features",
        color: "green",
        words: ["MEMBRANOUS SEPTUM", "MUSCULAR SEPTUM", "INTERVENTRICULAR SEPTUM", "VENTRICULAR SEPTAL DEFECT"],
        hint: "Anatomy of the wall between ventricles"
      },
      {
        title: "Antihypertensive Drug Classes",
        color: "blue",
        words: ["ACE INHIBITOR", "BETA BLOCKER", "CALCIUM CHANNEL BLOCKER", "DIURETIC"],
        hint: "Mechanisms to lower blood pressure"
      },
      {
        title: "Capillary Types",
        color: "purple",
        words: ["CONTINUOUS", "FENESTRATED", "SINUSOIDAL", "DISCONTINUOUS"],
        hint: "Structural classifications of capillaries"
      }
    ]
  },
  {
    id: "cv-10",
    groups: [
      {
        title: "Circle of Willis Vessels",
        color: "yellow",
        words: ["ANTERIOR COMMUNICATING", "POSTERIOR COMMUNICATING", "MIDDLE CEREBRAL ARTERY", "BASILAR ARTERY"],
        hint: "Cerebral arterial circle components"
      },
      {
        title: "Haemostasis Steps",
        color: "green",
        words: ["VASCULAR SPASM", "PLATELET PLUG", "COAGULATION CASCADE", "FIBRINOLYSIS"],
        hint: "Sequential events to stop bleeding"
      },
      {
        title: "Venous Return Mechanisms",
        color: "blue",
        words: ["SKELETAL MUSCLE PUMP", "RESPIRATORY PUMP", "VENOUS VALVES", "VENOCONSTRICTION"],
        hint: "Mechanisms that help blood return to the heart"
      },
      {
        title: "Atherosclerosis Progression",
        color: "purple",
        words: ["FATTY STREAK", "FIBROUS PLAQUE", "FOAM CELL", "VULNERABLE PLAQUE"],
        hint: "Stages of atherosclerotic lesion development"
      }
    ]
  },

  // ============================================================
  //  MUSCULOSKELETAL — 10 puzzles
  // ============================================================
];

const musculoskeletalPuzzles = [
  {
    id: "ms-01",
    groups: [
      {
        title: "Rotator Cuff Muscles",
        color: "yellow",
        words: ["SUPRASPINATUS", "INFRASPINATUS", "TERES MINOR", "SUBSCAPULARIS"],
        hint: "SITS mnemonic — muscles stabilising the shoulder"
      },
      {
        title: "Types of Synovial Joint",
        color: "green",
        words: ["HINGE", "BALL AND SOCKET", "PIVOT", "CONDYLOID"],
        hint: "Classifications of freely moveable joints"
      },
      {
        title: "Bone Cell Types",
        color: "blue",
        words: ["OSTEOBLAST", "OSTEOCLAST", "OSTEOCYTE", "OSTEOPROGENITOR"],
        hint: "Cellular players in bone metabolism"
      },
      {
        title: "Sliding Filament Theory Players",
        color: "purple",
        words: ["ACTIN", "MYOSIN", "TROPOMYOSIN", "TROPONIN"],
        hint: "Proteins involved in muscle contraction"
      }
    ]
  },
  {
    id: "ms-02",
    groups: [
      {
        title: "Bones of the Wrist (Carpals)",
        color: "yellow",
        words: ["SCAPHOID", "LUNATE", "TRIQUETRUM", "PISIFORM"],
        hint: "Proximal row of wrist bones"
      },
      {
        title: "Knee Joint Structures",
        color: "green",
        words: ["ANTERIOR CRUCIATE", "POSTERIOR CRUCIATE", "MEDIAL MENISCUS", "LATERAL MENISCUS"],
        hint: "Stabilising structures inside the knee"
      },
      {
        title: "Types of Muscle Contraction",
        color: "blue",
        words: ["ISOTONIC", "ISOMETRIC", "CONCENTRIC", "ECCENTRIC"],
        hint: "Modes of muscle force generation"
      },
      {
        title: "Bone Tissue Layers",
        color: "purple",
        words: ["PERIOSTEUM", "COMPACT BONE", "SPONGY BONE", "ENDOSTEUM"],
        hint: "From outer surface to inner cavity"
      }
    ]
  },
  {
    id: "ms-03",
    groups: [
      {
        title: "Vertebral Regions",
        color: "yellow",
        words: ["CERVICAL", "THORACIC", "LUMBAR", "SACRAL"],
        hint: "Sections of the vertebral column"
      },
      {
        title: "Hip Abductor Muscles",
        color: "green",
        words: ["GLUTEUS MEDIUS", "GLUTEUS MINIMUS", "TENSOR FASCIAE LATAE", "PIRIFORMIS"],
        hint: "Muscles that abduct the hip — one is a red herring"
      },
      {
        title: "Long Bone Anatomy",
        color: "blue",
        words: ["DIAPHYSIS", "EPIPHYSIS", "METAPHYSIS", "MEDULLARY CAVITY"],
        hint: "Structural regions of a long bone"
      },
      {
        title: "Neuromuscular Junction Components",
        color: "purple",
        words: ["MOTOR END PLATE", "SYNAPTIC CLEFT", "ACETYLCHOLINE", "NICOTINIC RECEPTOR"],
        hint: "Where nerve meets muscle"
      }
    ]
  },
  {
    id: "ms-04",
    groups: [
      {
        title: "Types of Bone Fracture",
        color: "yellow",
        words: ["GREENSTICK", "COMMINUTED", "TRANSVERSE", "OBLIQUE"],
        hint: "Descriptive fracture classifications"
      },
      {
        title: "Quadriceps Group",
        color: "green",
        words: ["RECTUS FEMORIS", "VASTUS LATERALIS", "VASTUS MEDIALIS", "VASTUS INTERMEDIUS"],
        hint: "The four muscles of the anterior thigh"
      },
      {
        title: "Cartilage Types",
        color: "blue",
        words: ["HYALINE", "ELASTIC", "FIBROCARTILAGE", "ARTICULAR CARTILAGE"],
        hint: "Types of cartilage — one is a red herring (subtype)"
      },
      {
        title: "Calcium Regulation in Bone",
        color: "purple",
        words: ["PARATHYROID HORMONE", "CALCITONIN", "VITAMIN D", "OSTEOCALCIN"],
        hint: "Hormonal and molecular regulation of bone calcium"
      }
    ]
  },
  {
    id: "ms-05",
    groups: [
      {
        title: "Shoulder Girdle Bones",
        color: "yellow",
        words: ["CLAVICLE", "SCAPULA", "HUMERUS", "ACROMION"],
        hint: "Bones and bony landmarks of the shoulder — one is a process"
      },
      {
        title: "Muscle Fiber Types",
        color: "green",
        words: ["TYPE I", "TYPE IIA", "TYPE IIX", "SLOW TWITCH"],
        hint: "Muscle fiber classifications — watch for the odd one out"
      },
      {
        title: "Foot Arches",
        color: "blue",
        words: ["MEDIAL LONGITUDINAL", "LATERAL LONGITUDINAL", "TRANSVERSE ARCH", "PLANTAR FASCIA"],
        hint: "Structural arches of the foot — one is a support, not an arch"
      },
      {
        title: "Sarcomere Components",
        color: "purple",
        words: ["Z LINE", "M LINE", "A BAND", "I BAND"],
        hint: "Structural zones within a sarcomere"
      }
    ]
  },
  {
    id: "ms-06",
    groups: [
      {
        title: "Intrinsic Muscles of the Hand",
        color: "yellow",
        words: ["THENAR", "HYPOTHENAR", "LUMBRICAL", "INTEROSSEOUS"],
        hint: "Muscle groups within the hand"
      },
      {
        title: "Connective Tissue of Muscle",
        color: "green",
        words: ["ENDOMYSIUM", "PERIMYSIUM", "EPIMYSIUM", "FASCIA"],
        hint: "Layers wrapping muscle tissue — fascia is a red herring"
      },
      {
        title: "Joint Movements (Planes)",
        color: "blue",
        words: ["FLEXION", "ABDUCTION", "PRONATION", "CIRCUMDUCTION"],
        hint: "Descriptive terms for joint motion"
      },
      {
        title: "Bone Remodelling Cycle",
        color: "purple",
        words: ["ACTIVATION", "RESORPTION", "REVERSAL", "FORMATION"],
        hint: "Sequential phases of the BMU (basic multicellular unit)"
      }
    ]
  },
  {
    id: "ms-07",
    groups: [
      {
        title: "Bones of the Lower Leg",
        color: "yellow",
        words: ["TIBIA", "FIBULA", "PATELLA", "TALUS"],
        hint: "Bones at and below the knee — patella is a red herring"
      },
      {
        title: "Hamstring Group",
        color: "green",
        words: ["BICEPS FEMORIS", "SEMITENDINOSUS", "SEMIMEMBRANOSUS", "GRACILIS"],
        hint: "Posterior thigh muscles — one is a red herring"
      },
      {
        title: "Intervertebral Disc Components",
        color: "blue",
        words: ["NUCLEUS PULPOSUS", "ANNULUS FIBROSUS", "CARTILAGE ENDPLATE", "PROTEOGLYCAN"],
        hint: "Structural elements of an intervertebral disc"
      },
      {
        title: "Excitation-Contraction Coupling",
        color: "purple",
        words: ["ACTION POTENTIAL", "T-TUBULE", "SARCOPLASMIC RETICULUM", "CALCIUM RELEASE"],
        hint: "Events linking electrical signal to muscle shortening"
      }
    ]
  },
  {
    id: "ms-08",
    groups: [
      {
        title: "Skull Bones",
        color: "yellow",
        words: ["FRONTAL", "PARIETAL", "TEMPORAL", "OCCIPITAL"],
        hint: "Major cranial vault bones"
      },
      {
        title: "Types of Muscle Tissue",
        color: "green",
        words: ["SKELETAL", "CARDIAC", "SMOOTH", "STRIATED"],
        hint: "Muscle tissue categories — striated is a red herring (descriptor)"
      },
      {
        title: "Osteoporosis Risk Factors",
        color: "blue",
        words: ["OESTROGEN DEFICIENCY", "LOW CALCIUM INTAKE", "PHYSICAL INACTIVITY", "CORTICOSTEROID USE"],
        hint: "Factors predisposing to low bone mass"
      },
      {
        title: "Proprioceptors",
        color: "purple",
        words: ["MUSCLE SPINDLE", "GOLGI TENDON ORGAN", "RUFFINI ENDING", "PACINIAN CORPUSCLE"],
        hint: "Sensory receptors for body position — last two are red herrings"
      }
    ]
  },
  {
    id: "ms-09",
    groups: [
      {
        title: "Bursae of the Knee",
        color: "yellow",
        words: ["PREPATELLAR", "INFRAPATELLAR", "SUPRAPATELLAR", "ANESERINE"],
        hint: "Fluid-filled sacs around the knee"
      },
      {
        title: "Extensor Compartment (Forearm)",
        color: "green",
        words: ["EXTENSOR CARPI RADIALIS", "EXTENSOR DIGITORUM", "SUPINATOR", "ANCONEUS"],
        hint: "Posterior forearm muscles"
      },
      {
        title: "Bone Formation Types",
        color: "blue",
        words: ["ENDOCHONDRAL OSSIFICATION", "INTRAMEMBRANOUS OSSIFICATION", "APPOSITIONAL GROWTH", "EPIPHYSEAL PLATE"],
        hint: "Mechanisms by which bone is formed"
      },
      {
        title: "Connective Tissue Fibres",
        color: "purple",
        words: ["COLLAGEN TYPE I", "ELASTIN", "RETICULIN", "FIBRONECTIN"],
        hint: "ECM proteins — fibronectin is a red herring"
      }
    ]
  },
  {
    id: "ms-10",
    groups: [
      {
        title: "Lumbar Plexus Nerves",
        color: "yellow",
        words: ["FEMORAL NERVE", "OBTURATOR NERVE", "LATERAL FEMORAL CUTANEOUS", "GENITOFEMORAL"],
        hint: "Nerves arising from the lumbar plexus"
      },
      {
        title: "Pelvic Girdle Bones",
        color: "green",
        words: ["ILIUM", "ISCHIUM", "PUBIS", "SACRUM"],
        hint: "Bones of the bony pelvis — sacrum is a red herring"
      },
      {
        title: "Muscle Metabolism Pathways",
        color: "blue",
        words: ["ATP-PCR SYSTEM", "GLYCOLYSIS", "OXIDATIVE PHOSPHORYLATION", "LACTATE PRODUCTION"],
        hint: "Energy systems used by skeletal muscle"
      },
      {
        title: "Lytic Lesion Mediators",
        color: "purple",
        words: ["RANK LIGAND", "OPG", "M-CSF", "CATHEPSIN K"],
        hint: "Molecular regulators of osteoclast activity"
      }
    ]
  },
];

// ============================================================
//  NERVOUS SYSTEM — 10 puzzles
// ============================================================
const nervousPuzzles = [
  {
    id: "ns-01",
    groups: [
      {
        title: "Lobes of the Cerebral Cortex",
        color: "yellow",
        words: ["FRONTAL LOBE", "PARIETAL LOBE", "TEMPORAL LOBE", "OCCIPITAL LOBE"],
        hint: "Four main cortical lobes"
      },
      {
        title: "Cells of the CNS",
        color: "green",
        words: ["ASTROCYTE", "OLIGODENDROCYTE", "MICROGLIA", "EPENDYMAL CELL"],
        hint: "Non-neuronal CNS cell types"
      },
      {
        title: "Parts of a Neuron",
        color: "blue",
        words: ["DENDRITE", "AXON HILLOCK", "NODE OF RANVIER", "AXON TERMINAL"],
        hint: "Structural regions of a neuron"
      },
      {
        title: "Cranial Nerves Controlling Eye Movement",
        color: "purple",
        words: ["OCULOMOTOR (III)", "TROCHLEAR (IV)", "ABDUCENS (VI)", "OPTIC (II)"],
        hint: "Three move the eye; one is a red herring"
      }
    ]
  },
  {
    id: "ns-02",
    groups: [
      {
        title: "Divisions of the Autonomic NS",
        color: "yellow",
        words: ["SYMPATHETIC", "PARASYMPATHETIC", "ENTERIC", "PREGANGLIONIC"],
        hint: "ANS branches — one is a neuron type, not a division"
      },
      {
        title: "Meninges Layers",
        color: "green",
        words: ["DURA MATER", "ARACHNOID MATER", "PIA MATER", "SUBARACHNOID SPACE"],
        hint: "Membranes around the brain and spinal cord"
      },
      {
        title: "Neurotransmitters",
        color: "blue",
        words: ["ACETYLCHOLINE", "DOPAMINE", "SEROTONIN", "GABA"],
        hint: "Chemical messengers of the nervous system"
      },
      {
        title: "Action Potential Phases",
        color: "purple",
        words: ["DEPOLARISATION", "REPOLARISATION", "HYPERPOLARISATION", "RESTING POTENTIAL"],
        hint: "Events during an action potential"
      }
    ]
  },
  {
    id: "ns-03",
    groups: [
      {
        title: "Components of the Brainstem",
        color: "yellow",
        words: ["MIDBRAIN", "PONS", "MEDULLA OBLONGATA", "CEREBELLUM"],
        hint: "Regions of the brainstem — one is a red herring"
      },
      {
        title: "Spinal Cord Tracts (Ascending)",
        color: "green",
        words: ["DORSAL COLUMNS", "SPINOTHALAMIC", "SPINOCEREBELLAR", "CUNEATE FASCICULUS"],
        hint: "Pathways carrying sensory info upward"
      },
      {
        title: "Ion Channels on Neurons",
        color: "blue",
        words: ["VOLTAGE-GATED Na+", "VOLTAGE-GATED K+", "LIGAND-GATED", "LEAK CHANNEL"],
        hint: "Types of neuronal ion channels"
      },
      {
        title: "Limbic System Structures",
        color: "purple",
        words: ["HIPPOCAMPUS", "AMYGDALA", "CINGULATE GYRUS", "MAMMILLARY BODY"],
        hint: "Structures of the limbic circuit"
      }
    ]
  },
  {
    id: "ns-04",
    groups: [
      {
        title: "Cranial Nerves (Sensory Only)",
        color: "yellow",
        words: ["OLFACTORY (I)", "OPTIC (II)", "VESTIBULOCOCHLEAR (VIII)", "TRIGEMINAL (V)"],
        hint: "Three are purely sensory; one has motor components too"
      },
      {
        title: "Cerebrospinal Fluid Pathway",
        color: "green",
        words: ["LATERAL VENTRICLE", "THIRD VENTRICLE", "CEREBRAL AQUEDUCT", "FOURTH VENTRICLE"],
        hint: "CSF flows through these in sequence"
      },
      {
        title: "Sympathetic NS Effects",
        color: "blue",
        words: ["PUPIL DILATION", "INCREASED HEART RATE", "BRONCHODILATION", "GUT MOTILITY REDUCTION"],
        hint: "Fight-or-flight physiological effects"
      },
      {
        title: "Blood-Brain Barrier Components",
        color: "purple",
        words: ["TIGHT JUNCTION", "ASTROCYTE FOOT PROCESS", "PERICYTE", "BASEMENT MEMBRANE"],
        hint: "Structural elements of the BBB"
      }
    ]
  },
  {
    id: "ns-05",
    groups: [
      {
        title: "Basal Ganglia Nuclei",
        color: "yellow",
        words: ["CAUDATE NUCLEUS", "PUTAMEN", "GLOBUS PALLIDUS", "SUBTHALAMIC NUCLEUS"],
        hint: "Deep grey matter nuclei"
      },
      {
        title: "Sensory Receptor Types",
        color: "green",
        words: ["MECHANORECEPTOR", "THERMORECEPTOR", "NOCICEPTOR", "PHOTORECEPTOR"],
        hint: "Categories of sensory receptor"
      },
      {
        title: "Spinal Cord Sections",
        color: "blue",
        words: ["GREY MATTER", "WHITE MATTER", "DORSAL HORN", "VENTRAL HORN"],
        hint: "Regions of the spinal cord cross-section"
      },
      {
        title: "Demyelinating Disease Features",
        color: "purple",
        words: ["OLIGODENDROCYTE LOSS", "SLOWED CONDUCTION", "OPTIC NEURITIS", "PLAQUES"],
        hint: "Pathological features of demyelination (e.g. MS)"
      }
    ]
  },
  {
    id: "ns-06",
    groups: [
      {
        title: "Thalamic Nuclei",
        color: "yellow",
        words: ["LATERAL GENICULATE", "MEDIAL GENICULATE", "VENTRAL POSTEROLATERAL", "PULVINAR"],
        hint: "Named thalamic relay nuclei"
      },
      {
        title: "Reflex Arc Components",
        color: "green",
        words: ["RECEPTOR", "AFFERENT NEURON", "INTEGRATION CENTRE", "EFFERENT NEURON"],
        hint: "Sequential components of a reflex arc"
      },
      {
        title: "Neurotransmitter Receptors",
        color: "blue",
        words: ["NMDA RECEPTOR", "AMPA RECEPTOR", "GABA-A RECEPTOR", "MUSCARINIC RECEPTOR"],
        hint: "Types of neurotransmitter receptor"
      },
      {
        title: "Peripheral Neuropathy Causes",
        color: "purple",
        words: ["DIABETES MELLITUS", "VITAMIN B12 DEFICIENCY", "ALCOHOL EXCESS", "GUILLAIN-BARRÉ"],
        hint: "Causes of peripheral nerve damage"
      }
    ]
  },
  {
    id: "ns-07",
    groups: [
      {
        title: "Sleep Stages",
        color: "yellow",
        words: ["NREM STAGE 1", "NREM STAGE 2", "NREM STAGE 3", "REM SLEEP"],
        hint: "Stages of the sleep cycle"
      },
      {
        title: "Motor Cortex Output Targets",
        color: "green",
        words: ["CORTICOSPINAL TRACT", "CORTICOBULBAR TRACT", "BASAL GANGLIA", "CEREBELLUM"],
        hint: "Where motor cortex signals go"
      },
      {
        title: "Synaptic Vesicle Cycle",
        color: "blue",
        words: ["DOCKING", "PRIMING", "FUSION", "ENDOCYTOSIS"],
        hint: "Steps of neurotransmitter release and recycling"
      },
      {
        title: "Spinal Cord Injury Levels & Effects",
        color: "purple",
        words: ["C4 — DIAPHRAGM", "T6 — AUTONOMIC DYSREFLEXIA", "L2 — HIP FLEXORS", "S2 — BLADDER"],
        hint: "Level of SCI and associated clinical feature"
      }
    ]
  },
  {
    id: "ns-08",
    groups: [
      {
        title: "Types of Synapse",
        color: "yellow",
        words: ["AXODENDRITIC", "AXOSOMATIC", "AXOAXONIC", "DENDRODENDRITIC"],
        hint: "Where synaptic contact is made"
      },
      {
        title: "Pain Pathway (Nociception)",
        color: "green",
        words: ["A-DELTA FIBRE", "C FIBRE", "DORSAL HORN", "PERIAQUEDUCTAL GREY"],
        hint: "Components of the pain transmission pathway"
      },
      {
        title: "Hypothalamic Functions",
        color: "blue",
        words: ["THERMOREGULATION", "HUNGER/SATIETY", "CIRCADIAN RHYTHM", "ADH RELEASE"],
        hint: "Physiological processes regulated by the hypothalamus"
      },
      {
        title: "Long-Term Potentiation Molecular Steps",
        color: "purple",
        words: ["GLUTAMATE RELEASE", "AMPA RECEPTOR ACTIVATION", "NMDA RECEPTOR ACTIVATION", "Ca2+ INFLUX"],
        hint: "Molecular basis of LTP (synaptic plasticity)"
      }
    ]
  },
  {
    id: "ns-09",
    groups: [
      {
        title: "Visual Pathway",
        color: "yellow",
        words: ["RETINA", "OPTIC NERVE", "LATERAL GENICULATE NUCLEUS", "VISUAL CORTEX"],
        hint: "Stations of the visual pathway"
      },
      {
        title: "Cerebellum Lobes",
        color: "green",
        words: ["ANTERIOR LOBE", "POSTERIOR LOBE", "FLOCCULONODULAR LOBE", "VERMIS"],
        hint: "Divisions of the cerebellum — vermis is a red herring"
      },
      {
        title: "Glial Cell Functions",
        color: "blue",
        words: ["MYELIN FORMATION (CNS)", "PHAGOCYTOSIS", "CSF PRODUCTION", "K+ BUFFERING"],
        hint: "Match the function: oligodendrocyte, microglia, ependymal, astrocyte"
      },
      {
        title: "Cerebral Herniation Types",
        color: "purple",
        words: ["TRANSTENTORIAL", "SUBFALCINE", "TONSILLAR", "UPWARD"],
        hint: "Types of dangerous brain herniation"
      }
    ]
  },
  {
    id: "ns-10",
    groups: [
      {
        title: "Dermatomes (Landmark Levels)",
        color: "yellow",
        words: ["C6 — THUMB", "T4 — NIPPLE LINE", "L1 — INGUINAL", "S1 — LITTLE TOE"],
        hint: "Dermatomal level and associated landmark"
      },
      {
        title: "EEG Wave Types",
        color: "green",
        words: ["ALPHA WAVE", "BETA WAVE", "THETA WAVE", "DELTA WAVE"],
        hint: "Brain wave classifications by frequency"
      },
      {
        title: "Nerve Fiber Classification",
        color: "blue",
        words: ["Aα FIBRE", "Aβ FIBRE", "Aγ FIBRE", "C FIBRE"],
        hint: "Peripheral nerve fiber diameter classification"
      },
      {
        title: "Stroke Syndromes",
        color: "purple",
        words: ["LATERAL MEDULLARY", "WEBER SYNDROME", "LACUNAR INFARCT", "WATERSHED INFARCT"],
        hint: "Specific stroke syndromes named by region"
      }
    ]
  },
];

// ============================================================
//  DIGESTIVE SYSTEM — 10 puzzles
// ============================================================
const digestivePuzzles = [
  {
    id: "di-01",
    groups: [
      {
        title: "Layers of the GI Wall",
        color: "yellow",
        words: ["MUCOSA", "SUBMUCOSA", "MUSCULARIS EXTERNA", "SEROSA"],
        hint: "Inside to outside layers of the gut wall"
      },
      {
        title: "Digestive Enzymes",
        color: "green",
        words: ["AMYLASE", "LIPASE", "TRYPSIN", "PEPSIN"],
        hint: "Enzymes of digestion"
      },
      {
        title: "Small Intestine Regions",
        color: "blue",
        words: ["DUODENUM", "JEJUNUM", "ILEUM", "ILEOCAECAL VALVE"],
        hint: "Sections of the small intestine — one is a junction"
      },
      {
        title: "Hepatic Lobule Zones",
        color: "purple",
        words: ["ZONE 1 (PERIPORTAL)", "ZONE 2 (MID-ZONAL)", "ZONE 3 (CENTRILOBULAR)", "CANAL OF HERING"],
        hint: "Liver lobule metabolic zones"
      }
    ]
  },
  {
    id: "di-02",
    groups: [
      {
        title: "Salivary Glands",
        color: "yellow",
        words: ["PAROTID", "SUBMANDIBULAR", "SUBLINGUAL", "MINOR SALIVARY GLANDS"],
        hint: "Glands producing saliva"
      },
      {
        title: "Stomach Regions",
        color: "green",
        words: ["CARDIA", "FUNDUS", "BODY", "PYLORUS"],
        hint: "Anatomical regions of the stomach"
      },
      {
        title: "Gastrointestinal Hormones",
        color: "blue",
        words: ["GASTRIN", "SECRETIN", "CCK", "MOTILIN"],
        hint: "Hormones regulating digestion"
      },
      {
        title: "Phases of Gastric Secretion",
        color: "purple",
        words: ["CEPHALIC PHASE", "GASTRIC PHASE", "INTESTINAL PHASE", "VAGAL STIMULATION"],
        hint: "Three phases plus a key mediator — one is a red herring"
      }
    ]
  },
  {
    id: "di-03",
    groups: [
      {
        title: "Large Intestine Parts",
        color: "yellow",
        words: ["CAECUM", "ASCENDING COLON", "TRANSVERSE COLON", "SIGMOID COLON"],
        hint: "Segments of the large intestine"
      },
      {
        title: "Liver Functions",
        color: "green",
        words: ["BILE PRODUCTION", "GLYCOGEN STORAGE", "ALBUMIN SYNTHESIS", "DETOXIFICATION"],
        hint: "Key functions of the liver"
      },
      {
        title: "Pancreatic Exocrine Products",
        color: "blue",
        words: ["BICARBONATE", "CHYMOTRYPSINOGEN", "ELASTASE", "PANCREATIC LIPASE"],
        hint: "Products secreted by the exocrine pancreas"
      },
      {
        title: "Enteric Nervous System Components",
        color: "purple",
        words: ["MYENTERIC PLEXUS", "SUBMUCOSAL PLEXUS", "VIP", "SUBSTANCE P"],
        hint: "The 'gut brain' structures and neurotransmitters"
      }
    ]
  },
  {
    id: "di-04",
    groups: [
      {
        title: "Swallowing Phases",
        color: "yellow",
        words: ["ORAL PHASE", "PHARYNGEAL PHASE", "OESOPHAGEAL PHASE", "LOWER OESOPHAGEAL SPHINCTER"],
        hint: "Sequential events in deglutition — one is a structure"
      },
      {
        title: "Bile Components",
        color: "green",
        words: ["BILE SALTS", "BILIRUBIN", "PHOSPHOLIPIDS", "CHOLESTEROL"],
        hint: "What is in bile?"
      },
      {
        title: "Nutrient Absorption Sites",
        color: "blue",
        words: ["IRON — DUODENUM", "B12 — ILEUM", "FATTY ACIDS — JEJUNUM", "WATER — COLON"],
        hint: "Where specific nutrients are absorbed"
      },
      {
        title: "Gut Microbiome Roles",
        color: "purple",
        words: ["SHORT-CHAIN FATTY ACIDS", "COLONISATION RESISTANCE", "VITAMIN K SYNTHESIS", "IMMUNE MODULATION"],
        hint: "Functions of the intestinal microbiota"
      }
    ]
  },
  {
    id: "di-05",
    groups: [
      {
        title: "Stomach Cell Types",
        color: "yellow",
        words: ["PARIETAL CELL", "CHIEF CELL", "G CELL", "D CELL"],
        hint: "Gastric gland cell types and their secretions"
      },
      {
        title: "Types of Jaundice",
        color: "green",
        words: ["PRE-HEPATIC", "HEPATIC", "POST-HEPATIC", "CONJUGATED BILIRUBIN"],
        hint: "Classifications of jaundice — one is a lab marker, not a type"
      },
      {
        title: "Motility Patterns",
        color: "blue",
        words: ["PERISTALSIS", "SEGMENTATION", "HAUSTRAL CHURNING", "MASS MOVEMENT"],
        hint: "Types of GI movement"
      },
      {
        title: "Hepatitis Types",
        color: "purple",
        words: ["HEPATITIS A", "HEPATITIS B", "HEPATITIS C", "AUTOIMMUNE HEPATITIS"],
        hint: "Causes of liver inflammation"
      }
    ]
  },
  {
    id: "di-06",
    groups: [
      {
        title: "Oesophagus Features",
        color: "yellow",
        words: ["UPPER OESOPHAGEAL SPHINCTER", "LOWER OESOPHAGEAL SPHINCTER", "STRATIFIED SQUAMOUS EPITHELIUM", "ADVENTITIA"],
        hint: "Structural features of the oesophagus"
      },
      {
        title: "Colon Absorption",
        color: "green",
        words: ["WATER", "SODIUM", "CHLORIDE", "POTASSIUM SECRETION"],
        hint: "The colon absorbs several things — one is actually secreted"
      },
      {
        title: "Ileocaecal Junction Structures",
        color: "blue",
        words: ["ILEOCAECAL VALVE", "APPENDIX", "CAECUM", "TAENIA COLI"],
        hint: "Structures at the junction of small and large intestine"
      },
      {
        title: "Inflammatory Bowel Disease Features",
        color: "purple",
        words: ["TRANSMURAL INFLAMMATION", "SKIP LESIONS", "CRYPT ABSCESS", "COBBLESTONE MUCOSA"],
        hint: "Histological/macroscopic features — some are Crohn's, some UC"
      }
    ]
  },
  {
    id: "di-07",
    groups: [
      {
        title: "Villi Components",
        color: "yellow",
        words: ["ENTEROCYTE", "GOBLET CELL", "LACTEAL", "BRUSH BORDER"],
        hint: "Structures of a small intestinal villus"
      },
      {
        title: "Biliary System",
        color: "green",
        words: ["CYSTIC DUCT", "COMMON BILE DUCT", "HEPATIC DUCT", "AMPULLA OF VATER"],
        hint: "Bile duct anatomy"
      },
      {
        title: "Digestive System Sphincters",
        color: "blue",
        words: ["PYLORIC SPHINCTER", "ILEOCAECAL VALVE", "INTERNAL ANAL SPHINCTER", "EXTERNAL ANAL SPHINCTER"],
        hint: "Sphincters controlling flow through the GI tract"
      },
      {
        title: "Secretory IgA Pathway",
        color: "purple",
        words: ["PLASMA CELL", "POLYMERIC IgA", "SECRETORY COMPONENT", "TRANSCYTOSIS"],
        hint: "How secretory IgA is produced and transported"
      }
    ]
  },
  {
    id: "di-08",
    groups: [
      {
        title: "Types of Malabsorption",
        color: "yellow",
        words: ["COELIAC DISEASE", "LACTASE DEFICIENCY", "CROHN'S DISEASE", "SHORT BOWEL SYNDROME"],
        hint: "Conditions causing nutrient malabsorption"
      },
      {
        title: "Pancreatic Islet Cell Types",
        color: "green",
        words: ["ALPHA CELL", "BETA CELL", "DELTA CELL", "PP CELL"],
        hint: "Cells of the islets of Langerhans"
      },
      {
        title: "Rectal Anatomy",
        color: "blue",
        words: ["HAUSTRA", "VALVES OF HOUSTON", "DENTATE LINE", "COLUMNS OF MORGAGNI"],
        hint: "Anatomical features of the rectum and anus — haustra is a red herring"
      },
      {
        title: "Cholesterol Metabolism",
        color: "purple",
        words: ["HMG-CoA REDUCTASE", "BILE SALT SYNTHESIS", "LDL RECEPTOR", "ENTEROHEPATIC CIRCULATION"],
        hint: "Key players in hepatic cholesterol handling"
      }
    ]
  },
  {
    id: "di-09",
    groups: [
      {
        title: "Omentum Types",
        color: "yellow",
        words: ["GREATER OMENTUM", "LESSER OMENTUM", "GASTROCOLIC LIGAMENT", "GASTROHEPATIC LIGAMENT"],
        hint: "Peritoneal folds of the omentum"
      },
      {
        title: "Defecation Reflex",
        color: "green",
        words: ["RECTAL DISTENSION", "INTERNAL SPHINCTER RELAXATION", "EXTERNAL SPHINCTER CONTRACTION", "VALSALVA MANOEUVRE"],
        hint: "Steps in the defecation reflex"
      },
      {
        title: "Exocrine Pancreas Regulation",
        color: "blue",
        words: ["SECRETIN", "CCK", "VAGUS NERVE", "SOMATOSTATIN"],
        hint: "Stimulators and inhibitors of pancreatic secretion"
      },
      {
        title: "Liver Sinusoid Cell Types",
        color: "purple",
        words: ["HEPATOCYTE", "KUPFFER CELL", "HEPATIC STELLATE CELL", "LIVER SINUSOIDAL ENDOTHELIAL CELL"],
        hint: "Cellular components of the liver sinusoid"
      }
    ]
  },
  {
    id: "di-10",
    groups: [
      {
        title: "Oral Cavity Structures",
        color: "yellow",
        words: ["HARD PALATE", "SOFT PALATE", "UVULA", "PALATINE TONSIL"],
        hint: "Structures of the mouth and oropharynx"
      },
      {
        title: "Small Intestine Surface Area Adaptations",
        color: "green",
        words: ["PLICAE CIRCULARES", "VILLI", "MICROVILLI", "CRYPTS OF LIEBERKÜHN"],
        hint: "Structural features that maximise absorptive surface area"
      },
      {
        title: "Protein Digestion",
        color: "blue",
        words: ["PEPSINOGEN", "TRYPSINOGEN", "DIPEPTIDASE", "AMINOPEPTIDASE"],
        hint: "Enzymes in protein breakdown"
      },
      {
        title: "Portal Hypertension Complications",
        color: "purple",
        words: ["OESOPHAGEAL VARICES", "CAPUT MEDUSAE", "SPLENOMEGALY", "ASCITES"],
        hint: "Clinical consequences of raised portal pressure"
      }
    ]
  },
];

// ============================================================
//  UROGENITAL SYSTEM — 10 puzzles
// ============================================================
const urogenitalPuzzles = [
  {
    id: "ug-01",
    groups: [
      {
        title: "Parts of the Nephron",
        color: "yellow",
        words: ["PROXIMAL CONVOLUTED TUBULE", "LOOP OF HENLE", "DISTAL CONVOLUTED TUBULE", "COLLECTING DUCT"],
        hint: "Sequential tubular segments of the nephron"
      },
      {
        title: "Renal Corpuscle Components",
        color: "green",
        words: ["GLOMERULUS", "BOWMAN'S CAPSULE", "PODOCYTE", "MESANGIAL CELL"],
        hint: "Structures of the filtration unit"
      },
      {
        title: "Forces in GFR (Starling)",
        color: "blue",
        words: ["GLOMERULAR HYDROSTATIC", "ONCOTIC PRESSURE (PLASMA)", "CAPSULAR HYDROSTATIC", "NET FILTRATION PRESSURE"],
        hint: "Pressures governing glomerular filtration"
      },
      {
        title: "Juxtaglomerular Apparatus",
        color: "purple",
        words: ["MACULA DENSA", "JUXTAGLOMERULAR CELLS", "RENIN SECRETION", "EXTRAGLOMERULAR MESANGIUM"],
        hint: "Components of the JGA — renin secretion is a function"
      }
    ]
  },
  {
    id: "ug-02",
    groups: [
      {
        title: "Kidney Anatomical Regions",
        color: "yellow",
        words: ["CORTEX", "MEDULLA", "RENAL PAPILLA", "RENAL PELVIS"],
        hint: "Zones within the kidney"
      },
      {
        title: "Urinary Tract Organs",
        color: "green",
        words: ["URETER", "URINARY BLADDER", "URETHRA", "RENAL HILUM"],
        hint: "Conduits and storage from kidney to outside — one is a kidney structure"
      },
      {
        title: "RAAS Components",
        color: "blue",
        words: ["RENIN", "ANGIOTENSIN I", "ANGIOTENSIN II", "ALDOSTERONE"],
        hint: "Sequential elements of the renin-angiotensin-aldosterone system"
      },
      {
        title: "Acid-Base Disturbances",
        color: "purple",
        words: ["METABOLIC ACIDOSIS", "RESPIRATORY ALKALOSIS", "METABOLIC ALKALOSIS", "RESPIRATORY ACIDOSIS"],
        hint: "Four primary acid-base disorders"
      }
    ]
  },
  {
    id: "ug-03",
    groups: [
      {
        title: "Female Reproductive Organs",
        color: "yellow",
        words: ["OVARY", "FALLOPIAN TUBE", "UTERUS", "CERVIX"],
        hint: "Internal female reproductive organs"
      },
      {
        title: "Male Reproductive Tract",
        color: "green",
        words: ["EPIDIDYMIS", "VAS DEFERENS", "SEMINAL VESICLE", "PROSTATE GLAND"],
        hint: "Male reproductive structures — in order of sperm travel"
      },
      {
        title: "Renal Tubule Transport",
        color: "blue",
        words: ["SODIUM-GLUCOSE COTRANSPORT", "ALDOSTERONE ACTION", "ADH AQUAPORIN", "POTASSIUM SECRETION"],
        hint: "Transport mechanisms at specific nephron segments"
      },
      {
        title: "Ovarian Cycle Phases",
        color: "purple",
        words: ["FOLLICULAR PHASE", "OVULATION", "LUTEAL PHASE", "CORPUS LUTEUM"],
        hint: "Events in the ovarian cycle — corpus luteum is a structure"
      }
    ]
  },
  {
    id: "ug-04",
    groups: [
      {
        title: "Hormones of Kidney Function",
        color: "yellow",
        words: ["ADH (VASOPRESSIN)", "ALDOSTERONE", "ANP", "ERYTHROPOIETIN"],
        hint: "Hormones regulating or produced by the kidney"
      },
      {
        title: "Urine Concentration Mechanism",
        color: "green",
        words: ["COUNTERCURRENT MULTIPLIER", "COUNTERCURRENT EXCHANGER", "UREA RECYCLING", "MEDULLARY OSMOLARITY GRADIENT"],
        hint: "Mechanisms producing concentrated urine"
      },
      {
        title: "Menstrual Cycle Days",
        color: "blue",
        words: ["MENSTRUATION (1–5)", "PROLIFERATIVE (6–13)", "OVULATION (~14)", "SECRETORY (15–28)"],
        hint: "Phases of the uterine (menstrual) cycle"
      },
      {
        title: "Glomerulonephritis Features",
        color: "purple",
        words: ["HAEMATURIA", "PROTEINURIA", "REDUCED GFR", "COMPLEMENT ACTIVATION"],
        hint: "Clinical and pathological features of glomerular disease"
      }
    ]
  },
  {
    id: "ug-05",
    groups: [
      {
        title: "Spermatogenesis Stages",
        color: "yellow",
        words: ["SPERMATOGONIUM", "SPERMATOCYTE", "SPERMATID", "SPERMATOZOON"],
        hint: "Sequential development of sperm cells"
      },
      {
        title: "Testicular Cell Types",
        color: "green",
        words: ["SERTOLI CELL", "LEYDIG CELL", "SPERMATOGONIUM", "MYOID CELL"],
        hint: "Cells within the testis — spermatogonium is a red herring here"
      },
      {
        title: "Renal Blood Supply",
        color: "blue",
        words: ["RENAL ARTERY", "AFFERENT ARTERIOLE", "EFFERENT ARTERIOLE", "VASA RECTA"],
        hint: "Blood vessels supplying the kidney"
      },
      {
        title: "Kidney Stone Types",
        color: "purple",
        words: ["CALCIUM OXALATE", "URIC ACID", "STRUVITE", "CYSTINE"],
        hint: "Compositions of nephrolithiasis"
      }
    ]
  },
  {
    id: "ug-06",
    groups: [
      {
        title: "Bladder Control Nerves",
        color: "yellow",
        words: ["PELVIC NERVE (S2-S4)", "HYPOGASTRIC NERVE", "PUDENDAL NERVE", "DETRUSOR MUSCLE"],
        hint: "Innervation of the bladder — one is a muscle"
      },
      {
        title: "Gonadotropin Axis",
        color: "green",
        words: ["GnRH", "LH", "FSH", "OESTROGEN FEEDBACK"],
        hint: "The hypothalamic-pituitary-gonadal axis"
      },
      {
        title: "Tubular Reabsorption Locations",
        color: "blue",
        words: ["GLUCOSE — PCT", "Na+ — THICK ASCENDING LIMB", "WATER — COLLECTING DUCT", "HCO3- — PCT"],
        hint: "Where each substance is primarily reabsorbed"
      },
      {
        title: "Renal Failure Markers",
        color: "purple",
        words: ["CREATININE", "UREA", "eGFR", "CYSTATIN C"],
        hint: "Laboratory markers of kidney function"
      }
    ]
  },
  {
    id: "ug-07",
    groups: [
      {
        title: "Embryological Kidney Development",
        color: "yellow",
        words: ["PRONEPHROS", "MESONEPHROS", "METANEPHROS", "URETERIC BUD"],
        hint: "Developmental stages of the kidney"
      },
      {
        title: "Uterine Layers",
        color: "green",
        words: ["PERIMETRIUM", "MYOMETRIUM", "ENDOMETRIUM", "STRATUM FUNCTIONALIS"],
        hint: "Layers of the uterine wall — one is a sublayer"
      },
      {
        title: "Renal Clearance Concepts",
        color: "blue",
        words: ["FREE FILTRATION", "COMPLETE REABSORPTION", "SECRETION", "PLASMA CLEARANCE"],
        hint: "Concepts in renal pharmacology/physiology"
      },
      {
        title: "Polycystic Kidney Disease Features",
        color: "purple",
        words: ["AUTOSOMAL DOMINANT", "PKDI GENE", "BERRY ANEURYSM", "LIVER CYSTS"],
        hint: "Clinical and genetic features of ADPKD"
      }
    ]
  },
  {
    id: "ug-08",
    groups: [
      {
        title: "Pregnancy Hormones",
        color: "yellow",
        words: ["hCG", "PROGESTERONE", "OESTROGEN", "RELAXIN"],
        hint: "Hormones of pregnancy"
      },
      {
        title: "Prostate Zones",
        color: "green",
        words: ["TRANSITIONAL ZONE", "CENTRAL ZONE", "PERIPHERAL ZONE", "ANTERIOR FIBROMUSCULAR STROMA"],
        hint: "Anatomical zones of the prostate"
      },
      {
        title: "Potassium Disorders",
        color: "blue",
        words: ["HYPERKALAEMIA", "HYPOKALAEMIA", "ALDOSTERONE EXCESS", "RENAL TUBULAR ACIDOSIS"],
        hint: "Conditions related to potassium balance"
      },
      {
        title: "Nephron-Specific Drug Targets",
        color: "purple",
        words: ["LOOP DIURETIC — NKCC2", "THIAZIDE — NCC", "K-SPARING — ENaC", "ACEi — ANGIOTENSIN II"],
        hint: "Diuretics and their tubular targets"
      }
    ]
  },
  {
    id: "ug-09",
    groups: [
      {
        title: "Renal Cortex Structures",
        color: "yellow",
        words: ["GLOMERULUS", "PCT", "DCT", "CORTICAL COLLECTING DUCT"],
        hint: "Structures found in the renal cortex"
      },
      {
        title: "Female External Genitalia",
        color: "green",
        words: ["LABIA MAJORA", "LABIA MINORA", "CLITORIS", "VESTIBULE"],
        hint: "Structures of the vulva"
      },
      {
        title: "Dialysis Principles",
        color: "blue",
        words: ["DIFFUSION", "ULTRAFILTRATION", "OSMOSIS", "CONVECTION"],
        hint: "Physical processes underlying dialysis"
      },
      {
        title: "Renal Tubular Acidosis Types",
        color: "purple",
        words: ["TYPE 1 (DISTAL)", "TYPE 2 (PROXIMAL)", "TYPE 4 (HYPERKALAEMIC)", "FANCONI SYNDROME"],
        hint: "Types of RTA — Fanconi is a red herring"
      }
    ]
  },
  {
    id: "ug-10",
    groups: [
      {
        title: "Stages of Labour",
        color: "yellow",
        words: ["FIRST STAGE", "SECOND STAGE", "THIRD STAGE", "TRANSITION PHASE"],
        hint: "Stages of childbirth"
      },
      {
        title: "Testosterone Synthesis Pathway",
        color: "green",
        words: ["CHOLESTEROL", "PREGNENOLONE", "ANDROSTENEDIONE", "TESTOSTERONE"],
        hint: "Sequential steps in androgen biosynthesis"
      },
      {
        title: "Urinary Incontinence Types",
        color: "blue",
        words: ["STRESS INCONTINENCE", "URGE INCONTINENCE", "OVERFLOW INCONTINENCE", "MIXED INCONTINENCE"],
        hint: "Clinical classifications of urinary incontinence"
      },
      {
        title: "Renal Osteodystrophy Pathway",
        color: "purple",
        words: ["REDUCED VITAMIN D ACTIVATION", "HYPOCALCAEMIA", "SECONDARY HYPERPARATHYROIDISM", "OSTEITIS FIBROSA CYSTICA"],
        hint: "Pathophysiological chain in CKD bone disease"
      }
    ]
  },
];

// ============================================================
//  ENDOCRINE SYSTEM — 10 puzzles
// ============================================================
const endocrinePuzzles = [
  {
    id: "en-01",
    groups: [
      {
        title: "Hormones of the Anterior Pituitary",
        color: "yellow",
        words: ["GH", "TSH", "ACTH", "FSH"],
        hint: "Tropic hormones from the anterior pituitary"
      },
      {
        title: "Pancreatic Hormones",
        color: "green",
        words: ["INSULIN", "GLUCAGON", "SOMATOSTATIN", "PANCREATIC POLYPEPTIDE"],
        hint: "Hormones from the islets of Langerhans"
      },
      {
        title: "Thyroid Hormone Synthesis Steps",
        color: "blue",
        words: ["IODIDE UPTAKE", "THYROGLOBULIN SYNTHESIS", "ORGANIFICATION", "COUPLING REACTION"],
        hint: "Sequential steps in thyroid hormone production"
      },
      {
        title: "Cortisol Effects",
        color: "purple",
        words: ["GLUCONEOGENESIS", "ANTI-INFLAMMATORY", "IMMUNOSUPPRESSION", "LIPOLYSIS"],
        hint: "Physiological actions of cortisol"
      }
    ]
  },
  {
    id: "en-02",
    groups: [
      {
        title: "Adrenal Cortex Zones",
        color: "yellow",
        words: ["ZONA GLOMERULOSA", "ZONA FASCICULATA", "ZONA RETICULARIS", "ADRENAL MEDULLA"],
        hint: "Layers of the adrenal gland — one is not cortex"
      },
      {
        title: "Insulin Actions",
        color: "green",
        words: ["GLUCOSE UPTAKE", "GLYCOGENESIS", "LIPOGENESIS", "PROTEIN SYNTHESIS"],
        hint: "Anabolic effects of insulin"
      },
      {
        title: "Hypothalamic Releasing Hormones",
        color: "blue",
        words: ["CRH", "TRH", "GHRH", "GnRH"],
        hint: "Hypothalamic hormones that stimulate pituitary"
      },
      {
        title: "Thyroid Hormone Mechanism",
        color: "purple",
        words: ["NUCLEAR RECEPTOR", "GENE TRANSCRIPTION", "BASAL METABOLIC RATE", "CALORIGENIC EFFECT"],
        hint: "How T3/T4 exert their effects"
      }
    ]
  },
  {
    id: "en-03",
    groups: [
      {
        title: "Calcium-Regulating Hormones",
        color: "yellow",
        words: ["PTH", "CALCITONIN", "VITAMIN D (1,25)", "FGF-23"],
        hint: "Hormones involved in calcium and phosphate homeostasis"
      },
      {
        title: "Insulin Resistance Features",
        color: "green",
        words: ["HYPERGLYCAEMIA", "HYPERINSULINAEMIA", "TYPE 2 DIABETES", "METABOLIC SYNDROME"],
        hint: "Manifestations of impaired insulin action"
      },
      {
        title: "Adrenal Medulla Products",
        color: "blue",
        words: ["ADRENALINE", "NORADRENALINE", "DOPAMINE", "METANEPHRINE"],
        hint: "Catecholamines of the adrenal medulla — one is a metabolite"
      },
      {
        title: "Pituitary Tumour Types",
        color: "purple",
        words: ["PROLACTINOMA", "GH ADENOMA", "ACTH ADENOMA", "NON-FUNCTIONING ADENOMA"],
        hint: "Types of pituitary adenoma"
      }
    ]
  },
  {
    id: "en-04",
    groups: [
      {
        title: "Hormone Classes by Structure",
        color: "yellow",
        words: ["STEROID", "PEPTIDE", "AMINE", "EICOSANOID"],
        hint: "Chemical classifications of hormones"
      },
      {
        title: "Thyroid Pathology",
        color: "green",
        words: ["GRAVES' DISEASE", "HASHIMOTO'S THYROIDITIS", "TOXIC MULTINODULAR GOITRE", "PAPILLARY CARCINOMA"],
        hint: "Common thyroid disorders"
      },
      {
        title: "Sex Hormone Binding",
        color: "blue",
        words: ["SHBG", "ALBUMIN", "FREE FRACTION", "OESTRADIOL"],
        hint: "How sex hormones are transported — one is an actual hormone"
      },
      {
        title: "Cushing Syndrome Sources",
        color: "purple",
        words: ["PITUITARY ACTH EXCESS", "ECTOPIC ACTH", "ADRENAL ADENOMA", "IATROGENIC (STEROIDS)"],
        hint: "Causes of hypercortisolism"
      }
    ]
  },
  {
    id: "en-05",
    groups: [
      {
        title: "Parathyroid Gland Features",
        color: "yellow",
        words: ["CHIEF CELLS", "OXYPHIL CELLS", "SUPERIOR PARATHYROIDS", "INFERIOR PARATHYROIDS"],
        hint: "Anatomy and histology of parathyroid glands"
      },
      {
        title: "Leptin and Ghrelin Actions",
        color: "green",
        words: ["LEPTIN — SATIETY", "GHRELIN — HUNGER", "HYPOTHALAMIC ARCUATE NUCLEUS", "ENERGY HOMEOSTASIS"],
        hint: "Hormones of appetite regulation"
      },
      {
        title: "Type 1 Diabetes Pathophysiology",
        color: "blue",
        words: ["AUTOIMMUNE BETA CELL DESTRUCTION", "INSULIN DEFICIENCY", "KETOACIDOSIS", "HLA ASSOCIATION"],
        hint: "Features specific to T1DM"
      },
      {
        title: "Growth Hormone Axis",
        color: "purple",
        words: ["GHRH", "SOMATOSTATIN", "GH", "IGF-1"],
        hint: "The GH regulatory axis"
      }
    ]
  },
  {
    id: "en-06",
    groups: [
      {
        title: "Steroid Hormone Synthesis Steps",
        color: "yellow",
        words: ["CHOLESTEROL IMPORT", "PREGNENOLONE", "PROGESTERONE", "CORTISOL"],
        hint: "Adrenal steroidogenesis pathway"
      },
      {
        title: "Posterior Pituitary Hormones",
        color: "green",
        words: ["ADH (VASOPRESSIN)", "OXYTOCIN", "SUPRAOPTIC NUCLEUS", "PARAVENTRICULAR NUCLEUS"],
        hint: "Hormones and nuclei of the neurohypophysis"
      },
      {
        title: "Diabetes Insipidus Types",
        color: "blue",
        words: ["CENTRAL DI", "NEPHROGENIC DI", "DESMOPRESSIN TEST", "HYPERNATRAEMIA"],
        hint: "Types and features of DI"
      },
      {
        title: "Hormone Receptor Signalling",
        color: "purple",
        words: ["cAMP PATHWAY", "IP3/DAG PATHWAY", "JAK-STAT PATHWAY", "NUCLEAR RECEPTOR PATHWAY"],
        hint: "Intracellular signalling cascades for hormones"
      }
    ]
  },
  {
    id: "en-07",
    groups: [
      {
        title: "Pineal Gland",
        color: "yellow",
        words: ["MELATONIN", "SEROTONIN", "CIRCADIAN RHYTHM", "PHOTOPERIOD"],
        hint: "Products and functions of the pineal gland"
      },
      {
        title: "MEN Syndromes",
        color: "green",
        words: ["MEN1 — 3 P's", "MEN2A — PHAEOCHROMOCYTOMA", "MEN2B — MARFANOID", "RET MUTATION"],
        hint: "Multiple endocrine neoplasia syndromes"
      },
      {
        title: "Glucose Metabolism Hormones",
        color: "blue",
        words: ["INSULIN", "GLUCAGON", "CORTISOL", "GROWTH HORMONE"],
        hint: "Counter-regulatory and anabolic glucose hormones"
      },
      {
        title: "Addison Disease Features",
        color: "purple",
        words: ["HYPOCORTISOLISM", "HYPERPIGMENTATION", "HYPONATRAEMIA", "HYPERKALAEMIA"],
        hint: "Clinical features of primary adrenal insufficiency"
      }
    ]
  },
  {
    id: "en-08",
    groups: [
      {
        title: "Thyroid Gland Histology",
        color: "yellow",
        words: ["FOLLICULAR CELL", "PARAFOLLICULAR CELL", "COLLOID", "THYROGLOBULIN"],
        hint: "Histological components of the thyroid gland"
      },
      {
        title: "Lipid Metabolism Hormones",
        color: "green",
        words: ["INSULIN (ANTI-LIPOLYTIC)", "GLUCAGON (PRO-LIPOLYTIC)", "ADRENALINE", "ACTH"],
        hint: "Hormones regulating fat metabolism"
      },
      {
        title: "Polycystic Ovary Syndrome Features",
        color: "blue",
        words: ["HYPERANDROGENISM", "OLIGO-OVULATION", "POLYCYSTIC OVARIES", "INSULIN RESISTANCE"],
        hint: "Diagnostic features of PCOS"
      },
      {
        title: "Glucocorticoid Receptor Pathway",
        color: "purple",
        words: ["LIGAND BINDING", "HSP90 DISSOCIATION", "NUCLEAR TRANSLOCATION", "GRE BINDING"],
        hint: "Steps in glucocorticoid receptor activation"
      }
    ]
  },
  {
    id: "en-09",
    groups: [
      {
        title: "Hormones in Puberty",
        color: "yellow",
        words: ["GnRH PULSE", "LH SURGE", "OESTROGEN RISE", "ADRENARCHE"],
        hint: "Hormonal events of puberty"
      },
      {
        title: "Phaeochromocytoma Features",
        color: "green",
        words: ["HYPERTENSION EPISODES", "HEADACHE", "SWEATING", "CATECHOLAMINE EXCESS"],
        hint: "Classic clinical triad + mechanism"
      },
      {
        title: "Aldosterone Regulation",
        color: "blue",
        words: ["ANGIOTENSIN II", "HIGH K+", "ACTH (MINOR)", "ADRENAL ZONA GLOMERULOSA"],
        hint: "Stimuli controlling aldosterone secretion"
      },
      {
        title: "Hormonal Feedback Loops",
        color: "purple",
        words: ["NEGATIVE FEEDBACK", "POSITIVE FEEDBACK", "LONG-LOOP", "SHORT-LOOP"],
        hint: "Types of hormonal feedback — LH surge is an example of positive"
      }
    ]
  },
  {
    id: "en-10",
    groups: [
      {
        title: "Ovarian Hormones",
        color: "yellow",
        words: ["OESTRADIOL", "PROGESTERONE", "INHIBIN", "ACTIVIN"],
        hint: "Hormones produced by the ovary"
      },
      {
        title: "Thyroid Storm Features",
        color: "green",
        words: ["HIGH FEVER", "TACHYCARDIA", "AGITATION", "PRECIPITATING ILLNESS"],
        hint: "Features of thyrotoxic crisis"
      },
      {
        title: "Renin-Angiotensin Components",
        color: "blue",
        words: ["ANGIOTENSINOGEN", "RENIN", "ACE", "ANGIOTENSIN II"],
        hint: "Sequential RAAS components"
      },
      {
        title: "Hormone Half-Life Concepts",
        color: "purple",
        words: ["PEPTIDE — MINUTES", "STEROID — HOURS", "THYROID — DAYS", "PROTEIN BINDING EXTENDS"],
        hint: "Relationship between hormone class and circulating half-life"
      }
    ]
  },
];

// ============================================================
//  COMBO SYSTEM — 10 puzzles (cross-system)
// ============================================================
const comboPuzzles = [
  {
    id: "co-01",
    groups: [
      {
        title: "Things That Open and Close",
        color: "yellow",
        words: ["MITRAL VALVE", "PYLORIC SPHINCTER", "PUPIL", "SODIUM CHANNEL"],
        hint: "Structures that gate/control flow or light"
      },
      {
        title: "Things Named After People (Eponyms)",
        color: "green",
        words: ["BUNDLE OF HIS", "LOOP OF HENLE", "ISLETS OF LANGERHANS", "FALLOPIAN TUBE"],
        hint: "Anatomical structures with eponymous names"
      },
      {
        title: "Associated with 'NODES'",
        color: "blue",
        words: ["SA NODE", "AV NODE", "NODE OF RANVIER", "LYMPH NODE"],
        hint: "Different types of anatomical 'node'"
      },
      {
        title: "Produce Mucus",
        color: "purple",
        words: ["GOBLET CELL", "BRUNNER'S GLAND", "CERVICAL GLAND", "MUCOUS NECK CELL"],
        hint: "Cells and glands secreting mucus across systems"
      }
    ]
  },
  {
    id: "co-02",
    groups: [
      {
        title: "Feedback on the Hypothalamus",
        color: "yellow",
        words: ["CORTISOL", "THYROID HORMONE", "OESTROGEN", "LEPTIN"],
        hint: "Hormones that negatively feed back to the hypothalamus"
      },
      {
        title: "Rich in Mitochondria",
        color: "green",
        words: ["CARDIAC MUSCLE", "PROXIMAL TUBULE", "HEPATOCYTE", "BROWN ADIPOSE"],
        hint: "Cells/tissues especially mitochondria-dense"
      },
      {
        title: "Associated with Calcium",
        color: "blue",
        words: ["TROPONIN", "CALMODULIN", "PARATHYROID HORMONE", "SYNAPTIC VESICLE FUSION"],
        hint: "Molecules and processes dependent on calcium"
      },
      {
        title: "Dual Blood Supply",
        color: "purple",
        words: ["LIVER", "LUNG", "INTESTINE", "SPINAL CORD"],
        hint: "Organs with two separate arterial or mixed supplies"
      }
    ]
  },
  {
    id: "co-03",
    groups: [
      {
        title: "Barriers in the Body",
        color: "yellow",
        words: ["BLOOD-BRAIN BARRIER", "FILTRATION BARRIER", "PLACENTAL BARRIER", "BLOOD-TESTIS BARRIER"],
        hint: "Selective anatomical barriers"
      },
      {
        title: "Contain Smooth Muscle",
        color: "green",
        words: ["ARTERIOLE", "DETRUSOR", "CILIARY BODY", "ARRECTOR PILI"],
        hint: "Structures in different systems containing smooth muscle"
      },
      {
        title: "Release Calcium Intracellularly",
        color: "blue",
        words: ["SARCOPLASMIC RETICULUM", "IP3 RECEPTOR", "RYANODINE RECEPTOR", "ENDOPLASMIC RETICULUM"],
        hint: "Organelles/receptors releasing Ca2+ inside cells"
      },
      {
        title: "Undergo Apoptosis Normally",
        color: "purple",
        words: ["ENDOMETRIAL CELL", "NEUTROPHIL", "OSTEOCLAST", "INTESTINAL EPITHELIUM"],
        hint: "Cells that normally die by programmed cell death"
      }
    ]
  },
  {
    id: "co-04",
    groups: [
      {
        title: "Types of Epithelium",
        color: "yellow",
        words: ["SIMPLE SQUAMOUS", "PSEUDOSTRATIFIED CILIATED", "TRANSITIONAL (UROTHELIUM)", "STRATIFIED SQUAMOUS"],
        hint: "Epithelial classifications found in different organ systems"
      },
      {
        title: "Contains Type II Cells",
        color: "green",
        words: ["ALVEOLUS — SURFACTANT", "PNEUMOCYTE — SAME THING", "KIDNEY TUBULE", "BILE DUCT"],
        hint: "Tricky — Type II appears in multiple contexts"
      },
      {
        title: "Increase When Fasting",
        color: "blue",
        words: ["GLUCAGON", "CORTISOL", "GROWTH HORMONE", "FREE FATTY ACIDS"],
        hint: "What rises in the fasted state?"
      },
      {
        title: "Fenestrated Capillaries Found Here",
        color: "purple",
        words: ["GLOMERULUS", "INTESTINAL VILLI", "ENDOCRINE GLANDS", "CHOROID PLEXUS"],
        hint: "Locations where fenestrated capillaries are present"
      }
    ]
  },
  {
    id: "co-05",
    groups: [
      {
        title: "Produce Steroids",
        color: "yellow",
        words: ["ADRENAL CORTEX", "LEYDIG CELL", "CORPUS LUTEUM", "PLACENTA"],
        hint: "Cells and organs producing steroid hormones"
      },
      {
        title: "Controlled by Negative Pressure",
        color: "green",
        words: ["LUNG INFLATION", "VENOUS RETURN", "CSF FLOW", "LYMPH FLOW"],
        hint: "Physiological processes driven by sub-atmospheric pressure"
      },
      {
        title: "Innervated by CN X (Vagus)",
        color: "blue",
        words: ["HEART (RATE)", "STOMACH", "LARYNX", "COLON (PROXIMAL)"],
        hint: "Organs receiving vagal innervation"
      },
      {
        title: "Secrete Bicarbonate",
        color: "purple",
        words: ["PANCREATIC DUCTAL CELL", "RENAL PROXIMAL TUBULE", "BRUNNER'S GLAND", "SALIVARY GLAND"],
        hint: "Cells that actively secrete HCO3-"
      }
    ]
  },
  {
    id: "co-06",
    groups: [
      {
        title: "Regulate Potassium",
        color: "yellow",
        words: ["ALDOSTERONE", "INSULIN", "ACIDOSIS", "PRINCIPAL CELL (CCD)"],
        hint: "Hormones, conditions, and cells regulating K+"
      },
      {
        title: "Drain into the Right Atrium",
        color: "green",
        words: ["SUPERIOR VENA CAVA", "INFERIOR VENA CAVA", "CORONARY SINUS", "THEBESIAN VEIN"],
        hint: "Vessels emptying directly into the right atrium"
      },
      {
        title: "Cross the Inguinal Ligament",
        color: "blue",
        words: ["FEMORAL ARTERY", "FEMORAL VEIN", "FEMORAL NERVE", "PSOAS TENDON"],
        hint: "Structures passing beneath the inguinal ligament — one doesn't"
      },
      {
        title: "Associated with Zinc",
        color: "purple",
        words: ["INSULIN STORAGE", "CARBONIC ANHYDRASE", "SUPEROXIDE DISMUTASE", "TASTE RECEPTOR"],
        hint: "Biological processes and molecules requiring zinc"
      }
    ]
  },
  {
    id: "co-07",
    groups: [
      {
        title: "Embryological Germ Layer: Mesoderm",
        color: "yellow",
        words: ["SKELETAL MUSCLE", "KIDNEY", "CARDIOVASCULAR SYSTEM", "ADRENAL CORTEX"],
        hint: "Structures derived from mesoderm"
      },
      {
        title: "Embryological Germ Layer: Endoderm",
        color: "green",
        words: ["GI LINING", "LIVER", "THYROID", "RESPIRATORY EPITHELIUM"],
        hint: "Structures derived from endoderm"
      },
      {
        title: "Embryological Germ Layer: Ectoderm",
        color: "blue",
        words: ["SKIN EPIDERMIS", "NERVOUS SYSTEM", "ADRENAL MEDULLA", "LENS OF EYE"],
        hint: "Structures derived from ectoderm"
      },
      {
        title: "Neural Crest Derivatives",
        color: "purple",
        words: ["PERIPHERAL NEURONS", "MELANOCYTES", "SCHWANN CELLS", "ADRENAL CHROMAFFIN"],
        hint: "Structures derived from neural crest cells (a 4th category)"
      }
    ]
  },
  {
    id: "co-08",
    groups: [
      {
        title: "Fight-or-Flight Responses",
        color: "yellow",
        words: ["PUPIL DILATION", "TACHYCARDIA", "GLUCONEOGENESIS", "SWEATING"],
        hint: "Sympathetic nervous system responses"
      },
      {
        title: "Rest-and-Digest Responses",
        color: "green",
        words: ["BRADYCARDIA", "INCREASED GI MOTILITY", "LACRIMATION", "PUPIL CONSTRICTION"],
        hint: "Parasympathetic nervous system responses"
      },
      {
        title: "Second Messengers",
        color: "blue",
        words: ["cAMP", "cGMP", "IP3", "DIACYLGLYCEROL (DAG)"],
        hint: "Intracellular second messenger molecules"
      },
      {
        title: "Cross-System Red Herrings: 'Guard' the Airway",
        color: "purple",
        words: ["EPIGLOTTIS", "ARYTENOIDS", "CARINA", "ADENOIDS"],
        hint: "Upper and lower airway protective structures"
      }
    ]
  },
  {
    id: "co-09",
    groups: [
      {
        title: "Oxygen-Binding Proteins",
        color: "yellow",
        words: ["HAEMOGLOBIN", "MYOGLOBIN", "NEUROGLOBIN", "CYTOCHROME C OXIDASE"],
        hint: "Proteins that bind oxygen — last is a red herring"
      },
      {
        title: "Phospholipid Bilayer Components",
        color: "green",
        words: ["PHOSPHATIDYLCHOLINE", "CHOLESTEROL", "GLYCOLIPID", "INTEGRAL PROTEIN"],
        hint: "Constituents of the cell membrane"
      },
      {
        title: "Cause Oedema",
        color: "blue",
        words: ["HEART FAILURE", "HYPOALBUMINAEMIA", "VENOUS OBSTRUCTION", "LYMPHATIC BLOCKAGE"],
        hint: "Mechanisms that lead to tissue oedema"
      },
      {
        title: "Endocrine + Exocrine (Both)",
        color: "purple",
        words: ["PANCREAS", "LIVER", "TESTIS", "OVARY"],
        hint: "Organs with dual exocrine and endocrine functions"
      }
    ]
  },
  {
    id: "co-10",
    groups: [
      {
        title: "Key Anatomical Planes",
        color: "yellow",
        words: ["SAGITTAL", "CORONAL", "TRANSVERSE (AXIAL)", "OBLIQUE"],
        hint: "Body section planes — oblique is a red herring"
      },
      {
        title: "Found in the Mediastinum",
        color: "green",
        words: ["TRACHEA", "OESOPHAGUS", "THYMUS", "THORACIC DUCT"],
        hint: "Structures located in the mediastinum"
      },
      {
        title: "Mucosa-Associated Lymphoid Tissue",
        color: "blue",
        words: ["TONSILS (WALDEYER'S RING)", "PEYER'S PATCHES", "BRONCHUS-ASSOCIATED (BALT)", "SPLEEN"],
        hint: "MALT sites — spleen is a red herring"
      },
      {
        title: "Undergo Hypertrophy (Not Hyperplasia)",
        color: "purple",
        words: ["CARDIAC MUSCLE", "SKELETAL MUSCLE", "NEURON", "ADIPOCYTE"],
        hint: "Cells that grow by increasing size, not number"
      }
    ]
  },
];

// ============================================================
//  MASTER DATA OBJECT
// ============================================================
const PUZZLE_DATA = {
  cardiovascular:  cardiovascularPuzzles,
  musculoskeletal: musculoskeletalPuzzles,
  nervous:         nervousPuzzles,
  digestive:       digestivePuzzles,
  urogenital:      urogenitalPuzzles,
  endocrine:       endocrinePuzzles,
  combo:           comboPuzzles,
};
