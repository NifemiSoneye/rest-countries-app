import { useParams } from "react-router-dom";
import rawdata from "../data/db.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const CountryInfo = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const country = rawdata.find((c) => c.alpha3Code === code);
  const formatWithCommas = (value: number) => {
    const num = value.toString();
    if (!value) return "";
    return parseFloat(num).toLocaleString("en-US");
  };
  if (!country) {
    return (
      <div className="text-white p-8">
        <button
          className="bg-[#2b3945ff] text-white py-[0.5rem] px-[2rem] shadow-lg"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="pr-[0.5rem]" />
          Back
        </button>
        <p className="mt-6">Country not found.</p>
      </div>
    );
  }
  return (
    <div className="mx-[2rem] mt-[2rem] lg:mx-[6rem]">
      <button
        className="bg-[#2b3945ff] text-white py-[0.5rem] px-[2rem] shadow-lg light:bg-white light:text-black"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="pr-[0.5rem]" />
        Back
      </button>
      <div className="lg:grid grid-cols-2">
        <img
          src={country?.flags.svg}
          alt="county-flag"
          className="h-[25vh] w-[80vw] mt-[2rem] lg:w-[35vw] lg:h-[50vh] shadow-lg"
        />
        <div className="lg:mt-[3rem] text-white light:text-black">
          <h1 className=" font-semibold text-[26px] my-[1rem] ">
            {country.name}
          </h1>
          <div className="lg:flex justify-between">
            <div className="mb-[1.5rem]">
              <p className=" pb-[0.25rem]">
                Native Name : {country.nativeName}
              </p>
              <p className=" pb-[0.25rem]">
                Population: {formatWithCommas(country.population)}
              </p>
              <p className=" pb-[0.25rem]">Region: {country.region}</p>
              <p className=" pb-[0.25rem]">Sub Region: {country.subregion}</p>
              <p className=" pb-[0.25rem]">Capital: {country.capital}</p>
            </div>
            <div className="mb-[1rem]">
              <p className=" pb-[0.25rem]">
                Top Level Domain: {country.topLevelDomain}
              </p>
              <p className=" pb-[0.25rem]">
                Currencies:{" "}
                {country.currencies && country.currencies.length > 0
                  ? country.currencies.map((currency, index) => (
                      <span key={index}>
                        {currency.name}({currency.symbol})
                      </span>
                    ))
                  : "N/A"}
              </p>
              <p className=" pb-[0.25rem]">
                Languages:{" "}
                {country.languages && country.languages.length > 0
                  ? country.languages
                      .slice(0, 3)
                      .map((language) => language.name)
                      .join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="lg:flex lg:items-center gap-6">
            <p className=" font-semibold">Border Countries:</p>
            <div className="flex justify-between overflow-x-auto mt-[1rem] lg:mt-0 ">
              {country.borders && country.borders.length > 0
                ? rawdata
                    .filter((c) => country.borders?.includes(c.alpha3Code))
                    .slice(0, 3)
                    .map((borderCountry, index) => (
                      <>
                        <Link to={`/country/${borderCountry.alpha3Code}`}>
                          <button
                            key={index}
                            className="bg-[#2b3945ff] light:bg-white px-[0.75rem] mr-[0.5rem]  text-[14px] lg:w-[120px] w-[90px] min-h-[50px] lg:px-[0.5rem] lg:py-[0.25rem]
                            py-[0.5rem] flex items-center justify-center 
             text-center shadow-md lg:mr-[1.5rem]"
                          >
                            {borderCountry.name}
                          </button>
                        </Link>
                      </>
                    ))
                : "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
