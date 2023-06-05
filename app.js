var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var link = [".com", ".net", ".es"];

for (let x of pronoun) {
  for (let y of adj) {
    for (let z of noun) {
      for (let a of link) {
        console.log(x + y + z + a);
      }
    }
  }
}
