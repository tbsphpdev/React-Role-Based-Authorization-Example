import React from 'react';

import { userService } from '../_services';

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { users } = this.state;
        return (
            <div className="mt-5">
                <h4>Admin</h4>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                    <h4 className="mt-4 mb-4">All registered users:</h4>

                    {users &&
                        <ul className="d-flex pl-0">
                            {users.map(user =>
                                <li className="mr-2 w-50 list-group-item list-group-item-info" key={user.id}>
                                    <b>Full Name: </b>{user.firstName} {user.lastName}<br/> 
                                    <b>User Name: </b>{user.username}<br/>
                                    <b>Role: </b>{user.role}
                                </li>
                            )}
                        </ul> 
                    }
                </div>
            </div>
        );
    }
}

export { AdminPage };