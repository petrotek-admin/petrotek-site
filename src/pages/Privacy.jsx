// src/pages/Privacy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

const maroon = "#972037";
const EFFECTIVE_DATE = "October 27, 2026";

const sections = [
  {
    title: "1. Who We Are and What This Policy Covers",
    body: [
      "This Privacy Policy explains how Petrotek Corporation (\"Petrotek,\" \"we,\" \"us,\" or \"our\") collects, uses, and shares information when you visit this website (the \"Site\"). It applies only to the Site, not to information we receive through client engagements, which is governed by the agreements for those services.",
      "By using the Site, you acknowledge the practices described here. Please also review our Terms of Use."
    ]
  },
  {
    title: "2. Information We Collect",
    list: [
      "Information you give us: if you use the contact form, we collect your first name, last name, email address, and the contents of your message. If you submit a publication request, the Microsoft Form we embed collects the information it asks for (for example, your name, organization, and email) along with the publication you are requesting.",
      "Information collected automatically: like most websites, our hosting and analytics tools receive technical data such as your IP address, browser type and version, device type, operating system, pages viewed, referring page, approximate location (city or region level), and the date and time of your visit.",
      "Information from security tools: Google reCAPTCHA analyzes your interaction with the contact form (for example, mouse movement, device and browser information, and IP address) to tell humans from bots."
    ],
    after: "We do not intentionally collect sensitive personal information through the Site, and we ask that you do not include any in your messages."
  },
  {
    title: "3. How We Use Information",
    list: [
      "To respond to your inquiries and requests, including sending you requested publications",
      "To operate, maintain, secure, and improve the Site",
      "To prevent spam, fraud, and abuse",
      "To understand how the Site is used and which content is most useful",
      "To comply with legal obligations and enforce our Terms of Use"
    ],
    after: "We may also use your contact details to follow up about your inquiry or about Petrotek services related to it. We do not send marketing email lists through the Site, and you can ask us at any time not to contact you further."
  },
  {
    title: "4. Cookies and Analytics",
    body: [
      "We use Vercel Analytics and Vercel Speed Insights to measure traffic and page performance. These tools are designed to collect aggregated usage and performance data without using third-party advertising cookies or tracking you across other websites.",
      "Google reCAPTCHA, which loads on our contact form, may set cookies or use similar technologies and is governed by Google's Privacy Policy and Terms of Service. Embedded YouTube videos may also set cookies or collect data when you load or play them.",
      "Most browsers let you block or delete cookies in their settings. Blocking cookies may prevent the contact form's reCAPTCHA from working."
    ]
  },
  {
    title: "5. Who We Share Information With",
    body: [
      "We do not sell your personal information, and we do not share it for third-party advertising. We share information only as described below:"
    ],
    list: [
      "Service providers that help us run the Site, including Vercel (hosting, analytics, and performance monitoring), Microsoft (email delivery of contact form messages and the publication request form), and Google (reCAPTCHA). They may process your information only to provide services to us.",
      "Third-party content providers: when your browser loads content from outside services, such as YouTube videos, OpenStreetMap map tiles, and some images hosted on other websites, those providers can see your IP address and basic browser information.",
      "Legal and safety reasons: we may disclose information if required by law, subpoena, or legal process, or to protect the rights, property, or safety of Petrotek, our clients, or others.",
      "Business transfers: if Petrotek is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction."
    ]
  },
  {
    title: "6. Data Retention",
    body: [
      "We keep contact form messages and publication requests for as long as needed to respond and to maintain our business records, and then delete or archive them in accordance with our internal practices. Analytics data is retained according to the settings and policies of our analytics providers. We may keep information longer when required by law or to resolve disputes."
    ]
  },
  {
    title: "7. Security",
    body: [
      "We use reasonable administrative and technical measures to protect information submitted through the Site, including encrypted (HTTPS) connections. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. Please do not send confidential, proprietary, or privileged information through the Site's forms."
    ]
  },
  {
    title: "8. Your Choices and Rights",
    body: [
      "You may contact us at any time to ask what personal information we hold about you, or to request that we correct or delete it, subject to legal and business record-keeping requirements. You may also ask us to stop contacting you.",
      "Depending on where you live, you may have additional rights under state privacy laws, such as the right to access, correct, delete, or obtain a copy of your personal data, and to opt out of the sale or sharing of personal data or targeted advertising. Because we do not sell personal information or use it for targeted advertising, there is generally nothing to opt out of, but you can still contact us with any request and we will respond as required by applicable law.",
      "To make a request, please use the contact button in the Contact section below. We may need to verify your identity before acting on a request."
    ]
  },
  {
    title: "9. Children's Privacy",
    body: [
      "The Site is intended for business and professional audiences and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it."
    ]
  },
  {
    title: "10. Third-Party Websites",
    body: [
      "The Site links to other websites, such as government agency pages, that we do not control. This Privacy Policy does not apply to them, and we encourage you to read their privacy policies."
    ]
  },
  {
    title: "11. International Visitors",
    body: [
      "The Site is operated from the United States. If you access it from outside the United States, you understand that your information will be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your country."
    ]
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The \"Effective Date\" above shows when it was last revised. Material changes will be posted on this page, and your continued use of the Site after changes are posted means you accept the updated policy."
    ]
  }
];

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-8xl mx-auto">

          <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Petrotek Corporation &middot; Effective {EFFECTIVE_DATE}
            </p>
            <div className="w-24 h-1 mt-6" style={{ backgroundColor: maroon }}></div>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.body?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 mt-2 mr-3 rounded-full flex-shrink-0" style={{ backgroundColor: maroon }}></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.after && <p>{section.after}</p>}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="mb-4">For questions about this Privacy Policy or to make a privacy request, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4" style={{ borderColor: maroon }}>
                <p className="font-bold text-gray-900 m-0">Petrotek Corporation</p>
                <p className="m-0">5935 South Zang Street, Suite 200</p>
                <p className="m-0">Littleton, Colorado 80127</p>
                <p className="m-0 mb-6">
                  Phone: <a href="tel:3032909414" className="hover:underline" style={{ color: maroon }}>(303) 290-9414</a>
                </p>
                <Link
                  to="/"
                  onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
                  className="inline-flex items-center px-6 py-3 text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-md"
                  style={{ backgroundColor: maroon }}
                >
                  Contact Us <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Privacy;