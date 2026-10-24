export interface Service {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  icon: string;
  image: string;
  description: string;
  descriptionAr: string;
  details: string[];
  detailsAr: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'infrastructure-solutions',
    title: 'Infrastructure Solutions',
    titleAr: 'حلول البنية التحتية',
    icon: 'network',
    image: '/images/services/infrastructure.jpg',
    description: 'Water & sewage networks, storm drainage, and fire protection systems engineered to the highest safety standards.',
    descriptionAr: 'شبكات المياه والصرف الصحي، تصريف مياه الأمطار، وأنظمة الحماية من الحرائق مصممة وفقًا لأعلى معايير السلامة.',
    details: [
      'Water distribution networks',
      'Sewage collection systems',
      'Storm drainage infrastructure',
      'Fire protection systems',
      'Utility coordination and planning'
    ],
    detailsAr: [
      'شبكات توزيع المياه',
      'أنظمة تجميع الصرف الصحي',
      'البنية التحتية لتصريف مياه الأمطار',
      'أنظمة الحماية من الحرائق',
      'تنسيق وتخطيط المرافق'
    ]
  },
  {
    id: '2',
    slug: 'mep-works',
    title: 'MEP Works',
    titleAr: 'أعمال الميكانيكا والكهرباء والسباكة',
    icon: 'zap',
    image: '/images/services/mep.jpg',
    description: 'Integrated Mechanical, Electrical & Plumbing systems delivered with technical precision and quality execution.',
    descriptionAr: 'أنظمة الميكانيكا والكهرباء والسباكة المتكاملة المنفذة بدقة فنية وجودة عالية.',
    details: [
      'HVAC systems design and installation',
      'Electrical power distribution',
      'Lighting systems',
      'Plumbing and sanitary works',
      'Fire alarm and detection systems',
      'Building automation systems'
    ],
    detailsAr: [
      'تصميم وتركيب أنظمة التدفئة والتهوية وتكييف الهواء',
      'توزيع الطاقة الكهربائية',
      'أنظمة الإضاءة',
      'أعمال السباكة والصرف الصحي',
      'أنظمة الإنذار والكشف عن الحرائق',
      'أنظمة أتمتة المباني'
    ]
  },
  {
    id: '3',
    slug: 'lighting-design',
    title: 'Lighting Design',
    titleAr: 'تصميم الإضاءة',
    icon: 'lightbulb',
    image: '/images/services/lighting.jpg',
    description: 'Strategic illumination planning that enhances ambiance, supports productivity, and reduces energy consumption.',
    descriptionAr: 'تخطيط إضاءة استراتيجي يعزز الأجواء، ويدعم الإنتاجية، ويقلل من استهلاك الطاقة.',
    details: [
      'Architectural lighting design',
      'Energy-efficient LED solutions',
      'Outdoor and landscape lighting',
      'Emergency and safety lighting',
      'Smart lighting controls',
      'Daylighting integration'
    ],
    detailsAr: [
      'تصميم الإضاءة المعمارية',
      'حلول LED الموفرة للطاقة',
      'إضاءة خارجية وللمناظر الطبيعية',
      'إضاءة الطوارئ والسلامة',
      'أنظمة التحكم الذكية في الإضاءة',
      'دمج الإضاءة الطبيعية'
    ]
  },
  {
    id: '4',
    slug: 'building-sustainability',
    title: 'Building Sustainability & Repair',
    titleAr: 'الاستدامة وإصلاح المباني',
    icon: 'recycle',
    image: '/images/services/sustainability.jpg',
    description: 'Maintenance & rehabilitation using advanced techniques to restore efficiency and preserve asset value.',
    descriptionAr: 'الصيانة والتأهيل باستخدام تقنيات متقدمة لاستعادة الكفاءة والحفاظ على قيمة الأصول.',
    details: [
      'Building condition assessment',
      'Structural repair and strengthening',
      'Façade restoration',
      'Waterproofing solutions',
      'Energy retrofit and upgrades',
      'Preventive maintenance programs'
    ],
    detailsAr: [
      'تقييم حالة المباني',
      'الإصلاح والتعزيز الإنشائي',
      'ترميم الواجهات',
      'حلول العزل المائي',
      'تحديث وتحسين كفاءة الطاقة',
      'برامج الصيانة الوقائية'
    ]
  },
  {
    id: '5',
    slug: 'finishing-services',
    title: 'Finishing Services',
    titleAr: 'خدمات التشطيبات',
    icon: 'paintbrush',
    image: '/images/services/finishing.jpg',
    description: 'Professional painting, flooring, and surface treatment that complete your project with precision.',
    descriptionAr: 'خدمات دهان وأرضيات ومعالجة الأسطح الاحترافية التي تكمل مشروعك بدقة.',
    details: [
      'Interior and exterior painting',
      'Flooring installation (tile, marble, wood)',
      'Ceiling systems and finishes',
      'Wall cladding and paneling',
      'Decorative finishes',
      'Quality control and inspection'
    ],
    detailsAr: [
      'الدهان الداخلي والخارجي',
      'تركيب الأرضيات (سيراميك، رخام، خشب)',
      'أنظمة الأسقف والتشطيبات',
      'كسوة وألواح الجدران',
      'التشطيبات الديكورية',
      'مراقبة الجودة والتفتيش'
    ]
  },
  {
    id: '6',
    slug: 'low-current-smart-systems',
    title: 'Low Current & Smart Systems',
    titleAr: 'أنظمة التيار الخفيف والمباني الذكية',
    icon: 'cctv',
    image: '/images/services/low-current.jpg',
    description: 'Turnkey low-current engineering, IP CCTV security surveillance, enterprise routing & Wi-Fi networks, and complete smart home & building automation solutions.',
    descriptionAr: 'حلول هندسية متكاملة لأنظمة التيار الخفيف، كاميرات المراقبة الأمنية (IP CCTV)، الشبكات والراوترات المؤسسية، وأنظمة المنازل الذكية وأتمتة المباني الحديثة.',
    details: [
      'High-Definition IP CCTV & Security Surveillance Systems',
      'Enterprise Routers, Switches & Structured Cabling (Fiber/Data)',
      'Smart Home Automation (Lighting, Climate, Shading & Sound)',
      'Biometric Access Control & Video Intercom Systems',
      'Building Management Systems (BMS) & IoT Controls',
      'Fire Alarm, Public Address & Audio-Visual Systems'
    ],
    detailsAr: [
      'أنظمة كاميرات المراقبة الأمنية المتقدمة (IP CCTV) وغرف المراقبة',
      'الراوترات والموزعات المؤسسية والشبكات المنظمة (ألياف ونحاس)',
      'أنظمة المنازل الذكية الشاملة (تحكم بالإضاءة، التكييف، والستائر والصوتيات)',
      'أنظمة التحكم بالدخول بالبصمة والإنتركم المرئي المتطور',
      'أنظمة إدارة المباني الذكية (BMS) وتقنيات إنترنت الأشياء',
      'أنظمة إنذار الحريق، الإذاعة الداخلية والأنظمة الصوتية والمرئية'
    ]
  }
];

