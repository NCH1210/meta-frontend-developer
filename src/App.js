import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Reservations from "./routes/Reservations";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </>
    );
}
