import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

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

interface UserConfig {
  name: string;
  photoUrl: string;
  hourValue: number;
  monthlySalary: number;
  hoursPerDay: number;
  workDaysPerWeek: number;
  vacationWeeksPerYear: number;
}

export default function Profile() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [monthlySalary, setMonthlySalary] = useState(0);
  const [hoursPerDay, setHoursPerDay] = useState(0);
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState(0);
  const [hourValue, setHourValue] = useState(0);
  const [vacationWeeksPerYear, setVacationWeeksPerYear] = useState(0);

  const router = useRouter();

  function handleNameChange(event: Event) {
    setName(event.target.value);
  }

  function handlePhotoUrlChange(event: Event) {
    setPhotoUrl(event.target.value);
  }

  function handleMonthlySalaryChange(event: Event) {
    setMonthlySalary(event.target.value);
  }

  function handleHoursPerDayChange(event: Event) {
    setHoursPerDay(event.target.value);
  }

  function handleWorkDaysPerWeekChange(event: Event) {
    setWorkDaysPerWeek(event.target.value);
  }

  function handleVacationWeeksPerYearChange(event: Event) {
    setVacationWeeksPerYear(event.target.value);
  }

  function submitUserConfigs() {
    const configs: UserConfig = {
      name,
      photoUrl,
      monthlySalary,
      hoursPerDay,
      workDaysPerWeek,
      hourValue: monthlySalary / (hoursPerDay * workDaysPerWeek),
      vacationWeeksPerYear,
    };

    localStorage.setItem("@Configs", JSON.stringify(configs));

    router.push("/");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const configs = localStorage.getItem("@Configs");

      if (configs) {
        const parsedConfigs = JSON.parse(configs);

        setName(parsedConfigs.name);
        setPhotoUrl(parsedConfigs.photoUrl);
        setMonthlySalary(parsedConfigs.monthlySalary);
        setHoursPerDay(parsedConfigs.hoursPerDay);
        setWorkDaysPerWeek(parsedConfigs.workDaysPerWeek);
        setHourValue(parsedConfigs.hourValue);
        setVacationWeeksPerYear(parsedConfigs.vacationWeeksPerYear);
      }
    }
  }, []);

  useEffect(() => {
    if (hoursPerDay > 0 && workDaysPerWeek > 0) {
      setHourValue(monthlySalary / 4 / (hoursPerDay * workDaysPerWeek));
    }
  }, [monthlySalary, hoursPerDay, workDaysPerWeek]);

  return (
    <Wrapper>
      <Head>
        <title>My profile | JobsCalc</title>
      </Head>

      <Header title={"Meu perfil"} />

      <PageContainer>
        <ProfileCardContainer>
          <img
            src={
              photoUrl.trim() !== "" ? photoUrl : "/images/default-avatar.png"
            }
            alt="User profile picture"
          />

          <ProfileNameLabel>
            {name.trim() !== "" ? name : "Usuário"}
          </ProfileNameLabel>

          <ProfileWorktimeLabel>
            O valor da sua hora é{" "}
            <ProfileWorktimeValue>R$ {hourValue} reais</ProfileWorktimeValue>
          </ProfileWorktimeLabel>

          <button onClick={submitUserConfigs}>SALVAR DADOS</button>
        </ProfileCardContainer>

        <UserDataForm>
          <h2>Dados do perfil</h2>

          <ProfileDataInputForm>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(evt) => handleNameChange(evt)}
            />
            <input
              type="text"
              placeholder="Link da foto"
              value={photoUrl}
              onChange={(evt) => handlePhotoUrlChange(evt)}
            />
          </ProfileDataInputForm>

          <PlanningHeading>Planejamento</PlanningHeading>

          <PlanningForm>
            <FormRow>
              <DefaultFormInput>
                <label htmlFor="monthValue">
                  Quanto eu quero ganhar por mês?
                </label>
                <MonthValueContainer>
                  <input
                    id="monthValue"
                    type="number"
                    value={monthlySalary}
                    onChange={(evt) => handleMonthlySalaryChange(evt)}
                  />
                  <ValueInputCurrency>R$</ValueInputCurrency>
                </MonthValueContainer>
              </DefaultFormInput>
              <DefaultFormInput>
                <label htmlFor="worktimePerDay">
                  Quantas horas quero trabalhar por dia?
                </label>
                <input
                  id="worktimePerDay"
                  type="number"
                  value={hoursPerDay}
                  onChange={(evt) => handleHoursPerDayChange(evt)}
                />
              </DefaultFormInput>
            </FormRow>
            <FormRow>
              <DefaultFormInput>
                <label htmlFor="daysOfWork">
                  Quantos dias quero trabalhar por semana?
                </label>
                <input
                  id="daysOfWork"
                  type="number"
                  value={workDaysPerWeek}
                  onChange={(evt) => handleWorkDaysPerWeekChange(evt)}
                />
              </DefaultFormInput>
              <DefaultFormInput>
                <label htmlFor="vacationWeeks">
                  Quantas semanas por ano você quer tirar férias?
                </label>
                <input
                  id="vacationWeeks"
                  type="number"
                  value={vacationWeeksPerYear}
                  onChange={(evt) => handleVacationWeeksPerYearChange(evt)}
                />
              </DefaultFormInput>
            </FormRow>
          </PlanningForm>
        </UserDataForm>
      </PageContainer>
    </Wrapper>
  );
}
