import React from "react";

function About() {
  return (
    <div className="rounded-lg sm:mx-28 mx-5 mt-20 text-justify">
      <p className="text-lg font-semibold mb-4 text-blue-600">
        I'm a front-end developer with a strong skill set that includes:{" "}
        <span className="uppercase">
          HTML, CSS, JavaScript (<span className="lowercase">or</span>{" "}
          TypeScript), Node.js, Tailwind CSS, React.js, and Next.js.
        </span>
      </p>
      <p className="leading-relaxed">
        My expertise enables me to build dynamic and visually appealing web
        interfaces with a focus on modern design and efficient development
        practices. HTML and CSS form the foundation of my work, allowing me to
        craft structured and styled content that is responsive and accessible.
        JavaScript and TypeScript bring interactivity to my projects, while my
        React.js skills enable me to create fast, component-based UIs with
        reusable code.
      </p>
      <p className="leading-relaxed mt-4">
        With Tailwind CSS, I
        streamline my styling process, leveraging utility classes for rapid and
        responsive design.Next.js
        helps me build server-side rendered applications with ease, enhancing
        performance and SEO. Additionally, my knowledge of Node.js
        provides me with the ability to handle server-side logic, making me
        well-versed in both front-end and back-end aspects of development.
      </p>
    </div>
  );
}

export default About;
