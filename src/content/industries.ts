import { L, LL, type Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "healthcare",
    icon: "HeartPulse",
    title: L("Healthcare", "الرعاية الصحية"),
    shortTitle: L("Healthcare", "الرعاية الصحية"),
    tagline: L("Clinical and operational software that respects care workflows.", "برمجيات سريرية وتشغيلية تحترم مسارات الرعاية."),
    description: L(
      "Applications, integrations, and mobile products for healthcare operations — from internal systems to patient-facing apps — with security and API work that this sector requires.",
      "تطبيقات وتكاملات ومنتجات جوال لعمليات الرعاية الصحية — من الأنظمة الداخلية إلى تطبيقات المرضى — مع الأمن وعمل الواجهات الذي يتطلبه هذا القطاع.",
    ),
    challenges: LL(
      [
        "Fragmented records and department tools",
        "Mobile and on-demand care that still has to be auditable",
        "Integrations with existing hospital or clinic systems",
      ],
      [
        "سجلات مجزأة وأدوات أقسام منفصلة",
        "رعاية جوالة وعند الطلب ما زالت قابلة للتدقيق",
        "تكاملات مع أنظمة مستشفى أو عيادة قائمة",
      ],
    ),
    capabilities: LL(
      ["Healthcare applications", "On-demand and healthcare mobile apps", "Healthcare APIs", "QA and security for care systems"],
      ["تطبيقات الرعاية الصحية", "تطبيقات جوال عند الطلب والرعاية الصحية", "واجهات الرعاية الصحية", "ضمان جودة وأمن لأنظمة الرعاية"],
    ),
    relatedServices: ["custom-software-development", "mobile-app-development", "api-development", "cybersecurity"],
  },
  {
    slug: "fintech-banking",
    icon: "Landmark",
    title: L("FinTech & Banking", "التقنية المالية والبنوك"),
    shortTitle: L("FinTech", "التقنية المالية"),
    tagline: L("Payments, banking APIs, and financial applications with control.", "مدفوعات وواجهات بنكية وتطبيقات مالية مع تحكم."),
    description: L(
      "FinTech and banking software: financial applications, payment gateway integration, banking APIs, and the security and QA those products need.",
      "برمجيات التقنية المالية والبنوك: تطبيقات مالية وتكامل بوابات الدفع وواجهات بنكية والأمن وضمان الجودة التي تحتاجها.",
    ),
    challenges: LL(
      ["Core systems that are hard to extend", "Payments that fail without a clear trail", "Security and testing treated as optional"],
      ["أنظمة أساسية صعبة التوسيع", "مدفوعات تفشل دون أثر واضح", "أمن واختبار يُعاملان كخيار"],
    ),
    capabilities: LL(
      ["FinTech applications", "Payment gateway integration", "Banking APIs", "Application and API security"],
      ["تطبيقات التقنية المالية", "تكامل بوابات الدفع", "واجهات البنوك", "أمن التطبيقات والواجهات"],
    ),
    relatedServices: ["custom-software-development", "api-development", "cybersecurity", "mobile-app-development"],
  },
  {
    slug: "education",
    icon: "GraduationCap",
    title: L("Education & E-Learning", "التعليم والتعلم الإلكتروني"),
    shortTitle: L("Education", "التعليم"),
    tagline: L("Portals, products, and platforms for learning organizations.", "بوابات ومنتجات ومنصات للمؤسسات التعليمية."),
    description: L(
      "Web portals, custom software, and mobile experiences for education and e-learning — built so staff and learners can actually complete the task.",
      "بوابات ويب وبرمجيات مخصصة وتجارب جوال للتعليم والتعلم الإلكتروني — تُبنى حتى يتمكن الموظفون والمتعلمون من إكمال المهمة.",
    ),
    challenges: LL(
      ["Content and users spread across disconnected tools", "Portals that are hard for staff and learners", "Reporting that cannot be trusted"],
      ["محتوى ومستخدمون موزعون على أدوات منفصلة", "بوابات صعبة على الموظفين والمتعلمين", "تقارير لا يمكن الوثوق بها"],
    ),
    capabilities: LL(
      ["Education industry solutions", "Web portals", "Custom learning-adjacent software", "UI/UX for complex workflows"],
      ["حلول قطاع التعليم", "بوابات ويب", "برمجيات مخصصة محيطة بالتعلم", "تصميم واجهات لتدفقات معقدة"],
    ),
    relatedServices: ["web-development", "custom-software-development", "ui-ux-design", "mobile-app-development"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: L("Real Estate", "العقارات"),
    shortTitle: L("Real Estate", "العقارات"),
    tagline: L("Listings, operations, and customer portals for property businesses.", "عروض وعمليات وبوابات عملاء لأعمال العقارات."),
    description: L(
      "Web and software products for real estate operations — corporate sites, portals, and internal applications that keep inventory, clients, and staff in one picture.",
      "منتجات ويب وبرمجيات لعمليات العقارات — مواقع مؤسسية وبوابات وتطبيقات داخلية تبقي المخزون والعملاء والموظفين في صورة واحدة.",
    ),
    challenges: LL(
      ["Inventory and leads in separate tools", "Public sites that cannot connect to operations", "Field teams without a reliable mobile path"],
      ["مخزون وعملاء محتملون في أدوات منفصلة", "مواقع عامة لا تتصل بالعمليات", "فرق ميدانية دون مسار جوال موثوق"],
    ),
    capabilities: LL(
      ["Real estate industry solutions", "Corporate websites and portals", "Internal business applications"],
      ["حلول قطاع العقارات", "مواقع وبوابات مؤسسية", "تطبيقات أعمال داخلية"],
    ),
    relatedServices: ["web-development", "custom-software-development", "mobile-app-development"],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: L("Retail & E-commerce", "التجزئة والتجارة الإلكترونية"),
    shortTitle: L("Retail", "التجزئة"),
    tagline: L("Storefronts, marketplaces, and the systems behind the cart.", "واجهات متاجر وأسواق والأنظمة خلف السلة."),
    description: L(
      "E-commerce development, marketplace platforms, and retail operations software — from storefront to inventory and payments.",
      "تطوير التجارة الإلكترونية ومنصات الأسواق وبرمجيات عمليات التجزئة — من واجهة المتجر إلى المخزون والمدفوعات.",
    ),
    challenges: LL(
      ["Storefronts disconnected from inventory", "Marketplaces that need more than a theme", "Payments and fulfilment without a shared API"],
      ["واجهات متاجر منفصلة عن المخزون", "أسواق تحتاج أكثر من قالب", "مدفوعات وتلبية بلا واجهة مشتركة"],
    ),
    capabilities: LL(
      ["E-commerce development", "Marketplace platforms", "Payment gateway integration", "Inventory-related applications"],
      ["تطوير التجارة الإلكترونية", "منصات الأسواق", "تكامل بوابات الدفع", "تطبيقات مرتبطة بالمخزون"],
    ),
    relatedServices: ["web-development", "custom-software-development", "api-development", "mobile-app-development"],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: L("Manufacturing", "التصنيع"),
    shortTitle: L("Manufacturing", "التصنيع"),
    tagline: L("Industrial software, IoT, and internal systems on the plant floor.", "برمجيات صناعية وإنترنت أشياء وأنظمة داخلية في أرض المصنع."),
    description: L(
      "Software and IoT for manufacturing operations — internal applications, industrial IoT, and integrations that connect the floor to the office.",
      "برمجيات وإنترنت أشياء لعمليات التصنيع — تطبيقات داخلية وإنترنت أشياء صناعي وتكاملات تربط الأرض بالمكتب.",
    ),
    challenges: LL(
      ["Machines and sensors that do not reach the business system", "Paper or spreadsheet production tracking", "Legacy software that cannot take new lines"],
      ["آلات ومستشعرات لا تصل إلى نظام الأعمال", "تتبع إنتاج ورقي أو جداول", "برمجيات قديمة لا تحتمل خطوطاً جديدة"],
    ),
    capabilities: LL(
      ["Industrial IoT", "Internal business applications", "Legacy modernization", "Data pipelines for operations"],
      ["إنترنت الأشياء الصناعي", "تطبيقات أعمال داخلية", "تحديث الأنظمة القديمة", "مسارات بيانات للعمليات"],
    ),
    relatedServices: ["iot-embedded-systems", "custom-software-development", "data-engineering-analytics", "it-consulting"],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: L("Logistics & Supply Chain", "اللوجستيات وسلسلة الإمداد"),
    shortTitle: L("Logistics", "اللوجستيات"),
    tagline: L("Tracking, mobile ops, and systems that move with the shipment.", "تتبع وعمليات جوالة وأنظمة تتحرك مع الشحنة."),
    description: L(
      "Logistics and supply-chain software: GPS and sensor integration, logistics mobile apps, and operational platforms for movement and visibility.",
      "برمجيات اللوجستيات وسلسلة الإمداد: تكامل GPS والمستشعرات وتطبيقات لوجستية جوالة ومنصات تشغيل للحركة والرؤية.",
    ),
    challenges: LL(
      ["Shipments you cannot see in real time", "Drivers and warehouses on different tools", "Customers asking for status you cannot give"],
      ["شحنات لا تُرى في الوقت الفعلي", "سائقون ومستودعات على أدوات مختلفة", "عملاء يطلبون حالة لا يمكنكم تقديمها"],
    ),
    capabilities: LL(
      ["GPS tracking and sensor integration", "FinTech and logistics mobile apps", "Operational dashboards", "API integrations"],
      ["تتبع GPS وتكامل المستشعرات", "تطبيقات جوال للتقنية المالية واللوجستيات", "لوحات تشغيل", "تكاملات واجهات"],
    ),
    relatedServices: ["iot-embedded-systems", "mobile-app-development", "custom-software-development", "data-engineering-analytics"],
  },
  {
    slug: "travel-hospitality",
    icon: "Hotel",
    title: L("Travel & Hospitality", "السفر والضيافة"),
    shortTitle: L("Hospitality", "الضيافة"),
    tagline: L("Booking, guest, and operations products for hospitality brands.", "منتجات حجز وضيوف وعمليات لعلامات الضيافة."),
    description: L(
      "Booking platforms, customer portals, and operational software for travel and hospitality — guest-facing and staff-facing.",
      "منصات حجز وبوابات عملاء وبرمجيات تشغيل للسفر والضيافة — للضيف وللموظف.",
    ),
    challenges: LL(
      ["Booking disconnected from operations", "Guest apps that do not match the front desk", "Seasonal load that the site cannot take"],
      ["حجز منفصل عن العمليات", "تطبيقات ضيوف لا تطابق الاستقبال", "حمل موسمي لا يحتمله الموقع"],
    ),
    capabilities: LL(
      ["Marketplace and booking platforms", "Customer portals", "High-performance websites", "Mobile apps"],
      ["منصات الأسواق والحجز", "بوابات العملاء", "مواقع عالية الأداء", "تطبيقات جوال"],
    ),
    relatedServices: ["web-development", "custom-software-development", "mobile-app-development", "ui-ux-design"],
  },
  {
    slug: "construction",
    icon: "HardHat",
    title: L("Construction", "البناء"),
    shortTitle: L("Construction", "البناء"),
    tagline: L("Project, site, and office software for construction firms.", "برمجيات مشاريع ومواقع ومكاتب لشركات البناء."),
    description: L(
      "Internal applications, mobile tools, and integrations for construction — so site and office are not running two different businesses.",
      "تطبيقات داخلية وأدوات جوال وتكاملات للبناء — حتى لا يدير الموقع والمكتب عملين مختلفين.",
    ),
    challenges: LL(
      ["Site data that never reaches the office", "Projects tracked in files nobody trusts", "Vendors and crews without a shared system"],
      ["بيانات موقع لا تصل إلى المكتب", "مشاريع تُتتبع في ملفات لا يثق بها أحد", "موردون وطواقم بلا نظام مشترك"],
    ),
    capabilities: LL(
      ["Internal business applications", "Mobile apps for field work", "IoT and tracking where sites need it"],
      ["تطبيقات أعمال داخلية", "تطبيقات جوال للعمل الميداني", "إنترنت أشياء وتتبع حيث تحتاجه المواقع"],
    ),
    relatedServices: ["custom-software-development", "mobile-app-development", "iot-embedded-systems"],
  },
  {
    slug: "government",
    icon: "Landmark",
    title: L("Government", "الحكومة"),
    shortTitle: L("Government", "الحكومة"),
    tagline: L("Portals, APIs, and systems built for public-sector constraints.", "بوابات وواجهات وأنظمة تُبنى لقيود القطاع العام."),
    description: L(
      "Government digital services: portals, government APIs, secure applications, and consulting for modernization — without claiming contracts we do not list.",
      "خدمات رقمية حكومية: بوابات وواجهات حكومية وتطبيقات آمنة واستشارات للتحديث — دون ادعاء عقود غير مدرجة.",
    ),
    challenges: LL(
      ["Legacy systems that still run the service", "Public portals that fail accessibility and load", "APIs that partners cannot rely on"],
      ["أنظمة قديمة ما زالت تشغّل الخدمة", "بوابات عامة تفشل في الوصول والحمل", "واجهات لا يستطيع الشركاء الاعتماد عليها"],
    ),
    capabilities: LL(
      ["Government APIs", "Web portals", "Cybersecurity and QA", "Legacy modernization and IT roadmaps"],
      ["واجهات حكومية", "بوابات ويب", "أمن سيبراني وضمان جودة", "تحديث الأنظمة القديمة وخرائط تقنية"],
    ),
    relatedServices: ["web-development", "api-development", "cybersecurity", "it-consulting"],
  },
  {
    slug: "telecommunications",
    icon: "Radio",
    title: L("Telecommunications", "الاتصالات"),
    shortTitle: L("Telecom", "الاتصالات"),
    tagline: L("Customer, operations, and platform software for telecom.", "برمجيات عملاء وعمليات ومنصات للاتصالات."),
    description: L(
      "Software, APIs, cloud, and dedicated teams for telecommunications products and internal platforms.",
      "برمجيات وواجهات وسحابة وفرق مخصصة لمنتجات الاتصالات والمنصات الداخلية.",
    ),
    challenges: LL(
      ["Customer systems that lag the network business", "Integrations across billing, care, and digital channels", "Scale and reliability under continuous load"],
      ["أنظمة عملاء تتأخر عن عمل الشبكة", "تكاملات عبر الفوترة والرعاية والقنوات الرقمية", "توسع وموثوقية تحت حمل مستمر"],
    ),
    capabilities: LL(
      ["Custom and enterprise software", "API integrations", "Cloud and DevOps", "Dedicated development teams"],
      ["برمجيات مخصصة ومؤسسية", "تكاملات واجهات", "سحابة وDevOps", "فرق تطوير مخصصة"],
    ),
    relatedServices: ["custom-software-development", "api-development", "cloud-devops", "dedicated-development-teams"],
  },
  {
    slug: "energy",
    icon: "Zap",
    title: L("Energy", "الطاقة"),
    shortTitle: L("Energy", "الطاقة"),
    tagline: L("Operations software, IoT, and data for energy businesses.", "برمجيات تشغيل وإنترنت أشياء وبيانات لأعمال الطاقة."),
    description: L(
      "Energy-sector systems: operational software, sensor and IoT integration, and analytics that support how energy businesses run.",
      "أنظمة قطاع الطاقة: برمجيات تشغيل وتكامل مستشعرات وإنترنت أشياء وتحليلات تدعم تشغيل أعمال الطاقة.",
    ),
    challenges: LL(
      ["Assets and sensors off the core system", "Reporting that arrives too late", "Field work without a reliable mobile or IoT path"],
      ["أصول ومستشعرات خارج النظام الأساسي", "تقارير تصل متأخرة", "عمل ميداني دون مسار جوال أو إنترنت أشياء موثوق"],
    ),
    capabilities: LL(
      ["IoT and sensor integration", "Internal applications", "Data engineering and dashboards"],
      ["تكامل إنترنت الأشياء والمستشعرات", "تطبيقات داخلية", "هندسة بيانات ولوحات"],
    ),
    relatedServices: ["iot-embedded-systems", "custom-software-development", "data-engineering-analytics"],
  },
  {
    slug: "automotive",
    icon: "Car",
    title: L("Automotive", "السيارات"),
    shortTitle: L("Automotive", "السيارات"),
    tagline: L("Dealer, operations, and digital products for automotive.", "منتجات وكلاء وعمليات ورقمية للسيارات."),
    description: L(
      "Software for automotive businesses — customer platforms, internal operations, and integrations across retail and service.",
      "برمجيات لأعمال السيارات — منصات عملاء وعمليات داخلية وتكاملات عبر البيع والخدمة.",
    ),
    challenges: LL(
      ["Showroom, service, and digital channels out of sync", "Customer apps that do not match dealer operations", "Data that never becomes a dashboard"],
      ["صالة عرض وخدمة وقنوات رقمية غير متزامنة", "تطبيقات عملاء لا تطابق عمليات الوكيل", "بيانات لا تصبح لوحة أبداً"],
    ),
    capabilities: LL(
      ["Custom software and portals", "Mobile apps", "API integrations"],
      ["برمجيات وبوابات مخصصة", "تطبيقات جوال", "تكاملات واجهات"],
    ),
    relatedServices: ["custom-software-development", "web-development", "mobile-app-development", "api-development"],
  },
  {
    slug: "insurance",
    icon: "ShieldCheck",
    title: L("Insurance", "التأمين"),
    shortTitle: L("Insurance", "التأمين"),
    tagline: L("Policy, claims-adjacent, and secure customer systems.", "أنظمة وثائق ومطالبات وعملاء آمنة."),
    description: L(
      "Insurance software with an emphasis on secure applications, APIs, QA, and customer or broker portals.",
      "برمجيات تأمين مع التركيز على تطبيقات آمنة وواجهات وضمان جودة وبوابات عملاء أو وسطاء.",
    ),
    challenges: LL(
      ["Policy and customer data split across tools", "Portals that cannot complete a real request", "Security and testing lagging product change"],
      ["بيانات وثائق وعملاء موزعة على أدوات", "بوابات لا تكمل طلباً حقيقياً", "أمن واختبار يتأخران عن تغيّر المنتج"],
    ),
    capabilities: LL(
      ["Enterprise and industry applications", "Customer portals", "Cybersecurity and QA"],
      ["تطبيقات مؤسسات وقطاعات", "بوابات عملاء", "أمن سيبراني وضمان جودة"],
    ),
    relatedServices: ["custom-software-development", "web-development", "cybersecurity", "quality-assurance"],
  },
  {
    slug: "ai-saas",
    icon: "Sparkles",
    title: L("AI & SaaS", "الذكاء الاصطناعي و SaaS"),
    shortTitle: L("AI & SaaS", "AI و SaaS"),
    tagline: L("Product companies that need AI inside a multi-tenant SaaS.", "شركات منتجات تحتاج ذكاء اصطناعياً داخل SaaS متعدد المستأجرين."),
    description: L(
      "SaaS product development and AI integration for product companies — agents, automation, and the cloud path to run them.",
      "تطوير منتجات SaaS وتكامل ذكاء اصطناعي لشركات المنتجات — وكلاء وأتمتة ومسار سحابي لتشغيلها.",
    ),
    challenges: LL(
      ["A SaaS core that cannot host AI features safely", "Agents that never reach the tenant’s data model", "Cloud cost and tenancy after the first customers"],
      ["نواة SaaS لا تحتمل ميزات ذكاء اصطناعي بأمان", "وكلاء لا يصلون إلى نموذج بيانات المستأجر", "تكلفة سحابة وتعدد مستأجرين بعد أوائل العملاء"],
    ),
    capabilities: LL(
      ["SaaS product development", "AI agents and LLM integration", "Cloud and DevOps", "Design systems"],
      ["تطوير منتجات SaaS", "وكلاء ذكاء اصطناعي وتكامل نماذج لغة", "سحابة وDevOps", "أنظمة تصميم"],
    ),
    relatedServices: ["custom-software-development", "ai-intelligent-automation", "cloud-devops", "ui-ux-design"],
  },
  {
    slug: "b2b-software",
    icon: "Briefcase",
    title: L("B2B Software", "برمجيات الأعمال"),
    shortTitle: L("B2B Software", "برمجيات B2B"),
    tagline: L("Internal and commercial B2B products — CRM, ERP, and portals.", "منتجات B2B داخلية وتجارية — CRM وERP وبوابات."),
    description: L(
      "B2B software: CRM and ERP, internal business applications, admin dashboards, and dedicated teams that stay on the product.",
      "برمجيات B2B: CRM وERP وتطبيقات أعمال داخلية ولوحات إدارة وفرق مخصصة تبقى على المنتج.",
    ),
    challenges: LL(
      ["Spreadsheet operations that should be a product", "CRM/ERP that does not match the sales or ops model", "No durable team to evolve a B2B platform"],
      ["عمليات جداول يجب أن تكون منتجاً", "CRM/ERP لا يطابق نموذج المبيعات أو التشغيل", "لا فريق دائم لتطوير منصة B2B"],
    ),
    capabilities: LL(
      ["CRM and ERP development", "Internal business applications", "Admin dashboards", "Dedicated development teams"],
      ["تطوير CRM وERP", "تطبيقات أعمال داخلية", "لوحات إدارة", "فرق تطوير مخصصة"],
    ),
    relatedServices: ["custom-software-development", "web-development", "dedicated-development-teams", "api-development"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
