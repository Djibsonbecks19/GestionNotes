import { MessageError } from "../enums/message.error.enum";
import { Note } from "./note.model";
import { Personne } from "./personne.model";

export class Etudiant extends Personne {
    private _notes: Note[] = [];
    private _classe: string ;
    constructor(nom: string, prenom: string, age: number, matricule: string, classe:string) {
        super(nom, prenom, age, matricule);
        this._classe = classe;
    }

    get notes(): Note[] {
        return this._notes;
    }
    get classe(): string {
        return this._classe;
    }
    set classe(classe: string) {
        this._classe = classe;
    }

    public addNote(note: Note): void {
        if (note.valeur >= 0 && note.valeur <= 20) {
            this._notes.push(note);
        } else {
            throw new Error(MessageError.NoteNoteFound);
        }
    }
    public toString(): string {
        return `${super.toString()}, Classe: ${this._classe}`;
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