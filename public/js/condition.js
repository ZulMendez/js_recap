// ### 1. CONDITIONS ( pour cette partie, créer un nouveau fichier et nommer le 'condition.js'. )
// #### Exercice 1
// - Via un prompt, demande 3 nombres à l'utilisateur.
// - Si les trois valeurs sont égales, tu lui réponds via une console.log : "Les trois variables sont identiques"
// - Si seulement deux variables sont identiques, tu lui réponds via une console.log : "Deux des valeurs sont égales"
// - Sinon,tu lui réponds via la console.log : "Les trois variables sont différentes"

// let nombre1 = parseInt(prompt('entrez un nombre'));
// let nombre2 = parseInt(prompt('entrez un 2ème nombre'));
// let nombre3 = parseInt(prompt('entrez un 3ème nombre'));

// if (nombre1 == nombre2  && nombre1 == nombre3) {
//     console.log('Les trois variables sont identiques');
// } else if (nombre1 == nombre2 || nombre1 == nombre3 || nombre2 == nombre3) {
//     console.log('Deux des valeurs sont égales');
// } else {
//     console.log('Les trois variables sont différentes');
// }

// #### Exercice 2
// - Créer un programme qui conseille l'utilisateur sur sa tenue à porter en fonction de la météo
// - Via un prompt, demande le temps qu'il fait dehors
// - Via l'instruction if...else, tu lui réponds, via une console.log, la tenue à porter
// - Ex: "Soleil, sortez en t-shirt"

// let quest = prompt('quel temps il fait dehors?');

// if (quest == 'soleil') {
//     console.log('sortez en t-shirt');
// } else if (quest == 'pluie') {
//     console.log('sortez le parapluie');
// } else if (quest == 'vent') {
//     console.log('sortez un pull');
// } else if (quest == 'neige') {
//     console.log('sortez les bottes');
// } else {
//     console.log(`je n'ai pas compris`);
// }

// - Variante: refaire exericie 2 avec un Swtich

// switch (quest) {
//     case 'soleil':
//         console.log('sortez en t-shirt');
//         break;
//     case 'pluie':
//         console.log('sortez le parapluie');
//         break;
//     case 'vent':
//         console.log('sortez un pull');
//         break;
//     case 'neige':
//         console.log('sortez les bottes');
//         break;
//     default:
//         console.log(`je n'ai pas compris`);
//         break;
// }