// localStorage.clear();
//le id de parent  inpute de players   et gardian spicifique
let playerInput = document.getElementById("player-input");
let gardienInput = document.getElementById("goalkeeper-input");
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
// id de formation des player (bonus)
const formation = document.getElementById("SquadInfo");
// id de section de tiran
const contentFooot =document.querySelector(".content-fooot");
// fonction bonus de formation des players 
formation.addEventListener("change",function(){
  switch(formation.value){
    case"3412":
    contentFooot.style.gridTemplateColumns = "repeat(6,1fr)"
    contentFooot.style.gridTemplateRows = "repeat(5,1fr)"
    contentFooot.style.gridTemplateAreas = `
    ". ST1 ST1 ST2 ST2 ."
    ". . CAM CAM  .  ."
    "LM LM . . RM RM"
    ". CM1 CM1 CM2 CM2 ."
    "CB1 CB1 CB2 CB2 CB3 CB3 "
    "GK GK GK GK GK GK"
    `
    break;

    case"433":
    contentFooot.style.gridTemplateColumns = "repeat(8,1fr)"
    contentFooot.style.gridTemplateRows = "repeat(4,1fr)"
    contentFooot.style.gridTemplateAreas = `
     ". ST1 ST1 CAM CAM ST2 ST2 ."
    ". LM LM CM1 CM1 RM RM ."
    "CB1 CB1 CB2 CB2 CB3 CB3 CM2 CM2"
    "GK GK GK GK GK GK GK GK"
    `
    break;

    case"442":
    contentFooot.style.gridTemplateColumns = "repeat(8,1fr)"
    contentFooot.style.gridTemplateRows = "repeat(4,1fr)"
    contentFooot.style.gridTemplateAreas = `
     ". ST1 ST1 . . CAM CAM  ."
    "LM LM CM1 CM1 RM RM ST2 ST2"
    "CB1 CB1 CB2 CB2 CB3 CB3 CM2 CM2"
    "GK GK GK GK GK GK GK GK"
    `
    break;
   
  
  case "3421":
      contentFooot.style.gridTemplateColumns = "repeat(8, 1fr)";
      contentFooot.style.gridTemplateRows = "repeat(5, 1fr)";
      contentFooot.style.gridTemplateAreas = `
              ". . CAM CAM  .  ."

      ". ST1 ST1 ST2 ST2 ."
    "LM LM . . RM RM"

    ". CM1 CM1 CM2 CM2 ."
    "CB1 CB1 CB2 CB2 CB3 CB3 "
    " . GK GK GK GK GK GK ."
      `;
      break;

  default:
      console.warn("Formation not supported");

  }
})


//fonction pour affichie les inpute de gardian
function affichieInputJoueure() {
  playerInput.style.display = "block";
  gardienInput.style.display = "none";
  playerBtn.classList.add("disabled");
  gardienBtn.classList.remove("disabled");
  position_choice("player");

}
//Fonction pour affichie les inpute de player
function affichieInputGardian() {
  playerInput.style.display = "none";
  gardienInput.style.display = "block";
  playerBtn.classList.remove("disabled");
  gardienBtn.classList.add("disabled");
  position_choice("GK");
  
}

function position_choice(pos){
  if(pos=="GK") position.innerHTML='<option value="GK">GK</option>';
  else position.innerHTML=`<option value="chang">chang</option>
                    <option value="CB1">CB1</option>
                    <option value="CB2">CB2</option>
                    <option value="CB3">CB3</option>
                    <option value="CM1">CM1</option>
                    <option value="CM2">CM2</option>
                    <option value="LM">LM</option>
                    <option value="AT">CAM</option>
                    <option value="RM">RM</option>
                    <option value="ST1">ST1</option>
                    <option value="ST2">ST2</option>`
}

//ajoute des evenment pour click btn

// array pourles players pour l'ajoute
let players = [];
function savePlayerslocalstorage() {
  localStorage.setItem("players", JSON.stringify(players));
}

// fonction de Récupérer la liste des players de  LocalStorage -------------//
function LocalStorageplayerform() {
  const saveplayer = localStorage.getItem("players");
  if (saveplayer) {
    players = JSON.parse(saveplayer);
    players.forEach(affichiePlayers);
  }
}

