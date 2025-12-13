import Score from "./score"
import './header.css'

function Header(props) {

    return (
        <div className="header">
            <h1 className="page-title">Memory Game</h1>
            <Score score={props.score} bestScore={props.bestScore} />
        </div>
    )
}

export default Header