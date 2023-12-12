import icon from '../assets/React.png'

function Card() {
    return (
        <>
            <div className="cardReact"
                style={{
                    //estilos se pueden poner asi directamente desde el div sin necesidad de su propio css, me la pelas css
                    border: '1px solid hsl(0, 0%, 80%)',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.1)',
                    padding: '20px',
                    margin: '10px',
                    textAlign: 'center',
                    display: 'inline-block',//creo que este se va(update, se queda de momento)
                }}>

                <h2>
                    Tittle of my post
                </h2>

                <img className='cardIamge'
                    src={icon}
                    alt=""
                    style={{
                        maxWidth: '60%',
                        height: 'auto',
                        marginBottom: '10px',
                        // borderRadius: '50%',
                    }}
                />
                <p>
                    Description of my post
                </p>
            </div>
        </>
    )
}

export default Card