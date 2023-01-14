import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  width: 1440px;
  height: calc(100vh - (4rem + 28px));
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 127px;
`;

export const ProfileCardContainer = styled.div`
  padding: 62px 72px;
  background: #fcfdff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #e1e3e6;
  border-radius: 5px;

  img {
    width: 180px;
    height: 180px;

    border-radius: 50%;
  }

  button {
    width: 100%;

    font-size: 14px;
    font-weight: 700;
    font-family: "IBM Plex Sans", sans-serif;

    color: #fcfdff;

    padding: 12px 0;

    background: #36b336;

    border: 1px solid #36b336;
    border-radius: 5px;

    margin-top: 1.5rem;

    transition: background-color 0.2s;

    &:hover {
      background: #fcfdff;
      color: #36b336;
    }
  }
`;

export const ProfileNameLabel = styled.p`
  font-size: 28px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;

  text-align: center;

  color: #5a5a66;

  margin-top: 1.5rem;
`;

export const ProfileWorktimeLabel = styled.p`
  font-size: 20px;
  color: #5a5a66;

  text-align: center;

  margin-top: 4rem;
`;

export const ProfileWorktimeValue = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #5a5a66;
`;

export const UserDataForm = styled.section`
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
`;

export const PlanningHeading = styled.p`
  margin-top: 3.5rem;

  font-size: 32px;
  font-weight: 600;
  font-family: "IBM Plex Sans", sans-serif;

  color: #5a5a66;

  width: 100%;
  padding-bottom: 1rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e1e3e5;
`;

export const ProfileDataInputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 1.5rem;

  margin-top: 2rem;

  input {
    font-weight: 500;
    font-family: "IBM Plex Sans", sans-serif;

    padding: 1rem 1.5rem;

    border: 1px solid #e1e3e6;
    border-radius: 5px;

    background: #fcfdff;

    width: 100%;
  }

  input::placeholder {
    font-family: "IBM Plex Sans", sans-serif;
    color: #bfbfcc;
  }
`;

export const PlanningForm = styled.section`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  margin-top: 2rem;

  flex-wrap: wrap;

  width: 100%;

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

export const MonthValueContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: fit-content;

  input {
    padding: 1rem 2rem;
  }
`;

export const ValueInputCurrency = styled.span`
  position: absolute;
  display: block;
  left: 5px;
  top: 34px;
  z-index: 9;
`;

export const DefaultFormInput = styled.div`
  min-width: calc(50% - 2rem);

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
