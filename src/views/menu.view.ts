export class MenuView {
    static afficherMenu(): void {
        console.log("\n=== MENU PRINCIPAL ===");
        console.log("1. Ajouter un étudiant");
        console.log("2. Afficher les étudiants");
        console.log("3. Ajouter une note à un étudiant");
        console.log("4. Afficher les notes d’un étudiant avec l’appréciation");
        console.log("5. Supprimer un étudiant");
        console.log("6. Afficher le meilleur étudiant");
        console.log("7. Afficher la moyenne de la classe");
        console.log("8. Ajouter une classe");
        console.log("9. Afficher les classes");
        console.log("10. Quitter");
    }

    static afficherMenuFiliere(): void {
        console.log("\n=== FILIÈRES DISPONIBLES ===");
        console.log("1. CyberSécurité");
        console.log("2. Data/IA");
        console.log("3. Développement WEB");
        console.log("4. Génie Logiciel");
        console.log("5. Quitter");
    }

    static afficherMenuNiveau(): void {
        console.log("\n=== NIVEAUX DISPONIBLES ===");
        console.log("1. Licence 1");
        console.log("2. Licence 2");
    }
}
