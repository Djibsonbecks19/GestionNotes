"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
class Classe {
    constructor(filiere, niveau) {
        this._etudiants = [];
        this.id = Classe.idCounter++;
        this._filiere = filiere;
        this._niveau = niveau;
        this._libelle = `${this._filiere} ${this._niveau}`;
    }
    get Id() {
        return this.id;
    }
    get libelle() {
        return this._libelle;
    }
    get filiere() {
        return this._filiere;
    }
    set filiere(filiere) {
        this._filiere = filiere;
    }
    get niveau() {
        return this._niveau;
    }
    set niveau(niveau) {
        this._niveau = niveau;
    }
    copy(p) {
        return new Classe(p.filiere, p.niveau);
    }
    equals(p) {
        return this._libelle === p.libelle && this._filiere === p.filiere && this._niveau === p.niveau;
    }
    toString() {
        return `Id: ${this.Id}, Classe: ${this._libelle}, Filiere: ${this._filiere}, Niveau: ${this._niveau}`;
    }
}
exports.Classe = Classe;
Classe.idCounter = 0;
