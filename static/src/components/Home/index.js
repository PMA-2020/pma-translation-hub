import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
    return bindActionCreators(dispatch)
}

// @connect(mapDispatchToProps)
// export const Home = () =>
//     <section>
//         <div className="container text-center">
//             <h1>Hello.</h1>
//             <p>Please <a href="" onClick={() => this.dispatchNewRoute('/login')}>log in</a> or <a href="" onClick={() => this.dispatchNewRoute('/register')}>register</a>.</p>
//         </div>
//     </section>

@connect(mapDispatchToProps)
export class Home extends React.Component {
    dispatchNewRoute(route) {
    // dispatchNewRoute(e, route) {
        // e.preventDefault()
        browserHistory.push(route)
        // this.setState({
        //     open: false,
        // })
    }

    render() {
        return (
            <section>
                <div className="container text-center">
                    {/*<h1 onClick={(e) => this.dispatchNewRoute('/login')}>Hello.</h1>*/}
                    {/*<p>Please <a href="" onClick={(e) => this.dispatchNewRoute('/login')}>log in</a> or <a href="" onClick={(e) => this.dispatchNewRoute('/register')}>register</a>.</p>*/}
                    <h1>Hello.</h1>
                    <p>Please <a href="#" onClick={() => this.dispatchNewRoute('/login')}>log in</a> or <a href="#" onClick={() => this.dispatchNewRoute('/register')}>register</a>.</p>
                </div>
            </section>
        )
    }
}
