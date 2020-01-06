import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";
import { LocaleContext } from "./LocaleContext";
const messages = defineMessages({
  title: {
    id: "Title",
    defaultMessage: "Hello World"
  },
  subtitle: {
    id: "Subtitle",
    defaultMessage: "Welcome to our app"
  }
});

const Header = () => {
  const [locale, setLocale] = React.useContext(LocaleContext);
  const nextLocale = locale === "en" ? "fr" : "en";
  return (
    <header>
      <h1>
        <FormattedMessage {...messages.title} />
      </h1>
      <h2>
        <FormattedMessage {...messages.subtitle} />
      </h2>
      <button onClick={() => setLocale(nextLocale)}>
        Change language to {nextLocale}
      </button>
    </header>
  );
};

export default Header;
