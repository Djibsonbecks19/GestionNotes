"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const classe_model_1 = require("./models/classe.model");
const filiere_emun_1 = require("./models/enums/filiere.emun");
const menu_enum_1 = require("./models/enums/menu.enum");
const niveau_enum_1 = require("./models/enums/niveau.enum");
const etudiant_model_1 = require("./models/etudiant.model");
const menu_view_1 = require("./views/menu.view");
class Main {
    static main() {
        const readline = require("readline-sync");
        const classes = [];
        const etudiants = [];
        let choix = 0;
        do {
            menu_view_1.MenuView.afficherMenu();
            choix = readline.questionInt("Choisissez une option: ");
            switch (choix) {
                case menu_enum_1.MenuOptions.AddEtudiant: {
                    const nom = readline.question("Nom de l'étudiant: ");
                    const prenom = readline.question("Prénom de l'étudiant: ");
                    const age = readline.questionInt("Âge de l'étudiant: ");
                    const matricule = readline.question("Matricule de l'étudiant: ");
                    console.log("");
                    console.log("Sélectionnez la classe de l'étudiant par son ID:");
                    classes.forEach((classe) => {
                        console.log(`Id: ${classe.Id}, Classe: ${classe.libelle}`);
                    });
                    const classeId = readline.questionInt("Classe de l'étudiant: ");
                    let classe = classes.find((c) => c.Id === classeId);
                    if (!classe) {
                        console.log("Classe invalide.");
                        break;
                    }
                    etudiants.push(new etudiant_model_1.Etudiant(nom, prenom, age, matricule, classe));
                    console.log("Étudiant ajouté avec succès!");
                    break;
                }
                case menu_enum_1.MenuOptions.ListEtudiants: {
                    console.log("Liste des étudiants:");
                    etudiants.forEach((etudiant) => {
                        console.log(etudiant.toString());
                    });
                    break;
                }
                case menu_enum_1.MenuOptions.AjouterClasse: {
                    menu_view_1.MenuView.afficherMenuFiliere();
                    const choixFiliereId = readline.questionInt("Choisissez une filière: ");
                    let choixFiliere = "";
                    if (choixFiliereId < filiere_emun_1.FiliereOptions.CyberSecurite || choixFiliereId > filiere_emun_1.FiliereOptions.GenieLogiciel) {
                        console.log("Choix de filière invalide.");
                        break;
                    }
                    switch (choixFiliereId) {
                        case filiere_emun_1.FiliereOptions.CyberSecurite:
                            choixFiliere = filiere_emun_1.Filiere.CyberSecurite;
                            break;
                        case filiere_emun_1.FiliereOptions.DataIA:
                            choixFiliere = filiere_emun_1.Filiere.DataIA;
                            break;
                        case filiere_emun_1.FiliereOptions.DeveloppementWEB:
                            choixFiliere = filiere_emun_1.Filiere.DeveloppementWEB;
                            break;
                        case filiere_emun_1.FiliereOptions.GenieLogiciel:
                            choixFiliere = filiere_emun_1.Filiere.GenieLogiciel;
                            break;
                        case filiere_emun_1.FiliereOptions.Quitter:
                            console.log("Au revoir!");
                            return;
                        default:
                            console.log("Choix de filière invalide.");
                            break;
                    }
                    menu_view_1.MenuView.afficherMenuNiveau();
                    const choixNiveauId = readline.questionInt("Choisissez un niveau: ");
                    let choixNiveau = "";
                    if (choixNiveauId < niveau_enum_1.NiveauOptions.Licence1 || choixNiveauId > niveau_enum_1.NiveauOptions.Licence2) {
                        console.log("Choix de niveau invalide.");
                        break;
                    }
                    switch (choixNiveauId) {
                        case niveau_enum_1.NiveauOptions.Licence1:
                            choixNiveau = niveau_enum_1.Niveau.Licence1;
                            break;
                        case niveau_enum_1.NiveauOptions.Licence2:
                            choixNiveau = niveau_enum_1.Niveau.Licence2;
                            break;
                        default:
                            console.log("Choix de niveau invalide.");
                            break;
                    }
                    classes.push(new classe_model_1.Classe(choixFiliere, choixNiveau));
                    console.log("Classe ajoutée avec succès!");
                    break;
                }
                case menu_enum_1.MenuOptions.AfficherLesClasses: {
                    console.log("Liste des classes:");
                    classes.forEach((classe) => {
                        console.log(classe.toString());
                    });
                    break;
                }
                case menu_enum_1.MenuOptions.Quitter:
                    console.log("Au revoir!");
                    break;
                default:
                    console.log("Choix invalide. Veuillez réessayer.");
            }
        } while (choix !== menu_enum_1.MenuOptions.Quitter);
    }
}
exports.Main = Main;
Main.main();
