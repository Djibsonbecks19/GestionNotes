import { Classe } from "./models/classe.model";
import { Filiere, FiliereOptions } from "./models/enums/filiere.emun";
import { MenuOptions } from "./models/enums/menu.enum";
import { Niveau, NiveauOptions } from "./models/enums/niveau.enum";
import { Etudiant } from "./models/etudiant.model";
import { MenuView } from "./views/menu.view";

export class Main {
    public static main(): void {
        const readline = require("readline-sync");
        const classes: Classe[] = [];
        const etudiants: Etudiant[] = [];

        let choix: number = 0;
        do {
            MenuView.afficherMenu();
            choix = readline.questionInt("Choisissez une option: ");

            switch (choix) {
                case MenuOptions.AddEtudiant: {
                    const nom = readline.question("Nom de l'étudiant: ");
                    const prenom = readline.question("Prénom de l'étudiant: ");
                    const age = readline.questionInt("Âge de l'étudiant: ");
                    const matricule = readline.question("Matricule de l'étudiant: ");
                    console.log("");
                    console.log("Sélectionnez la classe de l'étudiant par son ID:");
                    classes.forEach((classe) => {
                        console.log(`Id: ${classe.id}, Classe: ${classe.libelle}`);
                    });
                    const classeId = readline.questionInt("Classe de l'étudiant: ");

                    let classe: Classe | undefined = classes.find((c) => c.id === classeId);

                    if (!classe) {
                        console.log("Classe invalide.");
                        break; 
                    }

                    etudiants.push(new Etudiant(nom, prenom, age, matricule, classe));
                    console.log("Étudiant ajouté avec succès!");
                    break;
                }
                    

                case MenuOptions.ListEtudiants: {
                    console.log("Liste des étudiants:");
                    etudiants.forEach((etudiant) => {
                        console.log(etudiant.toString());
                    });
                    break;
                }

                case MenuOptions.AjouterClasse: {
                     MenuView.afficherMenuFiliere();
                    const choixFiliereId = readline.questionInt("Choisissez une filière: ");
                    let choixFiliere: string = "";

                    if (choixFiliereId < FiliereOptions.CyberSecurite || choixFiliereId > FiliereOptions.GenieLogiciel) {
                        console.log("Choix de filière invalide.");
                        break;
                    }

                    switch (choixFiliereId) {
                        case FiliereOptions.CyberSecurite:
                            choixFiliere = Filiere.CyberSecurite;
                            break;
                        case FiliereOptions.DataIA:
                            choixFiliere = Filiere.DataIA;
                            break;
                        case FiliereOptions.DeveloppementWEB:
                            choixFiliere = Filiere.DeveloppementWEB;
                            break;
                        case FiliereOptions.GenieLogiciel:
                            choixFiliere = Filiere.GenieLogiciel;
                            break;
                        case FiliereOptions.Quitter:
                            console.log("Au revoir!");
                            return;
                        default:
                            console.log("Choix de filière invalide.");
                            break;
                    }

                    MenuView.afficherMenuNiveau();
                    const choixNiveauId = readline.questionInt("Choisissez un niveau: ");
                    let choixNiveau: string = "";

                    if (choixNiveauId < NiveauOptions.Licence1 || choixNiveauId > NiveauOptions.Licence2) {
                        console.log("Choix de niveau invalide.");
                        break;
                    }
                    switch (choixNiveauId) {
                        case NiveauOptions.Licence1:
                            choixNiveau = Niveau.Licence1;
                            break;
                        case NiveauOptions.Licence2:
                            choixNiveau = Niveau.Licence2;
                            break;
                        default:
                            console.log("Choix de niveau invalide.");
                            break;
                    }
                
                   
                    classes.push(new Classe(choixFiliere, choixNiveau));
                    console.log("Classe ajoutée avec succès!");
                    break;
                }

                
                case MenuOptions.AfficherLesClasses: {
                    console.log("Liste des classes:");
                    classes.forEach((classe) => {
                        console.log(classe.toString());
                    });
                    break;
                }
                   
                case MenuOptions.Quitter:
                    console.log("Au revoir!");
                    break;

                default:
                    console.log("Choix invalide. Veuillez réessayer.");
            }
        } while (choix !== MenuOptions.Quitter);

    }
}

Main.main();
