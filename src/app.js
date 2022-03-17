/* eslint-disable */
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

pronoun.map(inicio => {
  adj.map(medio => {
    noun.map(fin => {
      document.getElementById("ejem").innerHTML +=
        inicio + medio + fin + ".com <br/>";
    });
  });
});
