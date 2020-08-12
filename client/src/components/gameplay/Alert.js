import React from 'react'
function Alert() {
    return (
        <div className="alert-inside">
        <Alert.Heading>
            <h1>
            Opps! You should see your sorroundings first!
            </h1>
        </Alert.Heading>
        <Button href="/scene2">
            Proceed
        </Button>
    </div>
    )
}

export default Alert;