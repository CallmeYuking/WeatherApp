import React from "react";
 
class Form extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name='city' placeholder='Enter a city'></input>
                <button>Search</button>
            </form>
        )
    }
}

export default Form;