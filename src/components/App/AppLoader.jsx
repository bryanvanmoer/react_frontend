import { BrowserRouter as Router } from "react-router-dom";
import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/allContext";

import App from "./App";

const AppLoader = () => {
  return (
    <Router>
      <LanguageProviderWrapper>
        <App />
      </LanguageProviderWrapper>
    </Router>
  );
};

export default AppLoader;
