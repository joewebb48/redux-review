import React from 'react'
import './pageone.css'


const PageOne = props => {
    return (
        <div className="page" id="page-one-wrapper">
        Name: <input type="text"/>
        Age: <input type="text"/>
        Email: <input type="text"/>
        Phone Number: <input type="text"/>
        <button>Submit</button>
        </div>
    )
}
export default PageOne
