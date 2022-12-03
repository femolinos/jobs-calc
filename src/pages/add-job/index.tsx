import React from "react";
import Head from "next/head";

import { Header } from "../../components/Header";

import { DefaultFormInput, FormContainer, FormRow, JobInfoContainer, PageContainer, SaveJobCard, Wrapper } from "./styles";

export default function AddJob() {
  return (
    <Wrapper>
      <Head>
        <title>Add Job | JobsCalc</title>
      </Head>

      <Header title={"Adicionar Novo Job"} />

      <PageContainer>
        <JobInfoContainer>
          <FormContainer>
            <h2>Dados do Job</h2>

            <form>
              <DefaultFormInput>
                <label htmlFor="jobName">Nome do Job</label>
                <input id="jobName" type="text" />
              </DefaultFormInput>

              <FormRow>
                <DefaultFormInput>
                  <label htmlFor="jobTimePerDay">Quantas horas por dia vai dedicar ao Job?</label>
                  <input id="jobTimePerDay" type="number" />
                </DefaultFormInput>

                <DefaultFormInput>
                  <label htmlFor="jobTimeEstimate">Estimativa de horas para esse job</label>
                  <input id="jobTimeEstimate" type="number" />
                </DefaultFormInput>
              </FormRow>
            </form>
          </FormContainer>
          <SaveJobCard>
            <img src="/images/money.svg" alt="Money Icon Image" />
            <p>Preencha os dados ao lado para ver o valor do projeto</p>

            <div>
              <button>SALVAR</button>
              <button>
                <img src="/images/delete-icon.svg" alt="Delete Button Icon" />
              </button>
            </div>
          </SaveJobCard>
        </JobInfoContainer>
      </PageContainer>
    </Wrapper>
  );
}