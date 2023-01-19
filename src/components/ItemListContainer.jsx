import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayProductos from "./json/Productos.json";
import ItemList from "./ItemList";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    // Cargo los productos a firebase
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        })
    }, []);*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        const q = id ?  query(itemsCollection, where("categoria", "==", id)) : itemsCollection;


        getDocs(q).then((snapShot) => {
                setItems(snapShot.docs.map((doc) => 
                    ({id:doc.id, ...doc.data()})
                ))
        });
    }, [id]);

    
    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
};

export default ItemListContainer;