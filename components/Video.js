import PropTypes from "prop-types";
import styles from "../components/video.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="ratio ratio-21x9 mt-3 mb-3">
    <iframe
      src="https://www.youtube.com/embed/GN-BfRMJGLU"
      title="Youtube Video"
      allowFullScreen
      frameBorder="0"
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default YoutubeEmbed;

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/GN-BfRMJGLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
