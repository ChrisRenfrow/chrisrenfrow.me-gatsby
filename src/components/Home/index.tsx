import * as React from 'react';

import './style.scss';

export default class Home extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="Home">
                <h1>
                    Welcome home.
                </h1>
            </div>
        );
    }
}