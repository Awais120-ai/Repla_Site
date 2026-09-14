import { L, LL, type Insight } from "./types";

export const insights: Insight[] = [
  {
    slug: "ai-agents-in-operations",
    title: L(
      "What an AI agent has to do before it belongs in operations",
      "ما يجب أن يفعله وكيل الذكاء الاصطناعي قبل أن ينتمي إلى العمليات",
    ),
    excerpt: L(
      "Agents are useful when they complete a workflow you already run — not when they only chat. How REPLA scopes that work.",
      "الوكلاء مفيدون عندما يكملون سيراً تشغّلونه أصلاً — وليس عندما يتحدثون فقط. كيف تحدد REPLA نطاق هذا العمل.",
    ),
    relatedServices: ["ai-intelligent-automation", "api-development"],
    body: LL(
      [
        "An AI agent earns a place in operations when it can take a defined action, in a defined system, with a defined failure path. A chat window that restates policy is a demo. A process that creates a ticket, updates a record, or drafts a decision for a human to confirm is closer to work.",
        "REPLA’s AI catalog is built around that distinction: agent development, LLM integration, workflow automation, multi-agent systems, and enterprise integration. The first design question is not which model. It is which step in the current process is slow, error-prone, or trapped in a mailbox.",
        "Integration is the unglamorous half. Agents that cannot read the CRM, ERP, or internal API will invent answers. That is why API development and software delivery sit next to AI on this site — the model is a component, not the product.",
        "Supervision is the other half. High-impact steps need a human review path. Monitoring after launch is part of the same job: quality, cost, and the cases the model still fails. None of this requires invented client names. It is how the service is actually sold.",
        "If you are scoping an agent, bring the workflow, the systems of record, and the risk you will not automate. We will map capabilities from the catalog — agents, chatbots, vision, or analytics — to that constraint.",
      ],
      [
        "يستحق وكيل الذكاء الاصطناعي مكاناً في العمليات عندما يستطيع اتخاذ إجراء محدد في نظام محدد مع مسار فشل محدد. نافذة دردشة تعيد صياغة السياسة عرض. عملية تنشئ تذكرة أو تحدّث سجلاً أو تعدّ قراراً ليؤكده إنسان أقرب إلى العمل.",
        "فهرس الذكاء الاصطناعي لدى REPLA مبني على هذا التمييز: تطوير وكلاء وتكامل نماذج لغة وأتمتة سير عمل وأنظمة متعددة الوكلاء وتكامل مؤسسي. سؤال التصميم الأول ليس أي نموذج. بل أي خطوة في العملية الحالية بطيئة أو عرضة للخطأ أو محتجزة في صندوق بريد.",
        "التكامل هو النصف غير المبهر. الوكلاء الذين لا يقرأون CRM أو ERP أو الواجهة الداخلية سيختلقون إجابات. لذلك يجلس تطوير الواجهات وتسليم البرمجيات بجانب الذكاء الاصطناعي في هذا الموقع — النموذج مكوّن وليس المنتج.",
        "الإشراف هو النصف الآخر. الخطوات عالية الأثر تحتاج مسار مراجعة بشرية. المراقبة بعد الإطلاق جزء من المهمة نفسها: الجودة والتكلفة والحالات التي ما زال النموذج يفشل فيها. لا يتطلب هذا أسماء عملاء مخترعة. هكذا تُباع الخدمة فعلاً.",
        "إذا كنتم تحددون نطاق وكيل، أحضروا سير العمل وأنظمة السجلات والخطر الذي لن تؤتمتوه. سنربط قدرات الفهرس — وكلاء أو روبوتات أو رؤية أو تحليلات — بذلك القيد.",
      ],
    ),
  },
  {
    slug: "custom-software-when-packages-fail",
    title: L(
      "When packaged software is the bottleneck",
      "عندما تكون البرمجيات الجاهزة هي عنق الزجاجة",
    ),
    excerpt: L(
      "CRM, ERP, and industry rules that do not fit a catalog SKU. How custom software is scoped at REPLA.",
      "CRM وERP وقواعد قطاع لا تناسب وحدة جاهزة. كيف يُحدد نطاق البرمجيات المخصصة في REPLA.",
    ),
    relatedServices: ["custom-software-development", "it-consulting"],
    body: LL(
      [
        "Packaged software is the right answer when your process is common. It is the wrong answer when staff spend the day in workarounds, exports, and side systems. REPLA’s custom software practice exists for that gap: enterprise software, SaaS products, CRM and ERP, HRMS, healthcare and fintech applications, marketplaces, and internal tools.",
        "The consulting line exists so you do not have to guess. Product discovery and architecture should decide whether to extend what you have through APIs or to build a system of record. That decision is cheaper than a year of configuring a product that cannot encode the rule.",
        "Delivery is sliced. A module that can go live beats a multi-year replacement that never ships. APIs are part of the same design so payments, partners, and later AI features are not bolted on.",
        "If you are choosing between a package and a build, bring the process that the package cannot name. We will tell you if integration is enough — and when it is not.",
      ],
      [
        "البرمجيات الجاهزة إجابة صحيحة عندما تكون عمليتكم شائعة. وهي إجابة خاطئة عندما يقضي الموظفون يومهم في حلول ملتوية وتصدير وأنظمة جانبية. ممارسة البرمجيات المخصصة في REPLA لهذا الفراغ: برمجيات مؤسسات ومنتجات SaaS وCRM وERP وموارد بشرية وتطبيقات صحة ومال وأسواق وأدوات داخلية.",
        "خط الاستشارات موجود حتى لا تخمّنوا. اكتشاف المنتج والهيكلة يجب أن يقررا توسيع ما لديكم عبر واجهات أو بناء نظام سجلات. هذا القرار أرخص من عام في ضبط منتج لا يرمّز القاعدة.",
        "التسليم شرائح. وحدة يمكن تشغيلها تتفوق على استبدال لسنوات لا يُشحن. الواجهات جزء من التصميم نفسه حتى لا تُضاف المدفوعات والشركاء وميزات الذكاء الاصطناعي لاحقاً كملحق.",
        "إذا كنتم تختارون بين حزمة وبناء، أحضروا العملية التي لا تستطيع الحزمة تسميتها. سنقول إن كان التكامل كافياً — ومتى لا يكون.",
      ],
    ),
  },
  {
    slug: "cloud-delivery-that-teams-can-run",
    title: L(
      "Cloud delivery your team can actually run",
      "تسليم سحابي يستطيع فريقكم تشغيله فعلاً",
    ),
    excerpt: L(
      "AWS, Azure, GCP, containers, and CI/CD are tools. The product is a path from commit to production.",
      "AWS وAzure وGCP والحاويات وCI/CD أدوات. المنتج مسار من الالتزام إلى الإنتاج.",
    ),
    relatedServices: ["cloud-devops", "maintenance-support"],
    body: LL(
      [
        "Cloud & DevOps on this site is not a list of logos for decoration. It is AWS, Azure, and Google Cloud, Docker and Kubernetes, CI/CD and infrastructure as code, migration, monitoring, and cost. The test is whether a change can reach production without a hero.",
        "Kubernetes is optional. Some products need it; others need a simpler container path. Matching the platform to the operational load is part of the job. So is cost: spend that grows without reliability is a delivery failure.",
        "Maintenance sits next to this work because launch is not ownership. 24/7 monitoring and SLA support exist so production is not abandoned when the project team leaves.",
        "If you are planning a migration, bring the current environments and the release pain. We will sequence waves with rollback rather than a single cutover story.",
      ],
      [
        "السحابة وDevOps في هذا الموقع ليست قائمة شعارات للزينة. إنها AWS وAzure وGoogle Cloud وDocker وKubernetes وCI/CD والبنية كرمز والترحيل والمراقبة والتكلفة. الاختبار هو إن كان التغيير يصل إلى الإنتاج دون بطل.",
        "Kubernetes اختياري. بعض المنتجات تحتاجه؛ وأخرى تحتاج مسار حاويات أبسط. مطابقة المنصة للحمل التشغيلي جزء من المهمة. وكذلك التكلفة: إنفاق ينمو بلا موثوقية فشل تسليم.",
        "الصيانة تجاور هذا العمل لأن الإطلاق ليس ملكية. المراقبة على مدار الساعة ودعم اتفاقية مستوى الخدمة موجودان حتى لا يُهجر الإنتاج عندما يغادر فريق المشروع.",
        "إذا خططتم لترحيل، أحضروا البيئات الحالية وألم الإصدار. سنسلسل موجات مع تراجع بدل قصة قطع واحدة.",
      ],
    ),
  },
  {
    slug: "security-in-the-same-backlog",
    title: L(
      "Security findings belong in the same backlog as features",
      "نتائج الأمن تنتمي إلى قائمة العمل نفسها مع الميزات",
    ),
    excerpt: L(
      "Audits, API security, IAM, and monitoring — treated as product work, not a PDF that expires.",
      "تدقيق وأمن واجهات وإدارة هوية ومراقبة — كعمل منتج وليس ملفاً ينتهي.",
    ),
    relatedServices: ["cybersecurity", "quality-assurance"],
    body: LL(
      [
        "Cybersecurity in the REPLA catalog includes audits and penetration testing, application and API security, cloud security and IAM, vulnerability assessment, and SOC-style monitoring. The failure mode is a report that never becomes a ticket.",
        "QA is the sibling practice: API, performance, security, regression, and load testing. Shipping faster than you can test is how incidents are scheduled. Putting both practices in the same program is how you slow that down without freezing the product.",
        "We do not list certifications this company has not published. The honest offer is the work: find issues, fix them in the product, keep watching.",
        "If you need a starting point, begin with the APIs and identity paths that face partners or customers. That is usually where the first real findings are.",
      ],
      [
        "يشمل الأمن السيبراني في فهرس REPLA التدقيق واختبار الاختراق وأمن التطبيقات والواجهات وأمن السحابة وإدارة الهوية وتقييم الثغرات ومراقبة بأسلوب مركز عمليات. نمط الفشل تقرير لا يصبح تذكرة أبداً.",
        "ضمان الجودة الممارسة الشقيقة: اختبار واجهات وأداء وأمن وانحدار وحمل. الشحن أسرع مما يمكن اختباره هو جدولة حوادث. وضع الممارستين في البرنامج نفسه هو إبطاء ذلك دون تجميد المنتج.",
        "لا ندرج شهادات لم تنشرها الشركة. العرض الصادق هو العمل: إيجاد المشكلات وإصلاحها في المنتج والاستمرار في المراقبة.",
        "إذا احتجتم نقطة بداية، ابدأوا بالواجهات ومسارات الهوية التي تواجه الشركاء أو العملاء. هناك عادة أول نتائج حقيقية.",
      ],
    ),
  },
  {
    slug: "dedicated-teams-vs-projects",
    title: L(
      "Dedicated teams versus a project — choosing the engagement",
      "فرق مخصصة مقابل مشروع — اختيار شكل التعاون",
    ),
    excerpt: L(
      "When you need a pod that stays, not a vendor that vanishes between milestones.",
      "عندما تحتاجون فريقاً يبقى، وليس مورداً يختفي بين المعالم.",
    ),
    relatedServices: ["dedicated-development-teams", "it-consulting"],
    body: LL(
      [
        "REPLA sells both projects and capacity. Dedicated developers, offshore development center, team augmentation, outsourcing, and managed IT teams with technical project management are listed for a reason: some roadmaps outrun a statement of work.",
        "A project is right when the outcome is bounded. A dedicated team is right when the backlog is continuous and hiring cannot match the window. Managed teams add planning and reporting when you want that owned.",
        "Headquarters are in Riyadh with delivery worldwide. We do not invent extra office cities on this page. Location and timezone rules are part of the engagement, not marketing.",
        "If you are unsure, start with discovery. Consulting can tell you whether you need a build, a team, or both.",
      ],
      [
        "تبيع REPLA مشاريع وقدرة. المطورون المخصصون ومركز التطوير الخارجي وتعزيز الفريق والتعهيد وفرق تقنية مُدارة مع إدارة مشاريع مذكورة لسبب: بعض خرائط الطريق تتجاوز بيان عمل.",
        "المشروع مناسب عندما تكون النتيجة محدودة. الفريق المخصص مناسب عندما تكون قائمة العمل مستمرة والتوظيف لا يطابق النافذة. الفرق المُدارة تضيف تخطيطاً وتقريراً عندما تريدون ملكية ذلك.",
        "المقر في الرياض والتسليم عالمي. لا نخترع مدن مكاتب إضافية في هذه الصفحة. الموقع وقواعد المنطقة الزمنية جزء من التعاون وليس التسويق.",
        "إذا كنتم غير متأكدين، ابدأوا بالاكتشاف. الاستشارات تستطيع أن تقول إن كنتم تحتاجون بناء أو فريقاً أو كليهما.",
      ],
    ),
  },
  {
    slug: "iot-lockers-and-the-operating-picture",
    title: L(
      "IoT that operators can actually use",
      "إنترنت أشياء يستطيع المشغّلون استخدامه فعلاً",
    ),
    excerpt: L(
      "Lockers, RFID, GPS, and sensors only matter if they show up in the same product the staff already run.",
      "الخزائن وRFID وGPS والمستشعرات لا تهم إلا إذا ظهرت في المنتج الذي يشغّله الموظفون.",
    ),
    relatedServices: ["iot-embedded-systems", "custom-software-development"],
    body: LL(
      [
        "IoT in the catalog is platforms, industrial and home automation, smart lockers and RFID, GPS and sensors, and hardware–software integration. The Smart Locker & IoT solution is the named offering on top of that line.",
        "Devices that report into a dashboard nobody opens are decoration. The design starts with the event, the identity of the device, and the action — unlock, alert, track, restock. Then the platform path: ingest, rules, operator UI.",
        "We do not claim a hardware factory. Device supply is project-specific. The software contract between firmware and cloud is not.",
        "If you are specifying lockers or tracking, bring the operator’s day, not only the cabinet drawing. That is the difference between a pilot that stalls and a system that runs.",
      ],
      [
        "إنترنت الأشياء في الفهرس منصات وأتمتة صناعية ومنزلية وخزائن ذكية وRFID وGPS ومستشعرات وتكامل عتاد وبرمجيات. حل الخزائن الذكية وإنترنت الأشياء هو العرض المسمّى فوق هذا الخط.",
        "الأجهزة التي ترسل إلى لوحة لا يفتحها أحد زينة. التصميم يبدأ بالحدث وهوية الجهاز والإجراء — فتح أو تنبيه أو تتبع أو إعادة تموين. ثم مسار المنصة: إدخال وقواعد وواجهة مشغّل.",
        "لا ندّعي مصنعاً للعتاد. توريد الأجهزة خاص بالمشروع. عقد البرمجيات بين البرنامج الثابت والسحابة ليس كذلك.",
        "إذا كنتم تحددون خزائن أو تتبعاً، أحضروا يوم المشغّل وليس رسم الخزانة فقط. ذلك الفرق بين تجربة تتوقف ونظام يعمل.",
      ],
    ),
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}