export interface Client {
  id: string;
  name: string;
  nameAr: string;
  logo: string;
}

export const clients: Client[] = [
  { id: '1', name: 'Saudi Aramco', nameAr: 'أرامكو السعودية', logo: '/images/clients/saudi aramco.png' },
  { id: '2', name: 'MODON', nameAr: 'مدن', logo: '/images/clients/modon.png' },
  { id: '3', name: 'Rua Al Madinah Holding', nameAr: 'رؤى المدينة القابضة', logo: '/images/clients/rua al madinah holding.png' },
  { id: '4', name: 'Al-Kifah Contracting', nameAr: 'الكفاح للمقاولات', logo: '/images/clients/alkifah contracting.png' },
  { id: '5', name: 'Wood Al Hejailan', nameAr: 'وود الهجيلان', logo: '/images/clients/wood al hejailan.png' },
  { id: '6', name: 'BPCC', nameAr: 'شركة مجمع الأعمال (BPCC)', logo: '/images/clients/bpcc.png' },
];

export interface ProcessStep {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Initial Consultation',
    titleAr: 'الاستشارة الأولية',
    description: 'Discovery session to understand requirements, budget, and timeline, with site assessment.',
    descriptionAr: 'جلسة استكشافية لفهم المتطلبات والميزانية والجدول الزمني، مع تقييم الموقع.'
  },
  {
    id: 2,
    title: 'Design Process',
    titleAr: 'عملية التصميم',
    description: 'Comprehensive design concepts including space planning, materials, and 3D visualization.',
    descriptionAr: 'مفاهيم تصميم شاملة تشمل تخطيط المساحة والمواد والتصور ثلاثي الأبعاد.'
  },
  {
    id: 3,
    title: 'Proposal & Agreement',
    titleAr: 'العرض والاتفاق',
    description: 'Detailed proposal outlining scope, specs and timeline — formalized through comprehensive contracts.',
    descriptionAr: 'عرض مفصل يحدد النطاق والمواصفات والجدول الزمني - يتم إضفاء الطابع الرسمي من خلال عقود شاملة.'
  },
  {
    id: 4,
    title: 'Execution Phase',
    titleAr: 'مرحلة التنفيذ',
    description: 'A dedicated project manager coordinates activities, ensuring quality control and clear communication.',
    descriptionAr: 'مدير مشروع مخصص ينسق الأنشطة، ويضمن مراقبة الجودة والتواصل الواضح.'
  },
  {
    id: 5,
    title: 'Final Inspection',
    titleAr: 'الفحص النهائي',
    description: 'Comprehensive walkthrough and QA review to ensure full satisfaction before handover.',
    descriptionAr: 'جولة شاملة ومراجعة ضمان الجودة لضمان الرضا الكامل قبل التسليم.'
  }
];
