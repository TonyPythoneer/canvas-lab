import * as React from 'react';

import SimpleExampleDemo from './SimpleExampleDemo'
import WindowDemo from './WindowDemo'


export default class DemoList extends React.Component<any, any> {
    render() {
        //<WindowDemo/>
        return (
            <div className="section">
                <div className="demo-row">
                    <SimpleExampleDemo/>
                    <WindowDemo/>
                    <WindowDemo/>
                </div>
                <div className="demo-row">
                    <SimpleExampleDemo/>
                    <WindowDemo/>
                    <WindowDemo/>
                </div>
            </div>
        )
    }
}
