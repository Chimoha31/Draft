import React,{useState} from 'react';
import Button from './Button';

function Buttons() {
  const [title] = useState("");

  return (
    <div>
    <Button title="About Me"/>
    <Button title="Works" />
    <Button title="Skills & Resume"/>

    </div>
  )
}

export default Buttons
