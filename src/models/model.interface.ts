import { Note } from "./note.model";
import { Personne } from "./personne.model";
export type T = Personne | Note;
export interface IModel {
    copy(p: T): T;
    equals(p: T): boolean;
    toString(): string;
}