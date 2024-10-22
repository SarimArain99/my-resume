import React from "react";

function Projects() {
  return (
    <div>
      <div className="sm:mx-20 mx-5 mt-20 text-justify">
        <p className="text-xl font-semibold text-blue-600">
          6 Years of Front-End Development Experience
        </p>
        <p className="leading-relaxed">
          Throughout my career, I've had the opportunity to create a variety of
          projects that showcase my front-end development skills and my passion
          for building practical applications. My portfolio includes:
        </p>
        <ul className=" mt-4 space-y-2">
          <li>
            <strong>Inventory Management System</strong> - A robust system that
            allows users to manage inventory, with features like adding,
            deleting, and editing items, category sorting, filtering, and total
            price calculation.
          </li>
          <li>
            <strong>Static Resume</strong> - A polished, professionally designed
            resume page that highlights my skills and experience.
          </li>
          <li>
            <strong>Dynamic Resume Generator</strong> - An interactive tool that
            enables users to create and customize their resumes dynamically,
            with user-friendly customization options.
          </li>
          <li>
            <strong>Country Details Project</strong> - A comprehensive project
            that provides detailed information about countries around the world,
            including regions, subregions, capitals, currencies, symbols, and
            flags.
          </li>
        </ul>
        <p className="mt-4">
          Each project has helped me refine my skills and learn new
          technologies, making me well-prepared to take on complex front-end
          challenges. I continue to build upon this portfolio with new and
          innovative projects.
        </p>
      </div>
    </div>
  );
}

export default Projects;
