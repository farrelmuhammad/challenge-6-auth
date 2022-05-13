import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import Services from "../../Components/User/Services";
import WhyUs from "../../Components/User/WhyUs";
import Testimoni from "../../Components/User/Testimoni";
import BannerHero from "../../Components/User/BannerHero";
import Faq from "../../Components/User/Faq";

const LandingPage = () => {
  const navigate = useNavigate();
  const data = useSelector((globalStore) => globalStore);

  const CheckLogin = () => {
    if (data.auth.dataLogin === null ||
      data.auth.dataLogin?.email === "admin@admin.com") 
      navigate("/");
  };

  useEffect(() => {
    CheckLogin();
    document.body.style.background = "white";
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Services />
      <WhyUs />
      <Testimoni />
      <BannerHero />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
