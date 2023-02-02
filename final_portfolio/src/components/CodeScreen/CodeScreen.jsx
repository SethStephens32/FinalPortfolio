import React from 'react'
import './CodeScreen.scss'
import {BsFillCircleFill} from 'react-icons/bs'
import Typewriter from 'typewriter-effect'

const CodeScreen = () => {
  return (
    <div className="code-screen">
      <div className="code-screen__dots">
        <BsFillCircleFill className="code-screen__dot"/>
        <BsFillCircleFill className="code-screen__dot"/>
        <BsFillCircleFill className="code-screen__dot"/>
      </div>
      <div className="code">
        <pre className="code__pre">
          <code className="code__code">
            <span className="code__tag">{"<"}div</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills"</span>
            <span className="code__tag">{">"}</span>
            <br/>
            <span className="code__tab__1"style={{marginLeft: "20px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">ul</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__list"</span>
            <span className="code__tag">{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["JavaScript"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["React & Redux"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["NodeJS & NPM"]}}/></span>
            <span className="code__tag" style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["Express"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["MongoDB"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["HTML & CSS"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["APIs & AJAX"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__2"style={{marginLeft: "35px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">li</span>
            <span className="code__attribute"> className</span>
            <span className="code__value">="skills__item"</span>
            <span className="code__tag">{">"}</span>
            <span className="code__text"><Typewriter options={{autoStart: true,loop: true,delay: 200,pauseFor: 20000,strings: ["Python"]}}/></span>
            <span className="code__tag"style={{marginLeft: "35px"}}>{"</"}li{">"}</span>
            <br/>
            <span className="code__tab__1"style={{marginLeft: "20px", color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">/ul</span>
            <span className="code__tag">{">"}</span>
            <br/>
            <span className="code__tab__0"style={{color: "#F472B6"}}>{"<"}</span>
            <span className="code__tag">/div</span>
            <span className="code__tag">{">"}</span>
            <br/>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeScreen