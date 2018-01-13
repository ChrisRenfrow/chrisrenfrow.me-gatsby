import * as React from 'react';

import './style.scss';

export default class NotFound extends React.Component<React.HTMLAttributes<HTMLDivElement>> {
    render() {
        return (
            <div className="NotFound">
                <h1>
                    404 <small>Not Found :(</small>
                </h1>
            </div>
        );
    }
}