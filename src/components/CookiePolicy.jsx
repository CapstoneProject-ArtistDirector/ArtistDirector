import React from "react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              What Are Cookies
            </h2>

            <p className="text-gray-300">
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Types of Cookies We Use
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Essential Cookies
                </h3>

                <p className="text-gray-300">
                  Required for basic website functionality and security. These
                  cannot be disabled.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Performance Cookies
                </h3>

                <p className="text-gray-300">
                  Help us understand how visitors interact with our website by
                  collecting anonymous information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Functionality Cookies
                </h3>

                <p className="text-gray-300">
                  Remember your preferences and personalize your experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Managing Cookies
            </h2>

            <p className="text-gray-300 mb-4">
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed.
            </p>

            <p className="text-gray-300">
              Please note that disabling cookies may affect the functionality of
              our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
