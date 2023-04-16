import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App
