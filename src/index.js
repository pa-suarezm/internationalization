import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobsList";

let choose = () => {
    if(navigator.language === "es")
        return localeEsMessages;
    else
        return localeEnMessages;
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} key={navigator.language} messages={choose()}>
        <JobsList locale={navigator.language}/>
    </IntlProvider>
    , document.getElementById("root")
);