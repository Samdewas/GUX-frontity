import { styled, connect } from "frontity";
import Link from "./link";
import NwsIcon from "../assets/img/nws_icn.png"
import Notification from "../assets/img/noti.png"


const Contact = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  return (
    <h1 style={{color:"red"}}>Contact Us</h1>
  );
};

export default connect(Contact);



