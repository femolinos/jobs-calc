import { createContext, ReactNode, useContext, useState } from "react";

interface JobsProviderProps {
  children: ReactNode;
}

interface JobsInfos {
  id: number;
  clientName: string;
  dueTimeInDays: number;
  value: number;
  currentStatus: string;
  timePerDay: number;
  totalTimeExpectation: number;
}

interface JobsContextData {
  jobsList: JobsInfos[];
  addJob: (job: JobsInfos) => void;
  removeJob: (jobId: number) => void;
}

const JobsContext = createContext<JobsContextData>({} as JobsContextData);

export function JobsProvider({ children }: JobsProviderProps): JSX.Element {
  const [jobsList, setJobsList] = useState<JobsInfos[]>(() => {
    if (typeof window !== "undefined") {
      const jobs = localStorage.getItem("@Jobs");

      if (jobs) {
        return JSON.parse(jobs);
      }

      return [];
    }
  });

  function addJob(job: JobsInfos) {
    if (typeof window !== "undefined") {
      const newJobList = jobsList;

      newJobList.push(job);

      setJobsList(newJobList);

      localStorage.setItem("@Jobs", JSON.stringify(newJobList));
    }
  }

  function removeJob(jobId: number) {
    if (typeof window !== "undefined") {
      const newJobList = jobsList.filter((job) => job.id !== jobId);

      for (let i = 0; i < newJobList.length; i++) {
        newJobList[i].id = i + 1;
      }

      setJobsList(newJobList);

      localStorage.setItem("@Jobs", JSON.stringify(newJobList));
    }
  }

  return (
    <JobsContext.Provider value={{ jobsList, addJob, removeJob }}>
      {children}
    </JobsContext.Provider>
  );
}

export function useJobsList(): JobsContextData {
  const context = useContext(JobsContext);

  return context;
}
