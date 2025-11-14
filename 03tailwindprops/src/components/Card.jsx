import React from "react";

function Card(props) {
  console.log(props);
  
  return (
    <div className="w-full"> 
      {/* anchor is the card container */}
      <a
        href="#"
        className="group relative block bg-black rounded-2xl overflow-hidden shadow-lg h-64 sm:h-72"
      >
        {/* background image fills the card */}
        <img
          alt="background"
          src="/image.png"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        {/* content sits above the image */}
        <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">{props.username}</p>
          </div>

          <div className="mt-4">
            <div className="translate-y-4 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates doloremque
                reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
