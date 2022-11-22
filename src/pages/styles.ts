import styled from "styled-components";

interface JobsInfoProps {
  hasMargin: boolean | false;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageHeadingBackground = styled.div`
  width: 100%;
  height: 280px;

  background: #41414c;
  position: absolute;
`;

export const PageContainer = styled.div`
  width: 1440px;

  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 1.5rem 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #4f4f5b;
`;

export const WorktimeLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #fcfdff;
    margin-left: 10px;
  }
`;

export const ProfileSection = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  div p:first-child {
    font-size: 20px;
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;
    color: #fcfdff;
  }

  div p:last-child {
    font-size: 14px;
    font-family: "IBM Plex Sans", sans-serif;
    color: #bfbfcc;
    text-align: right;
  }

  img {
    margin-left: 20px;
  }
`;

export const InfosSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 2rem 0;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 32px 12px 12px;

    width: 260px;

    background: #f1972c;

    font-size: 14px;
    font-weight: 700;
    color: #fcfdff;

    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      padding: 4px;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JobsInfos = styled.div`
  margin-left: ${(props) => (props.hasMargin ? "2rem" : "0")};

  strong {
    font-size: 24px;
    color: #fcfdff;
  }

  p {
    font-size: 16px;
    color: #fcfdff;
  }
`;

export const JobsSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
`;
