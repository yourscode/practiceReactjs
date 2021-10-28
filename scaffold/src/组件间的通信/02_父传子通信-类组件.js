import React, { Component } from 'react'

class ChildCpn extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const {name,age,height} = this.props
        return (
            // eslint-disable-next-line no-useless-concat
            <h2>子组件展示数据：{name+'' + age + "" + height}</h2>
        )
    }
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
