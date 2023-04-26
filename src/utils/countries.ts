import lookup from 'country-code-lookup';

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

export function getCountryNewsUrl(countryISO: string): string {
    return `https://newsapi.org/v2/top-headlines?country=${countryISO}&apiKey=${process.env.REACT_APP_API_KEY}`;
}