import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import CosaFaSercom from "./components/CosaFaSercom";
import Neurogadget from "./components/Neurogadget";
import Settori from "./components/Settori";
import LogoCarousel from "./components/LogoCarousel";
import CaseStudi from "./components/CaseStudi";
import RaccoltaIdee from "./components/RaccoltaIdee";
import Confronto from "./components/Confronto";
import ChiSiamo from "./components/ChiSiamo";
import MetodoRD from "./components/MetodoRD";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ScrollTracker from "./components/ScrollTracker";

export default function Home() {
  return (
    <>
      <ScrollTracker />
      <Navbar />
      <Hero />
      <Problema />
      <CosaFaSercom />
      <Neurogadget />
      <Settori />
      <LogoCarousel />
      <CaseStudi />
      <RaccoltaIdee />
      <Confronto />
      <MetodoRD />
      <ChiSiamo />
      <Form />
      <Footer />
    </>
  );
}
