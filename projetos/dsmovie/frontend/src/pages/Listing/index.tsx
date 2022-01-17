import axios from "axios";
import{useState, useEffect} from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import { assert } from "console";
import { MoviePage } from "types/movie";

function Listing() {

    const[PageNumber, setPageNumber] = useState(0);

  useEffect(() =>{
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
    .then(response =>{
       const data = response.data as MoviePage;
        setPageNumber(data.number);
    });
  },[]);
    

  return (
    <>
      <Pagination />
      <div className="row">
        <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
          <MovieCard />
        </div>
        <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
          <MovieCard />
        </div>
        <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
          <MovieCard />
        </div>
        <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
          <MovieCard />
        </div>
      <div className="col-sm-6  col-lg-4 col-xl-3 mb-3">
          <MovieCard />
        </div>
      
        
      </div>

    </>

  );
}
export default Listing;