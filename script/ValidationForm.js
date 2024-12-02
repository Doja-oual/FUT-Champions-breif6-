// / function PlayerRefrech(){
    //   const Changment = document.getElementById("content-chengment");
    //   const CB1 = document.getElementById("center-back1");
    //   const CB2 = document.getElementById("center-back2");
    //   const CB3 = document.getElementById("center-back3");
    //   const RM = document.getElementById("right-midfield");
    //   const CM1 = document.getElementById("center-midfield1");
    //   const CM2 = document.getElementById("center-midfield2");
    //   const LM = document.getElementById("left-midfield");
    //   const AT = document.getElementById("attacking-midfield");
    //   const ST1 = document.getElementById("striker1");
    //   const ST2 = document.getElementById("striker2");
    //   Changment.innerHTML="";
    //   CB1=innerHTML="";
      
    //   players.forEach(affichiePlayers)
    
    // }
    
    
    
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
    
    
    // //pour localestorige des joueur
    // document.addEventListener('DOMContentLoaded', function() {
    //   LocalStorageplayerform();  
    // });
    // function openplayerModifier(id) {
    //     const player = players.find((t) => t.id === id);
    //     if (!player) return;
      
      
    //     name.value = player.Name || ""; 
    //     pace.value = player.Pace || "";
    //     shooting.value = player.Shooting || "";
    //     passing.value = player.Passing || "";
    //     dribbling.value = player.Dribbling || "";
    //     defending.value = player.Defending || "";
    //     physical.value = player.Physical || "";
    //     flag.value = player.Flag || "";
    //     footballClub.value = player.FootballClub || "";
    //     position.value = player.Position || "";
    //     nationality.value = player.Nationality || "";
    //     //for gardian
    //     // if (player.Handling) handling.value = player.Handling || "";
    //     // if (player.Kicking) kicking.value = player.Kicking || "";
    //     // if (player.Reflexes) reflexes.value = player.Reflexes || "";
    //     // if (player.Speed) speed.value = player.Speed || "";
    //     // if (player.Positioning) positioning.value = player.Positioning || "";
        
    //     form.setAttribute("data-edit-id", id);
    //     document.querySelector(".form-content").classList.add("active");
      
    //   }