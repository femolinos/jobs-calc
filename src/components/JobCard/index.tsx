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

export function JobCard() {
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
        <JobCounterText>1</JobCounterText>
        <JobName>Pizzaria Guloso</JobName>
      </JobCounterAndNameSection>

      <DeadlineSection>
        <p>PRAZO</p>
        <p>3 dias para entrega</p>
      </DeadlineSection>

      <ValueSection>
        <p>VALOR</p>
        <p>R$ 4500,00</p>
      </ValueSection>

      <JobStatus>Em andamento</JobStatus>

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
