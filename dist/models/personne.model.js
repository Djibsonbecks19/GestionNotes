"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, age, matricule) {
        this._id = ++Personne._compteur;
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._matricule = matricule;
    }
    get nom() {
        return this._nom;
    }
    get prenom() {
        return this._prenom;
    }
    get age() {
        return this._age;
    }
    get matricule() {
        return this._matricule;
    }
    set matricule(matricule) {
        this._matricule = matricule;
    }
    set nom(nom) {
        this._nom = nom;
    }
    set prenom(prenom) {
        this._prenom = prenom;
    }
    set age(age) {
        this._age = age;
    }
    toString() {
        return `ID: ${this._id}, Nom: ${this._nom}, Prenom: ${this._prenom}, Age: ${this._age}, Matricule: ${this._matricule}`;
    }
    copy(p) {
        return new Personne(p.nom, p.prenom, p.age, p.matricule);
    }
    equals(p) {
        return this._matricule === p._matricule;
    }
}
exports.Personne = Personne;
Personne._compteur = 0;
