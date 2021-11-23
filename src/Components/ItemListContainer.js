const ItemListContainer = (props) => {

    const style = {
        color: 'white'
    }

    return (
            <h1 style={style}>{props.greeting}</h1>
    )
}

export default ItemListContainer