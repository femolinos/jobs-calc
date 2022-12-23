import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";

import { JobCard } from "../components/JobCard";
import { useJobsList } from "../hooks/useJobList";

import {
  InfosContainer,
  InfosSection,
  JobsInfos,
  JobsSection,
  PageContainer,
  PageHeader,
  PageHeadingBackground,
  ProfileSection,
  WorktimeLeftContainer,
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

export default function Home() {
  const { jobsList } = useJobsList();
  let jobs: JobsInfos[] = jobsList;

  useEffect(() => {
    // console.log(jobsList);
    jobs = jobsList;
    console.log(jobs);
  }, []);

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
              <Link href={"/profile"}>
                <p>Ver perfil</p>
              </Link>
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

          <Link href="/add-job">
            <button>
              <div>
                <img src="/images/plus-icon.svg" alt="Add job plus icon" />
              </div>
              <p>ADICIONAR NOVO JOB</p>
            </button>
          </Link>
        </InfosSection>

        <JobsSection>
          {jobs.map((job) => {
            console.log("tamo aí");

            return <JobCard job={job} />;
          })}
        </JobsSection>
      </PageContainer>
    </Wrapper>
  );
}
