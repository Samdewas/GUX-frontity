import { styled, connect} from "frontity";

const Skelton = (props) => {
 
const id = props.id;
  return (
    <Uxskeleton  style={{width: "600px", height: "200px"}}>
    </Uxskeleton>
  );
};
export default connect(Skelton);

export const Uxskeleton = styled.uxskeleton`

background: #eff1f3;
background-image: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size:100% 400px;
  background-repeat: no-repeat;
  display: inline-block;
  position: relative; 
  
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards; 
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -800px 0;
    }
    
    100% {
      background-position: 1200px 0; 
    }
  }



 

`;
