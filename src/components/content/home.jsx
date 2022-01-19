import { Route } from "react-router-dom";
import path from "./path";

function Home() {
    return (
        <Route path exact={path.home}>
            <div>
                <h1> This is a homepage </h1>
            </div>
        </Route>
    );
}

export default Home;