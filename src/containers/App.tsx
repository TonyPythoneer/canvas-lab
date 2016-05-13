import * as React from 'react';

import SideBar from '../containers/SideBar';
import Chapter01 from '../components/tutorial/chapter01';


export default class AppContainer extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <SideBar/>
                <div className="main-page">
                    <Chapter01/>
                </div>
            </div>
        )
    }
}
