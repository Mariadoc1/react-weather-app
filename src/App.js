import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Glasgow" />
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
            {" "}
            open-sourced
          </a>{" "}
          on Github. It is hosted on{" "}
          <a
            href="https://scintillating-baklava-70c67f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
