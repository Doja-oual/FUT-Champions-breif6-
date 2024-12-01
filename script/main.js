
let playerInput=document.getElementById("player-input");
let gardienInput=document.getElementById("goalkeeper-input");
// varibla communs  
const form = document.getElementById("form-content");
const name = document.getElementById("name");
const flag = document.getElementById("mySelect");
const footballClub = document.getElementById("football-club");
const position = document.getElementById("position");
const nationality = document.getElementById("nationality");
// variable de joueure

const rating = document.getElementById("rating");
const pace = document.getElementById("pace");
const shooting = document.getElementById("shooting");
const passing = document.getElementById("passing");
const dribbling = document.getElementById("dribbling");
const defending = document.getElementById("defending");
const physical = document.getElementById("physical");
//varible de gardian 
const diving = document.getElementById("diving");
const handling = document.getElementById("handling");
const kicking = document.getElementById("kicking");
const reflexes = document.getElementById("reflexes");
const speed = document.getElementById("speed");
const positioning = document.getElementById("positioning");
//

//les button des position de card
let playerBtn = document.getElementById("btn-player");
let gardienBtn = document.getElementById("btn-gardien");



  
//fonction pour affichie les inpute de gardian
function affichieInputJoueure(){
  playerInput.style.display="block";
  gardienInput.style.display="none";
  playerBtn.classList.add("disabled");
  gardienBtn.classList.remove("disabled");
  
}
//Fonction pour affichie les inpute de player
function affichieInputGardian(){
  playerInput.style.display="none";
  gardienInput.style.display="block";
  playerBtn.classList.remove("disabled");
  gardienBtn.classList.add("disabled");
  
}

//ajoute des evenment pour click btn 








// array pourles players pour l'ajoute
let players = [];
function savePlayerslocalstorage() {
  localStorage.setItem("players", JSON.stringify(players));
}

// fonction de Récupérer la liste des tâches de  LocalStorage -------------//
function LocalStorageplayerform() {
  const saveplayer = localStorage.getItem("players");
  if (saveplayer) {
    players = JSON.parse(saveplayer);
    players.forEach(affichiePlayers);
  }
}

//fonction d'ajoute

function addPlayers() {
  const positionValue = position.value.trim();

  // const backgroundImg = backgroundImgInput.value.trim() || './src/assets/img/template-3.png'; // Default if empty
  // if(!Validation()){
  // return;
  // }
  //    else{
  const playerInfo = {
    id: Date.now(),
    Name: name.value.trim(),
    Rating: rating.value.trim(),
    Pace: pace.value.trim(),
    Shooting: shooting.value,
    Passing: passing.value,
    Dribbling: dribbling.value,
    Defending: defending.value,
    Physical: physical.value,
    Flag: flag.value,
    FootballClub: footballClub.value,
    Position: position.value,
    Nationality: nationality.value,
    // pour valeur des gardian,
    // Handling: handling.value,
    // Kicking: kicking.value,
    // Reflexes: reflexes.value,
    // Speed: speed.value,
    // Positioning: positioning.value,

  };


 


 
  
  players.push(playerInfo);
  affichiePlayers(playerInfo);
  savePlayerslocalstorage();
  // }
  form.reset();
}

//fonction affichie players

