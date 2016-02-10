import React from 'react';
import ReactDOM from 'react-dom';
import SQBox from '../src/sq-box';

var App = React.createClass({


    getInitialState(){
        return {
            scrollScale:0
        }
    },

    onScroll(event){
        const maxScrollHeight=250;
        let scrollTop=event.target.scrollTop;
        this.setState({
            scrollScale:event.target.scrollTop/maxScrollHeight
        })
    },

    render () {
        var items = [];
        var {scrollScale} = this.state;
    
        for (var i = 0; i < 42; i++) items.push(i);
        return (
            <div style={{  width: 480, height: 540, padding: 10 }}>
                <SQBox fill >
                    <SQBox direction="column">
                        <div style={{ background:'#F3F907',opacity:scrollScale,position:'absolute',top:0,left:0,right:0,padding: 10,zIndex:-1}}>&nbsp;</div>
                        <SQBox style={{ padding: 10 }}>
                            <span>Header</span>
                        </SQBox>
                        <SQBox fill scrollable onScroll={this.onScroll}>
                           
                                {items.map((i) => {
                                    return <div key={i} style={{ padding: 10 }}>Item {i}</div>;
                                })}
               
                        </SQBox>
                    </SQBox>
                </SQBox>
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('example'));
