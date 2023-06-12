var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var link = [".com", ".net", ".es"];

for (let frase_1 of pronoun) {
  for (let frase_2 of adj) {
    for (let frase_3 of noun) {
      for (let frase_4 of link) {
        console.log(frase_1 + frase_2 + frase_3 + frase_4);
      }
    }
  }
}
