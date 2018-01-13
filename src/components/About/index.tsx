import * as React from 'react';

import './style.scss';

// https://stackoverflow.com/questions/44369706/react-typescript-usage-of-classname-prop
export default class About extends React.Component<React.HTMLAttributes<HTMLDivElement>> {

    render() {
        return (
            <div className="About">
                <h1>
                    About
                </h1>
            </div>
        );
    }
}