import { styled } from "frontity";
import Link from "../link";
import ScreenReaderText from "../styles/screen-reader";

const PostMetaItem = ({ icon: Icon, label, link, children }) => {
  return (
    <ListItem>
      <MetaIcon>
        <ScreenReaderText>{label}</ScreenReaderText>
        <Icon />
      </MetaIcon>

      <MetaText>
        {link ? <Link link={link}>{children}</Link> : children}
      </MetaText>
    </ListItem>
  );
};

const MetaIcon = styled.span`
  flex-shrink: 0;
  margin-right: 1rem;
  
`;

const MetaText = styled.span`
  a {
    color: inherit;
    text-decoration: none;
    font-size:14px;
  }

  a:hover {
    text-decoration: underline;
  }
  
`;


const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  letter-spacing: -0.016875em;
  margin: 1rem 0 0 0rem;
  max-width: calc(100% - 2rem);
  text-transform: capitalize;
  
  span,a{
    font-size:14px;
  }
  
  @media (max-width: 767px) {
    margin: 0.5rem 0 0 0rem;
    font-size:9px;

  span{
    font-size:12px;
  }

  
  @media (min-width: 700px) {
    margin: 1.4rem 0 0 0rem;
    max-width: calc(100% - 3rem);
  }
  span{
    font-size:14px;
  }

}

`;

export default PostMetaItem;
