import { Province } from "src/app/Interface/Province";

export class PersonModel{
    id?: number;
    firstName?: string;
    lastName?: string;
    dni?: string;
    phone?: string;
    entryDate?: Date;
    modificationDate?: Date | null;
    provinceId?: number;
    province?: Province;
    constructor(
        id?: number,
        firstName?: string,
        lastName?: string,
        dni?: string,
        phone?: string,
        entryDate?: Date,
        modificationDate?: Date | null,
        provinceId?: number,
        province?: Province
    ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dni = dni;
        this.phone = phone;
        this.entryDate = entryDate;
        this.modificationDate = modificationDate;
        this.provinceId = provinceId;
        this.province = province;
    }
}