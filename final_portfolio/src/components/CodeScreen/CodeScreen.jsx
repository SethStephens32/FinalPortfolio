import React from 'react'
import './CodeScreen.scss'
import {BsFillCircleFill} from 'react-icons/bs'

const CodeScreen = () => {
  return (
    <div className="code-screen">
      <div className="code-screen__dots">
        <BsFillCircleFill className="code-screen__dot"/>
        <BsFillCircleFill className="code-screen__dot"/>
        <BsFillCircleFill className="code-screen__dot"/>
      </div>
      <div className="code">
      <code className="code-screen__content">
        <span className='opening__tags'>
        {"1   "}{"<"}<span className='opening__tag'>section</span>{" class="}<span className='opening__tag'>home-page</span>{">"}
        </span>
      </code>
      </div>
    </div>
  )
}

export default CodeScreen