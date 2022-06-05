import { noteFreqs } from "./lib/noteFreqs";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

console.log(noteFreqs.C3.i);
console.log(noteFreqs.C3.freq);

const getNote = (key: string, octave: number) => {
  return noteFreqs[`${key}${octave}`];
};

window["getNote"] = getNote;
