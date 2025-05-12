"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
const message_error_enum_1 = require("./enums/message.error.enum");
const personne_model_1 = require("./personne.model");
class Etudiant extends personne_model_1.Personne {
    constructor(nom, prenom, age, matricule, classe) {
        super(nom, prenom, age, matricule);
        this._notes = [];
        this._classe = classe;
    }
    get notes() {
        return this._notes;
    }
    get classe() {
        return this._classe;
    }
    set classe(classe) {
        this._classe = classe;
    }
    addNote(note) {
        if (note.valeur >= 0 && note.valeur <= 20) {
            this._notes.push(note);
        }
        else {
            throw new Error(message_error_enum_1.MessageError.NoteNoteFound);
        }
    }
    toString() {
        return `${super.toString()}, Classe: ${this._classe.filiere} ${this._classe.niveau}, Notes: ${this._notes.length != 0 ? this._notes.map(note => note.valeur).join(", ") : "Aucune note"}`;
    }
    copy(p) {
        return new Etudiant(p.nom, p.prenom, p.age, p.matricule, p.classe);
    }
    moyenne() {
        if (this.notes.length == 0) {
            throw new Error(message_error_enum_1.MessageError.NoteEmpty);
        }
        let sommeNotes = this.notes
            .map((note) => note.valeur)
            .reduce((a, b) => a + b, 0);
        return sommeNotes / this.notes.length;
    }
}
exports.Etudiant = Etudiant;
