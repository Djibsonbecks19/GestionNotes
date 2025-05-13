import { MessageError } from "./enums/message.error.enum";
import { Note } from "./note.model";
import { Personne } from "./personne.model";
import { Classe } from "./classe.model";

export class Etudiant extends Personne {
    private _notes: Note[] = [];
    private _classe: Classe;

    constructor(nom: string, prenom: string, age: number, matricule: string, classe: Classe) {
        super(nom, prenom, age, matricule);
        this._classe = classe;
    }

    get notes(): Note[] {
        return this._notes;
    }

    get classe(): Classe {
        return this._classe;
    }
    set classe(classe: Classe) {
        this._classe = classe;
    }

    public addNote(note: Note): void {
        if (note.valeur >= 0 && note.valeur <= 20) {
            this._notes.push(note);
        } else {
            throw new Error(MessageError.NoteNotFound);
        }
    }
    public toString(): string {
        return `${super.toString()}, Classe: ${this._classe.filiere} ${this._classe.niveau}, Notes: ${this._notes.length != 0 ? this._notes.map(note => note.valeur).join(", ") : "Aucune note"}`;
    }
    public copy(p: Etudiant): Etudiant {
        return new Etudiant(p.nom, p.prenom, p.age, p.matricule, p.classe);
    }

    public moyenne():number {
        if(this.notes.length == 0){
            throw new Error(MessageError.NoteEmpty);
        }
        let sommeNotes :number = this.notes
        .map((note : Note)=> note.valeur)
        .reduce( (a:number, b:number)=> a+b,0) 
        return sommeNotes / this.notes.length;
            
    }
    

}