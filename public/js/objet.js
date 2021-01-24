// ### 4. OBJET ( pour cette partie, créer un nouveau fichier et nommer le 'objet.js'. )
// #### Exercice 1
// - Créer un objet pour une marque de voiture. Déclare plusieurs propriétés (marque, model, type, color, prix)
// - Créer une méthode qui va retourner une phrase du style : "Ma audi a6 est de type break. Elle est grise et vaut 20.000€"
// let voiture = {
//     marque: 'ford',
//     model: 'puma',
//     type: 'sport',
//     color: 'noir',
//     prix: 17000,
//     phrase(){
//         console.log(`ma voiture ${this.marque} ${this.model} de type ${this.type} elle est ${this.color} et vaut ${this.prix} euros`);
//     }
// }
// voiture.phrase();
// console.log(voiture);
// #### Exercice 2
// - Créer un Personnage avec plusieurs propriétés ( nom, prenom, argent)
// - Créer un objet du nom de 'Article'. Il prendra plusieurs propriétés (nomProduit, prix, stock)
// - Créer une méthode propre au personnage qui va permettre d'acheter l'article. (Attention à l'argent et le stock)
// let personnage = {
//     nom: 'Mendez',
//     prenom: 'Zulma',
//     argent: 500,
//     acheter(a){
//         personnage.argent -= a.prix;
//         article.stock -= 1;
//         console.log(this.argent);  
//     }
// }

// let article = {
//     nomProduit: 'gsm',
//     prix: 425,
//     stock: 5,
// }
// personnage.acheter(article)
// console.log(personnage);
// console.log(article);
// #### Exercice 3
// - Créer un objet qui représente MolenGeek. Il prendra plusieurs propriétés :
//     - nombre d'employés: 0, 
//     - patron: {nom, prenom}, 
//     - Employe: [],
// - Créer une méthode "addEmploye" qui permet d'ajouter des employes dans le array 'Employe'.
// - Créer une méthode "DelEmploye" qui permet de supprimer des employes. 
// - Créer une méthode "Felicitation" qui va sélectionner au hasard(random) un des employés pour que le patron le félicite et le nomme "employé du mois". Affiche le message via une console.log
// - Pour finir, via une console.log, affiche le nombre d'employés!
// let molengeek  = {
//         nombrEmployes: 10, 
//         patron: {
//         nom: 'Molengeek', 
//         prenom: 'Ibrahim',
//     }, 
//         newEmploye: [],
//         addEmploye(x){
//             this.newEmploye.push(x);
//             this.nombrEmployes += 1;
//         },
//         delEmploye(y){
//             this.newEmploye.splice(this.newEmploye.indexOf(y), 1);
//             this.nombrEmployes -= 1;
//         },
//         felicitation(){
//             let random = Math.floor(Math.random() * this.newEmploye.length);
//             console.log(`${this.patron.prenom} felicite ${this.newEmploye[random]}`);
//         }
// }

// molengeek.addEmploye('patrick');
// molengeek.addEmploye('richard');
// molengeek.addEmploye('andre');
// molengeek.addEmploye('elias');
// molengeek.delEmploye('richard');
// molengeek.felicitation();
// console.log(molengeek);

// #### Exercice 4
// - Créer un objet Personnage avec des propriétés : 
//     - idendite:{nom, prenom}
//     - argent
//     - lieu
//     - humeur 
// - une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
// - Créer une fonction (attention ce n'est pas une méthode propre à l'objet mais belle est bien une FONCTION classique) qui va permettre au personnage de changer son lieu. De base, il est chez lui, par la fonction, il se déplacera à son lieu de travail.
// - Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négative. Par contre il gagnera 15€ pour 8heures si son humeur est positive. (Une itération vaut 1 heure).
// - (Bonus:faite en sorte qu'une itération se fasse tous les 2sec)
// - Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positive, tous les 2 heures, il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négative, il dira "je préfére mon lit"

// let personne = {
//     identite: {
//         nom:'Mendez', 
//         prenom: 'Zulma'},
//     argent: 0,
//     lieu: 'maison',
//     humeur: "", 
//     chageHumeur() {
//         let random = Math.trunc(Math.random() * 10) + 1
//         if (random % 2 == 0) {
//             this.humeur = 'positif'
//         } else {
//             this.humeur = 'négatif'
//         }
//     }
// }

// let seDeplacer = (lieu) => {
//     personne.lieu = lieu;
// }

// let gagnerArgent = () => {
//     if (personne.humeur == 'positif') {
//         for (let i = 0; i < 8; i++) {
//             personne.argent += 15;
//         }
//         for (let i = 0; i < 8; i+=2) {
//             console.log(`${i} j'aime mon travail`);
//         }
//     } else {
//         for (let i = 0; i < 8; i++) {
//             personne.argent += 10;
//         }
//         for (let i = 0; i < 8; i+=2) {
//             console.log(`${i} je préfère mon lit`);
//         }
//     } 
// }

// personne.chageHumeur();
// console.log(`l'humeur de ${personne.identite.prenom} est ${personne.humeur}`);

// seDeplacer(`${personne.identite.prenom} se deplace a son lieu de travail`);
// console.log(personne.lieu);

// gagnerArgent();
// console.log(`${personne.identite.prenom} est d'humeur ${personne.humeur} du coup il gagne ${personne.argent} euros`);

// seDeplacer('maison');
// console.log(`${personne.identite.prenom} rentre à la ${personne.lieu}`);