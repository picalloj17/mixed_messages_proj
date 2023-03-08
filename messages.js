function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
  moodInfo: ["tired", "defeated", "happy", "angry", "sad", "surprised"],
  fortuneOutput: [
    "better days coming",
    "fortune will come",
    "get ready for hardships",
    "good luck is coming your way",
    "bad luck is coming your way",
  ],
  advice: [
    "stay inside",
    "take that poop now, dont wait",
    "take the back way home",
    "surprise them today",
    "take that risk",
  ],
};

let personalWisdom = [];

for (let prop in collectiveWisdom) {
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
  switch (prop) {
    case "moodInfo":
      personalWisdom.push(
        `Your mood right now is "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    case "fortuneOutput":
      personalWisdom.push(
        `Your fortune right now is: "${collectiveWisdom[prop][optionIdx]}".`
      );

      break;

    case "advice":
      personalWisdom.push(
        `My advice to you? "${collectiveWisdom[prop][optionIdx]}".`
      );

      break;

    default:
      personalWisdom.push(
        "There is not enough information to make a decision."
      );
  }
}

function formatWisdom(wisdom) {
  const formatted = personalWisdom.join("\n");
  console.log(formatted);
}

formatWisdom(personalWisdom);
