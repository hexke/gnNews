
import lookup from 'country-code-lookup';

const API_KEY = "fc0a39b85a3d4a4aa3ee98aa31107b93";

export const DEFAULT_COUNTRY = "Poland";

export function getNewsFrom(country: string): string {
    const countryISO = lookup.byCountry(country)?.iso2.toLocaleLowerCase();

    return `https://newsapi.org/v2/top-headlines?country=${countryISO}&apiKey=${API_KEY}`;
}