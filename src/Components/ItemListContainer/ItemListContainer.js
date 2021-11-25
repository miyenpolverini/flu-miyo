import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {

    const style = {
        color: 'white'
    }

    return (
        <div>            
            <h1 style={style}>{props.greeting}</h1>
            <ItemCount stock= {12} initial= {1} />
        </div>
    )
}

export default ItemListContainer