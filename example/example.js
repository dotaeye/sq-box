import React from 'react';
import ReactDOM from 'react-dom';
import SQBox from '../src/sq-box';

var App = React.createClass({
    render () {
        var items = [];
        for (var i = 0; i < 42; i++) items.push(i);
        return (
            <div style={{ background: '#eee', width: 480, height: 540, padding: 10 }}>
                <SQBox fill style={{ background: 'white' }}>
                    <SQBox direction="column">
                        <SQBox style={{ background: '#ddd' }}>Header</SQBox>
                        <SQBox style={{ background: 'white' }} fill>
                            <SQBox scrollable>
                                {items.map((i) => {
                                    return <div key={i} style={{ padding: 10 }}>Item {i}</div>;
                                })}
                            </SQBox>
                        </SQBox>
                    </SQBox>
                </SQBox>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('example'));
