// pages/index.js
import React from 'react';


const Home = () => {
  // Define your skills here
  const skills = [
    'Machine Learning',
    'Neural Networks',
    'Computer Vision',
    'Natural Language Processing',
    'Deep Learning Frameworks (TensorFlow, PyTorch)',
    'Data Preprocessing',
    'Model Training and Optimization',
    'Data Visualization',
    'Python Programming',
    'Data Analysis',
  ];

  // Define your projects here
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://dummyimage.com/400x300',
      link: '#', // Replace with the project's URL
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://dummyimage.com/400x300',
      link: '#', // Replace with the project's URL
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://dummyimage.com/400x300',
      link: '#', // Replace with the project's URL
    },
    // Add more projects as needed
  ];

  // Define your blog posts here
  // const blogPosts = [
  //   {
  //     title: 'Blog Post 1',
  //     description: 'Description of Blog Post 1 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     link: '#', // Replace with the blog post's URL
  //   },
  //   {
  //     title: 'Blog Post 2',
  //     description: 'Description of Blog Post 2 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     link: '#', // Replace with the blog post's URL
  //   },
  //   {
  //     title: 'Blog Post 3',
  //     description: 'Description of Blog Post 3 goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     link: '#', // Replace with the blog post's URL
  //   },
  //   // Add more blog posts as needed
  // ];

  return (
    <section>
      {/* Hero Section */}
      <section id='intro' class="text-gray-600 body-font">
        <div class="container mx-auto max-w-5xl flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
            <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
            
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className="py-12 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl text-center font-medium text-gray-900 mb-8">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <p className="text-lg font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className="py-12 bg-gray-100  ">

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl text-center font-medium text-gray-900 mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <img className="object-cover object-center h-48 w-full rounded-t-lg" src={project.imageUrl} alt={project.title} />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-4 text-gray-700">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-indigo-500 hover:underline focus:outline-none focus:text-indigo-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Blog Posts Section */}
      {/* <section id='blog' className="py-12 bg-gray-200 ">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl text-center font-medium text-gray-900 mb-8">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">{post.title}</h3>
                  <p className="mt-4 text-gray-700">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-indigo-500 hover:underline focus:outline-none focus:text-indigo-600"
                  >
                    Read Post
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Section  */}
      <section id="#newsletter" class="text-gray-600 body-font ">
        <div class="container mx-auto max-w-5xl flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Knausgaard typewriter readymade marfa</h1>
            <p class="mb-8 leading-relaxed">Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.</p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      



      {/* Vertical Nav Bar */}
      <section class="text-gray-600 body-font fixed top-0 left-0 w-1/4 z-5">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <a href="#intro">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Intro</h2>
                </a>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <a href="#skills">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Skills</h2>
                </a>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <a href="#portfolio">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Portfolio</h2>
                </a>
              </div>
            </div>
          </div>
          <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <a href="#newsletter">
                  <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Newsletter</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Home;
