import React from 'react'
import SlideshowWithPagination from 'react-slideshow-with-pagination'
import {GrReactjs} from 'react-icons/gr'
import {SiRedux} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiSass} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {DiNpm} from 'react-icons/di'
import {SiExpress} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import './SlideShow.scss'

const SlideShowContent = [
    {
        title: 'React',
        icon: <GrReactjs/>,
        description: 'React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
    },
    {
        title: 'Redux',
        icon: <SiRedux/>,
        description: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.',
    },
    {
        title: 'JavaScript',
        icon: <IoLogoJavascript/>,
        description: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.',
    },
    {
        title: 'HTML',
        icon: <AiFillHtml5/>,
        description: 'HTML is the standard markup language for creating Web pages. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.',
    },
    {
        title: 'CSS',
        icon: <DiCss3/>,
        description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.',
    },
    {
        title: 'Sass',
        icon: <SiSass/>,
        description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax", uses a syntax similar to Haml. The second, newer syntax, called "SCSS" (for "Sassy CSS"), uses the usual CSS syntax. SassScript is used in both syntaxes.',
    },
    {
        title: 'Node',
        icon: <IoLogoNodejs/>,
        description: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user\'s web browser.',
    },
    {
        title: 'NPM',
        icon: <DiNpm/>,
        description: 'npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.',
    },
    {
        title: 'Express',
        icon: <SiExpress/>,
        description: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.',
    },
    {
        title: 'PostgreSQL',
        icon: <SiPostgresql/>,
        description: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley. In 1996, the project was renamed to PostgreSQL to avoid confusion with Ingres.',
    },
    {
        title: 'MongoDB',
        icon: <SiMongodb/>,
        description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.',
    },
    {
        title: 'Python',
        icon: <SiPython/>,
        description: 'Python is an interpreted, high-level and general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.',
    },
]

const SlideShow = () => {
  return (
    <div className="slide-container">
        <SlideshowWithPagination
            items={SlideShowContent}
            numberOfCardsPerScreen={3}
            showOneCardForWidthLower="sm"
            slideshowContainerMaxWidth={false}
            cardWidth={500}
            cardHeight={500}
    >
        {SlideShowContent.map((item, index) => (
            <div className="slide-icon">{item.icon}
            <h1>{item.title}</h1>
            <p className='special-p'>{item.description}</p>
            </div>
        ))}
      </SlideshowWithPagination>
    </div>
  )
}

export default SlideShow