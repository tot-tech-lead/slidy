import 'server-only';
import React from "react";

export type Dict = {
    [key: string]: string | Dict | Dict[]
}

interface D {
    en: () => Promise<Dict>,
    uk: () => Promise<Dict>,
}


const dictionaries: D = {
    en: () => import('../../public/dictionaries/en.json').then((module) => module.default),
    uk: () => import('../../public/dictionaries/ua.json').then((module) => module.default),
};


export const getDictionary = async (lang: string = 'en') => (await dictionaries[lang] || dictionaries.en)();
