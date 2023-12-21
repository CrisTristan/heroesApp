import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../componets";
import { useForm } from "../../hook/useForm";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);

  const showError = (q.length > 0) && (heroes.length === 0);

  const { searchHero, onInputChange } = useForm({
    searchHero: q,
  });

  const query = queryString.stringifyUrl({
    url: "",
    query: {
      q: searchHero,
    },
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(query);
  };

  return (
    <>
      <div className="col m-3 mx-auto mt-5">
        <h1>Search</h1>
        <div className="col-5 mx-auto mb-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar Heroe"
              className="form-control"
              name="searchHero"
              autoComplete="off"
              value={searchHero}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>

        <div className="col-7 mx-auto">
          <h4>Resultados</h4>
          <hr />
          <div className="alert alert-primary animate__animated animate__bounceInUp" 
               style={{display: showSearch ? '' : 'none'}}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__bounceInUp" 
               style={{ display: showError ? '' : 'none'}}>
            No se encontraron resultados para <b>{q}</b>
          </div>

          <div className="mx-auto">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
