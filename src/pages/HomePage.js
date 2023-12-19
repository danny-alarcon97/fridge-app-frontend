import { React } from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <h2>Home Page</h2>
      <article>
        <p>
          Hello! My name is Daniel and I am currently attending Oregon State
          University for a BS in Computer Science.
        </p>

        <p>
          Aspiring to be a web developer is embarking on a journey that combines
          creativity with technical skill. It's about more than just writing
          code; it's about bringing ideas to life, creating interactive
          experiences that connect and resonate with users across the globe. My
          goal as a future web developer is to master the languages of the web -
          HTML, CSS, JavaScript, and beyond - and to stay abreast of the
          constantly evolving web technologies. I am excited about the
          opportunity to build websites and applications that are not only
          functional but also aesthetically pleasing and user-friendly. I look
          forward to being part of a community that innovates and pushes the
          boundaries of what's possible on the web, making information and
          services more accessible and engaging for everyone. My aspiration is
          to not just develop websites, but to create digital experiences that
          make a positive impact on people's lives.
        </p>

        <p class="listTitle">
          <strong>Here are the technologies used in this website:</strong>
        </p>

        <img src="../images/MERN-pic.png" alt="MERN img" />

        <dl>
          <dt>
            <SiMongodb />
            <strong>MongoDB</strong>
          </dt>

          <dd>
            MongoDB is a popular, open-source NoSQL database known for its
            flexibility and scalability. Unlike traditional relational databases
            that store data in tables with fixed schemas, MongoDB uses a
            document-oriented approach, storing data in flexible, JSON-like
            documents. This means that the data structure can vary from document
            to document, making it a great choice for applications with evolving
            data models or those that handle a variety of data types.
          </dd>
          <dd>
            In this app, it is used as the backend for our Manga database!
          </dd>

          <dt>
            <SiExpress />
            <strong>Express.js</strong>
          </dt>

          <dd>
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features to develop web and mobile
            applications. It is one of the most popular frameworks for
            server-side development using Node.js due to its simplicity,
            scalability, and speed.
          </dd>
          <dd>
            Express simplifies the process of building server-side applications
            and APIs by providing a lightweight layer on top of Node.js. This
            layer abstracts common web development tasks like routing, handling
            requests and responses, and integrating with databases, making it
            easier to write the server-side logic without starting from scratch.
          </dd>

          <dt>
            <FaReact />
            <strong>React.js</strong>
          </dt>
          <dd>
            React is an open-source JavaScript library for building user
            interfaces, particularly for single-page applications. It's
            maintained by Facebook and a community of individual developers and
            companies. React allows developers to create large web applications
            that can update and render efficiently without reloading the page.
          </dd>
          <dd>
            The core philosophy of React involves the concept of virtual DOM,
            which makes the user experience smoother and faster. The virtual DOM
            is a lightweight copy of the actual DOM, allowing React to do
            minimal DOM manipulation by updating changes in the virtual DOM
            first and then rendering only those changes on the real DOM. React
            is component-based, meaning that the UI is broken down into reusable
            components. Each component has its own state and logic, which can be
            managed independently. This modularity makes it easier to maintain
            and scale large applications.
          </dd>

          <dt>
            <FaNodeJs />
            <strong>Node.js</strong>
          </dt>
          <dd>
            Node is an open-source, cross-platform JavaScript runtime
            environment that allows developers to run JavaScript on the server
            side. It's built on Chrome's V8 JavaScript engine, and it enables
            the execution of JavaScript code outside of a browser, which was
            traditionally used only for client-side scripting.
          </dd>
          <dd>
            Nodes event-driven architecture allows it to handle numerous
            concurrent connections with high throughput, which provides a
            performance advantage over traditional server-side scripting
            environments that create a new thread for each connection.
          </dd>
        </dl>
      </article>
    </>
  );
}

export default HomePage;
