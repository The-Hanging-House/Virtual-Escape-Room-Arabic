import React from 'react'
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap'

class Instruction extends React.Component {
    state = {
        checked: false
    };

    handleCheckChange = e => {
        this.setState({
            checked: e.target.checked
        });
    };

    render() {
        return(
            <section className="landing1">
                <div className="orange-overlay">
                    <form className="checkbox">
                        <div>
                            <input type='checkbox' id="check1" onChange={this.handleCheckChange} /> 
                            I'VE READ THE RULES
                            <div className="buttons" hidden={!this.state.checked}>
                                <Link to="dashboard2" className="btn btn-primary3">
                                    Proceed
                                </Link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </section>
        )
    }
}


export default Instruction;