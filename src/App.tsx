import { useState } from 'react';
import Button from './components/Button';
import { Typography } from '@mui/material';

function App() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <Button
        buttonType="base"
        title="Some title"
        onClick={() => setCounter(counter + 1)}
      />
      <Typography>{counter}</Typography>
    </>
  );
}

export default App;
