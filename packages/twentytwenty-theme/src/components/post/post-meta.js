import { styled, connect, decode } from "frontity";
import PostMetaItem from "./post-meta-item";
import { UserIcon, CalendarIcon } from "../icons";

export const PostMetaWrapper = styled.div`
  margin-top: 0rem;
  @media (min-width: 700px) {
    margin-top: 0.5rem;
  }
`;

export const PostMetaList = styled.ul`
  justify-content: center;
  color: #6d6d6d;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  font-weight: 500;
  list-style: none;
  justify-content: space-between;
  margin: 3px 0px;

  svg {
    fill: currentColor;
  }

 

  @media (min-width: 700px) {
    font-size: 1.6rem;
    margin: 3px 0px;
    display: flex;
    justify-content: space-between;
  }
`;

const PostMeta = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  // const numberOfComments = item.comments.length;

  return (
    <PostMetaWrapper>
      <PostMetaList>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <PostMetaItem icon={UserIcon} label="Post Author" link={author.link}>
            By {decode(author.name)}
          </PostMetaItem>
        )}
        <PostMetaItem icon={CalendarIcon} label="Post Date">
          {date.toDateString()}
        </PostMetaItem>
        {/* <PostMetaItem icon={ChatIcon} label="Post Comments">
          {2} Comments
        </PostMetaItem> */}
      </PostMetaList>
    </PostMetaWrapper>
  );
};


export default connect(PostMeta);





