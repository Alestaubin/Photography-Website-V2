import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Events,
  Contact,
  OAP,
  BdaGallery,
  Sports,
  Personal,
  Commercial,
  GPVEL24,
  MardiCycle24,
  CritPavMil23,
  CoupeLaurentides23,
  CamoNat24,
  GertsFood,
  Hec5,
  Hec24,
  SSMUhandbook,
  VitreEtudiant,
  Dogs,
  FallMcGill,
  WinterMcGill,
  SummerMcGill,
  Toronto,
  Golf,
  Norge,
  demiLachine24,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Events" element={<Events />} />
        <Route path="/OAP" element={<OAP />} />
        <Route path="/BdaGallery" element={<BdaGallery />} />
      <Route path="/Sports" element={<Sports />} />
        <Route path="/demiLachine24" element={<demiLachine24 />} />
        <Route path="/GPVEL24" element={<GPVEL24 />} />
        <Route path="/MardiCycle24" element={<MardiCycle24 />} />
        <Route path="/CritPavMil23" element={<CritPavMil23 />} />
        <Route path="/CoupeLaurentides23" element={<CoupeLaurentides23 />} />
        <Route path="/CamoNat24" element={<CamoNat24 />} />
      <Route path="/Personal" element={<Personal />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/FallMcGill" element={<FallMcGill />} />
        <Route path="/WinterMcGill" element={<WinterMcGill />} />
        <Route path="/SummerMcGill" element={<SummerMcGill />} />
        <Route path="/Toronto" element={<Toronto />} />
        <Route path="/Norge" element={<Norge />} />
        <Route path="/Golf" element={<Golf />} />
      <Route path="/Commercial" element={<Commercial />} />
        <Route path="/GertsFood" element={<GertsFood />} />
        <Route path="/Hec5" element={<Hec5 />} />
        <Route path="/Hec24" element={<Hec24 />} />
        <Route path="/SSMUhandbook" element={<SSMUhandbook />} />
        <Route path="/VitreEtudiant" element={<VitreEtudiant />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
