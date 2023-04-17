import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App
