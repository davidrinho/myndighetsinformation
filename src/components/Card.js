import '../scss/Card.scss';







const Card = ({name, size, func}) => {
    return (
        <div className={`card ${size}`} onClick={func}>
            <span>{name}</span>
        </div>
    )
}

export default Card;