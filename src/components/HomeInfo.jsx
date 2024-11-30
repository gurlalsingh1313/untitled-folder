import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function Component() {
  const [isMounted, setIsMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const infoBlocks = [
    {
      title: (
        <>
          Hi, I'm
          <span className="font-semibold mx-2 text-white">Yana Gaur</span>
          👋
          <br />
          An AI Engineer from India 🇮🇳
        </>
      ),
      content: null,
      link: null,
    },
    {
      title: 'Work Experience',
      content: 'Worked with many companies and picked up many skills along the way',
      link: { to: '/about', text: 'Learn more' },
    },
    {
      title: 'Projects',
      content: 'Led multiple projects to success over the years. Curious about the impact?',
      link: { to: '/projects', text: 'Visit my portfolio' },
    },
    {
      title: 'Contact',
      content: "Need a project done or looking for a dev? I'm just a few keystrokes away",
      link: { to: '/contact', text: "Let's talk" },
    },
  ];

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div>
      {/* Hamburger Menu */}
      <div className="relative justify-center mx-auto my-auto items-center flex text-center z-50 lg:hidden md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Menu"
          className="relative text-white rounded-md flex flex-col items-center "
        >
          <span className="text-2xl bg-blue-700 p-6 rounded-lg font-extrabold">Yana <span className='text-yellow-400'> Gaur</span></span> {/* Text Box */}

        </button>
      </div>


      {/* Dropdown Menu for Mobile */}
      {showMenu && (
        <div className="relative ml-4 mr-4 mt-4 justify-center grid-cols-1 items-center bg-blue-700 text-white shadow-lg rounded-md p-4 z-50">
          {infoBlocks.map((block, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-bold mb-2">{block.title}</h2>
              {block.content && <p className="mb-2">{block.content}</p>}
              {block.link && (
                <Link
                  to={block.link.to}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {block.link.text}
                  <span className="ml-2 text-lg">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Sky background */}
      <div className="relative z-30 w-full h-full items-center justify-center">
        {/* Spline 3D Model */}
        <div className="w-full lg:block hidden md:block justify-center text-center items-center md:absolute  md:bottom-[140px]">
          <div
            style={{
              transform: 'scale(1)', // Default scale for larger screens
              maxWidth: '100%', // Default max width
            }}
            className="sm:scale-[0.7] sm:max-w-[90%] md:scale-[0.9] md:max-w-[100%] flex items-center justify-center"
          >
            <Spline scene="https://prod.spline.design/VUkhBiOv11gEEuhB/scene.splinecode" />
          </div>
        </div>

        {/* Info Blocks */}
        <div className="md:grid mt-[-80px] md:grid-cols-2 md:grid-rows-2 gap-6 px-4 gap-y-[100px] md:gap-y-[250px] md:gap-40 md:gap-x-80 hidden">
          {infoBlocks.map((block, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center p-6 ${index === 0 ? 'bg-blue-600 text-white' : 'bg-white'
                } rounded-lg shadow-lg transform md:${getTransformClass(index)} max-w-xs mx-auto`}
            >
              <h2 className="text-3xl font-bold mb-4 text-center">{block.title}</h2>
              {block.content && <p className="text-center mb-4">{block.content}</p>}
              {block.link && (
                <Link
                  to={block.link.to}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  {block.link.text}
                  <span className="ml-2 text-lg">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getTransformClass(index) {
  switch (index) {
    case 0:
      return 'translate-x-1/4 translate-y-1/4';
    case 1:
      return '-translate-x-1/4 translate-y-1/4';
    case 2:
      return 'translate-x-1/4 -translate-y-1/4';
    case 3:
      return '-translate-x-1/4 -translate-y-1/4';
    default:
      return '';
  }
}
