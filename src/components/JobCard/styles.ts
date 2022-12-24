import styled from "styled-components";
import Modal from "react-modal";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 1.5rem 2rem;

  background: #fcfdff;

  border: 1px solid #e1e3e6;
  border-radius: 5px;
`;

export const JobCounterAndNameSection = styled.div`
  display: flex;
  align-items: center;

  width: 35%;
`;

export const JobCounterText = styled.p`
  font-weight: 600;
  color: #bfbfcc;
`;

export const JobName = styled.p`
  font-size: 24px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;

  color: #5a5a66;

  margin-left: 2rem;
`;

export const DeadlineSection = styled.div`
  p:first-child {
    font-size: 12px;
    font-weight: 600;

    color: #bfbfcc;
  }

  p:last-child {
    font-weight: 600;
    line-height: 26px;

    color: #787880;
  }
`;

export const ValueSection = styled.div`
  p:first-child {
    font-size: 12px;
    font-weight: 600;

    color: #bfbfcc;
  }

  p:last-child {
    font-weight: 600;
    line-height: 26px;

    color: #787880;
  }
`;

export const JobStatus = styled.p`
  font-size: 14px;
  font-weight: 500;

  color: #36b336;

  padding: 7px 24px;
  background: #e8f8e8;

  border-radius: 40px;
`;

export const ButtonsContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;

  button:last-child {
    margin-left: 0.5rem;
  }
`;

export const JobCardButton = styled.button`
  padding: 0.5rem;

  background: #fcfdff;

  border: 1px solid #e1e3e6;
  border-radius: 5px;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const DeleteJobModalContent = styled(Modal)`
  h2 {
    margin-top: 2rem;
    font-size: 32px;
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;
    color: #5a5a66;
  }

  p {
    margin-top: 0.5rem;
    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;
    color: #787880;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    margin-top: 2rem;

    button:first-child {
      padding: 12px 48px;
      background: #e1e3e5;
  
      font-size: 14px;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 700;
      color: #787880;
  
      border: 1px solid #e1e3e6;
      border-radius: 5px;
  
      transition: filter 0.2s;
  
      &:hover {
        filter: brightness(0.95);
      }
    }

    button:last-child {
      padding: 12px 48px;
      background: #eb3b35;
  
      font-size: 14px;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 700;
      color: #fcfdff;
  
      border: 1px solid #eb3b35;
      border-radius: 5px;
  
      transition: all 0.2s;
  
      &:hover {
        background: #fcfdff;
        color: #eb3b35;
      }
    }
  }
`;