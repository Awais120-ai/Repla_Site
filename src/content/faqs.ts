import { L, type FaqItem } from "./types";

const Q = (qEn: string, qAr: string, aEn: string, aAr: string): FaqItem => ({
  q: L(qEn, qAr),
  a: L(aEn, aAr),
});

export const generalFaqs: FaqItem[] = [
  Q(
    "Where is REPLA Technologies based?",
    "أين يقع مقر REPLA Technologies؟",
    "REPLA Technologies Pvt. Ltd. is headquartered in Riyadh, Saudi Arabia (founded 2019), with teams delivering worldwide.",
    "REPLA Technologies Pvt. Ltd. مقرها الرياض، المملكة العربية السعودية (تأسست 2019)، مع فرق تقدم حلولاً على مستوى العالم.",
  ),
  Q(
    "What do you actually build?",
    "ماذا تبنون فعلاً؟",
    "AI and intelligent automation, custom software, web and mobile, cloud and DevOps, cybersecurity, IoT, UI/UX, QA, APIs, dedicated teams, plus catalog lines for blockchain/Web3, data, consulting, and maintenance.",
    "الذكاء الاصطناعي والأتمتة الذكية والبرمجيات المخصصة والويب والجوال والسحابة وDevOps والأمن السيبراني وإنترنت الأشياء وتصميم الواجهات وضمان الجودة والواجهات البرمجية والفرق المخصصة، إضافة إلى خطوط البلوك تشين/Web3 والبيانات والاستشارات والصيانة.",
  ),
  Q(
    "Do you publish client names and case studies?",
    "هل تنشرون أسماء العملاء ودراسات الحالة؟",
    "Not on this website yet. The portfolio page is reserved for work we can publish. Until then we will not invent projects or testimonials.",
    "ليس على هذا الموقع بعد. صفحة الأعمال محفوظة لما يمكن نشره. حتى ذلك الحين لن نخترع مشاريع أو شهادات.",
  ),
  Q(
    "How do we start a project?",
    "كيف نبدأ مشروعاً؟",
    "Use the contact form or email hr.replatech@gmail.com. HR will route the inquiry. If this environment cannot send email, the form will say so.",
    "استخدموا نموذج التواصل أو راسلوا hr.replatech@gmail.com. الموارد البشرية ستوجّه الاستفسار. إذا لم تستطع هذه البيئة إرسال البريد، سيوضح النموذج ذلك.",
  ),
  Q(
    "Do you offer dedicated teams?",
    "هل تقدمون فرقاً مخصصة؟",
    "Yes. Dedicated developers, offshore development center, team augmentation, outsourcing, and managed IT teams with technical project management.",
    "نعم. مطورون مخصصون ومركز تطوير خارجي وتعزيز فريق وتعهيد وفرق تقنية مُدارة مع إدارة مشاريع تقنية.",
  ),
  Q(
    "Which languages does the site support?",
    "ما اللغات التي يدعمها الموقع؟",
    "English and Arabic, including a right-to-left layout for Arabic.",
    "الإنجليزية والعربية، بما في ذلك تخطيط من اليمين إلى اليسار للعربية.",
  ),
  Q(
    "Is there a public list of job openings?",
    "هل توجد قائمة وظائف عامة؟",
    "No fabricated openings. Open applications go to HR through the careers page or hr.replatech@gmail.com.",
    "لا وظائف مختلقة. الطلبات المفتوحة تُرسل إلى الموارد البشرية عبر صفحة الوظائف أو hr.replatech@gmail.com.",
  ),
];
