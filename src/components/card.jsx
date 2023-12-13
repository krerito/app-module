import icon from '../assets/React.png'
import Button from 'react-bootstrap/Button';

function Card({ id, tittlePost, descriptionPost, datePost,onCardClick  }) {

    return (
        <>
            <div className="cardReact"
                style={{
                    //estilos se pueden poner asi directamente desde el div sin necesidad de su propio css, me la pelas css, y si eres dirce y estas leyendo esto, SSSSSSOPORTA
                    border: '1px solid hsl(0, 0%, 80%)',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.1)',
                    padding: '20px',
                    margin: '10px',
                    textAlign: 'center',
                    display: 'inline-block',//creo que este se va(update, se queda de momento)
                    width: '80%',
                    marginTop: '1.5rem'
                }}>
                <div className="top-card-data"
                    style={{
                        textAlign: 'left'
                    }}>
                    <h2>
                        {tittlePost}
                    </h2>
                    <p>
                        {datePost}
                    </p>
                </div>

                <img className='cardIamge'
                    src={icon}
                    alt=""
                    style={{
                        maxWidth: '100%',
                        maxHeight: '200px',
                        marginBottom: '10px',
                        // borderRadius: '50%',
                    }}
                />
                <p>
                    {descriptionPost}
                </p>
                <div className="button-container"
                    style={{
                        marginBottom: '1rem',
                    }}
                >

                    <Button
                        onClick={() => {onCardClick(id)} }
                    >
                        Read more
                    </Button>
                </div>
            </div >
        </>
    )
}

export default Card