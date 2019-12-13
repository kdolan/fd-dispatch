import React from 'react';
import CreateCall from "../components/CreateCall";
import RecentCalls from "../components/RecentCalls";

class NewCallPage extends React.Component {

    render() {
        return (
            <div >
                <CreateCall/>
                <RecentCalls/>
            </div>
        );
    }
}

export default NewCallPage;
