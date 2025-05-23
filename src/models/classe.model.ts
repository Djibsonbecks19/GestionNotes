import { IModel } from "./model.interface";

export class Classe implements IModel {
    private static idCounter = 0;
    private readonly _id: number;
    private readonly _libelle: string;
    private _filiere: string;
    private _niveau: string;


    constructor(filiere: string, niveau: string) {
        this._id = Classe.idCounter++;
        this._filiere = filiere;
        this._niveau = niveau;
        this._libelle = `${this._niveau} ${this._filiere}`;

    }

    get id(): number {
        return this._id;
    }

    get libelle(): string {
        return this._libelle;
    }

    get filiere(): string {
        return this._filiere;
    }
    set filiere(filiere: string) {
        this._filiere = filiere;
    }

    get niveau(): string {
        return this._niveau;
    }
    set niveau(niveau: string) {
        this._niveau = niveau;
    }

    public copy(p: Classe): Classe {
        return new Classe(p.filiere, p.niveau);
    }
    public equals(p: Classe): boolean {
        return this._libelle === p.libelle && this._filiere === p.filiere && this._niveau === p.niveau;
    }
    public toString(): string {
        return `Id: ${this.id}, Classe: ${this._libelle}, Filiere: ${this._filiere}, Niveau: ${this._niveau}`;
    }
}