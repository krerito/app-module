import icon from '../assets/React.png'

function Card() {
    return (
        <>
            <div className="cardReact">
                <h2>Tittle of my post</h2>
                <img className='cardIamge' src={icon} alt="" />

                <p>Description of my post</p>
            </div>
        </>
    )
}

export default Card