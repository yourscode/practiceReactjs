import React, { Component } from 'react'


function ChildCpn(props) {
    const {name,age,height} = props
    return (
        <div>
            <h2>{name+age+height}</h2>
        </div>
    )
}


export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="huzhihui" age="20" height="1.80" />
                <ChildCpn name="gongliping" age="20" height="1.70" />
            </div>
        )
    }
}