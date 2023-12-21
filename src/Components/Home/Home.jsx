'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Helmet from 'react-helmet';
import ScrollToTop from "../ScrollToTop";



const Home = () => {

useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <div><ScrollToTop />
<Helmet><title>Home</title></Helmet>

<div className="hero min-h-screen" style={{backgroundImage: 'url(https://ebook.projectbd.com/wp-content/uploads/2023/10/home-hero.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Welcome To My Todo</h1>
      <p className="mb-5 text-lg font-medium">Make your time remarkable</p>
      <button className="btn btn-primary">Let&apos;s Explore</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Home;