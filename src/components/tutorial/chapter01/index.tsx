import * as React from 'react';

import SimpleExampleDemo from './SimpleExampleDemo'
import WindowDemo from './WindowDemo'


export default class DemoList extends React.Component<any, any> {
    render() {
        return (
            <div className="test">
                <SimpleExampleDemo/>
                <WindowDemo/>
            </div>
        )
    }
}
