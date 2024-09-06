import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index/index";
import About from "./pages/about/about";
import Events from "./pages/events/events";
import AnnualReport from "./pages/annual/annual";
import Teams from "./pages/team/team";
import Blogs from "./pages/blogs/blogs";
import SignUp from "./pages/signup/signup";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/annual" element={<AnnualReport />} />
                <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>

            <div style={{ minHeight: "400px", color: "green" }}>
                {/* Content goes here */}
            </div>

            <Footer />

         
        </Router>
    );
}

export default App;
