import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes";
import { Photos } from "./features/photos";
import { Page } from "./components";

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App;
