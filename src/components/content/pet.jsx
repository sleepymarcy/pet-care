import { Route } from "react-router-dom";
import path from "./path"

function Pet() {
    return (
        <Route path={path.pet}>
            <div>
                <h1> This is a pet-page </h1>
            </div>
        </Route>
    );
}

export default Pet;