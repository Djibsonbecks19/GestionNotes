import { Appreciation } from "./enums/appreciation.enum";

export class Note {
    private _matiere : string;
    private _valeur : number;
    private _appreciation : Appreciation;

    constructor(matiere: string, valeur: number) {
        this._matiere = matiere;
        this._valeur = valeur;
        this._appreciation = this.calculeAppreciation();
    }
    get matiere(): string {
        return this._matiere;
    }
    set matiere(matiere: string) {
        this._matiere = matiere;
    }
    get valeur(): number {
        return this._valeur;
    }
    set valeur(valeur: number) {
        this._valeur = valeur;
    }
    get appreciation(): Appreciation {
        return this._appreciation;
    }

    private calculeAppreciation(): Appreciation {
        if (this._valeur >= 18) return Appreciation.Excellent;
        if (this._valeur >= 16) return Appreciation.TresBien;
        if (this._valeur >= 14) return Appreciation.Bien;
        if (this._valeur >= 12) return Appreciation.AssezBien;
        if (this._valeur >= 10) return Appreciation.Passable;
        if (this._valeur >= 8) return Appreciation.Insuffisant;
        if (this._valeur >= 6) return Appreciation.TresInsuffisant;
        return Appreciation.Null;
        
    }

    public toString(): string {
        return `Matiere: ${this._matiere}, Valeur: ${this._valeur}, Appreciation: ${this._appreciation}`;
    }
    public copy(p: Note): Note {
        return new Note(p.matiere, p.valeur);
    }
    public equals(p: Note): boolean {
        return this._matiere === p._matiere && this._valeur === p._valeur;
    }



}

