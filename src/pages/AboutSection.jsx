import React from 'react';

function AboutSection() {
  return (
    <div className="text-center px-4 py-10 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
        About Me
      </h2>
      <p className="text-lg text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto">
        I am a backend and game developer with experience in technologies like 
        <span className="font-semibold text-blue-600"> PHP, Django, MySQL, PostgreSQL</span>, 
        Unity, and Unreal Engine. My passion lies in creating engaging experiences 
        and efficient backend systems that power immersive games.
      </p>
      <img 
        src="./icons/logo_negro.webp" // Replace with your image path
        alt="A brief description of the image" 
        className="mx-auto rounded-full w-32 h-32 object-cover mb-4 border-4 border-blue-500 shadow-lg"
      />
      <h3 className="text-3xl font-semibold text-gray-700 mt-6">
        Technologies & languages:
      </h3>
      <div className="flex flex-wrap justify-center mt-4">
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          PHP
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          Javascript
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          C#
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          Python
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          MySQL
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          Unity
        </span>
        <span className="m-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
          Unreal Engine
        </span>
      </div>
      <p className="text-lg text-gray-600 mt-6 leading-relaxed max-w-2xl mx-auto">
        Always looking for a challenge and new opportunities to grow and learn!
      </p>
    </div>
  );
}

export default AboutSection;
