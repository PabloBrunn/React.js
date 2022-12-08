import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            <h1 className="bg-warning text-center">Productos</h1>
        {
            items.map(item => <Item key={item.id} item={item} />)
        }
        </div>
    )
}

export default ItemList;