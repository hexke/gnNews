import lookup, { countries } from 'country-code-lookup';
import { API_KEY } from '../lib/constants';

export const getCountryISO = (country: string): string => {
    const iso = lookup.byCountry(country)?.iso2;

    if (!iso) return "";

    return iso.toLowerCase();
}

export const getCountryName = (coutryISO: string): string => {
    const country = lookup.byIso(coutryISO)?.country;

    if (!country) return "";

    return country.toLocaleUpperCase();
}

export const getCountryFlag = (country: string): string => {
    const countryISO = lookup.byCountry(country)?.iso2;

    return `https://flagsapi.com/${countryISO}/flat/32.png`;
}

export function getCountryNews(country: string): string {
    const countryISO = lookup.byCountry(country)?.iso2.toLocaleLowerCase();

    return `https://newsapi.org/v2/top-headlines?country=${countryISO}&apiKey=${API_KEY}`;
}