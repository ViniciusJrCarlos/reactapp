import React, { useState, useEffect } from "react";

const App = () => {

    const [usuarios, setUsuarios] = useState(
        ["Vinicius", "Junior", "Carlos"])
        
        useEffect(() =>{

            setTimeout(() => {

                setUsuarios([...usuarios, "Carlos"]);

            }, 5000);

        }, []);
        
    return (

        <div className="App">
            <h1>Hello APP</h1>
            {usuarios.map((item) => (
            <p>{item}</p>
            
            ))}
        </div>


    );

};
export default App;