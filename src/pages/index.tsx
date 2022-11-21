import Head from "next/head";
import React from "react";

import {
  InfosContainer,
  InfosSection,
  JobsInfos,
  PageContainer,
  PageHeader,
  PageHeadingBackground,
  ProfileSection,
  WorktimeLeftContainer,
  Wrapper,
} from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Home | JobsCalc</title>
      </Head>

      <PageHeadingBackground />

      <PageContainer>
        <PageHeader>
          <img src="/images/logo.svg" alt="JobsCalc Logo" />

          <WorktimeLeftContainer>
            <img
              src="/images/alert-icon.svg"
              alt="Amount of work time left (in hours)"
            />
            <p>Você tem 2 horas livres no seu dia</p>
          </WorktimeLeftContainer>

          <ProfileSection>
            <div>
              <p>Jaqueline</p>
              <p>Ver perfil</p>
            </div>

            <img src="/images/profile-placeholder.svg" alt="Profile Picture" />
          </ProfileSection>
        </PageHeader>

        <InfosSection>
          <InfosContainer>
            <JobsInfos>
              <strong>12</strong>
              <p>Projetos ao total</p>
            </JobsInfos>
            <JobsInfos hasMargin>
              <strong>7</strong>
              <p>Em andamento</p>
            </JobsInfos>
            <JobsInfos hasMargin>
              <strong>4</strong>
              <p>Encerrados</p>
            </JobsInfos>
          </InfosContainer>

          <button>
            <div>
              <img src="/images/plus-icon.svg" alt="Add job plus icon" />
            </div>
            <p>ADICIONAR NOVO JOB</p>
          </button>
        </InfosSection>
      </PageContainer>
    </Wrapper>
  );
}
