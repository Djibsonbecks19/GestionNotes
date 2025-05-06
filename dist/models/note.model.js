"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const appreciation_enum_1 = require("./appreciation.enum");
class Note {
    constructor(matiere, valeur) {
        this._matiere = matiere;
        this._valeur = valeur;
        this._appreciation = this.calculeAppreciation();
    }
    get matiere() {
        return this._matiere;
    }
    set matiere(matiere) {
        this._matiere = matiere;
    }
    get valeur() {
        return this._valeur;
    }
    set valeur(valeur) {
        this._valeur = valeur;
    }
    get appreciation() {
        return this._appreciation;
    }
    calculeAppreciation() {
        if (this._valeur >= 18)
            return appreciation_enum_1.Appreciation.Excellent;
        if (this._valeur >= 16)
            return appreciation_enum_1.Appreciation.TresBien;
        if (this._valeur >= 14)
            return appreciation_enum_1.Appreciation.Bien;
        if (this._valeur >= 12)
            return appreciation_enum_1.Appreciation.AssezBien;
        if (this._valeur >= 10)
            return appreciation_enum_1.Appreciation.Passable;
        if (this._valeur >= 8)
            return appreciation_enum_1.Appreciation.Insuffisant;
        if (this._valeur >= 6)
            return appreciation_enum_1.Appreciation.TresInsuffisant;
        return appreciation_enum_1.Appreciation.Null;
    }
    toString() {
        return `Matiere: ${this._matiere}, Valeur: ${this._valeur}, Appreciation: ${this._appreciation}`;
    }
    copy(p) {
        return new Note(p.matiere, p.valeur);
    }
    equals(p) {
        return this._matiere === p._matiere && this._valeur === p._valeur;
    }
}
exports.Note = Note;
