import React from "react";

interface CountryType {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    [key: string]: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
    otherNames: string[];
  }[];
  independent: boolean;
}

type PropType = {
  country: CountryType;
};

const Country = ({ country }: PropType) => {
  const formatWithCommas = (value: number) => {
    const num = value.toString();
    if (!value) return "";
    return parseFloat(num).toLocaleString("en-US");
  };
  return (
    <div className="bg-[#2b3945ff] h-[45vh] w-[65vw] my-[2rem] mx-[1rem] rounded-lg lg:w-[15vw] lg:mx-[0.5rem]">
      <img
        src={country.flags.png}
        alt="country-flag"
        className="h-[40%] w-[100%] "
      />
      <div className="m-[1rem]">
        <p className="text-white font-semibold mb-[1rem] text-[1.2rem]">
          {country.name}
        </p>
        <p className="text-white mb-[0.2rem]">
          Population: {formatWithCommas(country.population)}
        </p>
        <p className="text-white mb-[0.2rem]">Region: {country.region}</p>
        <p className="text-white">Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default Country;
