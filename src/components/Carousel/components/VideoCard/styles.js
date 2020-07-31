import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-size: 38vh;
  background-position: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  flex: 0 0 298px;
  height: 150px;
  width: 270px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    
  }
`;
