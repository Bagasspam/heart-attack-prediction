// app/about.tsx
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col justify center items-center items-center h-screen bg-gray-800 text-white p-10">
      <div className="w-1/2 my-auto">
        <h1 className="text-6xl font-bold mb-12 text-center text-orange-500">
          About Heart Attack Prediction App
        </h1>
        <div className="max-w-4xl mx-auto text-justify">
          <p className="text-xl mx-6 mb-6">
            The goal of this application is to make heart health monitoring
            easier and more accessible for everyone. By leveraging the power of
            data and machine learning, we aim to empower individuals to make
            informed decisions about their health.
          </p>
          <p className="text-xl mx-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            libero dolore? Dolores saepe deleniti ea neque nam maxime ipsum,
            numquam molestiae excepturi similique, exercitationem nemo assumenda
            laudantium est minima doloribus. Tempore saepe deleniti, animi modi
            numquam natus amet ut, ea eveniet, provident iure libero ipsam
            molestiae quibusdam eligendi sunt quam quae reiciendis veniam quasi
            nam quas? Voluptas esse ratione doloribus aperiam illo beatae itaque
            sequi cumque commodi, eius nulla doloremque nam ab in natus veniam
            nobis officia, error explicabo? Laborum, eveniet vero dolor quas in
            illum veniam! Blanditiis, quae earum quasi unde fugiat porro dolor,
            consectetur exercitationem, sunt laudantium esse!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
