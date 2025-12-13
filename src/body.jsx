import Card from "./card"

function Body(props) {

    const cardsArray = Array.from({length: 16});

    return (
        <main className="main">
           <h2>Get points by clicking on an image but don't click on any more than once!</h2> 
           {cardsArray.map((_, index) => (
                <Card key={index} handleScore={props.handleScore} shuffleTrigger={props.shuffleTrigger}/>
           ))}
        </main>
    )
}

export default Body