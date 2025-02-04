import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Test App Home</h1>;
}

function PageA() {
  return <h1>This is Page A (/test/a)</h1>;
}

function App() {
  return (
    <Router basename="/test">
      <h1>Root App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/a">Go to Page A</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<PageA />} />
      </Routes>
    </Router>
  );
}

export default App;