export default function Footer() {
  return (
    <>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-12 justify-center">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-8">
              {/* Getting Started Section */}
              <div className="sm:col-span-1 mx-15">
                <p className="font-medium text-white dark:text-white">Getting Started</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Accounts Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      HR Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Section */}
              <div className="sm:col-span-1 mx-40">
                <p className="font-medium text-white dark:text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Helpful Links Section */}
              <div className="sm:col-span-1 mx-30">
                <p className="font-medium text-white dark:text-white">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-white transition hover:opacity-75 dark:text-gray-200"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          
          {/* Footer Bottom Section */}
          <div className="mt-12">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
