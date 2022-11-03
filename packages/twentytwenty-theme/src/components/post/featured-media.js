import { connect, styled } from "frontity";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";
import LazyLoad from "react-lazy-load";

/**
 * The featured image/video of the post.
 *
 * @param props -
 * - `state`: The Frontity state
 * - `id`: The ID of the featured image/video.
 * - `className`: Required in order to wrap the component with `styled()`.
 * @returns React element.
 */
const FeaturedMedia = ({ state, id, className }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;
  return (
    <Figure className={className}>
      <LazyLoad>
        <Image
          alt={media.alt_text}
          src={media.source_url}
          srcSet={srcset}
          height="282px"
          width="387px"
        />
      </LazyLoad>

    </Figure>
  );
};

export default connect(FeaturedMedia);

const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  z-index: -9;


  
  @media(max-width:767px){
    border-radius: 0px;
    margin-top:0px !important;
  }
`;

const Image = styled(Img)`
  margin: 0 auto;
  max-width: 100%;
  display: block;
`;
