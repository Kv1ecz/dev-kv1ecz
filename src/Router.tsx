import { Route, Routes } from "react-router-dom";
import { Presentation } from "./components/Presentation";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Presentation/>}/>
        </Routes>
    )
}