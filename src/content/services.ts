import { L, LL, type Service } from "./types";

const faq = (qEn: string, qAr: string, aEn: string, aAr: string) => ({
  q: L(qEn, qAr),
  a: L(aEn, aAr),
});

export const services: Service[] = [
  {
    slug: "ai-intelligent-automation",
    icon: "Bot",
    category: "featured",
    title: L("AI & Intelligent Automation", "الذكاء الاصطناعي والأتمتة الذكية"),
    shortTitle: L("AI & Automation", "الذكاء الاصطناعي"),
    tagline: L(
      "Agents, LLMs, and automation that sit inside real operations.",
      "وكلاء ونماذج لغة وأتمتة تعمل داخل العمليات الفعلية.",
    ),
    description: L(
      "Build intelligent systems that automate workflows, enhance decisions, and deliver next-generation customer experiences.",
      "بناء أنظمة ذكية تؤتمت سير العمل وتعزز القرارات وتقدم تجارب عملاء من الجيل القادم.",
    ),
    overview: L(
      "REPLA designs AI that can be operated: agents that complete tasks, models wired into existing software, and automation that your teams can supervise. We cover agent development, custom AI, generative applications, chatbots, enterprise integration, workflow automation, LLM integration, multi-agent systems, predictive analytics, and computer vision.",
      "تصمم REPLA ذكاءً اصطناعياً قابلاً للتشغيل: وكلاء ينجزون مهاماً، ونماذج مربوطة ببرمجيات قائمة، وأتمتة يمكن للفرق الإشراف عليها. نغطي تطوير الوكلاء والحلول المخصصة والتطبيقات التوليدية وروبوتات الدردشة والتكامل المؤسسي وأتمتة سير العمل وتكامل نماذج اللغة والأنظمة متعددة الوكلاء والتحليلات التنبؤية والرؤية الحاسوبية.",
    ),
    problems: LL(
      [
        "Manual processes that stall as volume grows",
        "Knowledge locked in documents, tickets, and inboxes",
        "Chatbots that cannot complete a real workflow",
        "Models in a demo that never reach production systems",
      ],
      [
        "عمليات يدوية تتوقف مع نمو الحجم",
        "معرفة محتجزة في المستندات والتذاكر وصناديق البريد",
        "روبوتات دردشة لا تكمل مساراً تشغيلياً حقيقياً",
        "نماذج في عرض تجريبي لا تصل إلى أنظمة الإنتاج",
      ],
    ),
    approach: LL(
      [
        "Map the workflow and the decision points before choosing a model",
        "Integrate LLMs and agents with the systems you already run",
        "Add human review where the risk requires it",
        "Monitor quality, cost, and failure modes after launch",
      ],
      [
        "نرسم سير العمل ونقاط القرار قبل اختيار النموذج",
        "نربط نماذج اللغة والوكلاء بالأنظمة التي تشغّلونها",
        "نضيف مراجعة بشرية حيث يتطلب الخطر ذلك",
        "نراقب الجودة والتكلفة وأنماط الفشل بعد الإطلاق",
      ],
    ),
    capabilities: LL(
      [
        "AI agent development",
        "Custom AI solutions",
        "Generative AI applications",
        "AI chatbots and virtual assistants",
        "Enterprise AI integration",
        "AI workflow automation",
        "LLM integration",
        "Multi-agent AI systems",
        "Predictive analytics",
        "Computer vision solutions",
      ],
      [
        "تطوير وكلاء الذكاء الاصطناعي",
        "حلول الذكاء الاصطناعي المخصصة",
        "تطبيقات الذكاء الاصطناعي التوليدي",
        "روبوتات الدردشة والمساعدين الافتراضيين",
        "تكامل الذكاء الاصطناعي المؤسسي",
        "أتمتة سير عمل الذكاء الاصطناعي",
        "تكامل نماذج اللغة الكبيرة",
        "أنظمة الذكاء الاصطناعي متعددة الوكلاء",
        "التحليلات التنبؤية",
        "حلول الرؤية الحاسوبية",
      ],
    ),
    benefits: LL(
      [
        "Shorter cycle time on repeatable work",
        "Assistants that can act, not only reply",
        "AI connected to CRM, ERP, and internal tools",
        "A path from prototype to supervised production",
      ],
      [
        "دورة أقصر للأعمال المتكررة",
        "مساعدون يتصرفون وليس الرد فقط",
        "ذكاء اصطناعي متصل بـ CRM وERP والأدوات الداخلية",
        "مسار من النموذج الأولي إلى إنتاج خاضع للإشراف",
      ],
    ),
    technologies: ["Python", "TypeScript", "Node.js", "AWS", "Azure", "GCP"],
    relatedIndustries: ["healthcare", "fintech-banking", "ai-saas", "government", "logistics"],
    relatedServices: ["custom-software-development", "api-development", "data-engineering-analytics"],
    faqs: [
      faq("Do you build AI agents or only chat interfaces?", "هل تبنون وكلاء ذكاء اصطناعي أم واجهات دردشة فقط؟", "We build agents, multi-agent systems, chatbots, and the integrations those products need inside enterprise software.", "نبنى وكلاء وأنظمة متعددة الوكلاء وروبوتات دردشة والتكاملات التي تحتاجها داخل برمجيات المؤسسات."),
      faq("Which models do you use?", "ما النماذج التي تستخدمونها؟", "We integrate large language models into your stack. Model choice follows data sensitivity, language needs, and where the workload must run.", "نربط نماذج اللغة الكبيرة بمجموعتكم التقنية. اختيار النموذج يتبع حساسية البيانات واحتياج اللغة ومكان تشغيل الحمل."),
    ],
  },
  {
    slug: "custom-software-development",
    icon: "AppWindow",
    category: "featured",
    title: L("Custom Software Development", "تطوير البرمجيات المخصصة"),
    shortTitle: L("Custom Software", "برمجيات مخصصة"),
    tagline: L("Enterprise software shaped around your processes.", "برمجيات مؤسسات تُصاغ حول عملياتكم."),
    description: L(
      "Enterprise-grade software tailored to your business processes, industry requirements, and growth goals.",
      "برمجيات على مستوى المؤسسات مصممة وفق عمليات عملكم ومتطلبات صناعتكم وأهداف نموكم.",
    ),
    overview: L(
      "When packaged tools force workarounds, we build the system you actually need: enterprise software, SaaS products, CRM and ERP, HRMS and inventory, healthcare and fintech applications, marketplaces, booking platforms, and internal business applications.",
      "عندما تفرض الأدوات الجاهزة حلولاً ملتوية، نبنى النظام الذي تحتاجونه فعلاً: برمجيات مؤسسات ومنتجات SaaS وCRM وERP وأنظمة موارد بشرية ومخزون وتطبيقات رعاية صحية وتقنية مالية ومنصات أسواق وحجز وتطبيقات أعمال داخلية.",
    ),
    problems: LL(
      [
        "Processes that no off-the-shelf product models well",
        "Disconnected tools that staff re-key by hand",
        "Industry rules that generic software cannot encode",
        "Products that must evolve without a rewrite every year",
      ],
      [
        "عمليات لا تمثلها المنتجات الجاهزة جيداً",
        "أدوات منفصلة يعيد الموظفون إدخال بياناتها يدوياً",
        "قواعد قطاعية لا تستطيع البرمجيات العامة ترميزها",
        "منتجات يجب أن تتطور دون إعادة كتابة كل عام",
      ],
    ),
    approach: LL(
      [
        "Discover the operating model before locking the architecture",
        "Design modules that match how teams actually work",
        "Build with clear APIs so other systems can join later",
        "Ship in slices that can go live without waiting for everything",
      ],
      [
        "نكتشف نموذج التشغيل قبل تثبيت الهيكلة",
        "نصمم وحدات تطابق طريقة عمل الفرق",
        "نبنى بواجهات واضحة حتى تنضم أنظمة أخرى لاحقاً",
        "نُصدر على شرائح يمكن تشغيلها دون انتظار كل شيء",
      ],
    ),
    capabilities: LL(
      [
        "Enterprise software",
        "SaaS product development",
        "CRM and ERP development",
        "HRMS and inventory management",
        "Healthcare and FinTech applications",
        "Marketplace and booking platforms",
        "Internal business applications",
      ],
      [
        "برمجيات المؤسسات",
        "تطوير منتجات SaaS",
        "تطوير CRM وERP",
        "أنظمة الموارد البشرية وإدارة المخزون",
        "تطبيقات الرعاية الصحية والتقنية المالية",
        "منصات الأسواق والحجز",
        "تطبيقات الأعمال الداخلية",
      ],
    ),
    benefits: LL(
      [
        "Software that follows your process, not the other way around",
        "Room to add modules as the business grows",
        "A single product instead of a patchwork of tools",
        "Ownership of the codebase and the roadmap",
      ],
      [
        "برمجيات تتبع عمليتكم وليس العكس",
        "مجال لإضافة وحدات مع نمو العمل",
        "منتج واحد بدل مجموعة أدوات مرقّعة",
        "ملكية الشيفرة وخارطة الطريق",
      ],
    ),
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
    relatedIndustries: ["healthcare", "fintech-banking", "b2b-software", "government", "manufacturing"],
    relatedServices: ["web-development", "api-development", "ui-ux-design", "quality-assurance"],
    faqs: [
      faq("Do you replace an existing CRM or ERP?", "هل تستبدلون CRM أو ERP قائماً؟", "Sometimes we extend what you have through APIs. Sometimes we build a purpose-built system. The choice depends on process fit, not a default preference.", "أحياناً نوسّع ما لديكم عبر واجهات برمجية. وأحياناً نبنى نظاماً مخصصاً. الخيار يعتمد على ملاءمة العملية وليس تفضيلاً افتراضياً."),
      faq("Can this become a SaaS product?", "هل يمكن أن يصبح هذا منتج SaaS؟", "Yes. SaaS product development is part of this practice, including multi-tenant structure when the product requires it.", "نعم. تطوير منتجات SaaS جزء من هذه الممارسة، بما في ذلك البنية متعددة المستأجرين عندما يتطلب المنتج ذلك."),
    ],
  },
  {
    slug: "web-development",
    icon: "Globe",
    category: "featured",
    title: L("Web Development", "تطوير الويب"),
    shortTitle: L("Web", "الويب"),
    tagline: L("Fast, searchable web products — sites, portals, and PWAs.", "منتجات ويب سريعة وقابلة للبحث — مواقع وبوابات وتطبيقات تقدمية."),
    description: L(
      "High-performance, SEO-ready web experiences from corporate sites to complex portals and e-commerce platforms.",
      "تجارب ويب عالية الأداء وجاهزة لمحركات البحث من المواقع المؤسسية إلى البوابات المعقدة والتجارة الإلكترونية.",
    ),
    overview: L(
      "We build corporate sites, customer and partner portals, progressive web apps, admin dashboards, e-commerce, CMS-driven properties, and high-performance websites. The bar is the same: they should load quickly, be maintainable, and be ready for search.",
      "نبنى مواقع مؤسسية وبوابات عملاء وشركاء وتطبيقات ويب تقدمية ولوحات إدارة وتجارة إلكترونية ومواقع تعتمد على أنظمة إدارة محتوى ومواقع عالية الأداء. المعيار واحد: تحميل سريع وقابلية صيانة وجاهزية للبحث.",
    ),
    problems: LL(
      [
        "Marketing sites that cannot be updated without a developer",
        "Portals that feel like a desktop app from a decade ago",
        "Pages that lose traffic because they are slow or opaque to search",
        "Dashboards that collapse under real operational data",
      ],
      [
        "مواقع تسويق لا تُحدَّث دون مطور",
        "بوابات تشبه تطبيقاً مكتبياً قديماً",
        "صفحات تخسر الزيارات لأنها بطيئة أو مبهمة لمحركات البحث",
        "لوحات تنهار تحت بيانات تشغيلية حقيقية",
      ],
    ),
    approach: LL(
      [
        "Choose the rendering model for performance and SEO, not fashion",
        "Separate content editing from engineering where a CMS is needed",
        "Design portals around tasks, not around a sitemap",
        "Measure Core Web Vitals and accessibility as part of delivery",
      ],
      [
        "نختار نموذج العرض للأداء والبحث وليس للموضة",
        "نفصل تحرير المحتوى عن الهندسة حيث يلزم نظام إدارة محتوى",
        "نصمم البوابات حول المهام وليس حول خريطة الموقع",
        "نقيس مؤشرات الويب الأساسية وإمكانية الوصول ضمن التسليم",
      ],
    ),
    capabilities: LL(
      [
        "Custom and corporate websites",
        "Web portals and customer portals",
        "Progressive web apps",
        "Admin dashboards",
        "E-commerce development",
        "CMS development",
        "High-performance websites",
      ],
      [
        "مواقع مخصصة ومؤسسية",
        "بوابات الويب وبوابات العملاء",
        "تطبيقات الويب التقدمية",
        "لوحات تحكم إدارية",
        "تطوير التجارة الإلكترونية",
        "تطوير أنظمة إدارة المحتوى",
        "مواقع عالية الأداء",
      ],
    ),
    benefits: LL(
      [
        "Pages that search engines and customers can actually use",
        "Editors who can publish without a release train",
        "One web surface for public, authenticated, and admin work",
        "A stack your team can keep evolving",
      ],
      [
        "صفحات يستطيع محرك البحث والعميل استخدامها",
        "محررون ينشرون دون انتظار إصدار",
        "سطح ويب واحد للعمل العام والمصادق والإداري",
        "مجموعة تقنية يستطيع فريقكم تطويرها",
      ],
    ),
    technologies: ["Next.js", "React", "TypeScript", "Sanity", "Node.js"],
    relatedIndustries: ["retail-ecommerce", "education", "real-estate", "b2b-software"],
    relatedServices: ["ui-ux-design", "custom-software-development", "api-development"],
    faqs: [
      faq("Do you work with a CMS?", "هل تعملون مع أنظمة إدارة المحتوى؟", "Yes. CMS development is in this service, including Sanity among the technologies we work with.", "نعم. تطوير أنظمة إدارة المحتوى ضمن هذه الخدمة، بما في ذلك Sanity ضمن التقنيات التي نعمل بها."),
      faq("Can a website become a PWA?", "هل يمكن أن يصبح الموقع تطبيقاً تقدماً؟", "When offline or installable behavior is useful, we build progressive web apps rather than forcing a native app.", "عندما يكون السلوك دون اتصال أو قابلية التثبيت مفيداً، نبنى تطبيقات ويب تقدمية بدل فرض تطبيق أصلي."),
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    category: "featured",
    title: L("Mobile App Development", "تطوير تطبيقات الجوال"),
    shortTitle: L("Mobile", "الجوال"),
    tagline: L("Android, iOS, and cross-platform apps for real usage.", "تطبيقات أندرويد وiOS ومتعددة المنصات للاستخدام الفعلي."),
    description: L(
      "Native and cross-platform mobile applications that drive engagement and business growth.",
      "تطبيقات جوال أصلية ومتعددة المنصات تعزز التفاعل ونمو الأعمال.",
    ),
    overview: L(
      "We deliver Android and iOS apps, cross-platform products with Flutter and React Native, enterprise mobile apps, and on-demand, healthcare, fintech, and logistics applications. The product has to survive store review, device variety, and daily use — not only a demo on one phone.",
      "نسلم تطبيقات أندرويد وiOS ومنتجات متعددة المنصات بـ Flutter وReact Native وتطبيقات مؤسسات وتطبيقات عند الطلب والرعاية الصحية والتقنية المالية واللوجستيات. يجب أن يصمد المنتج أمام مراجعة المتاجر وتنوع الأجهزة والاستخدام اليومي — وليس عرضاً على هاتف واحد.",
    ),
    problems: LL(
      [
        "A business process that only works at a desk",
        "Two codebases that drift apart on Android and iOS",
        "Field or logistics work that needs offline-tolerant flows",
        "Healthcare or payments apps that cannot skip security basics",
      ],
      [
        "عملية أعمال تعمل فقط على المكتب",
        "قاعدتا شيفرة تتباعدان على أندرويد وiOS",
        "عمل ميداني أو لوجستي يحتاج تدفقاً يتحمل انقطاع الشبكة",
        "تطبيقات رعاية صحية أو مدفوعات لا يمكنها تجاوز أساسيات الأمن",
      ],
    ),
    approach: LL(
      [
        "Pick native or cross-platform based on device APIs and team shape",
        "Design for one-handed use and interrupted sessions",
        "Share a backend and APIs with the web product when both exist",
        "Plan store release, monitoring, and a support channel before launch",
      ],
      [
        "نختار أصلياً أو متعدد المنصات حسب واجهات الجهاز وشكل الفريق",
        "نصمم للاستخدام بيد واحدة والجلسات المتقطعة",
        "نشارك الخلفية والواجهات مع منتج الويب عند وجود كليهما",
        "نخطط لإصدار المتجر والمراقبة وقناة الدعم قبل الإطلاق",
      ],
    ),
    capabilities: LL(
      [
        "Android and iOS apps",
        "Cross-platform apps",
        "Flutter and React Native development",
        "Enterprise mobile apps",
        "On-demand and healthcare apps",
        "FinTech and logistics apps",
      ],
      [
        "تطبيقات أندرويد وiOS",
        "تطبيقات متعددة المنصات",
        "تطوير Flutter وReact Native",
        "تطبيقات جوال مؤسسية",
        "تطبيقات عند الطلب والرعاية الصحية",
        "تطبيقات التقنية المالية واللوجستيات",
      ],
    ),
    benefits: LL(
      [
        "A mobile surface for customers or staff who are not at a desk",
        "Shared logic across platforms when that is the right tradeoff",
        "Industry-ready patterns for health, finance, and logistics",
        "Release discipline after the first version",
      ],
      [
        "سطح جوال للعملاء أو الموظفين خارج المكتب",
        "منطق مشترك عبر المنصات عندما يكون ذلك التبادل الصحيح",
        "أنماط جاهزة للصحة والمال واللوجستيات",
        "انضباط إصدار بعد النسخة الأولى",
      ],
    ),
    technologies: ["Flutter", "React", "TypeScript", "Node.js"],
    relatedIndustries: ["healthcare", "logistics", "fintech-banking", "retail-ecommerce"],
    relatedServices: ["ui-ux-design", "api-development", "quality-assurance"],
    faqs: [
      faq("Flutter or React Native?", "Flutter أم React Native؟", "Both are in this service. We choose from the product’s native needs, existing web stack, and who will maintain the app.", "كلاهما ضمن هذه الخدمة. نختار حسب احتياج المنتج الأصلي ومجموعة الويب القائمة ومن سيصون التطبيق."),
      faq("Do you ship enterprise apps as well as consumer apps?", "هل تسلمون تطبيقات مؤسسات إلى جانب تطبيقات المستهلك؟", "Yes. Enterprise mobile apps are an explicit part of the catalog.", "نعم. تطبيقات الجوال المؤسسية جزء صريح من الفهرس."),
    ],
  },
  {
    slug: "cloud-devops",
    icon: "Cloud",
    category: "featured",
    title: L("Cloud & DevOps", "السحابة و DevOps"),
    shortTitle: L("Cloud & DevOps", "السحابة"),
    tagline: L("Infrastructure you can ship on, observe, and afford.", "بنية تحتية يمكنكم الإطلاق عليها ومراقبتها وتحمل تكلفتها."),
    description: L(
      "Scalable cloud infrastructure, CI/CD pipelines, and DevOps practices for reliable delivery.",
      "بنية تحتية سحابية قابلة للتوسع وخطوط CI/CD وممارسات DevOps للتسليم الموثوق.",
    ),
    overview: L(
      "We work across AWS, Azure, and Google Cloud with Docker and Kubernetes, CI/CD and infrastructure as code, cloud migration and monitoring, server management, and cost optimization. The goal is a path from commit to production that your team can run.",
      "نعمل عبر AWS وAzure وGoogle Cloud مع Docker وKubernetes وCI/CD والبنية التحتية كرمز والترحيل السحابي والمراقبة وإدارة الخوادم وتحسين التكلفة. الهدف مسار من الالتزام إلى الإنتاج يستطيع فريقكم تشغيله.",
    ),
    problems: LL(
      [
        "Releases that depend on one person and a manual checklist",
        "Environments that drift until production is a special case",
        "A lift-and-shift that did not reduce operational pain",
        "Cloud spend that grew without a corresponding reliability gain",
      ],
      [
        "إصدارات تعتمد على شخص واحد وقائمة يدوية",
        "بيئات تتباعد حتى يصبح الإنتاج حالة خاصة",
        "نقل سحابي لم يقلل الألم التشغيلي",
        "إنفاق سحابي نما دون مقابل في الموثوقية",
      ],
    ),
    approach: LL(
      [
        "Standardize environments with containers and infrastructure as code",
        "Put CI/CD in front of every change that can reach users",
        "Migrate in waves with rollback, not as a single cutover",
        "Watch cost and health with the same seriousness as uptime",
      ],
      [
        "نوحّد البيئات بالحاويات والبنية التحتية كرمز",
        "نضع CI/CD أمام كل تغيير يصل إلى المستخدمين",
        "نرحّل على موجات مع تراجع وليس قطعاً واحداً",
        "نراقب التكلفة والصحة بجدية مماثلة لوقت التشغيل",
      ],
    ),
    capabilities: LL(
      [
        "AWS, Azure, and Google Cloud",
        "Docker and Kubernetes",
        "CI/CD and infrastructure as code",
        "Cloud migration and monitoring",
        "Server management and cost optimization",
      ],
      [
        "AWS وAzure وGoogle Cloud",
        "Docker وKubernetes",
        "CI/CD والبنية التحتية كرمز",
        "الترحيل السحابي والمراقبة",
        "إدارة الخوادم وتحسين التكلفة",
      ],
    ),
    benefits: LL(
      [
        "Repeatable releases instead of heroic deploys",
        "Room to scale without redesigning the box every quarter",
        "Visibility when something fails",
        "A cost picture you can actually discuss",
      ],
      [
        "إصدارات قابلة للتكرار بدل عمليات بطولية",
        "مجال للتوسع دون إعادة تصميم الصندوق كل ربع",
        "رؤية عند حدوث عطل",
        "صورة تكلفة يمكن مناقشتها",
      ],
    ),
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    relatedIndustries: ["ai-saas", "fintech-banking", "government", "telecommunications"],
    relatedServices: ["cybersecurity", "maintenance-support", "custom-software-development"],
    faqs: [
      faq("Which cloud do you standardize on?", "أي سحابة تعتمدون؟", "AWS, Azure, and Google Cloud are all in the catalog. We follow where your accounts, data residency, and skills already sit when that is sound.", "AWS وAzure وGoogle Cloud كلها في الفهرس. نتبع مكان حساباتكم وإقامة البيانات والمهارات عندما يكون ذلك سليماً."),
      faq("Do you only set up Kubernetes?", "هل تقتصرون على إعداد Kubernetes؟", "Kubernetes is one tool. Many products need simpler container delivery first. We match the platform to the operational load.", "Kubernetes أداة واحدة. كثير من المنتجات تحتاج تسليم حاويات أبسط أولاً. نطابق المنصة مع الحمل التشغيلي."),
    ],
  },
  {
    slug: "cybersecurity",
    icon: "Shield",
    category: "featured",
    title: L("Cybersecurity", "الأمن السيبراني"),
    shortTitle: L("Security", "الأمن"),
    tagline: L("Protect applications, APIs, identity, and the cloud path.", "حماية التطبيقات وواجهات API والهوية ومسار السحابة."),
    description: L(
      "Protect your applications, data, and infrastructure with comprehensive security services.",
      "حماية تطبيقاتكم وبياناتكم وبنيتكم التحتية بخدمات أمنية شاملة.",
    ),
    overview: L(
      "Security is part of delivery, not a sticker at the end. We cover security audits and penetration testing, application and API security, cloud security and IAM, compliance and vulnerability assessment, and SOC and security monitoring.",
      "الأمن جزء من التسليم وليس ملصقاً في النهاية. نغطي التدقيق الأمني واختبار الاختراق وأمن التطبيقات وواجهات API وأمن السحابة وإدارة الهوية والامتثال وتقييم الثغرات ومركز العمليات الأمنية والمراقبة.",
    ),
    problems: LL(
      [
        "Features shipping faster than anyone can review them",
        "APIs exposed to partners without a clear trust boundary",
        "Cloud roles that grew wider than the job required",
        "No continuous view of what changed in production",
      ],
      [
        "ميزات تُطلق أسرع مما يمكن مراجعته",
        "واجهات مكشوفة لشركاء دون حد ثقة واضح",
        "أدوار سحابية أوسع من المطلوب",
        "لا رؤية مستمرة لما تغيّر في الإنتاج",
      ],
    ),
    approach: LL(
      [
        "Test what attackers will actually try — apps, APIs, and identity",
        "Fix findings in the product backlog, not in a forgotten PDF",
        "Tighten IAM and cloud configuration as part of DevOps",
        "Keep monitoring on after the audit week ends",
      ],
      [
        "نختبر ما سيحاوله المهاجم فعلاً — تطبيقات وواجهات وهوية",
        "نعالج النتائج في قائمة المنتج وليس في ملف منسي",
        "نضيّق إدارة الهوية وإعداد السحابة ضمن DevOps",
        "نبقي المراقبة بعد انتهاء أسبوع التدقيق",
      ],
    ),
    capabilities: LL(
      [
        "Security audits and penetration testing",
        "Application and API security",
        "Cloud security and IAM",
        "Compliance and vulnerability assessment",
        "SOC and security monitoring",
      ],
      [
        "تدقيق أمني واختبار الاختراق",
        "أمن التطبيقات وواجهات API",
        "أمن السحابة وإدارة الهوية",
        "الامتثال وتقييم الثغرات",
        "مركز العمليات الأمنية والمراقبة",
      ],
    ),
    benefits: LL(
      [
        "Issues found before they become incidents",
        "APIs and apps designed with access control in mind",
        "Cloud accounts that match least privilege",
        "A monitoring loop for what you already run",
      ],
      [
        "مشكلات تُكتشف قبل أن تصبح حوادث",
        "واجهات وتطبيقات مصممة مع التحكم في الوصول",
        "حسابات سحابية تطابق أقل صلاحية لازمة",
        "حلقة مراقبة لما تشغّلونه أصلاً",
      ],
    ),
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    relatedIndustries: ["fintech-banking", "healthcare", "government", "insurance"],
    relatedServices: ["quality-assurance", "cloud-devops", "api-development"],
    faqs: [
      faq("Is this only penetration testing?", "هل هذا اختبار اختراق فقط؟", "Penetration testing is included. The service also covers application and API security, cloud IAM, vulnerability assessment, and monitoring.", "اختبار الاختراق مشمول. الخدمة تغطي أيضاً أمن التطبيقات والواجهات وإدارة الهوية السحابية وتقييم الثغرات والمراقبة."),
      faq("Can you support compliance work?", "هل تدعمون أعمال الامتثال؟", "Compliance and vulnerability assessment are listed capabilities. We do not invent certifications this company does not publish.", "الامتثال وتقييم الثغرات قدرات معلنة. لا نخترع شهادات لا تنشرها الشركة."),
    ],
  },
  {
    slug: "iot-embedded-systems",
    icon: "Cpu",
    category: "featured",
    title: L("IoT & Embedded Systems", "إنترنت الأشياء والأنظمة المدمجة"),
    shortTitle: L("IoT", "إنترنت الأشياء"),
    tagline: L("Devices, sensors, and software in one operating picture.", "أجهزة ومستشعرات وبرمجيات في صورة تشغيل واحدة."),
    description: L(
      "Connect devices, sensors, and platforms into intelligent IoT ecosystems.",
      "ربط الأجهزة والمستشعرات والمنصات في أنظمة إنترنت أشياء ذكية.",
    ),
    overview: L(
      "We connect hardware and software: IoT platforms and smart device integration, industrial IoT and home automation, smart locker systems and RFID, GPS tracking and sensor integration, and hardware–software integration. This includes the smart locker offering listed in our solutions.",
      "نربط العتاد والبرمجيات: منصات إنترنت الأشياء وتكامل الأجهزة الذكية وإنترنت الأشياء الصناعي وأتمتة المنزل وأنظمة الخزائن الذكية وRFID وتتبع GPS وتكامل المستشعرات وتكامل العتاد والبرمجيات. يشمل ذلك عرض الخزائن الذكية ضمن حلولنا.",
    ),
    problems: LL(
      [
        "Devices that report data no one can act on",
        "Lockers, RFID, or GPS that live outside the core product",
        "Industrial sensors without a reliable ingest path",
        "Firmware and cloud teams who do not share a contract",
      ],
      [
        "أجهزة ترسل بيانات لا يمكن التصرف بناء عليها",
        "خزائن أو RFID أو GPS خارج المنتج الأساسي",
        "مستشعرات صناعية دون مسار إدخال موثوق",
        "فرقا عتاد وسحابة لا يشتركان في عقد واضح",
      ],
    ),
    approach: LL(
      [
        "Define the event, the identity of the device, and the action",
        "Build the platform path — ingest, rules, and operator UI",
        "Integrate RFID, GPS, and lockers into the same operational model",
        "Treat hardware constraints as product requirements, not afterthoughts",
      ],
      [
        "نحدد الحدث وهوية الجهاز والإجراء",
        "نبنى مسار المنصة — الإدخال والقواعد وواجهة المشغّل",
        "ندمج RFID وGPS والخزائن في النموذج التشغيلي نفسه",
        "نتعامل مع قيود العتاد كمتطلبات منتج وليست لاحقاً",
      ],
    ),
    capabilities: LL(
      [
        "IoT platforms and smart device integration",
        "Industrial IoT and home automation",
        "Smart locker systems and RFID",
        "GPS tracking and sensor integration",
        "Hardware and software integration",
      ],
      [
        "منصات إنترنت الأشياء وتكامل الأجهزة الذكية",
        "إنترنت الأشياء الصناعي وأتمتة المنزل",
        "أنظمة الخزائن الذكية وRFID",
        "تتبع GPS وتكامل المستشعرات",
        "تكامل الأجهزة والبرمجيات",
      ],
    ),
    benefits: LL(
      [
        "A live view of assets, lockers, or sensors",
        "Automation that starts at the device, not in a spreadsheet",
        "One integration layer for hardware and software",
        "A foundation for industry and facilities products",
      ],
      [
        "رؤية مباشرة للأصول أو الخزائن أو المستشعرات",
        "أتمتة تبدأ من الجهاز وليس من جدول",
        "طبقة تكامل واحدة للعتاد والبرمجيات",
        "أساس لمنتجات صناعية ومرافق",
      ],
    ),
    technologies: ["Python", "Node.js", "AWS", "Azure", "Docker"],
    relatedIndustries: ["manufacturing", "logistics", "energy", "construction"],
    relatedServices: ["custom-software-development", "cloud-devops", "mobile-app-development"],
    faqs: [
      faq("Do you manufacture hardware?", "هل تصنّعون العتاد؟", "This service is integration of devices, sensors, platforms, lockers, RFID, and GPS with software. Hardware supply depends on the project and is not claimed as a factory line.", "هذه الخدمة تكامل أجهزة ومستشعرات ومنصات وخزائن وRFID وGPS مع البرمجيات. توريد العتاد يعتمد على المشروع ولا يُقدَّم كخط تصنيع."),
      faq("Is the smart locker product part of this?", "هل منتج الخزائن الذكية جزء من هذا؟", "Yes. Smart locker systems and RFID are listed here and as a named solution.", "نعم. أنظمة الخزائن الذكية وRFID مذكورة هنا وكحل مسمّى."),
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "PenTool",
    category: "featured",
    title: L("UI/UX Design", "تصميم UI/UX"),
    shortTitle: L("UI/UX", "UI/UX"),
    tagline: L("Research, structure, and interfaces people can finish.", "بحث وهيكل وواجهات يستطيع الناس إكمالها."),
    description: L(
      "User-centered design that turns complex products into intuitive, engaging experiences.",
      "تصميم يركز على المستخدم يحوّل المنتجات المعقدة إلى تجارب بديهية وجذابة.",
    ),
    overview: L(
      "We run product design and UX research, wireframing and prototyping, and design systems and dashboard design. The work is meant to go into engineering, not to sit as a slide deck.",
      "ننفيذ تصميم المنتج وبحث تجربة المستخدم والإطارات السلكية والنماذج الأولية وأنظمة التصميم وتصميم لوحات التحكم. العمل معدّ للدخول في الهندسة وليس للبقاء عرضاً.",
    ),
    problems: LL(
      [
        "Screens that look finished but fail the actual task",
        "Every squad inventing its own buttons and patterns",
        "Dashboards that dump every metric on one canvas",
        "Stakeholders who cannot agree because nothing is clickable yet",
      ],
      [
        "شاشات تبدو مكتملة وتفشل في المهمة الفعلية",
        "كل فريق يخترع أزراره وأنماطه",
        "لوحات تفرغ كل المقاييس على سطح واحد",
        "أصحاب مصلحة لا يتفقون لأن شيئاً غير قابل للنقر بعد",
      ],
    ),
    approach: LL(
      [
        "Research the job to be done before drawing the UI",
        "Prototype the risky flows, not only the marketing screens",
        "Codify a design system engineering can implement",
        "Stay through build so the shipped product matches the intent",
      ],
      [
        "نبحث المهمة المطلوب إنجازها قبل رسم الواجهة",
        "نصنع نموذجاً للتدفقات الخطرة وليس شاشات التسويق فقط",
        "نثبّت نظام تصميم تستطيع الهندسة تنفيذه",
        "نبقى خلال البناء حتى يطابق المنتج المشحون القصد",
      ],
    ),
    capabilities: LL(
      [
        "Product design and UX research",
        "Wireframing and prototyping",
        "Design systems and dashboard design",
      ],
      [
        "تصميم المنتجات وبحث تجربة المستخدم",
        "الإطارات السلكية والنماذج الأولية",
        "أنظمة التصميم وتصميم لوحات التحكم",
      ],
    ),
    benefits: LL(
      [
        "Fewer abandoned flows",
        "A shared language between design and engineering",
        "Dashboards organized around decisions",
        "Prototypes that de-risk the build",
      ],
      [
        "تدفقات مهجورة أقل",
        "لغة مشتركة بين التصميم والهندسة",
        "لوحات منظمة حول القرارات",
        "نماذج تقلل مخاطر البناء",
      ],
    ),
    technologies: ["React", "Next.js", "TypeScript"],
    relatedIndustries: ["ai-saas", "fintech-banking", "healthcare", "education"],
    relatedServices: ["web-development", "mobile-app-development", "custom-software-development"],
    faqs: [
      faq("Do you design without building?", "هل تصممون دون بناء؟", "We can. Most engagements continue into engineering so the system and the interface stay aligned.", "يمكننا ذلك. معظم التعاون يستمر إلى الهندسة حتى يبقى النظام والواجهة متوافقين."),
      faq("Do you create design systems?", "هل تنشئون أنظمة تصميم؟", "Yes. Design systems and dashboard design are listed capabilities.", "نعم. أنظمة التصميم وتصميم اللوحات قدرات معلنة."),
    ],
  },
  {
    slug: "quality-assurance",
    icon: "CheckCircle2",
    category: "featured",
    title: L("Quality Assurance", "ضمان الجودة"),
    shortTitle: L("QA", "ضمان الجودة"),
    tagline: L("Manual and automated proof that the product holds.", "إثبات يدوي وآلي أن المنتج يصمد."),
    description: L(
      "Rigorous testing strategies to ensure reliability, performance, and security.",
      "استراتيجيات اختبار صارمة لضمان الموثوقية والأداء والأمان.",
    ),
    overview: L(
      "We plan and run manual and automation testing, API, performance and security testing, and regression and load testing. QA is a practice on the product, not a gate that appears the night before launch.",
      "نخطط وننفذ الاختبار اليدوي والآلي واختبار واجهات API والأداء والأمان واختبار الانحدار والحمل. ضمان الجودة ممارسة على المنتج وليس بوابة تظهر ليلة الإطلاق.",
    ),
    problems: LL(
      [
        "Regressions that return with every release",
        "APIs that pass the happy path and fail the rest",
        "Performance that was never measured under load",
        "Security tests that start after customers are already on the system",
      ],
      [
        "انحدارات تعود مع كل إصدار",
        "واجهات تنجح في المسار السعيد وتفشل في البقية",
        "أداء لم يُقس تحت الحمل",
        "اختبارات أمنية تبدأ بعد أن يكون العملاء على النظام",
      ],
    ),
    approach: LL(
      [
        "Risk-based coverage instead of testing everything equally",
        "Automate what repeats; keep humans on exploratory and messy data",
        "Include API, load, and security tests in the same program",
        "Report in a way engineering can act on the same week",
      ],
      [
        "تغطية حسب الخطر بدل اختبار كل شيء بالتساوي",
        "نؤتمت ما يتكرر ونبقي البشر للاستكشاف والبيانات الفوضوية",
        "نضم اختبارات الواجهات والحمل والأمن في البرنامج نفسه",
        "نبلغ بطريقة تستطيع الهندسة التصرف وفقها في الأسبوع نفسه",
      ],
    ),
    capabilities: LL(
      [
        "Manual and automation testing",
        "API, performance, and security testing",
        "Regression and load testing",
      ],
      [
        "الاختبار اليدوي والآلي",
        "اختبار API والأداء والأمان",
        "اختبار الانحدار والحمل",
      ],
    ),
    benefits: LL(
      [
        "Fewer surprises in production",
        "A regression net that grows with the product",
        "Evidence for performance and security conversations",
        "QA that can sit with a dedicated or mixed team",
      ],
      [
        "مفاجآت أقل في الإنتاج",
        "شبكة انحدار تنمو مع المنتج",
        "أدلة لنقاشات الأداء والأمن",
        "ضمان جودة يمكنه الجلوس مع فريق مخصص أو مختلط",
      ],
    ),
    technologies: ["TypeScript", "Python", "Node.js"],
    relatedIndustries: ["fintech-banking", "healthcare", "insurance", "government"],
    relatedServices: ["cybersecurity", "custom-software-development", "api-development"],
    faqs: [
      faq("Do you only test software REPLA built?", "هل تختبرون فقط ما بنته REPLA؟", "We can QA products we build and products already in your landscape. Scope is agreed per engagement.", "يمكننا ضمان جودة منتجات نبنيها ومنتجات قائمة لديكم. النطاق يُتفق عليه لكل تعاون."),
      faq("Is automation always included?", "هل الأتمتة مشمولة دائماً؟", "Manual and automation testing are both in the catalog. The mix depends on release frequency and risk.", "الاختبار اليدوي والآلي كلاهما في الفهرس. المزيج يعتمد على تكرار الإصدار والخطر."),
    ],
  },
  {
    slug: "api-development",
    icon: "Workflow",
    category: "featured",
    title: L("API Development & Integrations", "تطوير API والتكاملات"),
    shortTitle: L("APIs", "واجهات API"),
    tagline: L("REST, GraphQL, payments, ERP, CRM, and public-sector APIs.", "REST وGraphQL والمدفوعات وERP وCRM وواجهات القطاع العام."),
    description: L(
      "Robust APIs and seamless integrations with payment gateways, ERP, CRM, and third-party systems.",
      "واجهات API قوية وتكاملات سلسة مع بوابات الدفع وERP وCRM والأنظمة الخارجية.",
    ),
    overview: L(
      "We design REST and GraphQL APIs, payment gateway integration, ERP and CRM integration, and banking, healthcare, and government APIs. Integrations are treated as products: versioned, observed, and documented.",
      "نصمم واجهات REST وGraphQL وتكامل بوابات الدفع وتكامل ERP وCRM وواجهات البنوك والرعاية الصحية والحكومة. نتعامل مع التكاملات كمنتجات: بإصدارات ومراقبة وتوثيق.",
    ),
    problems: LL(
      [
        "Systems that only connect through file drops and email",
        "A payment flow bolted on without a clear failure path",
        "ERP or CRM as a bottleneck because nothing else can talk to it",
        "Partner APIs that break silently when a field changes",
      ],
      [
        "أنظمة لا تتصل إلا عبر ملفات وبريد",
        "مسار دفع مضاف دون مسار فشل واضح",
        "ERP أو CRM كعنق زجاجة لأن شيئاً آخر لا يخاطبه",
        "واجهات شركاء تنكسر بصمت عند تغيّر حقل",
      ],
    ),
    approach: LL(
      [
        "Model the contract first — resources, errors, and idempotency",
        "Integrate payments, ERP, and CRM with explicit mapping",
        "Respect industry API constraints in banking, health, and government",
        "Add monitoring and versioning so consumers are not surprised",
      ],
      [
        "نصمّم العقد أولاً — الموارد والأخطاء وidempotency",
        "ندمج المدفوعات وERP وCRM بتعيين صريح",
        "نحترم قيود واجهات القطاعات في البنوك والصحة والحكومة",
        "نضيف مراقبة وإصدارات حتى لا يُفاجأ المستهلكون",
      ],
    ),
    capabilities: LL(
      [
        "REST and GraphQL APIs",
        "Payment gateway integration",
        "ERP and CRM integration",
        "Banking, healthcare, and government APIs",
      ],
      [
        "واجهات REST وGraphQL",
        "تكامل بوابات الدفع",
        "تكامل ERP وCRM",
        "واجهات البنوك والرعاية الصحية والحكومة",
      ],
    ),
    benefits: LL(
      [
        "One integration layer instead of point-to-point chaos",
        "Payments and core systems that fail loudly and recover",
        "Room to add partners without rewriting the core",
        "APIs that other REPLA products can share",
      ],
      [
        "طبقة تكامل واحدة بدل فوضى نقطة لنقطة",
        "مدفوعات وأنظمة أساسية تفشل بوضوح وتتعافى",
        "مجال لإضافة شركاء دون إعادة كتابة النواة",
        "واجهات يمكن لمنتجات REPLA الأخرى مشاركتها",
      ],
    ),
    technologies: ["Node.js", "TypeScript", "Python"],
    relatedIndustries: ["fintech-banking", "healthcare", "government", "retail-ecommerce"],
    relatedServices: ["custom-software-development", "cybersecurity", "web-development"],
    faqs: [
      faq("REST or GraphQL?", "REST أم GraphQL؟", "Both are in the catalog. We pick from consumer needs, caching, and how the domain is queried.", "كلاهما في الفهرس. نختار حسب احتياج المستهلك والتخزين المؤقت وطريقة استعلام المجال."),
      faq("Do you integrate existing ERPs?", "هل تدمجون أنظمة ERP قائمة؟", "Yes. ERP and CRM integration is a listed capability, including when REPLA did not build the system of record.", "نعم. تكامل ERP وCRM قدرة معلنة، حتى عندما لم تبنِ REPLA نظام السجلات."),
    ],
  },
  {
    slug: "dedicated-development-teams",
    icon: "Users",
    category: "featured",
    title: L("Dedicated Development Teams", "فرق التطوير المخصصة"),
    shortTitle: L("Dedicated Teams", "فرق مخصصة"),
    tagline: L("Developers, offshore capacity, and managed delivery.", "مطورون وقدرة خارجية وتسليم مُدار."),
    description: L(
      "Scale your engineering capacity with dedicated developers, offshore centers, and managed teams.",
      "وسّعوا قدرتكم الهندسية بمطورين مخصصين ومراكز خارجية وفرق مُدارة.",
    ),
    overview: L(
      "When you need capacity rather than a one-off project, we provide dedicated developers, an offshore development center model, team augmentation and project outsourcing, and managed IT teams with technical project management.",
      "عندما تحتاجون قدرة وليس مشروعاً لمرة واحدة، نوفر مطورين مخصصين ونموذج مركز تطوير خارجي وتعزيز الفريق وتعهيد المشاريع وفرق تقنية مُدارة مع إدارة مشاريع تقنية.",
    ),
    problems: LL(
      [
        "A roadmap that outruns the in-house headcount",
        "Hiring cycles that cannot match a product window",
        "Vendors who disappear between sprints",
        "No technical PM to keep scope, quality, and communication aligned",
      ],
      [
        "خارطة طريق تتجاوز عدد الفريق الداخلي",
        "دورات توظيف لا تطابق نافذة المنتج",
        "موردون يختفون بين الدورات",
        "لا مدير مشروع تقني يبقي النطاق والجودة والتواصل متوافقة",
      ],
    ),
    approach: LL(
      [
        "Staff against a named backlog, not a vague bench",
        "Keep communication in your tools and timezone agreements",
        "Offer augmentation, a dedicated pod, or a managed team",
        "Put technical project management on the engagement when you want it owned",
      ],
      [
        "نوظف مقابل قائمة عمل مسماة وليس مقعداً غامضاً",
        "نبقي التواصل في أدواتكم واتفاقيات المنطقة الزمنية",
        "نقدم تعزيزاً أو فريقاً مخصصاً أو فريقاً مُداراً",
        "نضع إدارة مشاريع تقنية على التعاون عندما تريدون ملكيتها",
      ],
    ),
    capabilities: LL(
      [
        "Dedicated developers",
        "Offshore development center",
        "Team augmentation and project outsourcing",
        "Managed IT teams and technical PM",
      ],
      [
        "مطورون مخصصون",
        "مركز تطوير خارجي",
        "تعزيز الفريق وتعهيد المشاريع",
        "فرق تقنية مُدارة وإدارة مشاريع تقنية",
      ],
    ),
    benefits: LL(
      [
        "Capacity without a long hiring freeze on your side",
        "People who stay on the product, not a rotating cast",
        "A delivery shape you can expand or reduce",
        "Optional ownership of planning and reporting",
      ],
      [
        "قدرة دون تجميد توظيف طويل لديكم",
        "أشخاص يبقون على المنتج وليس تشكيلة دوّارة",
        "شكل تسليم يمكن توسيعه أو تقليصه",
        "ملكية اختيارية للتخطيط والتقارير",
      ],
    ),
    technologies: ["TypeScript", "React", "Node.js", "Python", "Flutter"],
    relatedIndustries: ["ai-saas", "b2b-software", "fintech-banking", "telecommunications"],
    relatedServices: ["custom-software-development", "it-consulting", "maintenance-support"],
    faqs: [
      faq("Is this staff augmentation only?", "هل هذا تعزيز موظفين فقط؟", "Augmentation is one option. Dedicated developers, offshore centers, outsourcing, and managed teams with technical PM are all listed.", "التعزيز خيار واحد. المطورون المخصصون والمراكز الخارجية والتعهيد والفرق المُدارة مع إدارة مشاريع كلها معلنة."),
      faq("Where do the teams sit?", "أين تقع الفرق؟", "We deliver worldwide from a Riyadh headquarters. Exact team location is agreed per engagement; we do not invent extra offices here.", "نسلم عالمياً من مقر في الرياض. موقع الفريق يُتفق عليه لكل تعاون؛ لا نخترع مكاتب إضافية هنا."),
    ],
  },
  {
    slug: "blockchain-web3",
    icon: "Hexagon",
    category: "catalog",
    title: L("Blockchain & Web3", "البلوك تشين و Web3"),
    shortTitle: L("Web3", "Web3"),
    tagline: L("Contracts, tokens, wallets, DeFi, and DAO platforms.", "عقود ورموز ومحافظ وDeFi ومنصات DAO."),
    description: L(
      "Decentralized applications, smart contracts, and Web3 platforms built for the future.",
      "تطبيقات لامركزية وعقود ذكية ومنصات Web3 مبنية للمستقبل.",
    ),
    overview: L(
      "This catalog line covers smart contracts and token development, NFT platforms and wallet integration, and Web3 apps, DeFi, and DAO platforms. Related pages go deeper on smart contracts, NFTs, and DAOs without adding claims beyond this catalog.",
      "يغطي هذا الخط العقود الذكية وتطوير الرموز ومنصات NFT وتكامل المحافظ وتطبيقات Web3 وDeFi وDAO. صفحات ذات صلة تتعمق في العقود وNFT وDAO دون ادعاءات خارج هذا الفهرس.",
    ),
    problems: LL(
      [
        "A token or contract idea with no product around it",
        "Wallet connection treated as a demo, not an account model",
        "NFT or DAO features bolted onto a site that cannot support them",
        "On-chain logic that nobody can upgrade or explain",
      ],
      [
        "فكرة رمز أو عقد بلا منتج حولها",
        "ربط محفظة كعرض وليس كنموذج حساب",
        "ميزات NFT أو DAO مضافة إلى موقع لا يحتملها",
        "منطق على السلسلة لا يستطيع أحد ترقيته أو شرحه",
      ],
    ),
    approach: LL(
      [
        "Decide what must be on-chain and what should stay in conventional software",
        "Build contracts, tokens, and the application that uses them together",
        "Integrate wallets as a first-class identity path",
        "Document upgrade and operational assumptions before launch",
      ],
      [
        "نقرر ما يجب أن يكون على السلسلة وما يبقى في برمجيات تقليدية",
        "نبنى العقود والرموز والتطبيق الذي يستخدمها معاً",
        "ندمج المحافظ كمسار هوية أساسي",
        "نوثق افتراضات الترقية والتشغيل قبل الإطلاق",
      ],
    ),
    capabilities: LL(
      [
        "Smart contracts and token development",
        "NFT platforms and wallet integration",
        "Web3 apps, DeFi, and DAO platforms",
      ],
      [
        "العقود الذكية وتطوير الرموز",
        "منصات NFT وتكامل المحافظ",
        "تطبيقات Web3 وDeFi وDAO",
      ],
    ),
    benefits: LL(
      [
        "On-chain pieces that match a real product",
        "Wallet and NFT flows that users can complete",
        "Room for DeFi or DAO features without rewriting the stack",
        "Clearer boundaries between protocol and application",
      ],
      [
        "أجزاء على السلسلة تطابق منتجاً حقيقياً",
        "تدفقات محفظة وNFT يستطيع المستخدم إكمالها",
        "مجال لميزات DeFi أو DAO دون إعادة كتابة المجموعة",
        "حدود أوضح بين البروتوكول والتطبيق",
      ],
    ),
    technologies: ["TypeScript", "Node.js", "React", "Next.js"],
    relatedIndustries: ["fintech-banking", "ai-saas"],
    relatedServices: ["smart-contracts", "nft-development", "dao-development", "custom-software-development"],
    faqs: [
      faq("Is every product a good fit for blockchain?", "هل كل منتج يناسب البلوك تشين؟", "No. We use this line when tokens, contracts, NFTs, DeFi, or DAOs are an actual requirement — not as decoration.", "لا. نستخدم هذا الخط عندما تكون الرموز أو العقود أو NFT أو DeFi أو DAO متطلباً فعلياً — وليس للزينة."),
    ],
  },
  {
    slug: "smart-contracts",
    icon: "FileCode",
    category: "specialized",
    parentSlug: "blockchain-web3",
    title: L("Smart Contracts", "العقود الذكية"),
    shortTitle: L("Smart Contracts", "العقود الذكية"),
    tagline: L("Self-executing agreements encoded and tested as software.", "اتفاقيات ذاتية التنفيذ تُرمَّز وتُختبر كبرمجيات."),
    description: L(
      "Smart contracts and token development as listed in our Blockchain & Web3 catalog — agreements that execute as written.",
      "العقود الذكية وتطوير الرموز كما في فهرس البلوك تشين وWeb3 — اتفاقيات تُنفَّذ كما كُتبت.",
    ),
    overview: L(
      "A smart contract is a digital agreement whose terms run as code. We develop contracts and tokens as part of Blockchain & Web3, then wrap them in the application, wallet, and operational controls the product needs.",
      "العقد الذكي اتفاق رقمي تُنفَّذ بنوده كشيفرة. نطور العقود والرموز ضمن البلوك تشين وWeb3 ثم نغلفها بالتطبيق والمحفظة والضوابط التشغيلية التي يحتاجها المنتج.",
    ),
    problems: LL(
      [
        "Business rules that should execute without a manual middle step",
        "Token logic that drifted from the application using it",
        "Contracts deployed without a test or upgrade story",
      ],
      [
        "قواعد أعمال يجب أن تُنفَّذ دون خطوة وسطى يدوية",
        "منطق رموز ابتعد عن التطبيق الذي يستخدمه",
        "عقود نُشرت دون اختبار أو قصة ترقية",
      ],
    ),
    approach: LL(
      [
        "Specify states, permissions, and failure cases in writing first",
        "Implement and test the contract as production software",
        "Connect minting, transfers, or governance to the product UI",
        "Plan what happens after deploy — monitoring and upgrades",
      ],
      [
        "نحدد الحالات والصلاحيات وحالات الفشل كتابة أولاً",
        "ننفذ العقد ونختبره كبرمجيات إنتاج",
        "نربط الإصدار والتحويل أو الحوكمة بواجهة المنتج",
        "نخطط لما بعد النشر — المراقبة والترقيات",
      ],
    ),
    capabilities: LL(
      ["Smart contracts and token development", "Application integration around contract events", "Wallet-aware product flows"],
      ["العقود الذكية وتطوير الرموز", "تكامل التطبيق حول أحداث العقد", "تدفقات منتج واعية بالمحفظة"],
    ),
    benefits: LL(
      ["Rules that execute the same way every time", "Tokens tied to a real product", "Fewer surprises at deploy time"],
      ["قواعد تُنفَّذ بالطريقة نفسها في كل مرة", "رموز مربوطة بمنتج حقيقي", "مفاجآت أقل عند النشر"],
    ),
    technologies: ["TypeScript", "Node.js"],
    relatedIndustries: ["fintech-banking", "ai-saas"],
    relatedServices: ["blockchain-web3", "nft-development", "dao-development"],
    faqs: [
      faq("Is this separate from Blockchain & Web3?", "هل هذا منفصل عن البلوك تشين وWeb3؟", "It is a focused page for a capability already listed there: smart contracts and token development.", "هي صفحة مركّزة لقدرة مذكورة هناك: العقود الذكية وتطوير الرموز."),
    ],
  },
  {
    slug: "nft-development",
    icon: "Image",
    category: "specialized",
    parentSlug: "blockchain-web3",
    title: L("NFT Development", "تطوير NFT"),
    shortTitle: L("NFTs", "NFT"),
    tagline: L("NFT platforms and wallet integration — not a hype wrapper.", "منصات NFT وتكامل المحافظ — وليس غلافاً للضجيج."),
    description: L(
      "NFT platforms and wallet integration from our Blockchain & Web3 catalog.",
      "منصات NFT وتكامل المحافظ من فهرس البلوك تشين وWeb3.",
    ),
    overview: L(
      "We build NFT platforms and the wallet integration they require, as listed under Blockchain & Web3. The work includes minting and inventory flows, wallet connection, and the conventional software around the collection — not a promise of market outcomes.",
      "نبنى منصات NFT وتكامل المحافظ الذي تحتاجه كما هو مذكور تحت البلوك تشين وWeb3. يشمل العمل تدفقات الإصدار والجرد وربط المحفظة والبرمجيات التقليدية حول المجموعة — وليس وعداً بنتائج سوق.",
    ),
    problems: LL(
      [
        "A collection with no product to mint, show, or transfer in",
        "Wallet connect that fails on the devices people actually use",
        "Metadata and media stored without a durable plan",
      ],
      [
        "مجموعة بلا منتج للإصدار أو العرض أو النقل",
        "ربط محفظة يفشل على الأجهزة المستخدمة فعلاً",
        "بيانات وصفية ووسائط مخزّنة دون خطة دائمة",
      ],
    ),
    approach: LL(
      [
        "Design mint, list, and transfer as user tasks",
        "Integrate wallets as identity, not as a badge",
        "Keep media and metadata strategies explicit",
        "Test the unhappy paths — rejected signatures, network switches, empty wallets",
      ],
      [
        "نصمم الإصدار والعرض والنقل كمهام مستخدم",
        "ندمج المحافظ كهوية وليس كشارة",
        "نبقي استراتيجيات الوسائط والبيانات الوصفية صريحة",
        "نختبر المسارات غير السعيدة — توقيع مرفوض وتبديل شبكة ومحفظة فارغة",
      ],
    ),
    capabilities: LL(
      ["NFT platforms", "Wallet integration", "Web3 application support around collections"],
      ["منصات NFT", "تكامل المحافظ", "دعم تطبيقات Web3 حول المجموعات"],
    ),
    benefits: LL(
      ["A platform instead of a one-off drop page", "Wallet flows that complete", "NFT features that sit inside a broader product"],
      ["منصة بدل صفحة إسقاط لمرة واحدة", "تدفقات محفظة تكتمل", "ميزات NFT داخل منتج أوسع"],
    ),
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    relatedIndustries: ["ai-saas", "education"],
    relatedServices: ["blockchain-web3", "smart-contracts", "web-development"],
    faqs: [
      faq("Do you guarantee NFT sales?", "هل تضمنون مبيعات NFT؟", "No. This page is about building platforms and wallet integration. We do not invent market results.", "لا. هذه الصفحة عن بناء المنصات وتكامل المحافظ. لا نخترع نتائج سوق."),
    ],
  },
  {
    slug: "dao-development",
    icon: "Vote",
    category: "specialized",
    parentSlug: "blockchain-web3",
    title: L("DAO Development", "تطوير DAO"),
    shortTitle: L("DAOs", "DAO"),
    tagline: L("Governance platforms listed under our Web3 apps, DeFi, and DAO work.", "منصات حوكمة ضمن تطبيقات Web3 وDeFi وDAO."),
    description: L(
      "DAO platforms as part of Web3 apps, DeFi, and DAO platforms in the live catalog.",
      "منصات DAO كجزء من تطبيقات Web3 وDeFi وDAO في الفهرس الحالي.",
    ),
    overview: L(
      "DAO development here means governance platforms — proposals, membership, and on-chain or hybrid decision flows — delivered as part of the Blockchain & Web3 catalog. We do not claim a token treasury or community we do not operate.",
      "تطوير DAO هنا يعني منصات حوكمة — مقترحات وعضوية وتدفقات قرار على السلسلة أو هجينة — ضمن فهرس البلوك تشين وWeb3. لا ندّعي خزينة رموز أو مجتمعاً لا نديره.",
    ),
    problems: LL(
      [
        "Decisions that should be recorded and executed, not buried in chat",
        "Membership rules that live only in a document",
        "A protocol with no governance surface the community can use",
      ],
      [
        "قرارات يجب تسجيلها وتنفيذها وليس دفنها في الدردشة",
        "قواعد عضوية تعيش في مستند فقط",
        "بروتوكول بلا سطح حوكمة يستطيع المجتمع استخدامه",
      ],
    ),
    approach: LL(
      [
        "Model membership, proposals, and execution as product flows",
        "Choose on-chain versus off-chain voting with the risk in mind",
        "Build the application around the governance contract, not the other way around",
      ],
      [
        "نصمم العضوية والمقترحات والتنفيذ كتدفقات منتج",
        "نختار التصويت على السلسلة أو خارجها مع الخطر في الاعتبار",
        "نبنى التطبيق حول عقد الحوكمة وليس العكس",
      ],
    ),
    capabilities: LL(
      ["DAO platforms", "Governance-aware Web3 applications", "Integration with contracts and wallets"],
      ["منصات DAO", "تطبيقات Web3 واعية بالحوكمة", "تكامل مع العقود والمحافظ"],
    ),
    benefits: LL(
      ["A place to propose and decide", "Rules that software can enforce", "Governance tied to the rest of the Web3 product"],
      ["مكان للاقتراح والقرار", "قواعد تستطيع البرمجيات إنفاذها", "حوكمة مربوطة ببقية منتج Web3"],
    ),
    technologies: ["TypeScript", "React", "Node.js"],
    relatedIndustries: ["fintech-banking", "ai-saas"],
    relatedServices: ["blockchain-web3", "smart-contracts", "custom-software-development"],
    faqs: [
      faq("Do you run DAOs for clients after launch?", "هل تديرون DAO للعملاء بعد الإطلاق؟", "We build the platform. Ongoing community operation is only in scope if the engagement says so.", "نبنى المنصة. تشغيل المجتمع المستمر يكون ضمن النطاق فقط إذا نص التعاون على ذلك."),
    ],
  },
  {
    slug: "data-engineering-analytics",
    icon: "BarChart3",
    category: "catalog",
    title: L("Data Engineering & Analytics", "هندسة البيانات والتحليلات"),
    shortTitle: L("Data & Analytics", "البيانات"),
    tagline: L("Warehouses, lakes, BI, ETL, and real-time analytics.", "مستودعات وبحيرات وذكاء أعمال وETL وتحليلات فورية."),
    description: L(
      "Turn data into actionable insights with warehousing, BI, and real-time analytics.",
      "تحويل البيانات إلى رؤى قابلة للتنفيذ عبر التخزين وذكاء الأعمال والتحليلات الفورية.",
    ),
    overview: L(
      "We deliver data warehousing and data lakes, business intelligence and dashboards, and ETL pipelines and real-time analytics. The aim is decisions with a trustworthy pipeline behind them — not a one-off export.",
      "نسلم مستودعات البيانات وبحيرات البيانات وذكاء الأعمال ولوحات التحكم وخطوط ETL والتحليلات الفورية. الهدف قرارات خلفها مسار موثوق — وليس تصديراً لمرة واحدة.",
    ),
    problems: LL(
      [
        "Numbers that disagree depending on who exported the file",
        "Operational databases used as if they were warehouses",
        "Dashboards that cannot refresh without a developer",
        "Events that arrive too late to change the operation",
      ],
      [
        "أرقام تختلف حسب من صدّر الملف",
        "قواعد تشغيل تُستخدم كأنها مستودعات",
        "لوحات لا تتحدث دون مطور",
        "أحداث تصل متأخرة جداً لتغيير العملية",
      ],
    ),
    approach: LL(
      [
        "Model sources, grain, and ownership before stacking tools",
        "Build ETL that can be rerun and observed",
        "Put BI on curated datasets, not on raw production tables",
        "Add real-time paths only where latency is a business requirement",
      ],
      [
        "نصمم المصادر والحبيبات والملكية قبل رص الأدوات",
        "نبنى ETL يمكن إعادة تشغيله ومراقبته",
        "نضع ذكاء الأعمال على مجموعات منسّقة وليس جداول إنتاج خام",
        "نضيف مسارات فورية فقط حيث الكمون متطلب أعمال",
      ],
    ),
    capabilities: LL(
      [
        "Data warehousing and data lakes",
        "Business intelligence and dashboards",
        "ETL pipelines and real-time analytics",
      ],
      [
        "مستودعات البيانات وبحيرات البيانات",
        "ذكاء الأعمال ولوحات التحكم",
        "خطوط ETL والتحليلات الفورية",
      ],
    ),
    benefits: LL(
      [
        "A shared definition of important metrics",
        "Pipelines that can be operated",
        "Dashboards that match how leaders actually decide",
        "A base for AI and reporting without extra folklore",
      ],
      [
        "تعريف مشترك للمقاييس المهمة",
        "مسارات يمكن تشغيلها",
        "لوحات تطابق قرارات القادة",
        "أساس للذكاء الاصطناعي والتقارير دون روايات إضافية",
      ],
    ),
    technologies: ["Python", "AWS", "Azure", "GCP"],
    relatedIndustries: ["retail-ecommerce", "logistics", "fintech-banking", "manufacturing"],
    relatedServices: ["ai-intelligent-automation", "custom-software-development", "cloud-devops"],
    faqs: [
      faq("Do you sell a branded BI product?", "هل تبيعون منتج ذكاء أعمال بعلامتكم؟", "We build warehousing, lakes, BI dashboards, and pipelines. We do not invent a named analytics product that is not in the catalog.", "نبنى المستودعات والبحيرات ولوحات ذكاء الأعمال والمسارات. لا نخترع منتج تحليلات مسمّى غير موجود في الفهرس."),
    ],
  },
  {
    slug: "it-consulting",
    icon: "Compass",
    category: "catalog",
    title: L("IT Consulting", "استشارات تقنية المعلومات"),
    shortTitle: L("Consulting", "الاستشارات"),
    tagline: L("Discovery, architecture, CTO support, and modernization maps.", "اكتشاف وهيكلة ودعم CTO وخرائط تحديث."),
    description: L(
      "Strategic technology guidance for digital transformation and product discovery.",
      "إرشاد تقني استراتيجي للتحول الرقمي واكتشاف المنتجات.",
    ),
    overview: L(
      "Consulting covers digital transformation, technology consulting and product discovery, CTO as a Service and software architecture, and legacy modernization and IT roadmaps. It is how we help you decide what to build before a large construction program.",
      "تغطي الاستشارات التحول الرقمي والاستشارات التقنية واكتشاف المنتجات وCTO كخدمة وهندسة البرمجيات وتحديث الأنظمة القديمة وخرائط تقنية المعلومات. هكذا نساعدكم على تقرير ما يُبنى قبل برنامج إنشاء كبير.",
    ),
    problems: LL(
      [
        "A transformation slogan with no sequenced work",
        "Legacy systems nobody wants to own, and no map off them",
        "Architecture debates with no product discovery underneath",
        "No senior technical counterpart for the executive team",
      ],
      [
        "شعار تحول بلا عمل متسلسل",
        "أنظمة قديمة لا يريد أحد ملكيتها ولا خريطة للخروج منها",
        "جدل هيكلة بلا اكتشاف منتج تحته",
        "لا مقابل تقني كبير لفريق الإدارة",
      ],
    ),
    approach: LL(
      [
        "Start with the operating constraint, not a tool shortlist",
        "Discover the product and the architecture in the same conversation",
        "Sequence modernization so the business can keep running",
        "Offer CTO-as-a-Service when you need a standing technical lead",
      ],
      [
        "نبدأ بالقيد التشغيلي وليس بقائمة أدوات",
        "نكتشف المنتج والهيكلة في الحوار نفسه",
        "نسلسل التحديث حتى يستمر العمل",
        "نقدم CTO كخدمة عندما تحتاجون قيادة تقنية قائمة",
      ],
    ),
    capabilities: LL(
      [
        "Digital transformation",
        "Technology consulting and product discovery",
        "CTO as a Service and software architecture",
        "Legacy modernization and IT roadmap",
      ],
      [
        "التحول الرقمي",
        "استشارات تقنية واكتشاف المنتجات",
        "CTO كخدمة وهندسة البرمجيات",
        "تحديث الأنظمة القديمة وخارطة تقنية المعلومات",
      ],
    ),
    benefits: LL(
      [
        "A roadmap you can fund in stages",
        "Architecture that matches the product, not a fashion",
        "A modernization path that does not require a freeze",
        "Optional ongoing CTO-level guidance",
      ],
      [
        "خارطة يمكن تمويلها على مراحل",
        "هيكلة تطابق المنتج وليس الموضة",
        "مسار تحديث لا يتطلب تجميداً",
        "إرشاد مستمر اختياري على مستوى CTO",
      ],
    ),
    technologies: ["AWS", "Azure", "GCP", "TypeScript", "Python"],
    relatedIndustries: ["government", "manufacturing", "healthcare", "telecommunications"],
    relatedServices: ["custom-software-development", "cloud-devops", "dedicated-development-teams"],
    faqs: [
      faq("Is consulting only slides?", "هل الاستشارات شرائح فقط؟", "Discovery and roadmaps are the point of this line. Many clients continue into delivery with the same team.", "الاكتشاف والخرائط هي نقطة هذا الخط. كثير من العملاء يستمرون إلى التسليم مع الفريق نفسه."),
    ],
  },
  {
    slug: "maintenance-support",
    icon: "LifeBuoy",
    category: "catalog",
    title: L("Maintenance & Support", "الصيانة والدعم"),
    shortTitle: L("Support", "الدعم"),
    tagline: L("Keep systems current, watched, and inside an SLA.", "إبقاء الأنظمة محدّثة ومراقبة وداخل اتفاقية مستوى خدمة."),
    description: L(
      "Keep your systems running smoothly with ongoing maintenance, monitoring, and enhancements.",
      "إبقاء أنظمتكم تعمل بسلاسة عبر الصيانة والمراقبة والتحسينات المستمرة.",
    ),
    overview: L(
      "After launch, products still need owners. We provide application maintenance and modernization, cloud support and performance optimization, and 24/7 monitoring, bug fixes, and SLA support.",
      "بعد الإطلاق ما زالت المنتجات تحتاج مالكين. نوفر صيانة التطبيقات وتحديثها ودعم السحابة وتحسين الأداء ومراقبة على مدار الساعة وإصلاح الأخطاء ودعم اتفاقية مستوى الخدمة.",
    ),
    problems: LL(
      [
        "A launch team that moved on and left production unattended",
        "Bugs that wait until they become incidents",
        "Cloud cost and performance that nobody reviews",
        "No agreed response time when something breaks",
      ],
      [
        "فريق إطلاق انتقل وترك الإنتاج دون رعاية",
        "أخطاء تنتظر حتى تصبح حوادث",
        "تكلفة سحابة وأداء لا يراجعهما أحد",
        "لا زمن استجابة متفق عليه عند العطل",
      ],
    ),
    approach: LL(
      [
        "Put monitoring and an on-call path in place before promising an SLA",
        "Fix defects on a cadence, and modernize where the stack is ageing",
        "Optimize the cloud path as part of support, not as a separate project only",
        "Write down what 24/7 coverage includes for your product",
      ],
      [
        "نضع المراقبة ومسار المناوبة قبل وعد اتفاقية مستوى الخدمة",
        "نصلح العيوب بإيقاع ونحدّث حيث تشيخ المجموعة",
        "نحسن المسار السحابي ضمن الدعم وليس كمشروع منفصل فقط",
        "نكتب ما تشمله التغطية على مدار الساعة لمنتجكم",
      ],
    ),
    capabilities: LL(
      [
        "Application maintenance and modernization",
        "Cloud support and performance optimization",
        "24/7 monitoring, bug fixes, and SLA support",
      ],
      [
        "صيانة التطبيقات وتحديثها",
        "دعم السحابة وتحسين الأداء",
        "مراقبة 24/7 وإصلاح الأخطاء ودعم اتفاقية مستوى الخدمة",
      ],
    ),
    benefits: LL(
      [
        "Someone accountable after go-live",
        "A defined SLA instead of ad-hoc chats",
        "Performance and cost kept in view",
        "A path to modernize without a full rewrite",
      ],
      [
        "شخص مسؤول بعد الإطلاق",
        "اتفاقية مستوى خدمة محددة بدل دردشات عشوائية",
        "الأداء والتكلفة تحت النظر",
        "مسار للتحديث دون إعادة كتابة كاملة",
      ],
    ),
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    relatedIndustries: ["healthcare", "fintech-banking", "government", "telecommunications"],
    relatedServices: ["cloud-devops", "cybersecurity", "dedicated-development-teams"],
    faqs: [
      faq("Is 24/7 included by default?", "هل الدعم على مدار الساعة مضمّن افتراضياً؟", "24/7 monitoring, bug fixes, and SLA support are available in this service. The exact coverage window is set in the engagement.", "المراقبة على مدار الساعة وإصلاح الأخطاء ودعم اتفاقية مستوى الخدمة متاحة في هذه الخدمة. نافذة التغطية تُحدد في التعاون."),
    ],
  },
];

export const featuredServiceSlugs = [
  "ai-intelligent-automation",
  "custom-software-development",
  "web-development",
  "mobile-app-development",
  "cloud-devops",
  "cybersecurity",
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices() {
  return featuredServiceSlugs.map((slug) => getService(slug)!);
}

export function getCatalogServices() {
  return services.filter((s) => s.category !== "specialized");
}

export function getChildServices(parentSlug: string) {
  return services.filter((s) => s.parentSlug === parentSlug);
}
