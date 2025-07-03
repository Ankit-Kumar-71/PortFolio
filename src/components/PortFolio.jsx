import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import mysql from "../../public/mysql.png";
import springBoot from "../../public/springBoot.jpg";
import PostgreSQL from "../../public/postgreSQL.png";

const PortFolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: reactjs,
      name: "ReactJS",
      text:"ReactJS is a JavaScript library, not a programming language, used for building user interfaces, especially for single-page applications."
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      text:"Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
    },
    {
      id: 3,
      logo: springBoot,
      name: "SpringBoot",
      text:"Spring Boot is an module built on top of the Spring Framework, designed to simplify and accelerate the development of stand-alone, production-grade Spring applications."
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
      text:"MongoDB is a popular, open-source NoSQL database that utilizes a document-oriented data model, offering a flexible alternative to traditional relational databases."
    },
    {
      id: 5,
      logo: mysql,
      name: "MySQL",
      text:"MySQL is a popular, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to manage and manipulate data."
    },
    {
      id: 6,
      logo: PostgreSQL,
      name: "PostgreSQL",
      text:"PostgreSQL is a powerful, free, and open-source relational database management system (RDBMS) known for its robustness, reliability, and advanced features. "
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold my-5">PortFolio</h1>
        <h1 className="font-bold text-center">Currently working on</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-5">
          {cardItem.map(({ id, logo, name, text }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] p-1 rounded-full border-[2px] "
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {text}
                </p>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
