import { createContext, useState } from "react";

export const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {

  const [schoolLogo, setSchoolLogo] = useState(null);

  return (
    <SchoolContext.Provider value={{ schoolLogo, setSchoolLogo }}>
      {children}
    </SchoolContext.Provider>
  );
};
