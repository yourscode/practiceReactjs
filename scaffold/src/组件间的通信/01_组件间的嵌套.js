import React, { Component } from 'react'

//header
function Header(params) {
    return <h2>我是header组件！</h2>
}

//main
function Main(params) {
    return <h2>我是main组件！</h2>
}

//Footer
function Footer(params) {
    return <h2>我是Footer组件！</h2>
}

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>hello</h2>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
