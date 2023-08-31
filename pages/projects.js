import React, { useState } from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import styles from "../styles/Projects.module.css"; // Import your custom CSS module for styling

const projectsData = [
  {
    id: 1,
    name: "Hotel Room Booking System",
    description: (
      <div>
        <h1>Hotel Room Booking System</h1>
        <p>
          The Hotel Room Booking System is a Java Eclipse project designed to
          facilitate hotel room reservations through an intuitive user
          interface. Leveraging JavaFX and FXML files, the project provides a
          seamless experience for users to reserve hotel rooms efficiently. The
          system operates on a robust multithreaded server to ensure rapid and
          responsive communication. Room data, user registrations, and guest
          details are securely stored within an SQL server.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>User Authentication:</strong> The system mandates user
            authentication, requiring users to log in with their credentials
            before accessing the booking system.
          </li>
          <li>
            <strong>User Registration:</strong> New users can effortlessly
            register by supplying their information, which is stored securely
            within the SQL server.
          </li>
          <li>
            <strong>Room Booking:</strong> Users can explore available rooms,
            indicate the number of guests, and book a room if it&apos;s
            unoccupied.
          </li>
          <li>
            <strong>Guest Information:</strong> For each booking, users need to
            furnish pertinent details about the guests staying in the reserved
            room.
          </li>
          <li>
            <strong>Available Rooms:</strong> Users have the option to peruse a
            list of currently vacant rooms.
          </li>
          <li>
            <strong>Current Bookings:</strong> The system enables users to
            review their ongoing room reservations.
          </li>
          <li>
            <strong>Check-out:</strong> Users can easily check-out from their
            booked rooms once their stay concludes.
          </li>
          <li>
            <strong>Multithreaded Server:</strong> The project employs
            multithreading to proficiently manage multiple user requests
            concurrently, ensuring optimal responsiveness.
          </li>
        </ul>
        <h2>Prerequisites</h2>
        <ul>
          <li>Java Development Kit (JDK) installed</li>
          <li>Eclipse IDE (or preferred Java IDE)</li>
          <li>JavaFX libraries</li>
          <li>SQL server (e.g., MySQL, PostgreSQL) for data storage</li>
        </ul>
        <h2>Installation</h2>
        <ol>
          <li>
            Clone the repository:{" "}
            <code>
              git clone https://github.com/PatelDeep484/Hotel-Reservation.git
            </code>
          </li>
          <li>
            Configure the SQL server and create essential tables using the
            provided SQL scripts within the <code>sql</code> directory.
          </li>
          <li>Open the project in the Eclipse IDE.</li>
          <li>
            Incorporate JavaFX libraries into your project&apos;s build path.
          </li>
        </ol>
        <h2>Usage</h2>
        <ol>
          <li>
            Initiate the <code>ServerMain</code> class to launch the
            multithreaded server.
          </li>
          <li>
            Start the JavaFX application by executing the{" "}
            <code>ClientMain</code> class.
          </li>
          <li>
            Upon launching, a login screen will appear. Existing users can log
            in, while new users can register.
          </li>
          <li>
            Following successful login, users can:
            <ul>
              <li>Browse available rooms.</li>
              <li>Make room reservations.</li>
              <li>Review available rooms.</li>
              <li>Monitor ongoing reservations.</li>
              <li>Check-out from reserved rooms.</li>
              <li>
                Provide guest information as required during the booking
                process.
              </li>
            </ul>
          </li>
          <li>
            Data encompassing room details, user registrations, and guest
            particulars are securely stored within the SQL server.
          </li>
        </ol>
        <p>
          <strong>Contact</strong>
        </p>
        <p>
          For inquiries or suggestions, feel free to contact the project owner
          at{" "}
          <a href="mailto:pateldeep0295@gmail.com">pateldeep0295@gmail.com</a>.
        </p>
      </div>
    ),
    githubLink: "https://github.com/PatelDeep484/Hotel-Reservation",
  },
  {
    id: 2,
    name: "AWS Fragment Converter",
    description: (
      <div>
        <h1>AWS Fragment Converter</h1>
        <p>
          The AWS Fragment Converter is a project developed on Amazon Web
          Services that empowers users to submit fragments in various formats
          and seamlessly convert between those formats. The project is
          intricately woven with Amazon Cognito to uphold user authentication
          and registration.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>User Authentication and Registration:</strong> Harnesses the
            power of Amazon Cognito to guarantee secure user authentication and
            seamless registration.
          </li>
          <li>
            <strong>Fragment Posting:</strong> Empowers users to contribute
            fragments in assorted formats such as HTML, Markdown, Text, Images,
            JSON, and more.
          </li>
          <li>
            <strong>Format Conversion:</strong> Provides an intuitive mechanism
            to transition fragments between the supported formats.
          </li>
          <li>
            <strong>Get Fragment by ID:</strong> Fetches a specific fragment via
            its unique identifier.
          </li>
          <li>
            <strong>Get All Fragments:</strong> Retrieves an extensive list of
            all contributed fragments.
          </li>
          <li>
            <strong>Update Fragment:</strong> Grants the authority to tweak the
            content of a fragment using its ID coupled with the HTTP PUT method.
          </li>
          <li>
            <strong>Delete Fragment:</strong> Extends the capability to
            obliterate a fragment through its ID in conjunction with the HTTP
            DELETE method.
          </li>
          <li>
            <strong>AWS Services Used:</strong> Elastic Container Service,
            Cognito, Amazon S3, DynamoDB, EC2, Elastic Container Registry,
            CloudFormation.
          </li>
          <li>
            <strong>Scalability:</strong> Designed with scalability as a
            cornerstone, rendering it an apt choice for expanding user bases.
          </li>
        </ul>
        <h2>Prerequisites</h2>
        <ul>
          <li>Amazon Web Services (AWS) account</li>
          <li>AWS CLI installed and configured</li>
          <li>Node.js and npm installed</li>
        </ul>
        <h2>Installation</h2>
        <ol>
          <li>
            Clone the repository:{" "}
            <code>
              git clone
              https://github.com/your-username/aws-fragment-converter.git
            </code>
          </li>
          <li>
            Navigate to the project directory:{" "}
            <code>cd aws-fragment-converter</code>
          </li>
          <li>
            Install project dependencies: <code>npm install</code>
          </li>
          <li>
            Set up AWS services:
            <ul>
              <li>Configure Amazon Cognito for user authentication.</li>
              <li>Set up Amazon S3 to store fragment data.</li>
              <li>Set up DynamoDB for fragment metadata.</li>
              <li>Employ EC2 instances for backend processing.</li>
              <li>
                Utilize Elastic Container Service for containerized
                applications.
              </li>
              <li>
                Utilize Elastic Container Registry to house container images.
              </li>
              <li>
                Deploy using CloudFormation for effective infrastructure
                management.
              </li>
            </ul>
          </li>
        </ol>
        <h2>Usage</h2>
        <ol>
          <li>
            Initiate the application:
            <ul>
              <li>
                Run the client application: <code>npm start</code>
              </li>
              <li>Deploy the server application on AWS services.</li>
            </ul>
          </li>
          <li>Access the application via your web browser.</li>
          <li>Register and log in using Amazon Cognito authentication.</li>
          <li>
            Utilize the user interface to:
            <ul>
              <li>Submit fragments in a plethora of supported formats.</li>
              <li>
                Transform fragments from one format to another using the
                provided tools.
              </li>
              <li>Retrieve a specific fragment using its ID.</li>
              <li>Obtain a comprehensive list of all contributed fragments.</li>
              <li>
                Adjust the content of a fragment using its ID and the user
                interface.
              </li>
              <li>Delete fragments through the user interface.</li>
            </ul>
          </li>
          <li>
            Experience an all-encompassing and versatile fragment conversion
            journey.
          </li>
        </ol>
        <p>
          <strong>Contributing</strong>
        </p>
        <p>
          Contributions are encouraged! If you wish to contribute to the
          project, follow these steps:
        </p>
        <ol>
          <li>Fork the repository.</li>
          <li>
            Create a new branch for your feature:{" "}
            <code>git checkout -b feature-name</code>.
          </li>
          <li>
            Commit your changes:{" "}
            <code>git commit -m &quot;Add feature&quot;</code>.
          </li>
          <li>
            Push to your branch: <code>git push origin feature-name</code>.
          </li>
          <li>Create a pull request detailing your changes.</li>
        </ol>
        <p>
          <strong>License</strong>
        </p>
        <p>
          This project is licensed under the <a href="LICENSE">MIT License</a>.
        </p>
        <p>
          <strong>Contact</strong>
        </p>
        <p>
          For inquiries or suggestions, feel free to contact the project owner
          at{" "}
          <a href="mailto:pateldeep0295@gmail.com">pateldeep0295@gmail.com</a>.
        </p>
      </div>
    ),
    githubLink: "https://github.com/PatelDeep484/fragments",
  },
  {
    id: 3,
    name: "Data-Driven Web Application for Student Management",
    description: (
      <div>
        <h1>Data-Driven Web Application for Student Management</h1>
        <p>
          A sophisticated web application meticulously designed and skillfully
          crafted for the efficient management of student and course data, with
          a primary emphasis on backend development.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Robust Backend:</strong> Engineered using Node.js and
            Express.js to adeptly manage server-side operations.
          </li>
          <li>
            <strong>Templating:</strong> Harnessed the capabilities of
            Handlebars.js to dynamically render HTML content.
          </li>
          <li>
            <strong>Database Integration:</strong> Incorporated PostgreSQL for
            organized and structured data storage.
          </li>
          <li>
            <strong>Data Management:</strong> Seamlessly handled data
            transactions through HTML forms.
          </li>
          <li>
            <strong>Styling:</strong> Crafted an appealing visual experience
            using HTML5, CSS3, and Bootstrap5, ensuring a contemporary and
            responsive design.
          </li>
        </ul>
        <h2>Installation</h2>
        <ol>
          <li>
            Clone the repository:{" "}
            <code>
              git clone
              https://github.com/your-username/student-management-app.git
            </code>
          </li>
          <li>
            Navigate to the project directory:{" "}
            <code>cd student-management-app</code>
          </li>
          <li>
            Install project dependencies: <code>npm install</code>
          </li>
          <li>
            Set up PostgreSQL and create necessary tables using provided SQL
            scripts.
          </li>
          <li>
            Run the application: <code>npm start</code>
          </li>
        </ol>
        <h2>Usage</h2>
        <ol>
          <li>Access the application via your web browser.</li>
          <li>
            Effortlessly manage student and course data using the user-friendly
            and intuitive interface.
          </li>
          <li>
            Execute a range of actions such as student addition, enrollment in
            courses, and record updates.
          </li>
        </ol>
      </div>
    ),
    githubLink:
      "https://github.com/PatelDeep484/Student-and-Course-Management-App-",
  },
  {
    id: 4,
    name: "Library Management System",
    description: (
      <div>
        <h1>Library Management System</h1>
        <p>
          An advanced application engineered in C++ specifically designed to
          streamline the management of a library&apos;s diverse array of
          publications.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Publication Management:</strong> Seamlessly add, remove,
            check out, and return publications.
          </li>
          <li>
            <strong>Database Update:</strong> Effortlessly maintain the
            database&apos;s accuracy by automatically updating it with each
            transaction.
          </li>
        </ul>
        <h2>Compilation</h2>
        <ol>
          <li>
            Compile the program: <code>g++ library.cpp -o library</code>
          </li>
          <li>
            Run the compiled executable: <code>./library</code>
          </li>
        </ol>
        <h2>Usage</h2>
        <ol>
          <li>Launch the application in the terminal.</li>
          <li>
            Follow the prompts to execute actions such as adding, removing,
            checking out, and returning publications.
          </li>
          <li>
            Directly interact with the library&apos;s database via the terminal
            interface.
          </li>
        </ol>
      </div>
    ),
    githubLink: "https://github.com/PatelDeep484/Library-Management-System",
  },
  // Add more project entries as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleCloseButtonClick = () => {
    setSelectedProject(null);
  };

  return (
    <section>
      <Background />
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          <h2 className={styles.projectsTitle}>Projects</h2>
          {selectedProject !== null && (
            <div className={styles.projectDetails}>
              <button
                className={styles.closeButton}
                onClick={handleCloseButtonClick}
              >
                X
              </button>
              <h3 className={styles.projectName}>
                {projectsData[selectedProject - 1].name}
              </h3>
              <div className={styles.githubButtonContainer}>
                <a
                  href={projectsData[selectedProject - 1].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  View on GitHub
                </a>
              </div>
              <p className={styles.projectDescription}>
                {projectsData[selectedProject - 1].description}
              </p>
            </div>
          )}
          <div className={styles.projectsList}>
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={styles.projectItem}
                onClick={() => handleProjectClick(project.id)}
              >
                {project.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
