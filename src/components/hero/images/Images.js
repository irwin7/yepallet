
const Images = (props) =>{
    return(
        <button className="left__btn left__btn--active">
            <img className="left__btn-image" src={props.item} alt="btn-image" />
        </button>
    )
}

export default Images;