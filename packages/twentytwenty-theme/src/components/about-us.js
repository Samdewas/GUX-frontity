import {  connect, styled, Link } from "frontity";
import SectionContainer from "./styles/section-container";

const About = ({ state }) => {
  

  return (
   <>
  

      <SectionContainer>

        <h1>About Us</h1>
        <p>Graphicux.com is well known for saving money for customers but with our free fonts and Photoshop action section, we have gone one step further</p>
        <p>We also offer-LightroomPreset, WordPress Theme, Html Templates, PSD, Graphics, Logos, Flyers, Banners, Mockup, Vector, Stock Images, Icons, Ui Kits, & all Graphic Resources with High-Speed Direct Links or Google Drive.</p>
        </SectionContainer>
   </>

  );
};




export default connect(About);

