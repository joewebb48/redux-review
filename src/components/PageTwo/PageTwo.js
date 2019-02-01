import React from 'react'
import './pagetwo.css'
import { connect } from 'react-redux'

const PageTwo = props => {
    let { id } = props.match.params;
    return (
        <div className="page" id="page-two-wrapper">
        <h1>MATCH THIS: {id}</h1>
        <p>Your Information: </p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}e</p>
        <p>Email: {props.email}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <button>Confirm</button>
        </div>
    )
}
function mapStatetoProps(state) {
    return {
        name: state.name,
        age: state.age,
        email: state.email,
        phoneNumber: state.phoneNumber
    }
}
export default connect(mapStatetoProps)(PageTwo)