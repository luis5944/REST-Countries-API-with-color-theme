import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { deleteSelectedCountry } from "../reducers/countriesReducer";

const CountryPage = ({ setIsCountryPage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  let selectCountry = useSelector((state) => state.countries.selectedCountry);
  const countries = useSelector((state) => state.countries.countries);
  let filterCountriesBorders = [];

  useEffect(() => {
    setIsCountryPage(true);
  }, [dispatch, setIsCountryPage]);

  const preparePage = () => {
    if (Object.entries(selectCountry).length === 0) {
      selectCountry = countries.find((c) => {
        return c.alpha3Code === param.name;
      });
    }
    const borders = selectCountry?.borders?.map((c) => c);
    if (borders) {
      filterCountriesBorders = countries.filter((c) => {
        return borders.includes(c.alpha3Code);
      });
    }
  };

  preparePage();

  const countryInfo = () => {
    return (
      <div>
        <button
          className="button-back"
          onClick={() => {
            setIsCountryPage(false);
            dispatch(deleteSelectedCountry());
            navigate("/");
          }}
        >
          <BiArrowBack /> <span>back</span>
        </button>

        <div className="container-page">
          <div>
            <img src={selectCountry.flag} alt="" srcSet="" />
          </div>
          <div>
            <div>
              <h2>{selectCountry.name}</h2>
            </div>
            <div className="info">
              <div>
                <p>
                  Native Name: <span>{selectCountry.nativeName}</span>
                </p>
                <p>
                  Population:{" "}
                  <span>
                    {" "}
                    {new Intl.NumberFormat("es-ES").format(
                      selectCountry.population
                    )}
                  </span>
                </p>
                <p>
                  Region: <span>{selectCountry.region}</span>
                </p>
                <p>
                  Sub Region: <span>{selectCountry.subregion}</span>
                </p>
                <p>
                  Capital: <span>{selectCountry.capital}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Domain: <span>{selectCountry.topLevelDomain}</span>
                </p>
                <p>
                  Currencies:
                  {selectCountry.currencies.map((c, index) =>
                    index === 0 ? <span key={c.code}> {c.name}</span> : null
                  )}
                </p>
                <p>
                  Languages:
                  {selectCountry.languages.map((l, index) =>
                    index === selectCountry.languages.length - 1 ? (
                      <span key={l.iso639_2}> {l.name}</span>
                    ) : (
                      <span key={l.iso639_2}> {l.name},</span>
                    )
                  )}
                </p>
              </div>
            </div>
            <div className="borders">
              <p>Border Countries:</p>
              {filterCountriesBorders?.map((c) => (
                <p
                  onClick={() => {
                    dispatch(deleteSelectedCountry());
                    navigate(`/country/${c.alpha3Code}`);
                  }}
                  className="button-border"
                  key={c.alpha3Code}
                >
                  {c.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{selectCountry ? countryInfo() : null}</div>;
};

export default CountryPage;
