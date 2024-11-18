import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Information We Collect
            </h2>

            <p className="text-gray-300 mb-4">
              We collect information that you provide directly to us, including:
            </p>

            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Name and contact information</li>

              <li>Professional experience and portfolio materials</li>

              <li>Account credentials</li>

              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              How We Use Your Information
            </h2>

            <p className="text-gray-300 mb-4">
              We use the information we collect to:
            </p>

            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide and maintain our services</li>

              <li>Connect artists with casting opportunities</li>

              <li>Improve and personalize user experience</li>

              <li>Send relevant notifications and updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Data Security
            </h2>

            <p className="text-gray-300">
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              Internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Contact Us
            </h2>

            <p className="text-gray-300">
              If you have any questions about our Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:privacy@talenthunt.com"
                className="text-purple-400 hover:text-purple-300"
              >
                privacy@talenthunt.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
