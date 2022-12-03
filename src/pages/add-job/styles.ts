import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 1440px;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 127px;
`;

export const JobInfoContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8rem;

  height: calc(100vh - (4rem + 28px));
`;

export const FormContainer = styled.form`
  width: 100%;

  h2 {
    font-size: 32px;
    font-weight: 600;
    font-family: "IBM Plex Sans", sans-serif;

    color: #5a5a66;

    width: 100%;
    padding-bottom: 1rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e1e3e5;
  }

  label {
    max-width: 50%;

    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;

    color: #787880;
  }

  input {
    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;

    border: 1px solid #e1e3e6;
    border-radius: 5px;

    background: #fcfdff;

    width: 100%;
  }
`;

export const FormRow = styled.section`
  display: flex;

  width: 100%;

  gap: 1.5rem;
`;

export const DefaultFormInput = styled.div`
  min-width: calc(50% - 2rem);
  margin-top: 2rem;

  label {
    max-width: 50%;

    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;


    color: #787880;
  }

  input {
    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;

    border: 1px solid #e1e3e6;
    border-radius: 5px;

    background: #fcfdff;

    width: 100%;

    min-width: calc(50% - 1.5rem);

    margin-top: 1rem;

    padding: 1rem 2rem;
  }
`;

export const SaveJobCard = styled.div`
  padding: 40px 54px;
  background: #fcfdff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 1px solid #e1e3e6;
  border-radius: 5px;

  p {
    color: #5a5a66;
    text-align: center;

    margin-top: 1.5rem;
  }

  div {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    button:first-child {
      color: #fcfdff;

      font-weight: 700;
      font-family: "IBM Plex Sans", sans-serif;

      height: 50px;
      padding: 0 4rem;

      background: #36b336;
      border: 1px solid #36b336;
      border-radius: 5px;

      transition: all 0.2s;

      &:hover {
        background: #fcfdff;
        color: #36b336;
      }
    }

    button:last-child {
      padding: 12px;

      background: #e1e3e6;

      border-radius: 5px;
      border: 1px solid #e1e3e6;

      transition: all 0.2s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;