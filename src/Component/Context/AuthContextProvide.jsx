import { createContext } from "react";
import { useState } from "react";

export const MyAuthContext = createContext(); //box

function AuthContextProvide({children}) {
 
const[lang, setLang]= useState(false);
// console.log(lang)





const language= () =>{
    setLang(true)
}
    return(
        // value is used for send info
     <MyAuthContext.Provider value = {{language,lang ,setLang}}>{children}</MyAuthContext.Provider>
    )
}

export default AuthContextProvide;