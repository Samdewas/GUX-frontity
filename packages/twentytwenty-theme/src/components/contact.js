import { styled, connect, fetch } from "frontity";
import Link from "./link";
import ContactImg from "../assets/img/contact-img.png"
import ContactBg from "../assets/img/contact_bg.png"
import SectionContainer from "./styles/section-container";
import { useEffect, useState } from "react";

const Contact = ({ state }) => {
  const currentYear = new Date().getFullYear();
  const { footerBg } = state.theme.colors;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const contactform = () => {
    var formdata = new FormData();
    formdata.append("your-name",name);
    formdata.append("your-email", email);
    formdata.append("your-message", msg);
    formdata.append("phone", phone);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${state.source.url}/wp-json/contact-form-7/v1/contact-forms/155123/feedback`, requestOptions)
      .then(response => response.text())
      .then(result => alert(JSON.parse(result).message))
      .catch(error => console.log('error', error));
  }

  return (
    <>
      <BredCrumb>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            -
          </li>
          <li>
            <Link to="/contact-us">  <span> Contact Us </span> </Link>
          </li>
        </ul>
      </BredCrumb>

      <SectionContainer>

        <ContactMain>
          <form onSubmit={()=> contactform()}>
          <FormBg>
            <img src={ContactBg} />
          </FormBg>

          <LeftContent>
            <h2> Contact Us </h2>
            <FormGroup>
              <label> Full name </label>
              <input type="text" required placeholder="Full name" value={name} onChange={(e)=> setName(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <label> Email Address </label>
              <input type="text" required placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup>
              <label> Phone Number </label>
              <input type="text" placeholder="Phone number" />
            </FormGroup>

            <FormGroup>
              <label> Notes </label>
              <textarea rows="6" required cols="50" type="text" placeholder="Your Message" value={msg} onChange={(e)=> setMsg(e.target.value)}/>
            </FormGroup>

            <button type="Submit"> Submit </button>

          </LeftContent>

          <RightContent>
            <h4> For advertising, Drop us an email to </h4>
            <h2> graphicgux@gmail.com </h2>

            <img src={ContactImg} />

            <p> If you are the copyright owner, please email </p>
            <h2>graphicgux@gmail.com  </h2>
            <p> copyright infringement. So we will delete the resources
              and link to your official page. </p>
          </RightContent>
          </form>
        </ContactMain>

      </SectionContainer>
    </>

  );
};
export default connect(Contact);

export const ContactMain = styled.contactmain`
background: #FFFFFF;
box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
border-radius: 20px;
width: 100%;
float: left;
margin: 8rem 0px;
padding: 4rem 4rem;
z-index:99;
position:relative;
overflow: hidden;

`;

export const FormBg = styled.formbg`

img{
    position: absolute;
    z-index:-9;
    right: 0;
    top: 0;
}
`;




export const LeftContent = styled.leftcontent`
float: left;
width: 50%;
margin-right: 20px;
padding-right: 40px;

h2{
  margin: 10px 0px 25px 0px;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  color: #084523;
}

button{
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
  padding: 10px 35px;
  border-radius: 10px;
  color: white;
  outline: none;
}

@media (max-width:767px){
  width:100%;
}

`;


export const RightContent = styled.rightcontent`
    float: left;
    width: 46%;

    h4{
      margin-top: 5px;
      font-weight: 500;
      font-size: 20px;
      color: #084523;
      margin-bottom: 10px;
    }

    h2{
      background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-style: normal;
      font-weight: 600;
      font-size: 33px;
      margin-top: 0;
      margin: 8px 0px 10px 0px;
    }

    p{
      font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #084523;
    margin-bottom: 0px;
    }

    @media (max-width:767px){
      width:100%;
      h2{font-size:20px;}
      h4{font-size:16px; margin-top:16px;}
    }

`;


export const FormGroup = styled.formgroup`
width: 100%;
float: left;
margin-bottom: 20px;

label{
  width: 100%;
    display: block;
    margin-bottom: 10px;
    font-size: 16px;
    color: #121212;
}

input{
  width: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 18px 10px;
  text-transform: capitalize;
  outline:none;

    ::placeholder{
      color: #b9b9b9 ;
      text-transform: lowercase;
    }
}

textarea{
  width: 100%;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 15px 10px;
    text-transform: capitalize;
    outline:none;

    ::placeholder{
      color: #b9b9b9 ;
      text-transform: lowercase;
    }
}

`;


const BredCrumb = styled.bredcrumb`
background: #3e91621c ;
    width: 100%;
    float: left;
    padding: 18px 0px;

ul{
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li{
  line-height: normal;
}

a{
  text-decoration: none;
  color: inherit;
  font-size: 16px;
}

span{
  color: #15BE77;
}

`;