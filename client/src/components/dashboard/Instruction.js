import React from 'react'
import { Button } from 'react-bootstrap'

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
                <div className="landing-inner">
                    <h1 className="large">
                    A fasciniting experience awaits you.
                    </h1>
                    <h2>
                        But before you get started, here are a few points to keep in mind.
                    </h2>
                    <p>You have 10 minutes to complete all the challenges</p>
                    <p>For a better gaming experience, we would recommend a desktop web browser</p>
                    <p>Desert Survival is a click and play experience</p>
                    <p>Only the score of your first try will be considered, however, you can attempt the experience as many times as you wish</p>
                    <p>If you chose to leave the game midway, your progress resets and you will have to start from the beginning</p>
                    <p>Make sure your audio is always turn on for maximum effect</p>
                    <p>Everything you need is already in the room and just needs to be discovered</p>
                    <form>
                        <input type='checkbox' id="check1" onChange={this.handleCheckChange} />Agree
                        <br />
                        <Button type="button" href="/scene1">Proceed</Button>
                    </form>
                    </div>
                </div>
            </section>
        )
    }
}


export default Instruction;