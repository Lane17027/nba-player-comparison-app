const submitButton = document.getElementById("submit");
const player1Input = document.getElementById("player-1-input");
const player2Input = document.getElementById("player-2-input");

const player1Img = document.getElementById("player-1-img");
const player2Img = document.getElementById("player-2-img");

const player1Logo = document.getElementById("player-1-logo");
const player2Logo = document.getElementById("player-2-logo");

const player1Name = document.getElementById("player-1-name");
const player2Name = document.getElementById("player-2-name");

const player1PPG = document.getElementById("player-1-ppg");
const player2PPG = document.getElementById("player-2-ppg");

const player1RB = document.getElementById("player-1-rb");
const player2RB = document.getElementById("player-2-rb");

const player1Assists = document.getElementById("player-1-assists");
const player2Assists = document.getElementById("player-2-assists");

const player1Steals = document.getElementById("player-1-steals");
const player2Steals = document.getElementById("player-2-steals");

const player1FG = document.getElementById("player-1-fg");
const player2FG = document.getElementById("player-2-fg");

const player13P = document.getElementById("player-1-3p");
const player23P = document.getElementById("player-2-3p");

const player1FT = document.getElementById("player-1-ft");
const player2FT = document.getElementById("player-2-ft");

submitButton.addEventListener("click", async () => {
  const name1 = player1Input.value;
  const name2 = player2Input.value;

  let allPlayers = await axios.get("http://localhost:3001/players");
  console.log(allPlayers.data);

  for (let player of allPlayers.data) {
    if (player.name == name1) {
      player1Name.innerHTML = player.name;
      player1Img.innerHTML = `<img src=${player.playerImg}>`;
      player1Logo.innerHTML = `<img src=${player.team.logoImgUrl}>`;
      player1FG.innerHTML = player.fgPercentage;
      player1FT.innerHTML = player.ftPercentage;
      player1PPG.innerHTML = player.ppg;
      player1RB.innerHTML = player.rbpg;
      player1Steals.innerHTML = player.spg;
      player13P.innerHTML = player.threePercentage;
      player1Assists.innerHTML = player.apg;
    }
    if (player.name == name2) {
      player2Name.innerHTML = player.name;
      player2Img.innerHTML = `<img src=${player.playerImg}>`;
      player2Logo.innerHTML = `<img src=${player.team.logoImgUrl}>`;
      player2FG.innerHTML = player.fgPercentage;
      player2FT.innerHTML = player.ftPercentage;
      player2PPG.innerHTML = player.ppg;
      player2RB.innerHTML = player.rbpg;
      player2Steals.innerHTML = player.spg;
      player23P.innerHTML = player.threePercentage;
      player2Assists.innerHTML = player.apg;
    }
  }

  if (!player2Name.innerHTML || !player1Name.innerHTML){
    alert('Player name(s) not found')
    return
  }
  else {
    if (name1 && name2) {
    let player1FGNumber = player1FG.innerHTML.replace("%", "");
    let player2FGNumber = player2FG.innerHTML.replace("%", "");

    let player13PNumber = player13P.innerHTML.replace("%", "");
    let player23PNumber = player23P.innerHTML.replace("%", "");

    let player1FTNumber = player1FT.innerHTML.replace("%", "");
    let player2FTNumber = player2FT.innerHTML.replace("%", "");

    if (player1FGNumber > player2FGNumber) {
      player1FG.style.color = "green";
      player2FG.style.color = "red";
    } else if (player1FGNumber == player2FGNumber) {
      player1FG.style.color = "grey";
      player2FG.style.color = "grey";
    } else {
      player1FG.style.color = "red";
      player2FG.style.color = "green";
    }

    if (player13PNumber > player23PNumber) {
      player13P.style.color = "green";
      player23P.style.color = "red";
    } else if (player13PNumber == player23PNumber) {
      player13P.style.color = "grey";
      player23P.style.color = "grey";
    } else {
      player23P.style.color = "green";
      player13P.style.color = "red";
    }

    if (player1FTNumber > player2FTNumber) {
      player1FT.style.color = "green";
      player2FT.style.color = "red";
    } else if (player1FTNumber > player2FTNumber) {
      player1FT.style.color = "grey";
      player2FT.style.color = "grey";
    } else {
      player2FT.style.color = "green";
      player1FT.style.color = "red";
    }

    if (player1PPG.innerHTML > player2PPG.innerHTML) {
      player1PPG.style.color = "green";
      player2PPG.style.color = "red";
    } else if (player1PPG.innerHTML == player2PPG.innerHTML) {
      player1PPG.style.color = "grey";
      player1PPG.style.color = "grey";
    } else {
      player2PPG.style.color = "green";
      player1PPG.style.color = "red";
    }


    if(player1RB.innerHTML>player2RB.innerHTML){
        player1RB.style.color='green'
        player2RB.style.color='red'
    }
    else if(player1RB.innerHTML==player2RB.innerHTML){
        player1RB.style.color='grey'
        player2RB.style.color='grey'
    }
    else {
        player2RB.style.color='green'
        player1RB.style.color='red'
    }

    if(player1Assists.innerHTML>player2Assists.innerHTML){
        player1Assists.style.color='green'
        player2Assists.style.color='red'
    }
    else if(player1Assists.innerHTML==player2Assists.innerHTML){
        player1Assists.style.color='grey'
        player2Assists.style.color='grey'
    }
    else {
        player2Assists.style.color='green'
        player1Assists.style.color='red'
    }

    if(player1Steals.innerHTML>player2Steals.innerHTML){
        player1Steals.style.color='green'
        player2Steals.style.color='red'
    }
    else if(player1Steals.innerHTML==player2Steals.innerHTML){
        player1Steals.style.color='grey'
        player2Steals.style.color='grey'
    }
    else {
        player2Steals.style.color='green'
        player1Steals.style.color='red'
    }
  }
}
});
