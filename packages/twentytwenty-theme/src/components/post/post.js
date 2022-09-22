import { styled, connect } from "frontity";
import { useEffect } from "react";
import FeaturedMedia from "./featured-media";
import {
  EntryContent,
  Post as _Post,
  PostHeader,
  PostInner,
  PostTitle,
  PostCaption,
  SectionContainer,
} from "./post-item";
import PostCategories from "./post-categories";
import PostMeta from "./post-meta";
import PostTags from "./post-tags";

/**
 * The Post component that the TwentyTwenty theme uses for rendering any kind of
 * "post type" (posts, pages, attachments, etc.).
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Get all categories
  const allCategories = state.source.category;

  /**
   * The item's categories is an array of each category id. So, we'll look up
   * the details of each category in allCategories.
   */
  const categories =
    post.categories && post.categories.map((catId) => allCategories[catId]);

  // Get all tags
  const allTags = state.source.tag;

  /**
   * The item's categories is an array of each tag id. So, we'll look up the
   * details of each tag in allTags.
   */
  const tags = post.tags && post.tags.map((tagId) => allTags[tagId]);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
  }, [actions.source]);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <PostArticle>

      <SectionContainer>

        <DetailsRow>
          <DetailsColumnLeft>
            <PostDetailsTitle>
              {/* {post.categories && <PostCategories categories={categories} />} */}
              <PostTitle
                as="h1"
                className="heading-size-1"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <DetailsText>
                <div>
                  {post.caption && (
                    <PostCaption
                      dangerouslySetInnerHTML={{ __html: post.caption.rendered }}
                    />
                  )}
                </div>

                <DetailsTextInner >
                  
                    <PostMeta item={post} />
                  
                  <div>
                    <button> Lightroom </button>
                  </div>


                </DetailsTextInner>
              </DetailsText>

              <PostDetailsImg>

                {state.theme.featuredMedia.showOnPost && (
                  <FeaturedImage id={post.featured_media} isSinglePost={true} />
                )}

              </PostDetailsImg>

            </PostDetailsTitle>
          </DetailsColumnLeft>

          <DetailsColumnRight>

          </DetailsColumnRight>
        </DetailsRow>

      </SectionContainer>



      {/* 
      <Header>
        <SectionContainer>
          If the post has categories, render the categories
          {post.categories && <PostCategories categories={categories} />}
          <PostTitle
            as="h1"
            className="heading-size-1"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          If the post has a caption (like attachments), render it
          {post.caption && (
            <PostCaption
              dangerouslySetInnerHTML={{ __html: post.caption.rendered }}
            />
          )}
          The post's metadata like author, publish date, and comments
          <PostMeta item={post} />
        </SectionContainer>
      </Header>


      * If the want to show featured media in the
      * list of featured posts, we render the media.

      {state.theme.featuredMedia.showOnPost && (
        <FeaturedImage id={post.featured_media} isSinglePost={true} />
      )}

      If the post has a description (like attachments), we render it
      {post.description && (
        <PostInner size="thin">
          <EntryContent
            dangerouslySetInnerHTML={{ __html: post.description.rendered }}
          />
        </PostInner>
      )} */}

      {/* If the post has content, we render it */}
      {/* {post.content && (
        <PostInner size="thin">
          <EntryContent>
            <Html2React html={post.content.rendered} />
          </EntryContent>
       
          {post.tags && <PostTags tags={tags} />}
        </PostInner>
      )} */}
    </PostArticle>
  ) : null;
};

export default connect(Post);






const DetailsColumnLeft = styled.detailscolumnleft`

`;

const DetailsColumnRight = styled.detailscolumnright`

`;

const PostDetailsTitle = styled.postdetailstitle`

h1{
  font-size:24px;
}
`;

const PostDetailsImg = styled.postdetailsimg`


}
`;

const DetailsText = styled.detailstext`
ul{
  justify-content: inherit;
}
li{
  margin-right:20px;
  margin-top:20px;
}
`;

const DetailsRow = styled.detailsrow`

`;

const DetailsTextInner = styled.detailstextinner`
display: flex;
justify-content: space-between;
align-items: center;

button{
  background: #ffe2c3;
  border-radius: 25px;
  padding: 9px 35px;
  font-size: 15px;
  color: #F8A64C;
  font-weight: 700;
}

`;



const Header = styled(PostHeader)`
  background-color: #fff;
  margin: 0;
  padding: 4rem 0;
  @media (min-width: 700px) {
    padding: 8rem 0;
  }
`;

const PostArticle = styled(_Post)`
  padding-top: 0 !important;
`;

const FeaturedImage = styled(FeaturedMedia)`
  margin-top: 30px !important;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    background: #fff;
    content: "";
    display: block;
    position: absolute;

    left: 0;
    right: 0;
    top: 0;
  }
`;







