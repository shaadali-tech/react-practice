import { useState } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm.jsx";
import Apiloadercomp from "./components/APiloadercomp.jsx";

function App() {
  return (
    <div>
      <ContactForm></ContactForm>
      <Apiloadercomp></Apiloadercomp>
    </div>
  );
}

export default App;
