import React, { Component } from 'react'
import propTypes from 'prop-types'



function ChildCpn(props) {
    const {name,age,height} = props
    const {names} = props
    return (
        <div>
            <h2>{name+age+height}</h2>
            <ul>
                {
                    names.map((item,index)=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

//如果在类中的话
class ChildCpn2 extends Component {
    //前面添加static属性的意思是ES6 的class files写法，属于类组件，就相当于ChildCpn2.propTypes / ChildCpn2.propTypes，写在类外面
    static propTypes = {

    }
    static defaultProps = {

    }
}

ChildCpn.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number,
    height: propTypes.number,
    names: propTypes.array
}

//给默认值
ChildCpn.defaultProps = {
    name: 'heihei',
    age: 88,
    height: 1.99,
    names: ['propTypes.array','balabala']
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="huzhihui" age={20} height={1.8} names={['hello','monika','kity','littleBlack']} />
                <ChildCpn name="gongliping" age={20} height={1.7} names={['hi','huzihui','nishizhu','White']} />
                <ChildCpn />
            </div>
        )
    }
}