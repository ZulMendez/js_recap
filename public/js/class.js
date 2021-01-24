// ### 5. CLASS ( pour cette partie, créer un nouveau fichier et nommer le 'class.js'. )
// #### Exercice 1
// - Créer une class objet "Personnage" avec 4 propriétés : nom, prenom, age, argent
// - Créer trois instances de "Personnage"
// - Ajoute lui une méthode qui va se présenter lui-même et présenter les deux autre personne
// class Personnage {
//     constructor(nom, prenom, age, argent){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.age = age;
//         this.argent = argent;
//     }
//     sePresenter(){
//         console.log(`Bonjour je m'appelle ${this.prenom}, j'ai ${this.age} ans et j'ai ${this.argent} euros`);
//     }
// }

// let perso1 = new Personnage ('Gfoifjg', 'Paul', 25, 1000);
// let perso2 = new Personnage ('Gfoifjg', 'Marie', 35, 3000);
// let perso3 = new Personnage ('Gfoifjg', 'Pierre', 45, 5000);

// console.log(perso1.sePresenter());
// console.log(perso2.sePresenter());
// console.log(perso3.sePresenter());


// #### Exercice 2 
// - Créer une class objet "Molengeek" avec 3 propriétés : nom, prenom, grade.
// - Créer 3 instances (trois personnes de l'équipe)
// - Créer une méthode qui permet à une personne de grade "admin" de changer les rôles des autres personnes. Sinon tu lui répond via une console.log "vous n'avez pas les droits" en précisant son grade actuel 
// class Molengeek {
//     constructor(nom, prenom, grade){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.grade = grade;
//         this.role = (perso, grade) => {
//             if (this.grade == 'admin') {
//                 perso.grade = grade;
//                 console.log('grade changé');
//             } else {
//                 console.log(`vous ne pouvez pas faire ce changement. Votre grade vaut ${perso.grade}`);
//             }
//         }
//     }
// }

// let perso1 = new Molengeek('mendez', 'zulma', 'admin');
// let perso2 = new Molengeek('milan', 'marie', 'coach');
// let perso3 = new Molengeek('mendez', 'anna', 'sécretaire');

// perso1.role(perso1, 'assistante');
// console.log(perso1);

// perso2.role(perso3, "technicien");


// #### Exercice 3 
// - Créer une class objet "Enfant" qui prend comme propriété : prenom, argent, humeur(neutre), sac(array vide)
// - Les enfants auront une méthode qui permet de payer le produit et le stocker dans leurs sacs.
// - Créer une méthode dans l'objet "Enfant". La méthode se base sur l'humeur de l'enfant. Si l'humeur de l'enfant est positif, la méthode renverra via une console.log " enfant1 est hereux, il cuisine pour toute la famille. "
// - Sinon il renverra via une console.log "enfant1 n'est pas en forme, il ne cuisinera pas"
// class Enfant {
//     constructor(prenom, argent, humeur){
//         this.prenom = prenom;
//         this.argent = argent;
//         this.humeur = humeur;
//         this.sac = [];
//         this.acheter = (a) => {
//             this.argent -= a.prix;
//             this.sac.push(a.produit);
//         }
//         this.cuisiner = () => {
//             if (this.humeur == 'positif') {
//                 console.log(`${this.prenom} est heureux il cuisine pour toute la famille`);
//             } else {
//                 console.log(`${this.prenom} n'est pas en forme in ne cuisinera pas`);
//             }
//         }
//     }
// }
// // - Créer deux instances de "Enfant" (deux enfants).
// let enfant1 = new Enfant('julie', 20, 'neutre');
// let enfant2 = new Enfant('lili', 15, 'neutre');

// // - Créer une autre classe "Magasin" qui prend comme propriété : produit, prix.
// class Magasin {
//     constructor(produit, prix){
//         this.produit = produit;
//         this.prix = prix;
//     }
// }
// - Créer trois instances de magasin (trois produits)
// let produit1 = new Magasin('pain', 3);
// let produit2 = new Magasin('chocolat', 5);
// let produit3 = new Magasin('jus', 5);

// // - Créer une instance "maison" qui prend une méthode. La méthode va devoir rendre l'humeur des enfants soit positif, soit négatif via un random.
// class Maison {
//     constructor() {
//         this.humeur = (a) => {
//             let random = Math.trunc(Math.random() * 10) +1
//             if (random % 2 == 0) {
//                 a.humeur = 'positif';
//             } else {
//                 a.humeur = 'négatif'
//             }
//         }
//     }
// }
// let maison1 = new Maison();

