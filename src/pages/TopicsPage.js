import { React } from "react";

function TopicsPage() {
  return (
    <>
      <section>
        <h2>Web Dev Concepts</h2>
        <nav class="local">
          <a href="#servers">Web Servers</a>
          <a href="#frontend-design">Frontend Design</a>
          <a href="#optimization">Image Optimization</a>
          <a href="#favicons">Favicons</a>
          <a href="#css">CSS Info</a>
          <a href="#forms">Forms Info</a>
          <a href="#express">Express Info</a>
          <a href="#javaScript">JavaScript</a>
        </nav>
        <article id="servers">
          <h3>About Web Servers</h3>
          <p>
            An index, in the context of websites and servers, refers to a
            fundamental component that plays a pivotal role in organizing and
            facilitating the retrieval of web content. It is a concept closely
            associated with the
            <strong>HTTP (Hypertext Transfer Protocol)</strong> and web servers'
            functionality. The concept of an index is integral to the
            functioning of websites and the World Wide Web itself. It allows
            users to access specific web pages without needing to know the exact
            URL or file path. Instead, they can rely on the server's index to
            navigate through the site's content. Many web servers are set up in
            a way that when you request the /, it points to the file located at
            /index.html. In the realm of practical web applications, it's
            customary to designate the file named index.html in the root
            directory as the main page of the web application, and the
            configuration ensures that this file is returned whenever a GET
            request arrives for the / route. The Apache web server software used
            by OSU Engineering, adopts the default name index.html for this
            purpose. On occasion, other servers may also consider index.js or
            index.php as viable options for the homepage.
          </p>
          <p>
            The URL in the Network tab will reflect the actual URL used to
            request the resource. If you are viewing a file from a web server,
            the URL will typically be an absolute URL, like
            <strong>
              "https://web.engr.oregonstate.edu/~alarcoda/a1-alarcoda/".
            </strong>
            Since the file is loaded locally, the URL is a relative file path.
            The timing information in the Network tab will vary based on whether
            the resource is fetched from a web server or the local computer.
            Loading a file from the web server involves DNS resolution time,
            while loading a file locally is usually much faster since it doesn't
            involve these network-related delays. When loading a file from a web
            server, you'll see headers sent by the server, which may include
            server information. When loading a file locally, the headers will
            reflect the local file system and does not include as much
            information. The GET Method was provided for the index page.
          </p>
          <p>
            The favicon.ico file may exist on the server at the specified URL,
            whereas the main.css and main.js files may not be present. The
            Status for the main.css and the main.js returned as 404 Not Found,
            as opposed to the index.html's 200 OK status code. The request URL
            were different for each directory. The Request GET Method remained
            the same. There are no response headers returned for main.css or
            main.js.
          </p>
          <p>
            The scheme of the URL is file://, this identifies the protocol the
            web client must use to request the resource. The subdomain of the
            URL is stak.engr., this is a subsection of the server. The
            host/domain of the URL is oregonstate.edu, which is what is mapped
            to the IP address for the server. The path to a page of the URL is
            /users/alarcoda/public_html/a1-alarcoda/index.html, which identifies
            specific resources on the server. This path identifies which files
            are accessed in order to reach the core index page.
          </p>
        </article>
        <article id="frontend-design">
          <h3>Frontend Design</h3>
          <p>
            Frontend design encompasses the process of creating the user
            interface and user experience of a website or application.
            <strong>
              It involves the use of various design principles, such as visual
              hierarchy, typography, color theory, and layout, to craft a
              visually appealing and user-friendly digital environment.
            </strong>
            Frontend designers typically collaborate with developers to ensure
            that their designs are implemented effectively, using technologies
            like HTML, CSS, and JavaScript. Usability engineering plays a vital
            role in frontend design, as it focuses on optimizing the interface
            for ease of use, efficiency, and user satisfaction.
          </p>
          <dl>
            <dt>
              <strong>Effective</strong>
            </dt>
            <dd>
              The user must meet their goal(s) or requirements. The user must
              end up with accurate results.
            </dd>

            <dt>
              <strong>Efficient</strong>
            </dt>
            <dd>
              The user must be able to perform tasks with the least number of
              steps in a timely manner.
            </dd>

            <dt>
              <strong>Easy to Navigate</strong>
            </dt>
            <dd>
              The application must be simple for the user to use, especially if
              they have never used it before. The user must immediately
              understand how to locate their goal by clicking or searching, as
              well as remember how next time.
            </dd>

            <dt>
              <strong>Error-free</strong>
            </dt>
            <dd>
              Accessibility and availability errors must be avoided. Common user
              errors must be avoided where there are no roadblocks for specific
              needs.
            </dd>

            <dt>
              <strong>Enjoyable or Engaging</strong>
            </dt>
            <dd>
              It fits the unique needs of the intended audience in content and
              design. Users must want to return.
            </dd>
          </dl>
          <p>
            The <strong>"header"</strong> tag typically encompasses introductory
            content at the top of a web page, such as logos and main navigation,
            providing a consistent identity and quick access to essential
            information. The <strong>"nav"</strong> tag defines a navigation
            menu or links, helping users to navigate the site easily. The
            <strong>"main"</strong> tag encapsulates the central content of the
            page, like the main article or primary information.
            <strong>"Section"</strong> and <strong>"article"</strong> tags are
            used to divide content into distinct sections or self-contained
            articles, aiding in semantic structure and SEO optimization. The
            <strong>"aside"</strong> tag is used for content tangentially
            related to the main content, such as sidebars or additional
            information. Lastly, the <strong>"footer"</strong> tag contains
            footer information, like copyright notices and contact details,
            serving as a consistent location for concluding information on the
            page.
          </p>
          <ol>
            <li>
              To link to external content, such as a different website or web
              page, you would use the 'a' (anchor) element with the href
              attribute set to the URL of the external resource. This creates a
              hyperlink from one item to another.
            </li>
            <li>
              You can create internal links to different sections within the
              same web page by using anchor tags with the href attribute set to
              an ID of an element within the page. When a tag has an ID
              attribute, its value can be used with a hashtag to define the
              reference for an anchor.
            </li>
            <li>
              To link from one web page to another, you can use absolute or
              relative URLs in the anchor's href attribute. Absolute URLs point
              to a specific location on another website, while relative URLs
              specify the path to a different page within the same website.
            </li>
          </ol>
        </article>

        <article id="optimization">
          <h3>Optimizing Images</h3>
          <p>
            The six major specifications of optimized images for the web are:
            descriptive file names, small file size, exact dimensions, correct
            file format, reduced resolution, and color mode. These
            specifications are crucial for ensuring that web images load quickly
            and display correctly on various devices and browsers, providing a
            seamless user experience. Example of file formats are:
            <strong>SVG</strong>(Scalable Vector Graphics),
            <strong>GIF</strong>(Graphics Interchange Format),
            <strong>PNG</strong>(Portable Network Graphics),
            <strong>JPEG</strong>(Joint Photographic Experts Group), and
            <strong>WebP</strong>. SVG is a vector graphics format that is
            resolution-independent, meaning it can scale up or down without
            losing quality. It's ideal for icons, logos, and other graphics
            where precise shapes and scalability are important. GIFs are known
            for their support of animations. They use lossless compression,
            making them suitable for simple animations, and they also support
            transparency, making them great for images with sharp edges and
            limited colors. PNG is a versatile format known for its lossless
            compression, which preserves image quality. It's often used for
            images that require transparency, such as logos and images with
            sharp lines and text, making it a popular choice for web graphics.
            JPEG is a format designed for photographs and images with complex
            color gradients. It uses lossy compression, which sacrifices some
            image quality to achieve smaller file sizes. It's commonly used for
            photos on the web, balancing quality and file size. WebP is a modern
            image format developed by Google. It offers both lossy and lossless
            compression, making it versatile for various image types.
          </p>
        </article>

        <article id="favicons">
          <h3>Favicons</h3>
          <p>
            Browsers and devices use favicons, which stands for "favorite
            icons," as small, customizable graphics that represent a website or
            web page. These icons are typically displayed in the browser's tab
            or bookmark bar and serve several essential functions. First and
            foremost, favicons help users quickly identify and navigate to a
            specific website, enhancing the user experience by providing visual
            branding and differentiation among multiple open tabs. Some mobile
            devices and operating systems also display favicons on the home
            screen when users add a webpage as a shortcut or "app."
          </p>
        </article>

        <article id="css">
          <h3>CSS Style</h3>
          <p>
            CSS (Cascading Style Sheets) is of paramount importance in web
            development because it serves as the design language that brings
            websites to life. It enables the separation of content from
            presentation, allowing web developers to control the visual aspects
            of a webpage, such as layout, colors, fonts, and spacing, with
            precision and consistency. This separation makes it easier to
            maintain and update a website, as changes can be applied globally by
            modifying a single CSS file, enhancing efficiency and reducing
            redundancy. CSS also plays a crucial role in creating responsive web
            designs, ensuring that websites adapt seamlessly to various screen
            sizes and devices. In CSS, there are various ways to incorporate
            style into your web pages. Here are five common methods:
          </p>
          <dl>
            <dt>
              <strong>External CSS</strong>
            </dt>
            <dd>
              This involves creating a separate CSS file (typically with a .css
              extension) and linking it to your HTML document using the 'link'
              element within the HTML's 'head' section. This approach is highly
              recommended for larger projects as it promotes code reusability
              and separation of concerns. It allows you to maintain and update
              styles in a centralized file.
            </dd>

            <dt>
              <strong>Embedded CSS</strong>
            </dt>
            <dd>
              This is also known as internal or in-page styles, involves placing
              CSS rules within a 'style' element in the HTML document's 'head'
              section. This method allows you to define styles specific to that
              page but may not be as easily reusable as external styles.
            </dd>

            <dt>
              <strong>Inline styles</strong>
            </dt>
            <dd>
              are applied directly to individual HTML elements within their
              "style" attribute. This approach is useful for making quick,
              specific style adjustments to single elements, but it can clutter
              the HTML and is less maintainable for larger projects.
            </dd>

            <dt>
              <strong>JavaScript template literals</strong>
            </dt>
            <dd>
              This allows you to dynamically generate and insert CSS styles
              directly into your HTML document using JavaScript. This approach
              is useful when you need to generate styles based on dynamic data
              or user interactions.
            </dd>

            <dt>
              <strong>JavaScript DOM manipulation</strong>
            </dt>
            <dd>
              With JavaScript, you can directly manipulate the styles of HTML
              elements by accessing their properties through the Document Object
              Model (DOM). This method is often used for interactive web
              applications to change styles in response to user actions or
              events.
            </dd>
          </dl>
        </article>

        <article id="forms">
          <h3>Forms</h3>
          <p>
            Accessible forms play a crucial role in ensuring that all users,
            regardless of their abilities or disabilities, can interact with web
            content effectively. The six major goals of accessible forms are:
            <strong>Perceivability:</strong> Users should be able to perceive
            and understand the form elements and their labels. This involves
            using clear and descriptive labels, providing visual cues, and
            ensuring a logical form structure.
            <strong>Operability:</strong> Forms should be easily operable, with
            keyboard navigation and focus indicators allowing users to interact
            without the need for a mouse. This ensures that individuals with
            mobility impairments can fill out forms comfortably.
            <strong>Understandability:</strong> Forms should be designed in a
            way that users can easily understand the purpose of each form
            element, its requirements, and any error messages. This goal helps
            users with cognitive impairments or those who may not be familiar
            with certain web conventions. <strong>Robustness:</strong> Forms
            should be robust and compatible with various assistive technologies
            and user agents. This includes using semantic HTML elements and
            proper attributes to ensure compatibility with screen readers,
            braille displays, and other assistive technologies.
            <strong>Compatibility:</strong> Forms should work across different
            devices and browsers, ensuring that users with various technology
            setups can interact with them seamlessly.
            <strong>Error Handling:</strong> Effective error handling is
            essential, ensuring that users receive clear and informative
            feedback if they make errors when filling out forms. This is
            critical for all users, as it improves the overall usability of
            forms.
          </p>

          <p>
            Major HTML form tags include "form", which defines the form
            container, "input", "textarea", and "select", which are used for
            various input elements, and "label", which provides labels for input
            elements. Attributes such as type, name, and value are used to
            specify the type of input, the name of the input element, and its
            default value. These elements and attributes work together to create
            accessible and usable forms.
          </p>

          <p>
            To improve form usability, it's important to consider design and
            style recommendations. Some key recommendations include using clear
            and concise labels, grouping related elements with fieldsets and
            legends, providing error messages that explain issues in plain
            language, and offering helpful hints and examples. Proper alignment
            and spacing can also enhance the visual clarity of forms. These
            recommendations not only make forms more user-friendly but also
            contribute to a better user experience for all, especially
            individuals with disabilities.
          </p>
        </article>

        <article id="express">
          <h3>Express</h3>
          <p>
            <strong>Node</strong>, <strong>npm</strong>, and
            <strong>Express</strong> are three important technologies in web
            development: <strong>Node.js:</strong> Node.js is a runtime
            environment that allows developers to run JavaScript on the
            server-side. It is highly efficient and non-blocking, making it
            suitable for building scalable and real-time applications. Node.js
            is particularly valuable for web development because it enables
            developers to use JavaScript for both client-side and server-side
            programming, creating a more consistent development experience.
            <strong>npm (Node Package Manager):</strong> npm is the default
            package manager for Node.js and is used to install, manage, and
            share packages of code (libraries and modules) with other
            developers. It simplifies dependency management and allows
            developers to access a vast ecosystem of open-source packages,
            streamlining the development process and saving time by reusing
            existing code. <strong>Express.js:</strong> Express is a web
            application framework for Node.js that simplifies the process of
            building web applications and APIs. It provides a range of tools and
            features, such as routing, middleware, and template engines, to
            speed up web development. Express makes it easier to create robust
            and efficient server-side applications in Node.js.
          </p>
          <p>
            Together, Node.js, npm, and Express provide a powerful development
            stack that improves the web development experience by enabling the
            use of a single programming language (JavaScript) across the entire
            application stack, simplifying package management, and offering a
            robust and efficient framework for building web applications and
            APIs.
          </p>
        </article>

        <article id="javaScript">
          <h3>JavaScript</h3>
          <p>
            <strong>What are the main data types?</strong> JavaScript supports
            various data types. The primary ones include strings, used for text;
            numbers, for numerical values; booleans, representing true or false;
            arrays, which are ordered lists; and objects, which store
            collections of data and functions. Each data type serves specific
            purposes and enables the manipulation of different kinds of
            information within JavaScript.
          </p>
          <p>
            <strong>How are objects, arrays, and JSON used?</strong> Objects in
            JavaScript are fundamental data structures that allow the storage of
            data in key-value pairs, facilitating complex data organization.
            Arrays are lists of values used to store multiple items in a single
            variable. JSON (JavaScript Object Notation) is a text-based data
            interchange format derived from JavaScript's object syntax, commonly
            used for transmitting data between a server and a web application.
            It's a lightweight format and is often employed for APIs and data
            storage.
          </p>
          <p>
            <strong>How are conditionals and loops used?</strong>
            Conditionals and loops are essential control structures in
            JavaScript. Conditionals, like if statements, enable the execution
            of different code blocks based on certain conditions. They allow the
            code to make decisions and execute different paths based on the
            evaluated conditions. Loops, such as for, while, and forEach,
            facilitate repetitive execution of code. They allow tasks to be
            performed multiple times, iterating over data or executing a block
            of code until a certain condition is met.
          </p>
          <p>
            <strong>What is object-oriented programming?</strong>
            Object-oriented programming (OOP) is a programming paradigm that
            revolves around the concept of objects. Objects contain both data
            and functions, encapsulating the data and the methods that operate
            on the data within a single unit. OOP emphasizes the organization of
            code into reusable, self-contained objects, promoting concepts like
            inheritance, encapsulation, and polymorphism for more structured and
            modular code.
          </p>
          <p>
            <strong>What is functional programming?</strong> Functional
            programming is a programming paradigm that treats computation as the
            evaluation of mathematical functions and avoids changing-state and
            mutable data. It emphasizes the use of pure functions that produce
            the same output for the same input and don't have side effects.
            Functions are first-class citizens in functional programming,
            allowing higher-order functions, function composition, and a more
            declarative style of programming.
          </p>
        </article>
      </section>
    </>
  );
}

export default TopicsPage;
