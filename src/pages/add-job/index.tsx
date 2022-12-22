import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";

import {
  DefaultFormInput,
  FormContainer,
  FormRow,
  JobInfoContainer,
  PageContainer,
  SaveJobCard,
  Wrapper
} from "./styles";
import { useJobsList } from "../../hooks/useJobList";

interface JobsInfos {
  id: number;
  clientName: string;
  dueTimeInDays: number;
  value: number;
  currentStatus: string;
  timePerDay: number;
  totalTimeExpectation: number;
}

export default function AddJob() {
  const [clientName, setClientName] = useState("");
  const [timePerDay, setTimePerDay] = useState(0);
  const [totalTimeExpectation, setTotalTimeExpectation] = useState(0);
  const router = useRouter();

  const { jobsList, addJob } = useJobsList();

  function handleClientNameChange(event: Event) {
    setClientName(event.target.value);
  }

  function handleTimePerDayChange(event: Event) {
    setTimePerDay(event.target.value);
  }

  function handleTotalTimeExpectationChange(event: Event) {
    setTotalTimeExpectation(event.target.value);
  }

  function handleJobSubmit() {
    const newJob: JobsInfos = {
      id: jobsList.length + 1,
      clientName,
      dueTimeInDays: totalTimeExpectation / timePerDay,
      value: totalTimeExpectation * 30, // TODO: bring multiplier from user configs
      currentStatus: "Em andamento",
      timePerDay,
      totalTimeExpectation
    };

    addJob(newJob);

    router.push("/");
  }

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
                <input id="jobName" type="text" value={clientName} onChange={(evt) => handleClientNameChange(evt)} />
              </DefaultFormInput>

              <FormRow>
                <DefaultFormInput>
                  <label htmlFor="jobTimePerDay">Quantas horas por dia vai dedicar ao Job?</label>
                  <input id="jobTimePerDay" type="number" value={timePerDay} onChange={(evt) => handleTimePerDayChange(evt)} />
                </DefaultFormInput>

                <DefaultFormInput>
                  <label htmlFor="jobTimeEstimate">Estimativa de horas para esse job</label>
                  <input id="jobTimeEstimate" type="number" value={totalTimeExpectation} onChange={(evt) => handleTotalTimeExpectationChange(evt)} />
                </DefaultFormInput>
              </FormRow>
            </form>
          </FormContainer>
          <SaveJobCard>
            <img src="/images/money.svg" alt="Money Icon Image" />
            <p>Preencha os dados ao lado para ver o valor do projeto</p>

            <div>
              <button onClick={handleJobSubmit}>SALVAR</button>
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