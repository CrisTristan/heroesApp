import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
export const HeroPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=> getHeroById(id), [id]);

  if(!hero){

    return <Navigate to={`/${id.split("-")[0]}`}></Navigate>;
  }

  const onReturn = ()=>{
     navigate(-1);
  }

  return (
    <div className="col mt-5 p-3 animate__animated animate__backInLeft">
       <div className="col-4 mx-auto">
         <img
           src={`/heroes/${hero.id}.jpg`}
           alt={hero.superhero}
           className="img-thumbnail"
         />
       </div>
       <div className="col-8 mx-auto mt-3">
         <h3 className="text-primary">{hero.superhero}</h3>
         <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
            <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
            <li className="list-group-item"><b>First sppearance:</b>{hero.first_appearance}</li>
         </ul>
         <h5 className="mt-3 text-danger"> Characters </h5>
         <p>{hero.characters}</p>

         <button 
         className="btn btn-outline-primary"
         onClick={onReturn}
         >
           Regresar
         </button>
       </div>
    </div>
  )
}
