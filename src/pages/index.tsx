import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { JobCard } from "../components/JobCard";
import { useJobsList } from "../hooks/useJobList";
import { useUserConfig } from "../hooks/useUserConfig";

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
  const { userConfig } = useUserConfig();
  const [jobs, setJobs] = useState<JobsInfos[]>([]);
  const [totalDailyWorktime, setTotalDailyWorktime] = useState(0);

  useEffect(() => {
    if (jobsList.length > 0 && userConfig.hoursPerDay !== undefined) {
      let timeSum = 0;

      for (let i = 0; i < jobsList.length; i++) {
        timeSum += jobsList[i].timePerDay;
      }

      console.log(userConfig);
      console.log(jobsList);

      setTotalDailyWorktime(userConfig.hoursPerDay - timeSum);
    } else {
      setTotalDailyWorktime(0);
    }
  }, []);

  useEffect(() => {
    setJobs(jobsList);
  }, [jobsList]);

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
            <p>Você tem {totalDailyWorktime} horas livres no seu dia</p>
          </WorktimeLeftContainer>

          <ProfileSection>
            <div>
              <p>{userConfig?.name ? userConfig.name : "Usuário"}</p>
              <Link href={"/profile"}>
                <p>Ver perfil</p>
              </Link>
            </div>

            <img
              src={
                userConfig?.photoUrl
                  ? userConfig.photoUrl
                  : "/images/default-avatar.png"
              }
              alt="Profile Picture"
            />
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
            return (
              <JobCard
                key={job.id}
                id={job.id}
                clientName={job.clientName}
                dueTimeInDays={job.dueTimeInDays}
                value={job.value}
                currentStatus={job.currentStatus}
                timePerDay={job.timePerDay}
                totalTimeExpectation={job.totalTimeExpectation}
              />
            );
          })}
        </JobsSection>
      </PageContainer>
    </Wrapper>
  );
}
