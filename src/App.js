import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Mariadoc1"
            target="_blank"
            rel="noreferrer"
          >
            Maria Docherty
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mariadoc1/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
