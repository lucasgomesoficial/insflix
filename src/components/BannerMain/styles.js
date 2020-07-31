import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-position: center;
  background-size: cover;
  color: var(--white);
  height: 60vh;
  position: relative;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  position: relative;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  padding-top: 30px;
  width: 40%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 1;
  margin: 0 80px 32px 0;

  @media (max-width: 800px) {
    margin: 0 0 32px 0;
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  font-size: 15px;
  margin-right: 120px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`
  background-color: var(--white);
  border: 0px;
  border-radius: 4px;
  color: var(--black);
  cursor: pointer;
  display: none;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  outline: none;
  padding: 16px 24px;

  @media (max-width: 800px) {
    display: block;
  }
`;
