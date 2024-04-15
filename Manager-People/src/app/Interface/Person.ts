import { Province } from "./Province";

export interface Person {
    id: number;
    firstName: string;
    lastName: string;
    dni: string;
    phone?: string;
    entryDate: Date;
    modificationDate?: Date | null;
    provinceId: number;
    province?: Province;
}