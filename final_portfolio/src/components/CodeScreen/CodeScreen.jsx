import React from 'react'
import './CodeScreen.scss'

const CodeScreen = () => {
  return (
    <div className="code-screen">
      <pre className="code">
        {`const message = 'Hello World!';
console.log(message);`}
      </pre>
    </div>
  )
}

export default CodeScreen