import ContactUs from "../components/contact-us/ContactUs";
import Hero from "../components/hero/Hero";
import HomeAbout from "../components/home-about/HomeAbout";
import TestimonialsSection from "../components/our-clients/OurClient";
import OurServices from "../components/our-services/OurServices";
import CoreValues from "../components/our-values/OurValues";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <OurServices />
      <CoreValues />
      <TestimonialsSection />
      <ContactUs />
    </>
  );
}
