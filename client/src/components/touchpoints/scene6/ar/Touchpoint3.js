import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import X from '../../../../img/x.svg'



function TouchPoint3({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [CON, setCON] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [switchState, setSwitchState] = useState(false);
    const [wrongAlert, setWrongAlert] = useState(true);
    const [correctAlert, setCorrectAlert] = useState(false);

    const onMouseOver = event => {
        const el = event.target;
        let colorhex = "#F8A61F"
        el.style.background = colorhex;
      };

    const onMouseOut = event => {
        const el = event.target;
        let black = "#FFE7B0";
        el.style.background = black;
    };

    if(switchState){
        setTimeout(function(){
            var scene6 = new Date().getTime();
            localStorage.setItem('scene6', scene6);
            window.location.href = '/scene5';
        }, 4000);            
      };

    setInterval(function(){   
        if(!wrongAlert){
          setTimeout(function(){
            // console.log("false");
            setWrongAlert(true);
            // setSwitchState(true);
          }, 3000);
        }
        console.log(wrongAlert);
     }, 3000);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
        scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" transparent opacity={hovered? 0.2 : 0} /> 
            <Html center>
            <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert6"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert6"
                        variant="primary"
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-insides"  style={{ top: '-170px' }}>
                        <button className="close" onClick={() => setShowMessage(false)}>
                            <img src={X} className="stopDrag" style={{ position: 'absolute', top: '-28px', left: '6px', width: '50px' }} />
                        </button>

                            <Alert.Heading>
                                <p style={{ fontSize: '1rem', position: 'absolute', top: '33px', width: '500px', left: '98px' }}>
                                    Which of the following actions would you like to take?
                                </p>
                                {/* <div>
                                    <img src={switchState? switchButtonON : switchButtonOFF} onClick={() => setSwitchState(true)} alt='switch' width='100%' height='100%' />
                                </div> */}
                                <div className='mcq-bounding-text2' style={{ display: correctAlert? 'none' : 'block'}}>
                                
                                <h3  className='mcq-text2' onMouseEnter={event => onMouseOver(event)} style={{ display: wrongAlert? 'block' : 'none', background: '#FFE7B0' }}
                                    onMouseOut={event => onMouseOut(event)}  onClick={() => setWrongAlert(false)}
                                    >
                                    Leave the lights on so that we can see nearby wildlife.
                                </h3> 
                                <h3  className='mcq-text2' onClick={() => setWrongAlert(false)} style={{  display: wrongAlert? 'block' : 'none', background: '#FFE7B0' }}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    Reduce the brightness as you will try to enter the conservation centre.
                                </h3>
                                <h3  className='mcq-text2' onClick={() => setShowMessage(false)} style={{ display: wrongAlert? 'block' : 'none', background: '#FFE7B0' }}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    Ignore and explore other items in the trunk.
                                </h3>
                                <h3 className='mcq-text2' onClick={() => {setSwitchState(true); setCorrectAlert(true)}} style={{ display: wrongAlert? 'block' : 'none' , background: '#FFE7B0'}}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    Turn off the lights as you do not need them.
                                </h3>
                                <h3 style={{ position: 'absolute', top: '-20px', padding: '20px', left: '35px', display: wrongAlert? 'none' : 'block' }}>Try Again! Glaring light can disturb wildlife. Generally, you should switch off any lights, if they are not needed.</h3>
                                </div>
                                <div>
                                    <h3 style={{ position: 'absolute', top: '74px', padding: '20px', left: '31px', display: correctAlert? 'block' : 'none' }}>
                                        Correct! Glaring light can disturb wildlife. Generally, you should switch off any lights, if they are not needed. 
                                    </h3>
                                </div>
                            </Alert.Heading>
                                
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint3;