import { COMPANY } from "@/lib/site";
import { L, LL } from "./types";

export const privacy = {
  title: L("Privacy Policy", "سياسة الخصوصية"),
  updated: L("Last updated: 2026", "آخر تحديث: 2026"),
  sections: [
    {
      title: L("Who we are", "من نحن"),
      body: LL(
        [
          `${COMPANY.legalName} (“REPLA”, “we”) operates this website to describe our services and to receive inquiries. Headquarters: ${COMPANY.address}. Contact: ${COMPANY.email}, ${COMPANY.phone}.`,
        ],
        [
          `تشغّل ${COMPANY.legalName} («REPLA») هذا الموقع لوصف خدماتنا واستقبال الاستفسارات. المقر: ${COMPANY.address}. التواصل: ${COMPANY.email}، ${COMPANY.phone}.`,
        ],
      ),
    },
    {
      title: L("What we collect", "ما نجمعه"),
      body: LL(
        [
          "If you submit the contact or careers form, we process the fields you enter: name, email, phone (optional), subject, and message. Server logs may include IP address, user agent, and the pages requested.",
          "We do not sell personal information. We do not run a hidden analytics product that we have not disclosed here.",
        ],
        [
          "إذا أرسلتم نموذج التواصل أو الوظائف، نعالج الحقول التي تدخلونها: الاسم والبريد والهاتف (اختياري) والموضوع والرسالة. قد تتضمن سجلات الخادم عنوان IP ووكيل المستخدم والصفحات المطلوبة.",
          "لا نبيع المعلومات الشخصية. لا نشغّل منتج تحليلات مخفياً لم نفصح عنه هنا.",
        ],
      ),
    },
    {
      title: L("Why we process it", "لماذا نعالجها"),
      body: LL(
        [
          "To respond to inquiries, route them inside REPLA, improve the reliability of the site, and meet legal obligations that apply to us.",
        ],
        [
          "للرد على الاستفسارات وتوجيهها داخل REPLA وتحسين موثوقية الموقع والوفاء بالالتزامات القانونية التي تنطبق علينا.",
        ],
      ),
    },
    {
      title: L("Email delivery", "إرسال البريد"),
      body: LL(
        [
          "If an email delivery key is configured, your form submission may be sent to our HR mailbox. If it is not configured, the site will tell you and you should write to us directly.",
        ],
        [
          "إذا كان مفتاح إرسال البريد مضبوطاً، قد تُرسل مشاركتكم إلى صندوق الموارد البشرية. إذا لم يكن مضبوطاً، سيخبركم الموقع وعليكم مراسلتنا مباشرة.",
        ],
      ),
    },
    {
      title: L("Retention and rights", "الاحتفاظ والحقوق"),
      body: LL(
        [
          "We keep inquiry records as long as needed to handle your request and our records requirements. You may ask what we hold about a submission by emailing HR. Applicable data-protection law in your location may give you additional rights.",
        ],
        [
          "نحتفظ بسجلات الاستفسار طالما لزم لمعالجة طلبكم ومتطلبات السجلات. يمكنكم السؤال عما نحتفظ به حول مشاركة عبر بريد الموارد البشرية. قد يمنحكم قانون حماية البيانات في موقعكم حقوقاً إضافية.",
        ],
      ),
    },
    {
      title: L("International transfers", "النقل الدولي"),
      body: LL(
        [
          "We serve organizations in Saudi Arabia and worldwide. Your message may be accessed by REPLA staff outside your country as needed to respond.",
        ],
        [
          "نخدم مؤسسات في السعودية والعالم. قد يطلع موظفو REPLA على رسالتكم خارج بلدكم حسب الحاجة للرد.",
        ],
      ),
    },
  ],
};

export const terms = {
  title: L("Terms & Conditions", "الشروط والأحكام"),
  updated: L("Last updated: 2026", "آخر تحديث: 2026"),
  sections: [
    {
      title: L("Using this website", "استخدام هذا الموقع"),
      body: LL(
        [
          `This site is provided by ${COMPANY.legalName} for information about our services. It does not, by itself, create a client engagement. Project work starts only when both sides agree in writing.`,
        ],
        [
          `يقدَّم هذا الموقع من ${COMPANY.legalName} للتعريف بخدماتنا. لا ينشئ بذاته تعاقد عميل. يبدأ عمل المشروع فقط عند اتفاق الطرفين كتابة.`,
        ],
      ),
    },
    {
      title: L("Accuracy", "الدقة"),
      body: LL(
        [
          "We describe services, industries, and solutions we offer. We do not invent clients, awards, team biographies, or case results on this site. Statistics shown are limited to facts we publish: founding year, service and industry counts, and headquarters country.",
        ],
        [
          "نصف الخدمات والصناعات والحلول التي نقدمها. لا نخترع عملاء أو جوائز أو سير فرق أو نتائج حالات على هذا الموقع. الإحصاءات المعروضة محدودة بوقائع ننشرها: سنة التأسيس وعدد الخدمات والصناعات وبلد المقر.",
        ],
      ),
    },
    {
      title: L("Intellectual property", "الملكية الفكرية"),
      body: LL(
        [
          "The REPLA name, logo, and site content are owned by REPLA unless noted otherwise. You may not copy the site as a product or reuse the brand without permission.",
        ],
        [
          "اسم REPLA والشعار ومحتوى الموقع مملوكة لـ REPLA ما لم يُذكر خلاف ذلك. لا يجوز نسخ الموقع كمنتج أو إعادة استخدام العلامة دون إذن.",
        ],
      ),
    },
    {
      title: L("Inquiries", "الاستفسارات"),
      body: LL(
        [
          "Messages sent through the form or to HR are confidential to the extent we can reasonably keep them so inside REPLA. Do not send secrets or regulated data through the public form.",
        ],
        [
          "الرسائل عبر النموذج أو إلى الموارد البشرية سرية بالقدر الذي يمكننا حفظه داخل REPLA. لا ترسلوا أسراراً أو بيانات خاضعة للتنظيم عبر النموذج العام.",
        ],
      ),
    },
    {
      title: L("Liability", "المسؤولية"),
      body: LL(
        [
          "The site is provided as-is. To the extent allowed by law, REPLA is not liable for losses from using or being unable to use the site. Service engagements have their own terms.",
        ],
        [
          "يُقدَّم الموقع كما هو. بالقدر الذي يسمح به القانون، لا تُسأل REPLA عن خسائر من استخدام الموقع أو تعذر استخدامه. لتعاقدات الخدمة شروطها الخاصة.",
        ],
      ),
    },
    {
      title: L("Contact", "التواصل"),
      body: LL(
        [
          `Questions about these terms: ${COMPANY.email} or ${COMPANY.phone}.`,
        ],
        [
          `أسئلة حول هذه الشروط: ${COMPANY.email} أو ${COMPANY.phone}.`,
        ],
      ),
    },
  ],
};