// // Le récit prendra cette forme :
// // L'enfant1 a acheter produitA,
// enfant1.acheter(produit1);
// console.log(`${enfant1.prenom} a acheté du ${enfant1.sac}`);
// // l'enfant2 a acheter produitB,
// enfant2.acheter(produit2);
// console.log(`${enfant2.prenom} a acheté du ${enfant2.sac}`);
// // L'enfant1 a est d'humeur positif ou negatif
// maison1.humeur(enfant1);
// // L'enfant2 a est d'humeur positif ou negatif
// maison1.humeur(enfant2);
// // L'enfant1 veut bien cuisiner ou non
// console.log(`${enfant1.prenom} est d'humeur ${enfant1.humeur}`);
// // L'enfant2 veut bien cuisiner ou non
// console.log(`${enfant2.prenom} est d'humeur ${enfant2.humeur}`);

// enfant1.cuisiner();
// enfant2.cuisiner();
// console.log(enfant1, enfant2);
// #### Exercice 4 (lisez bien jusqu'au bout)
// - Créer une class "LeeGofGeek" avec 4 propriétés : 
//     - le nom du personnage, 
//     - le nom de son pouvoir, 
//     - dégats qu'il produit (en numbre), 
//     - santé (en numbre),
//     - bonus

// - Créer 2 instances de "LeeGofGeek" (2personnages). Chaque personnage à ses propriétés bien défini. C-à-d que son pouvoir a un nom spécifique, les dégats sont précis(max 15points). Sa santé est, par défaut, à 100 points.
// class LeeGofGeek {
//     constructor(nom, pouvoir, degats, sante) {
//         this.nom = nom;
//         this.pouvoir = pouvoir;
//         this.degats = degats;
//         this.sante = sante;
//         this.bonus = ['full', 'dead', 'nul']
//         this.attaqueBasic = (a) => {
//             a.sante -= this.degats;
//         };
//         this.attaqueSpecial = (a) => {
//             a.sante -= 25;
//             this.sante -= 15;
//         };
//         this.autoSave = () => {
//             if (!this.isExecute) {
//                 this.sante += 35;
//                 this.isExecute = true;
//             }
//         }
//         this.joker = (a) => {
//             if (!this.isExecute) {
//                 if (this.sante <= 15) {
//                     let random = Math.trunc(Math.random() * 3)
//                     switch (this.bonus[random]) {
//                         case 'full':
//                             this.sante = 100;
//                             console.log(`${this.nom} vous récupérez la totalité de vos points`);
//                             break;
//                         case 'dead':
//                             this.sante = 0;
//                             console.log(`${this.nom} votre ennemi a perdu ses points `);
//                             break;
//                         default:
//                             console.log(`${this.nom} ce n'est pas votre jour de chance on dirait`);
//                             break;
//                     }
//                     this.isExecute = true;
//                 } else {
//                     console.log(`${this.nom} vous avez ${this.santé} points, vous devez arriver a 15 points pour continuer`);
//                 }
//             } else {
//                 console.log(`joker déjà utilisé`);
//             }
//         }
//     }
// }

// let joueur1 = new LeeGofGeek('zulma', 'feu', 15, 100);
// let joueur2 = new LeeGofGeek('bene', 'glace', 15, 15);
// joueur2.joker(joueur1);
// console.log(joueur1);
// - Créer une méthode propre à l'objet et nommé le "attaqueBasic". Une fois cette méthode appelée, il retire des points de vie au personnage attaqué. Ces points de vie retirés sont calculés par rapport à la propriété  "degat" du personnage qui lance l'attaque. 
//     - Ex : personnage1 lance une attaque(dégat=15points), personnage2 perd 15points de vie.

// - Créer une méthode "attaqueSpecial" qui consiste à mettre des dégats +- important sur l'autre personnage. (-35point). Par contre cette attaque enlève en contre partie -15point à son utilisateur.

// - Créer deux méthodes spécial "auto-save" & "joker"
//     - la méthode "auto-save", qui une fois lancé permet de rajouter 35 points de vie à son utilisateur, mais en contre partie, lui fait perdre l'accès à la méthode "joker"
//     - la méthode "joker" est très particuliere. Elle sera utilisable que si le point de vie de l'utilisateur est à < 15 point. Par contre si vous l'utilisez, vous perdez l'accès à votre méthode autoSave.
//         - Cette méthode consiste a appeler un bonus aléatoire prédéfinis dans un array "bonus". Dans ces bonus, il y'a "VieFull" qui permet de revenir à 100 points de vie. l y'a une attaque nommé "dead" qui permet d'eliminer l'ennemie du 1er coup. Il y'a un bonus nommé "null" qui donne aucun pouvoir.

// - Autrement dit, c'est soit la méthode "joker" soit la méthode "autoSave"
// - Une fois que la vie d'un des personnages tombe à zero, une alert s'affiche pour dire que la partie est terminé.

// - Le récit : Vous le faites sans prompt et alert. Tout ce passe manuellement dans le code et chaque message/bout_de_récit est affichée via une console.log.
//  -->
