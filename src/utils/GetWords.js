import helpers from "../App/helpers.json";

export default function getWords() {
  const lang = window.localStorage.getItem("lang");
  const words =
    lang === "eng"
      ? helpers["eng"]
      : lang === "arabic"
      ? helpers["arabic"]
      : helpers["eng"];
  return { lang, words };
}
