import { createContext, ReactNode, useContext, useState } from "react";

interface UserConfigProviderProps {
  children: ReactNode;
}

interface UserConfig {
  name: string;
  photoUrl: string;
  hourValue: number;
  monthlySalary: number;
  hoursPerDay: number;
  workDaysPerWeek: number;
  vacationWeeksPerYear: number;
}

interface UserConfigContextData {
  userConfig: UserConfig;
  defineUserConfigs: (config: UserConfig) => void;
}

const UserConfigContext = createContext<UserConfigContextData>(
  {} as UserConfigContextData
);

export function UserConfigProvider({
  children,
}: UserConfigProviderProps): JSX.Element {
  const [userConfig, setUserConfig] = useState<UserConfig>(() => {
    if (typeof window !== "undefined") {
      const configs = localStorage.getItem("@Configs");

      if (configs) {
        return JSON.parse(configs);
      }

      return {};
    }
  });

  function defineUserConfigs(config: UserConfig) {
    if (typeof window !== "undefined") {
      setUserConfig(config);

      localStorage.setItem("@Configs", JSON.stringify(config));
    }
  }

  return (
    <UserConfigContext.Provider value={{ userConfig, defineUserConfigs }}>
      {children}
    </UserConfigContext.Provider>
  );
}

export function useUserConfig(): UserConfigContextData {
  const context = useContext(UserConfigContext);

  return context;
}
