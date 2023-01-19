import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const Documento = () => {

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", "RAqvM6mJiFXSyuc1Ehlb");
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data());
            } else {
                console.log("El Producto No Existe!");
            }
        });
    }, []);

    return(
        <h1>Documento</h1>
    )
}


export default Documento;