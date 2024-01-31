import { Button } from '@mui/material';

function welcome({close}) {
  return (
    <div className="welcome">
      <h1>Welcome!</h1>
      <p>Having trouble managing what needs to be done? This should help!</p>
      <Button variant="contained" onClick={() => {close(false)}}>Let's Go!</Button>
    </div>
  )
}

export default welcome;