"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMessage = exports.MenuOptions = void 0;
var MenuOptions;
(function (MenuOptions) {
    MenuOptions[MenuOptions["AddEtudiant"] = 1] = "AddEtudiant";
    MenuOptions[MenuOptions["ListEtudiants"] = 2] = "ListEtudiants";
    MenuOptions[MenuOptions["AddNote"] = 3] = "AddNote";
    MenuOptions[MenuOptions["ListNotes"] = 4] = "ListNotes";
    MenuOptions[MenuOptions["SuppressionEtudiant"] = 5] = "SuppressionEtudiant";
    MenuOptions[MenuOptions["AfficherMeilleurEtudiant"] = 6] = "AfficherMeilleurEtudiant";
    MenuOptions[MenuOptions["AfficherMoyenneClasse"] = 7] = "AfficherMoyenneClasse";
    MenuOptions[MenuOptions["AjouterClasse"] = 8] = "AjouterClasse";
    MenuOptions[MenuOptions["AfficherLesClasses"] = 9] = "AfficherLesClasses";
    MenuOptions[MenuOptions["Quitter"] = 10] = "Quitter";
})(MenuOptions || (exports.MenuOptions = MenuOptions = {}));
var MenuMessage;
(function (MenuMessage) {
    MenuMessage["AddEtudiant"] = " Ajouter un etudiant";
    MenuMessage["ListEtudiants"] = "Afficher les Etudiants";
    MenuMessage["AddNote"] = "Ajouter une note \u00E0 un etudiant";
    MenuMessage["ListNotes"] = "Afficher les  notes  un etudiant avec l\u2019appreciation";
    MenuMessage["SuppressionEtudiant"] = "Supprimer un Etudiant";
    MenuMessage["AfficherMeilleurEtudiant"] = "Afficher le Meilleur etudiants ";
    MenuMessage["AfficherMoyenneClasse"] = "Afficher la moyenne de la classe";
    MenuMessage["AjouterClasse"] = "Ajouter une classe";
    MenuMessage["AfficherLesClasses"] = "Afficher les classes";
    MenuMessage["Quitter"] = "Quitter";
})(MenuMessage || (exports.MenuMessage = MenuMessage = {}));
