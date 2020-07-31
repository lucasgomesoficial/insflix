import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 0 0 17px 3%;
`;

export const Title = styled.h3`
  border-radius: 4px;
  display: inline-block;
  font-size: 18px;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 16px;
  padding: 20px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  font-size: 13px;
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    font-size: 13px;
    margin-bottom: 16px;
    margin-left: 16px;
  }
`;

export const VideoCardList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
  overflow-x: auto;
  padding-bottom: 32px;
  padding-left: 0;
  
  li {
    margin-right: 16px;
  }
`;