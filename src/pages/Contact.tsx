import { useTranslation } from "react-i18next";
import SectionContainer from "../components/SectionContainer";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import PageTransition from "../components/PageTransition";
import useSEO from "../hooks/useSEO";

export default function Contact() {
  const { t } = useTranslation();

  useSEO({
    title: "Contact - Thimoté Fétu | Développeur Web & Mobile",
    description:
      "Contactez Thimoté Fétu pour vos projets de développement web et mobile. Formulaire de contact, réseaux sociaux et informations pour collaborer sur vos applications React, Flutter et Node.js.",
    keywords:
      "contact, collaboration, projets, développement web, développement mobile, devis, freelance, React, Flutter, Node.js",
    ogImage: "https://thimotefetu.be/og-contact.jpg",
    canonical: "https://thimotefetu.be/contact",
  });

  return (
    <PageTransition>
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {t("contact.title")}
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-400">
              {t("contact.description")}
            </p>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("contact.connect")}
              </h2>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t("contact.form.title")}
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageTransition>
  );
}
