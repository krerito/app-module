function CardPost({tittlePost, descriptionPost, datePost}){
    return(
        <>
            <div className="cardPost"
                style={{
                    //estilos se pueden poner asi directamente desde el div sin necesidad de su propio css, me la pelas css, y si eres dirce y estas leyendo esto, SSSSSSOPORTA
                    border: '1px solid hsl(0, 0%, 80%)',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 5px hsla(0, 0%, 0%, 0.1)',
                    padding: '20px',
                    margin: '10px',
                    textAlign: 'center',
                    display: 'inline-block',//creo que este se va(update, se queda de momento)
                    width: '95%',
                    marginTop: '1.5rem',
                    height:'100%'
                }}>
                    <h1>{tittlePost}</h1>
                    <h1>{descriptionPost}</h1>
                    <h1>{datePost}</h1>
                </div>
        
        
        </>
    )
}

export default CardPost