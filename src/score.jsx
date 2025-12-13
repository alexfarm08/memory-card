import { useState, useEffect } from 'react'

function Score(props) {

    return (
        <div className="scores">
            <p>Score: {props.score}</p>
            <p>Best score: {props.bestScore}</p>
        </div>
    )
}

export default Score