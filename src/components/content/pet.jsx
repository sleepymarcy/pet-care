import { Route } from "react-router-dom";
import path from "./path"

function Pets() {
    return (
        <Route path={path.pets}>
            <div>
                <h1> This is a pet-page </h1>
            </div>
        </Route>
    );
}

export default Pets;