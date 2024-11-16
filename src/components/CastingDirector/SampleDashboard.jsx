import React, { useState } from 'react';

const SampleDashboard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-9"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded ? 'true' : 'false'}
              >
                <span className={expanded ? 'hidden' : ''} aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span className={expanded ? '' : 'hidden'} aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Products
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Features
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Support
              </a>
            </nav>

            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Start free trial
              </a>
            </div>
          </div>

          <nav className={expanded ? 'block' : 'hidden'}>
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Products
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Features
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                title=""
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Support
              </a>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Connecting Devs with Employers
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
              </p>
              <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Try Java Developer, React Dev etc."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Find A Developer
                  </button>
                </div>
              </form>
              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>
                <div className="flex items-center mt-3">
                  <div className="flex">
                    {/* Repeated svg icons can be extracted to a component */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8814 9.49182 21.3748 10.5821 20.5119 11.0217L16.7773 13.3288C16.2574 13.6232 16.0266 14.2121 16.1875 14.7437L17.3305 18.3547C17.4912 18.8491 16.9798 19.183 16.4591 18.9649L12.7267 17.6585C12.207 17.4402 11.6265 17.5096 11.197 17.8507L8.53553 19.9827C7.77053 20.7927 6.38054 20.6577 5.75628 19.8702L3.09133 15.6366C2.71052 14.9221 3.00935 14.0166 3.59479 13.6949L8.69663 11.4319C9.21659 11.137 9.22934 10.4883 8.76183 10.1885L7.49291 9.41794C7.13268 9.16398 6.69559 9.29758 6.48103 9.68269L4.69791 13.1255C4.46362 13.5485 3.93735 13.7474 3.46617 13.6497L1.34435 13.1794C0.704211 13.038 0.365 12.4197 0.585399 11.8469L1.01652 9.45594C1.17482 8.95763 1.7528 8.6742 2.27878 8.74713L5.65433 9.22193C5.98976 9.26177 6.1199 9.63195 5.89056 9.95454L5.57672 10.3744L7.01347 10.4626L7.49291 10.8292L10.8586 4.71248Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  {/* More logo icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleDashboard;
