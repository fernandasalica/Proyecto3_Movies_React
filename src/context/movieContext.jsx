import { createContext } from "react";

export const movieContext = createContext()

const movieContextProvider = ({children}) => {

return (
 <movieContext.Provider value={data}> 
    {children}
</movieContext.Provider> 
);
};
