import React from "react";
import { IntlProvider } from "react-intl";
import Header from "./Header";

import { LocaleContext } from "./LocaleContext";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

const messages: any = {
  en,
  fr
};

function App() {
  const [locale] = React.useContext(LocaleContext);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <Header />
      </div>
    </IntlProvider>
  );
}

export default App;
