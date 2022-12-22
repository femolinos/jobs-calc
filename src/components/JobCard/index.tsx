import React, { useState } from "react";

import {
  ButtonsContainer,
  DeadlineSection,
  DeleteJobModalContent,
  JobCardButton,
  JobCounterAndNameSection,
  JobCounterText,
  JobName,
  JobStatus,
  ValueSection,
  Wrapper,
} from "./styles";

interface JobsInfos {
  id: number;
  clientName: string;
  dueTimeInDays: number;
  value: number;
  currentStatus: string;
  timePerDay: number;
  totalTimeExpectation: number;
}

export function JobCard(job: JobsInfos) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStyles = {
    overlay: {
      background: "#41414C",
      opacity: 0.9,
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      width: "fit-content",
      padding: "2.5rem",
      background: "#f0f2f5",
      opacity: 1,
      borderRadius: "5px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Wrapper>
      <JobCounterAndNameSection>
        <JobCounterText>{job.id}</JobCounterText>
        <JobName>{job.clientName}</JobName>
      </JobCounterAndNameSection>

      <DeadlineSection>
        <p>PRAZO</p>
        <p>{job.dueTimeInDays} dias para entrega</p>
      </DeadlineSection>

      <ValueSection>
        <p>VALOR</p>
        <p>R$ {job.value}</p>
      </ValueSection>

      <JobStatus>{job.currentStatus}</JobStatus>

      <ButtonsContainer>
        <JobCardButton>
          <img src="/images/edit-icon.svg" alt="Edit job icon" />
        </JobCardButton>
        <JobCardButton onClick={openModal}>
          <img src="/images/delete-icon.svg" alt="Delete job icon" />
        </JobCardButton>
      </ButtonsContainer>
      <DeleteJobModalContent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <img src="/images/big-trash.svg" alt="Delete Job Image" />

        <h2>Excluir Job</h2>

        <p>Quer mesmo excluir esse job?</p>
        <p>Ele será apagado para sempre.</p>

        <div>
          <button onClick={closeModal}>CANCELAR</button>
          <button>EXCLUIR JOB</button>
        </div>
      </DeleteJobModalContent>
    </Wrapper>
  );
}
