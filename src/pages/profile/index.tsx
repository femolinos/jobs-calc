import Head from "next/head";
import React from "react";

import { Header } from "../../components/Header";

import {
  DefaultFormInput,
  FormRow,
  MonthValueContainer,
  PageContainer,
  PlanningForm,
  PlanningHeading,
  ProfileCardContainer,
  ProfileDataInputForm,
  ProfileNameLabel,
  ProfileWorktimeLabel,
  ProfileWorktimeValue,
  UserDataForm,
  ValueInputCurrency,
  Wrapper,
} from "./styles";

export default function Profile() {
  return (
    <Wrapper>
      <Head>
        <title>My profile | JobsCalc</title>
      </Head>

      <Header />

      <PageContainer>
        <ProfileCardContainer>
          <img
            src="/images/profile-placeholder.svg"
            alt="User profile picture"
          />

          <ProfileNameLabel>Jaqueline</ProfileNameLabel>

          <ProfileWorktimeLabel>
            O valor da sua hora é{" "}
            <ProfileWorktimeValue>R$ 75,00 reais</ProfileWorktimeValue>
          </ProfileWorktimeLabel>

          <button>SALVAR DADOS</button>
        </ProfileCardContainer>

        <UserDataForm>
          <h2>Dados do perfil</h2>

          <ProfileDataInputForm>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Link da foto" />
          </ProfileDataInputForm>

          <PlanningHeading>Planejamento</PlanningHeading>

          <PlanningForm>
            <FormRow>
              <DefaultFormInput>
                <label htmlFor="monthValue">
                  Quanto eu quero ganhar por mês?
                </label>
                <MonthValueContainer>
                  <input id="monthValue" type="number" />
                  <ValueInputCurrency>R$</ValueInputCurrency>
                </MonthValueContainer>
              </DefaultFormInput>
              <DefaultFormInput>
                <label htmlFor="worktimePerDay">
                  Quantas horas quero trabalhar por dia?
                </label>
                <input id="worktimePerDay" type="number" />
              </DefaultFormInput>
            </FormRow>
            <FormRow>
              <DefaultFormInput>
                <label htmlFor="daysOfWork">
                  Quantos dias quero trabalhar por semana?
                </label>
                <input id="daysOfWork" type="number" />
              </DefaultFormInput>
              <DefaultFormInput>
                <label htmlFor="vacationWeeks">
                  Quantas semanas por ano você quer tirar férias?
                </label>
                <input id="vacationWeeks" type="number" />
              </DefaultFormInput>
            </FormRow>
          </PlanningForm>
        </UserDataForm>
      </PageContainer>
    </Wrapper>
  );
}
