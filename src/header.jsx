import Score from "./score"
import './header.css'

function Header() {

    return (
        <div className="header">
            <h1 className="page-title">Memory Game</h1>
            <Score />
        </div>
    )
}

export default Header