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