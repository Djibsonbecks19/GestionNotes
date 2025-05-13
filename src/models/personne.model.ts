import { IModel } from "./model.interface";

export class Personne implements IModel {
    private readonly _id: number;
    private _nom: string;
    private _prenom: string;
    private _age: number;
    private _matricule: string;
    private static _compteur: number = 0;

    constructor(nom: string, prenom: string, age: number, matricule: string) {
        this._id = ++Personne._compteur;
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._matricule = matricule;
    }

    get nom(): string {
        return this._nom;
    }

    get prenom(): string {
        return this._prenom;
    }

    get age(): number {
        return this._age;
    }

    get matricule(): string {
        return this._matricule;
    }
    set matricule(matricule: string) {
        this._matricule = matricule;
    }

   set nom(nom: string) {
        this._nom = nom;
    }
    set prenom(prenom: string) {
        this._prenom = prenom;
    }
    set age(age: number) {
        this._age = age;
    }

    public toString(): string {
        return `ID: ${this._id}, Nom: ${this._nom}, Prenom: ${this._prenom}, Age: ${this._age}, Matricule: ${this._matricule}`;
    }
    public copy (p: Personne): Personne {
        return new Personne(p.nom, p.prenom, p.age, p.matricule);
    }

    public equals(p: Personne): boolean {
        return this._matricule === p._matricule;
    }



}