//fonction d'ajoute

function addPlayers() {
  const playerId = form.dataset.editing; //?

  if (position.value === "GK") {
    const gkplayerInfo = {
      id: playerId ? parseInt(playerId) : Date.now(),//? OPIRATEUR TIRNIRE
      Name: name.value.trim(),
      Rating: rating.value.trim(),
      diving: diving.value.trim(),
      handling: handling.value,
      kicking: kicking.value,
      reflexes: reflexes.value,
      speed: speed.value,
      Flag: flag.value,
      FootballClub: footballClub.value,
      Position: position.value,
      positioning: positioning.value,
      Nationality: nationality.value,
    };
    console.log(gkplayerInfo);

    players.push(gkplayerInfo);
    savePlayerslocalstorage();
    form.reset();
    affichieInputGardian();
    document.getElementById("content-chengment").innerHTML = "";
    players.forEach(affichiePlayers);
  } else {
    const playerInfo = {
      id: playerId ? parseInt(playerId) : Date.now(),
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
    };

    console.log(playerInfo);
    players.push(playerInfo);

    savePlayerslocalstorage();
    form.reset();
    affichieInputJoueure();
    document.getElementById("content-chengment").innerHTML = "";///?
    players.forEach(affichiePlayers);
  }
}

///
function supprimerPlayer(playerId) {
  players = players.filter(p => p.id !== playerId);
  savePlayerslocalstorage();
  location.reload();
  document.getElementById("content-chengment").innerHTML = "";
  players.forEach(affichiePlayers);
}

//fonction affichie players

