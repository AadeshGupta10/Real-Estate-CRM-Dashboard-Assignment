import { Route } from "react-router-dom";
import Leads from "../pages/Leads";
import Property from "../pages/Property";
import Home from "../pages/Home";
import Layout from "../components/Layout";

export const routing =
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="leads" element={<Leads />} />
        <Route path="property" element={<Property />} />
    </Route>