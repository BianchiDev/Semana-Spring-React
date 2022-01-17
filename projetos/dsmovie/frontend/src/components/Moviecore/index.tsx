import MovieStars from 'components/MovieStars';
import './styles.css'

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {

    return (
        /*condicional ternário, se score maior que 0 o formato será com uma casa decimal, se não haverá apenas um traço*/
        <div className="dsmovie-score-container">            
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score} />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;