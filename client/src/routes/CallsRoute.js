import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import EditCall from "../organisims/EditCall";
import RecentCalls from "../components/RecentCalls";
import CreateCall from "../organisims/CreateCall";

function CallsRoute() {
    let match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:callId`} component={EditCall}/>
                <Route path="/" component={CreateCall}/>
            </Switch>
            <RecentCalls/>
        </div>);
}


export default CallsRoute;
