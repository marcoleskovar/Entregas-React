import '../style/ItemListContainer.css'

export const ItemListContainer = ({first, second}) => {
    return (
        <div className="itemListContainer">
            <h1 className="eslogan">{first}<span className="highlighted">{second}</span></h1> 
        </div>
    )
}