function affichiePlayers(player) {
  const Changment = document.getElementById("content-chengment");
  const GK=document.getElementById("goalkeeper");
  const CB1 = document.getElementById("center-back1");
  const CB2 = document.getElementById("center-back2");
  const CB3 = document.getElementById("center-back3");
  const RM = document.getElementById("right-midfield");
  const CM1 = document.getElementById("center-midfield1");
  const CM2 = document.getElementById("center-midfield2");
  const LM = document.getElementById("left-midfield");
  const CAM = document.querySelector("attacking-midfield");
  const ST1 = document.getElementById("striker1");
  const ST2 = document.getElementById("striker2");

//card pour players
  const playersCard = document.createElement("div");
  playersCard.classList.add("player-card");
  
  playersCard.innerHTML = `
       <div class="img-background" >
            <img src="${
              player.BackgroundImg || "./src/assets/img/template-3.png"
            }" alt="Background Image">
        </div>
        <div class="card-header">
            <span class="rating">${player.Rating}</span>
            <span class="position">${player.Position}</span>
        </div>
        <div class="player-image">
            <img src="${
              player.PlayerImg || "./src/assets/img/joueur/federico.png"
            }" alt="Player Image">
        </div>
        <div class="card-content">
            <div class="player-name">${player.Name}</div>
            <div class="player-stats">
                <div class="stat"><span class="value">${
                  player.Pace
                }</span> PAC</div>
                <div class="stat"><span class="value">${
                  player.Shooting
                }</span> SHO</div>
                <div class="stat"><span class="value">${
                  player.Passing
                }</span> PAS</div>
                <div class="stat"><span class="value">${
                  player.Dribbling
                }</span> DRI</div>
                <div class="stat"><span class="value">${
                  player.Defending
                }</span> DEF</div>
                <div class="stat"><span class="value">${+
                  player.Physical
                }</span> PHY</div>
            </div>
            <div class="card-footer">
                <img src="${player.Flag}" alt="Nation" class="nation">
                <img src="${
                  player.LeagueImg ||
                  "https://cdn3.futbin.com/content/fifa25/img/league/dark/19.png"
                }" alt="League" class="league">
                <img src="${
                  player.ClubImg ||
                  "https://cdn3.futbin.com/content/fifa25/img/clubs/dark/243.png"
                }" alt="Club" class="club">
            </div>
        </div>
     <div class="card-action">
        <button class="btnModifie">
            <i class="fas fa-edit"></i>
        </button>
        <button class="btnSupprime">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>

    `;
    const GardianCard = document.createElement("div");
    GardianCard.classList.add("player-card");
    GardianCard.innerHTML = `
      <div class="img-background">
                <img src="${player.BackgroundImg || "./src/assets/img/background-card-gardian.webp"}" alt="Background Image">

      </div>
      <div class="card-header">
        <span class="rating">${player.Rating}</span>
        <span class="position">${player.Position}</span>
      </div>
      <div class="player-image">
        <img src="${player.PlayerImg || './src/assets/img/joueur/federico.png'}" alt="Player Image">
      </div>
      <div class="card-content">
        <div class="player-name">${player.Name}</div>
        <div class="player-stats">
          <div class="stat"><span class="value">${player.Diving}</span> DIV</div>
          <div class="stat"><span class="value">${player.Handling}</span> HAN</div>
          <div class="stat"><span class="value">${player.Kicking}</span> KIC</div>
          <div class="stat"><span class="value">${player.Reflexes}</span> REF</div>
          <div class="stat"><span class="value">${player.Speed}</span> SPD</div>
          <div class="stat"><span class="value">${player.Positioning}</span> POS</div>
        </div>
        <div class="card-footer">
          <img src="${player.Flag}" alt="Nation" class="nation">
          <img src="${player.LeagueImg || 'https://cdn3.futbin.com/content/fifa25/img/league/dark/19.png'}" alt="League" class="league">
          <img src="${player.ClubImg || 'https://cdn3.futbin.com/content/fifa25/img/clubs/dark/243.png'}" alt="Club" class="club">
        </div>
      </div>
        <div class="card-action">
        <button class="btnModifie">
            <i class="fas fa-edit"></i>
        </button>
        <button class="btnSupprime">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>
    `;
           // position card pour gardian

  // switch pour chiosir la position

  switch (player.Position) {

    case "GK":
      if(GK.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      GK.innerHTML="";
      GK.appendChild(GardianCard);
      break;

    case "chang":
      Changment.appendChild(playersCard);
      break;
      

    case "CB1":
      if(CB1.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      CB1.innerHTML = ""
      CB1.appendChild(playersCard);
      break;

    case "CB2":
      if(CB2.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      CB2.innerHTML = ""
      CB2.appendChild(playersCard);
      break;

    case "CB3":
      if(CB3.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      CB3.innerHTML = ""
      CB3.appendChild(playersCard);
      break;

    case "RM":
      if(RM.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      RM.innerHTML = ""
      RM.appendChild(playersCard);
      break;

    case "CM1":
      if(CM1.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      CM1.innerHTML = ""
      CM1.appendChild(playersCard);
      break;

    case "CM2":
      if(CM2.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      CM2.innerHTML = ""
      CM2.appendChild(playersCard);
      break;
    


    case "LM":
      if(LM.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      LM.innerHTML = ""
      LM.appendChild(playersCard);
      break;
      case "CAM":
        if(CAM.querySelector(".player-card")){
          Changment.appendChild(playersCard);
          return;
        }
      CAM.innerHTML = ""
      CAM.appendChild(playersCard);
        break;

 

    case "ST1":
      if(ST1.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      ST1.innerHTML = ""
      ST1.appendChild(playersCard);
      break;

    case "ST2":
      if(ST2.querySelector(".player-card")){
        Changment.appendChild(playersCard);
        return;
      }
      ST2.innerHTML = ""
      ST2.appendChild(playersCard);
      break;

    default:
      console.log("Position not found");
  }
}





document.addEventListener("DOMContentLoaded",function(){
  affichieInputJoueure();
  LocalStorageplayerform();

  playerBtn.addEventListener("click",affichieInputJoueure);
  
  gardienBtn.addEventListener("click",affichieInputGardian);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addPlayers();
    
  });

});

