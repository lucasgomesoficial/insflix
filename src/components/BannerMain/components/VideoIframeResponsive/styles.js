import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  height: 100%;
  width: 100%;
  
  position: absolute;
`;