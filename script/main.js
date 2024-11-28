 let playerBtn=document.getElementById("btn-player");
 let gardienBtn=document.getElementById("btn-gardien")
const form =document.getElementById("form-content")
 const name = document.getElementById("name");
 const rating = document.getElementById("rating");
 const pace = document.getElementById("pace");
 const shooting = document.getElementById("shooting");
 const passing = document.getElementById("passing");
 const dribbling = document.getElementById("dribbling");
 const defending = document.getElementById("defending");
 const physical = document.getElementById("physical");
 const flag = document.getElementById("mySelect");
 const footballClub = document.getElementById("football-club");
 const position = document.getElementById("position");
 const nationality = document.getElementById("nationality");
const BackgroundImgInput=document.getElementById("")
 
// array pourles players pour l'ajoute 
 let players=[];
//  function savePlayerslocalstorage() {
//     localStorage.setItem("players", JSON.stringify(players));
//   }
  
  //fonction de Récupérer la liste des tâches de  LocalStorage -------------//
//   function LocalStorageplayerform() {
//     const saveplayer = localStorage.getItem("players");
//     if (saveplayer) {
//       players = JSON.parse(saveplayer);
//       players.forEach(affichiePlayers);
//     }
//   }
  

 //fonction d'ajoute

 function addPlayers(){
    // const backgroundImg = backgroundImgInput.value.trim() || './src/assets/img/template-3.png'; // Default if empty
// if(!Validation()){
// return;
// }
//    else{ 
    const playerInfo = {
        id: Date.now(),
        Name: name.value.trim(),
        Rating: rating.value,
        Pace: pace.value,
        Shooting: shooting.value,
        Passing: passing.value,
        Dribbling: dribbling.value,
        Defending: defending.value,
        Physical: physical.value,
        Flag: flag.value,
        FootballClub: footballClub.value,
        Position: position.value,
        Nationality: nationality.value
    };
    players.push(playerInfo);
    affichiePlayers(playerInfo);
    savePlayerslocalstorage();
// }
    form.reset();
    
 }

 //fonction affichie players

 function affichiePlayers(player){
    const Changment=document.getElementById("content-chengment");
const playersCard=document.createElement("div");
playersCard.classList.add("player-card");
playersCard.innerHTML=`
<div class="img-background">
            <img src="${player.BackgroundImg || './src/assets/img/template-3.png'}" alt="Background Image">
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
                <div class="stat"><span class="value">${player.Pace}</span> PAC</div>
                <div class="stat"><span class="value">${player.Shooting}</span> SHO</div>
                <div class="stat"><span class="value">${player.Passing}</span> PAS</div>
                <div class="stat"><span class="value">${player.Dribbling}</span> DRI</div>
                <div class="stat"><span class="value">${player.Defending}</span> DEF</div>
                <div class="stat"><span class="value">${player.Physical}</span> PHY</div>
            </div>
            <div class="card-footer">
                <img src="${player.Flag}" alt="Nation" class="nation">
                <img src="${player.LeagueImg || 'https://cdn3.futbin.com/content/fifa25/img/league/dark/19.png'}" alt="League" class="league">
                <img src="${player.ClubImg || 'https://cdn3.futbin.com/content/fifa25/img/clubs/dark/243.png'}" alt="Club" class="club">
            </div>
        </div>
    `;
    Changment.appendChild(playersCard);

 }

 form.addEventListener("submit", function (e) {
    e.preventDefault();
    addPlayers();
})

// fonction de validation la formulaire 
// function validation() {
//     let isValide = true;
//     resetErrors(); // Fonction pour réinitialiser les erreurs (si elle existe)

//     // Validation du nom
//     if (name.value.trim() === "") {
//         showError(name, "Le nom est requis.");
//         isValide = false;
//     } else {
//         const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
//         if (!regex.test(name.value.trim())) {
//             showError(name, "Le nom doit contenir uniquement des lettres et des espaces.");
//             isValide = false;
//         }
//     }

//     // Validation du rating
//     if (rating.value.trim() === "") {
//         showError(rating, "La note est requise.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}(\.[0-9]{1,2})?$/; // Accepte les nombres avec décimales
//         if (!regex.test(rating.value.trim())) {
//             showError(rating, "La note doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation de la vitesse
//     if (pace.value.trim() === "") {
//         showError(pace, "La vitesse est requise.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/; // Vitesse doit être un nombre
//         if (!regex.test(pace.value.trim())) {
//             showError(pace, "La vitesse doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation du tir
//     if (shooting.value.trim() === "") {
//         showError(shooting, "Le tir est requis.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/; // Tir doit être un nombre
//         if (!regex.test(shooting.value.trim())) {
//             showError(shooting, "Le tir doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation des passes
//     if (passing.value.trim() === "") {
//         showError(passing, "Les passes sont requises.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/;
//         if (!regex.test(passing.value.trim())) {
//             showError(passing, "Les passes doivent être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation du dribble
//     if (dribbling.value.trim() === "") {
//         showError(dribbling, "Le dribble est requis.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/;
//         if (!regex.test(dribbling.value.trim())) {
//             showError(dribbling, "Le dribble doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation de la défense
//     if (defending.value.trim() === "") {
//         showError(defending, "La défense est requise.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/;
//         if (!regex.test(defending.value.trim())) {
//             showError(defending, "La défense doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation du physique
//     if (physical.value.trim() === "") {
//         showError(physical, "Le physique est requis.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{1,2}$/;
//         if (!regex.test(physical.value.trim())) {
//             showError(physical, "Le physique doit être un nombre valide.");
//             isValide = false;
//         }
//     }

//     // Validation du club de football
//     if (footballClub.value.trim() === "") {
//         showError(footballClub, "Le club de football est requis.");
//         isValide = false;
//     }

//     // Validation de la position
//     if (position.value.trim() === "") {
//         showError(position, "La position est requise.");
//         isValide = false;
//     }

//     // Validation de la nationalité
//     if (nationality.value.trim() === "") {
//         showError(nationality, "La nationalité est requise.");
//         isValide = false;
//     }

//     // Validation du drapeau (peut être une image ou une URL)
//     if (flag.value.trim() === "") {
//         showError(flag, "Le drapeau est requis.");
//         isValide = false;
//     }

//     return isValide;
// }
// function showError(inputElement, message) {
//     // Créer un élément pour message d'erreur
//     const errorElement = document.createElement("div");
//     errorElement.classList.add("error-message");
//     errorElement.innerText = message;}
