import React from "react";

import {
  ButtonsContainer,
  DeadlineSection,
  JobCardButton,
  JobCounterAndNameSection,
  JobCounterText,
  JobName,
  JobStatus,
  ValueSection,
  Wrapper,
} from "./styles";

export function JobCard() {
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
        <JobCardButton>
          <img src="/images/delete-icon.svg" alt="Delete job icon" />
        </JobCardButton>
      </ButtonsContainer>
    </Wrapper>
  );
}
