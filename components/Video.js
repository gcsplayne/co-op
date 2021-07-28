import styled from 'styled-components';
import PropTypes from "prop-types";


const Content = styled.a`
  
  margin-bottom: 30px;
  }
`;

const YoutubeEmbed = ({ embedId }) => (
  <Content>
  <div className="video-responsive">
    <iframe
      width="853"
      height="500"
      src={`https://www.youtube.com/embed/GN-BfRMJGLU`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Youtube Chanel"
    />
  </div>
  </Content>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GN-BfRMJGLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}