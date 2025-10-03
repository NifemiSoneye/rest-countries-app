import React, { useState, useEffect } from "react";
import rawData from "../data/db.json";
import Country from "./Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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

const Home = () => {
  const data: CountryType[] = rawData as CountryType[];
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CountryType[]>([]);
  const [filter, setFilter] = useState<boolean>(false);
  const filteredRegion = region.length
    ? data.filter((c) => c.region === region)
    : data;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const finalResults = filteredRegion.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(finalResults);
  }, [search, setSearchResults]);
  const handleFilterClick = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  const handleFilter = (option: string) => {
    const filteredResults = data.filter(
      (country) => country.region.toLowerCase() === option.toLowerCase()
    );
    setRegion(option);
    setSearchResults(filteredResults);
    setFilter(false);
  };
  return (
    <div className="mx-[1rem] lg:mx-[2.5rem]">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="relative mt-[1rem] w-[90vw] flex items-center justify-evenly lg:w-[30vw] lg:ml-[4rem]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white ml-[1rem] light:text-[#808080ff]"
          />
          <input
            type="text"
            className="bg-[#2b3945ff] w-[90vw]  text-white p-[1rem] pl-[5rem] lg:w-[30vw] rounded-md light:bg-white shadow-md light:text-[#808080ff]"
            placeholder="Search for a country..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="relative w-[50vw] mt-[2rem] mb-[2rem] lg:mx-[4rem] lg:w-[10vw] lg:mt-[3.5rem]">
          <button
            className="bg-[#2b3945ff]  text-white p-[1rem] rounded-md lg:min-w-[10vw] light:bg-white light:text-black  shadow-md"
            onClick={handleFilterClick}
          >
            <div className="flex items-center justify-between text-[14px] rounded-lg text-nowrap">
              {region.length ? region : "Filter by Region"}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`mx-[0.5rem] text-white light:text-black transition-transform duration-300 ${
                  filter ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          {filter && (
            <div className="bg-[#2b3945ff] z-[999] mt-[0.5rem] p-[1rem] text-white rounded-lg absolute top-full left-0 w-full lg:h-[180px] light:bg-white light:text-black shadow-md">
              <p
                className="py-[0.25rem] "
                onClick={() => handleFilter("Africa")}
              >
                Africa
              </p>
              <p
                className="py-[0.25rem]"
                onClick={() => handleFilter("Americas")}
              >
                America
              </p>
              <p className="py-[0.25rem]" onClick={() => handleFilter("Asia")}>
                Asia
              </p>
              <p
                className="py-[0.25rem] "
                onClick={() => handleFilter("Europe")}
              >
                Europe
              </p>
              <p
                className="py-[0.25rem]"
                onClick={() => handleFilter("Oceania")}
              >
                Oceania
              </p>
            </div>
          )}
        </div>
      </div>
      <ul>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-4 text-white light:text-black ">
          {searchResults.length > 0
            ? searchResults.map((country) => (
                <Country key={country.numericCode} country={country} />
              ))
            : "No country found"}
        </div>
      </ul>
    </div>
  );
};

export default Home;
