/** A file that contains a types of data placed in @/app/lib/data-define.ts
 * */

import {countries, currency} from "@/app/lib/data-define";
const createEnum = <T extends string>(arr: T[]) => arr as ReadonlyArray<T>;


export interface Country {
    name: string,
    code: string,
    localeUA: string,
    phoneCode: string,
    numberLength: number
}


export interface Currency {
    "symbol": string,
    "name": string,
    "symbol_native": string,
    "decimal_digits": number,
    "rounding": number,
    "code": string,
    "name_plural": string
}

export interface Image {
    Photo: string;
    "125": string;
}

export interface Images {
    [key: string]: Image[];
}

export const enumCountries = createEnum(countries.map(item => String(item.code)));
export type EnumCountries = (typeof enumCountries)[number];


export const enumCurrency = createEnum(currency.map(item => String(item.code)));
export type EnumCurrency = (typeof enumCurrency)[number]


