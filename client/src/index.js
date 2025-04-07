import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Analytics } from "@vercel/analytics/react"
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
  DEMI24,
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
  MARIAGE_RAPH_FEL_24,
  Integ_uqam_24,
  Diner_olo_24,
  PERT_board_2024,
  Halloween_yoko_2024,
  Halloween_rouge_2024,
  PERTMENTLAUNCH,
  UDES_MED_24,
  SSMU_GGG,
  PERT2025,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/PERT2025" element={<PERT2025/>} />
      <Route path="/SSMU_GGG" element={<SSMU_GGG/>} />
      <Route path="/UDES_MED_24" element={<UDES_MED_24/>} />
      <Route path="/PERTMENTLAUNCH" element={<PERTMENTLAUNCH/>} />
        <Route path="/Halloween_rouge_2024" element={<Halloween_rouge_2024/>} />
        <Route path="/Halloween_yoko_2024" element={<Halloween_yoko_2024/>} />
        <Route path="/PERT_board_2024" element={<PERT_board_2024/>} />
        <Route path="/Diner_olo_24" element={<Diner_olo_24/>} />
        <Route path="/Integ_uqam_24" element={<Integ_uqam_24 />} />
        <Route path="/OAP" element={<OAP />} />
        <Route path="/BdaGallery" element={<BdaGallery />} />
      <Route path="/Sports" element={<Sports />} />
        <Route path="/DEMI24" element={<DEMI24 />} />
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
        <Route path="/MARIAGE_RAPH_FEL_24" element={<MARIAGE_RAPH_FEL_24 />} />
        <Route path="/Hec5" element={<Hec5 />} />
        <Route path="/Hec24" element={<Hec24 />} />
        <Route path="/VitreEtudiant" element={<VitreEtudiant />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
