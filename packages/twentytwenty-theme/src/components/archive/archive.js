import { connect, decode, styled } from "frontity";
import { Fragment, useEffect } from "react";
import Article from "../post/post-item";
import ArchiveHeader from "./archive-header";
import Pagination from "./archive-pagination";
import PostSeparator from "../post/post-separator";
import Post from "../post";

const Archive = ({ state, showExcerpt, showMedia }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const { primary } = state.theme.colors;

  // Whether the show the excerpt instead of the full content
  // If passed as prop, we'll respect that. Else, we'll use the theme settings
  const _showExcerpt = showExcerpt || !state.theme.showAllContentOnArchive;

  useEffect(() => {
    Post.preload();
  }, []);

  return (
    <>
     <SectionContainer size="large">
    <PostMain>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <ArchiveHeader labelColor={primary} label={data.taxonomy}>
          <span>{decode(state.source[data.taxonomy][data.id].name)}</span>
        </ArchiveHeader>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <ArchiveHeader labelColor={primary} label="Author">
          <b>{decode(state.source.author[data.id].name)}</b>
        </ArchiveHeader>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }, index) => {
        const isLastArticle = index === data.items.length - 1;
        const item = state.source[type][id];
        // Render one Item component for each one.
        return (
          <Fragment key={item.id}>
            <Article
              key={item.id}
              item={item}
              showExcerpt={_showExcerpt}
              showMedia={showMedia}
            />
            {/* {!isLastArticle && <PostSeparator />} */}
          </Fragment>
        );
      })}

   
      </PostMain>
      {data.totalPages > 1 && (
        <>
          <PostSeparator />
          <Pagination size="thin" />
        </>
      )}
      </SectionContainer>
    </>
  );
};

export default connect(Archive);


export const PostMain = styled.postMain`
display: grid;
grid-template-columns: repeat(3,2fr);
gap: 20px 20px;
`;

const maxWidths = {
  thin: "58rem",
  small: "80rem",
  medium: "100rem",
  large: "120rem",
};

const getMaxWidth = (props) => maxWidths[props.size] || maxWidths["medium"];

export const SectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 0rem);
  max-width: ${getMaxWidth};

  @media (min-width: 700px) {
    width: calc(100% - 0rem);
  }
`;