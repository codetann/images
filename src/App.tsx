import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes";
import { Page } from "./components";

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
