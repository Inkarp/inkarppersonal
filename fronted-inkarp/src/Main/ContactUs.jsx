import { Linkedin, Mail, Youtube, MessageCircle, Phone } from "lucide-react";
import ContactForm from "../components/pages/Contact/ContactForm";
import LocationCards from "../components/pages/Contact/LocationCards";
import Contact from "../components/pages/Contact/Contact";
import SupportSection from "../components/pages/Contact/SupportSection";
import ContactNew from "../components/pages/Contact/ContactNew";
import SalesforceForm from "../components/pages/Contact/SalesforceForm";

function ContactUs() {
  return (
    <>
      <Contact />
      <SupportSection />
      <ContactNew />
      <ContactForm />
      {/* <SalesforceForm /> */}
      {/* <ContactNew /> */}
      {/* <LocationCards /> */}
    </>
  )
}

export default ContactUs;
