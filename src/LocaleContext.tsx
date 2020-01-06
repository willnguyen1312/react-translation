import React from "react";

export type LocaleContextType = [string, (locale: string) => void];

export const LocaleContext = React.createContext<LocaleContextType>([
  "en",
  () => {}
]);

export const LocaleContextProvider: React.FC = props => {
  const [locale, setLocale] = React.useState("en");

  return (
    <LocaleContext.Provider value={[locale, setLocale]}>
      {props.children}
    </LocaleContext.Provider>
  );
};