function affichiePlayers(player) {
  const Changment = document.getElementById("content-chengment");
  const GK = document.getElementById("goalkeeper");
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
            <img src="" alt="Player Image">
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
                <div class="stat"><span class="value">${+player.Physical}</span> PHY</div>
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
        <button class="btnModifie"  onclick="openplayerModifier(${player.id})">
            <i class="fas fa-edit"></i>
        </button>
        <button class="btnSupprime" onclick="supprimerPlayer(${player.id})">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>

    `;
  const GardianCard = document.createElement("div");
  GardianCard.classList.add("player-card");
  GardianCard.innerHTML = `
      <div class="img-background">
                <img src="${
                  player.BackgroundImg ||
                  "./src/assets/img/background-card-gardian.webp"
                }" alt="Background Image">

      </div>
      <div class="card-header">
        <span class="rating">${player.Rating}</span>
        <span class="position">${player.Position}</span>
      </div>
      <div class="player-image">
        <img src="" alt="Player Image">
      </div>
      <div class="card-content">
        <div class="player-name">${player.Name}</div>
        <div class="player-stats">
          <div class="stat"><span class="value">${
            player.diving
          }</span> DIV</div>
          <div class="stat"><span class="value">${
            player.handling
          }</span> HAN</div>
          <div class="stat"><span class="value">${
            player.kicking
          }</span> KIC</div>
          <div class="stat"><span class="value">${
            player.reflexes
          }</span> REF</div>
          <div class="stat"><span class="value">${player.speed}</span> SPD</div>
          <div class="stat"><span class="value">${
            player.positioning
          }</span> POS</div>
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
        <button class="btnModifie"  onclick="openplayerModifier(${player.id})">
            <i class="fas fa-edit"></i>
        </button>
        <button class="btnSupprime" onclick="supprimerPlayer(${player.id})">
            <i class="fas fa-trash-alt"></i>
        </button>
        </div>
    `;
  const modifyButton = playersCard.querySelector(".btnModifie");
  const deleteButton = playersCard.querySelector(".btnSupprime");

  // Ajouter les événements pour modifier et supprimer un joueur
  modifyButton.addEventListener("click", function () {
    openplayerModifier(player.id);
  });

  deleteButton.addEventListener("click", function () {
    supprimerPlayer(player.id);
  });

  // position card pour gardian

  // switch pour chiosir la position

  switch (player.Position) {
    case "GK":
      if (GK.querySelector(".player-card")) {
        Changment.appendChild(GardianCard);
        return;
      }
      GK.innerHTML = "";
      GK.appendChild(GardianCard);
      const gkImg = GK.querySelector(".player-image img");
      gkImg.src = './src/assets/img/joueur/courtois.webp'
      break;

    case "chang":
      Changment.appendChild(playersCard);
      break;

    case "CB1":
      if (CB1.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CB1.innerHTML = "";
      CB1.appendChild(playersCard);
      const cb1Img = CB1.querySelector(".player-image img");
      cb1Img.src = './src/assets/img/joueur/carvajal.png';
      break;

    case "CB2":
      if (CB2.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CB2.innerHTML = "";
      CB2.appendChild(playersCard);
      const cb2Img = CB2.querySelector(".player-image img");
      cb2Img.src = './src/assets/img/joueur/eder.webp';
      
      break;

    case "CB3":
      if (CB3.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CB3.innerHTML = "";
      CB3.appendChild(playersCard);
      const cb3Img = CB3.querySelector(".player-image img");
      cb3Img.src = './src/assets/img/joueur/isco.png';
      break;

    case "RM":
      if (RM.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      RM.innerHTML = "";
      RM.appendChild(playersCard);
      const rmImg = RM.querySelector(".player-image img");
      rmImg.src = './src/assets/img/joueur/carvajal.png';
      break;

    case "CM1":
      if (CM1.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CM1.innerHTML = "";
      CM1.appendChild(playersCard);
      const cm1Img = CM1.querySelector(".player-image img");
      cm1Img.src = './src/assets/img/joueur/carvajal.png';
      break;

    case "CM2":
      if (CM2.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CM2.innerHTML = "";
      CM2.appendChild(playersCard);
      const cm2Img = CM2.querySelector(".player-image img");
      cm2Img.src = './src/assets/img/joueur/federico.png';
      break;

    case "LM":
      if (LM.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      LM.innerHTML = "";
      LM.appendChild(playersCard);
      const LMImg = LM.querySelector(".player-image img");
      LMImg.src = './src/assets/img/joueur/federico.png';
      break;
    case "CAM":
      if (CAM.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      CAM.innerHTML = "";
      CAM.appendChild(playersCard);
      const camImg = CAM.querySelector(".player-image img");
      camImg.src = './src/assets/img/joueur/arnlod.webp';
      break;

    case "ST1":
      if (ST1.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      ST1.innerHTML = "";
      ST1.appendChild(playersCard);
      const st1Img = ST1.querySelector(".player-image img");
      st1Img.src = './src/assets/img/joueur/cristiano.webp';
      break;

    case "ST2":
      if (ST2.querySelector(".player-card")) {
        Changment.appendChild(playersCard);
        return;
      }
      ST2.innerHTML = "";
      ST2.appendChild(playersCard);
      const st2Img = ST2.querySelector(".player-image img");
      st2Img.src = './src/assets/img/joueur/vini.webp';
      break;

    default:
      console.log("Position not found");
  }
}
function openplayerModifier(playerId) {
  const player = players.find((p) => p.id === playerId);
  if (!player) return;

  // Préremplir le formulaire avec les données du joueur
  name.value = player.Name;
  flag.value = player.Flag;
  footballClub.value = player.FootballClub;
  position.value = player.Position;
  nationality.value = player.Nationality;
  rating.value = player.Rating;

  // Remplir les stats de joueur ou de gardien
  if (player.Position === "GK") {
    diving.value = player.diving;
    handling.value = player.handling;
    kicking.value = player.kicking;
    reflexes.value = player.reflexes;
    speed.value = player.speed;
    positioning.value = player.positioning;
    affichieInputGardian();
  } else {
    pace.value = player.Pace;
    shooting.value = player.Shooting;
    passing.value = player.Passing;
    dribbling.value = player.Dribbling;
    defending.value = player.Defending;
    physical.value = player.Physical;
    affichieInputJoueure();
  }

  const updatePlayerBtn = document.querySelector("#update__player");
  const oldUpdateBtn = updatePlayerBtn.cloneNode(true);
  updatePlayerBtn.parentNode.replaceChild(oldUpdateBtn, updatePlayerBtn);

  oldUpdateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    const playerIndex = players.findIndex(p => p.id === playerId);
    
    if (playerIndex !== -1) {
      if (player.Position === "GK") {
        players[playerIndex] = {
          ...players[playerIndex], // Preserve existing properties
          Name: name.value.trim(),
          Rating: rating.value.trim(),
          diving: diving.value.trim(),
          handling: handling.value,
          kicking: kicking.value,
          reflexes: reflexes.value,
          speed: speed.value,
          Flag: flag.value,
          FootballClub: footballClub.value,
          Position: player.Position, // Maintain original position
          positioning: positioning.value,
          Nationality: nationality.value,
        };
      } else {
        players[playerIndex] = {
          ...players[playerIndex], // Preserve existing properties
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
          Position: player.Position, // Maintain original position
          Nationality: nationality.value,
        };
      }

      savePlayerslocalstorage();

      form.reset();
      document.getElementById("content-chengment").innerHTML = "";
      players.forEach(affichiePlayers);
      location.reload();
    }
    
    form.dataset.editing = playerId; 
  });
}

//validation de formulaire pour methode de regex
const patterns = {
  name: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/, 
  rating: /^[0-9]{1,2}(\.[0-9]{1,2})?$/, 
  pace: /^[0-9]{1,2}$/, 
  shooting:  /^[0-9]{1,2}$/,
  passing:  /^[0-9]{1,2}$/,
  dribbling:  /^[0-9]{1,2}$/,
  defending:  /^[0-9]{1,2}$/,
  physical:  /^[0-9]{1,2}$/,
  diving:  /^[0-9]{1,2}$/, 
  handling:  /^[0-9]{1,2}$/,
  kicking:  /^[0-9]{1,2}$/,
  reflexes:  /^[0-9]{1,2}$/,
  speed:  /^[0-9]{1,2}$/,
  positioning:  /^[0-9]{1,2}$/,
  flag: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/, 
  footballClub: /^[a-zA-Z0-9\s]{2,50}$/, 
 
};
function validateForm() {
  let isValid = true;

  // Récupérer tous les champs du formulaire
  const fields = [
    name,
    flag,
    footballClub,
    position,
    nationality,
    rating,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
   
  ];
  const field_gk=[
    name,
    flag,
    footballClub,
    position,
    nationality,
    diving,
    handling,
    kicking,
    reflexes,
    speed,
    positioning,
  ]
  if(position.value=="GK"){
    field_gk.forEach(( field_gk) => {
      const pattern = patterns[ field_gk.id]; 
      if (pattern) {
        if (pattern.test( field_gk.value.trim())) {
          field_gk.style.border = "1px solid green"; 
        } else {
          field_gk.style.border = "2px solid red"; 
          createErrorMessage( field_gk, `Invalid ${ field_gk.id}`); 
          isValid = false;
        }
      }
    });
  }
  else{
  fields.forEach((field) => {
    const pattern = patterns[field.id]; 
    if (pattern) {
      if (pattern.test(field.value.trim())) {
        field.style.border = "1px solid green"; 
      } else {
        field.style.border = "2px solid red"; 
        createErrorMessage(field, `Invalid ${field.id}`); 
        isValid = false;
      }
    }
  });
}
  return isValid;
}
//fonction de remove et create msg de invalid player
function removeErrorMessage(field) {
  const error = field.nextElementSibling;
  if (error && error.classList.contains("error-message")) {
    error.remove();
  }
}
// fonction pour  un message d'erreur
function createErrorMessage(field, message) {
  removeErrorMessage(field); 
  const error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "red";
  error.innerText = message;
  field.insertAdjacentElement("afterend", error);
}
//fonction de remove et create msg de invalid gardian

function removeErrorMessage( field_gk) {
  const error =  field_gk.nextElementSibling;
  if (error && error.classList.contains("error-message")) {
    error.remove();
  }
}
// fonction pour  un message d'erreur
function createErrorMessage( field_gk, message) {
  removeErrorMessage( field_gk); 
  const error = document.createElement("div");
  error.className = "error-message";
  error.style.color = "red";
  error.innerText = message;
  field_gk.insertAdjacentElement("afterend", error);
}



//add player

document.addEventListener("DOMContentLoaded", function () {
  affichieInputJoueure();
  LocalStorageplayerform();

  playerBtn.addEventListener("click", affichieInputJoueure);

  gardienBtn.addEventListener("click", affichieInputGardian);

  
  const addPlayerBtn = document.querySelector("#add__player");
  addPlayerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if(validateForm()){
      addPlayers();

    }
  });
});
