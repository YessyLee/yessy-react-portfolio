import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";




function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Portfolio />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App
