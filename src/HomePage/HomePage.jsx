import React from 'react';

import { userService, authenticationService } from '../_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userFromApi: null
        };
    }

    componentDidMount() {
        const { currentUser } = this.state;
        userService.getById(currentUser.id).then(userFromApi => this.setState({ userFromApi }));
    }

    render() {
        const { currentUser, userFromApi } = this.state;
        return (
            <div className="mt-5">
                <h4>Home</h4>
                <p>Welcome to home page</p>
                <p>This page can be accessed by all authenticated users.</p>
                <div>
                    <h4 className="mt-4 mb-4">Current user login:</h4>
                    {userFromApi &&
                    <ul className="list-group">
                            <li className="list-group-item list-group-item-info" key={userFromApi.id}>
                                    <b>Full Name: </b>{userFromApi.firstName} {userFromApi.lastName}<br/> 
                                    <b>User Name: </b>{userFromApi.username}<br/>
                                    <b>Role: </b>{userFromApi.role}
                                </li>
                    </ul> 
                    }
                </div>
            </div>
        );
    }
}

export { HomePage };