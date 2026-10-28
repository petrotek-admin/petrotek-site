// src/pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, FileText } from 'lucide-react';

const maroon = "#972037";
const EFFECTIVE_DATE = "October 27, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms of Use (the \"Terms\") govern your access to and use of this website and any content, features, and forms available on it (the \"Site\"), which is owned and operated by Petrotek Corporation (\"Petrotek,\" \"we,\" \"us,\" or \"our\"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
      "We may update these Terms from time to time. The \"Effective Date\" above shows when they were last revised. Your continued use of the Site after changes are posted means you accept the revised Terms."
    ]
  },
  {
    title: "2. Informational Purposes Only; No Professional Advice",
    body: [
      "The Site is provided for general informational purposes about Petrotek and its services. Content on the Site, including descriptions of injection well technology, regulatory programs, permitting, mining, oil and gas, and carbon capture topics, is general in nature and is not engineering, geologic, legal, financial, or other professional advice. It should not be relied on for any specific project, permit, well, or regulatory decision.",
      "Regulations, agency guidance, and technical practices change and vary by state, region, and site. You are responsible for verifying any information with the appropriate regulatory authority and qualified professionals before acting on it."
    ]
  },
  {
    title: "3. No Client Relationship",
    body: [
      "Visiting the Site, submitting the contact form, or requesting a publication does not create a client, consulting, or professional-services relationship with Petrotek. Any engagement for services requires a separate written agreement signed by Petrotek. Professional engineering and geology services are offered only where licensed.",
      "Please do not send confidential, proprietary, or privileged information through the Site's contact form or publication request form. Information you submit through the Site may not be treated as confidential unless and until we have agreed otherwise in writing."
    ]
  },
  {
    title: "4. Intellectual Property",
    body: [
      "The Site and its contents, including text, graphics, diagrams, logos, images, publications, abstracts, data compilations, and software, are owned by Petrotek or its licensors and are protected by copyright, trademark, and other intellectual property laws. \"Petrotek\" and the Petrotek logo are trademarks of Petrotek Corporation.",
      "You may view the Site and print or download limited excerpts for your own personal or internal business reference, provided you keep all copyright and proprietary notices intact. You may not copy, reproduce, modify, distribute, republish, sell, or create derivative works from any part of the Site without our prior written permission.",
      "Technical papers and presentations listed in the Technical Library may be owned in whole or in part by Petrotek authors, co-authors, conferences, or publishers. Listing a publication on the Site does not grant any license to the full work. Full publications are made available at our discretion and may be subject to additional restrictions."
    ]
  },
  {
    title: "5. Publication Requests and Contact Form",
    body: [
      "When you submit the contact form or a publication request, you agree to provide accurate information and to use these features only for legitimate inquiries. We may use the information you submit to respond to you and to operate our business. We reserve the right to decline or ignore any request at our discretion.",
      "The contact form is protected by Google reCAPTCHA, which is subject to Google's Privacy Policy and Terms of Service. Publication requests are collected through an embedded Microsoft Form, which is subject to Microsoft's terms and privacy practices."
    ]
  },
  {
    title: "6. Acceptable Use",
    body: [
      "You agree not to: (a) use the Site for any unlawful purpose; (b) attempt to gain unauthorized access to the Site, its servers, or connected systems; (c) interfere with or disrupt the Site's operation or security; (d) introduce viruses, malware, or other harmful code; (e) use automated tools such as bots, scrapers, or crawlers to extract content or submit forms in bulk, other than standard search engine indexing; (f) submit false, misleading, or abusive content; or (g) impersonate any person or entity."
    ]
  },
  {
    title: "7. Third-Party Links and Content",
    body: [
      "The Site contains links to, and embeds content from, third-party websites and services, including government agency websites, YouTube videos, map tile providers, and Microsoft Forms. We do not control these third parties and are not responsible for their content, accuracy, availability, or practices. Links do not imply endorsement. Your use of third-party sites is at your own risk and subject to their own terms and policies."
    ]
  },
  {
    title: "8. Accuracy of Information",
    body: [
      "We try to keep the Site accurate and current, but we make no guarantee that the content is complete, accurate, or up to date. Statistics, regulatory summaries, team biographies, publication details, and other information may contain errors or become outdated. We may change or remove content at any time without notice."
    ]
  },
  {
    title: "9. Disclaimer of Warranties",
    body: [
      "THE SITE AND ALL CONTENT ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE,\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS."
    ]
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "TO THE FULLEST EXTENT PERMITTED BY LAW, PETROTEK AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO YOUR USE OF, OR INABILITY TO USE, THE SITE OR RELIANCE ON ITS CONTENT, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
      "Nothing in these Terms limits liability that cannot be limited under applicable law. Any services Petrotek performs for you are governed solely by the written agreement for those services, not by these Terms."
    ]
  },
  {
    title: "11. Indemnification",
    body: [
      "You agree to indemnify and hold harmless Petrotek and its officers, directors, employees, and agents from any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from your violation of these Terms or your misuse of the Site."
    ]
  },
  {
    title: "12. Privacy and Analytics",
    body: [
      "We collect the information you voluntarily submit through the Site's forms (such as your name, email address, and message). The Site also uses analytics and performance tools, such as Vercel Analytics and Speed Insights, to understand how the Site is used and to improve it. We use submitted information to respond to your inquiry and to operate our business, and we do not sell your personal information.",
      "If you have questions about how your information is handled, please contact us using the information below."
    ]
  },
  {
    title: "13. Termination of Access",
    body: [
      "We may suspend or terminate your access to the Site at any time, with or without notice, for any reason, including violation of these Terms."
    ]
  },
  {
    title: "14. Governing Law and Disputes",
    body: [
      "These Terms are governed by the laws of the State of Colorado, without regard to its conflict-of-law principles. Any dispute arising from these Terms or your use of the Site will be brought exclusively in the state or federal courts located in Colorado, and you consent to the jurisdiction and venue of those courts."
    ]
  },
  {
    title: "15. General",
    body: [
      "If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right or provision is not a waiver of it. These Terms are the entire agreement between you and Petrotek regarding use of the Site and replace any prior understandings about the Site. You may not assign these Terms; we may assign them without restriction."
    ]
  }
];

const Terms = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-8xl mx-auto">

          <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <FileText className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Terms of Use</h1>
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
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
              <p className="mb-4">If you have questions about these Terms, please contact us:</p>
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

export default Terms;