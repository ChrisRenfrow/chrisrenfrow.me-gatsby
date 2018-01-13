import * as React from 'react';

import './style.scss';

export default class Home extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="Blog">
                <h1>
                    This will be the home of my blog.
                </h1>
            </div>
        );
    }
}