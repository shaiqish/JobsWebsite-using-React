import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          At DevPath, accessible from devpath.com, one of our main priorities is
          the privacy of our visitors. This Privacy Policy document outlines the
          types of information that is collected and recorded by DevPath and how
          we use it.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us through
          <Link to="/contact" className="text-blue-500 ml-1 hover:underline">
            here
          </Link>
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          What Information Do We Collect?
        </h2>

        <h3 className="text-xl font-bold text-gray-700 mb-2">Log Files</h3>
        <p className="text-lg text-gray-700 mb-6">
          DevPath follows a standard procedure of using log files. These files
          log visitors when they visit websites. The information collected by
          log files includes Internet Protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. This information is used to
          analyze trends, administer the site, track users' movement around the
          site, and gather demographic information. It's used for statistical
          purposes only and doesn't identify individual users.
        </p>

        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Cookies and Web Beacons
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Like any other website, DevPath uses 'cookies'. These cookies are
          small data files that are stored on your device when you visit a
          website. The information they store may include your preferences,
          login information, and the pages you accessed or visited on the
          website. We use this information to improve your user experience by
          customizing the content based on your browser type and other
          information.
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We use the information we collect in various ways, including:
        </p>
        <ul className="list-disc pl-4 mb-6">
          <li>To provide and maintain our website</li>
          <li>To improve, personalize, and expand our website</li>
          <li>To understand and analyze how you use our website</li>
          <li>
            To develop new products, services, features, and functionalities
          </li>
          <li>
            To communicate with you, directly or through partners, for marketing
            or promotional purposes
          </li>
          <li>
            To send you emails about your account or to inform you about new
            products, services, or opportunities
          </li>
          <li>
            To protect, investigate, and deter unauthorized activities such as
            fraud
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Third-Party Privacy Policies
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          DevPath does not employ third-party tracking tools or services.
          However, it's important to note that third-party sites linked on our
          website may have their own privacy policies. We are not responsible
          for the practices of any third-party site. Thus, we advise you to
          consult the privacy policies of these third-party sites for more
          detailed information. It's recommended to check their privacy policies
          regularly and be aware of any changes.
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Children's Privacy
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          DevPath is particularly concerned about the protection of children's
          privacy. We do not knowingly collect any Personally Identifiable
          Information (PII) from children under the age of 13. If you are a
          parent or guardian and you are aware that your child has provided us
          with PII, please contact us immediately. We will take all necessary
          steps to remove their information from our records.
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">Your Rights</h2>
        <p className="text-lg text-gray-700 mb-6">
          Depending on your location, you may have certain rights regarding your
          personal information. These rights may include:
        </p>
        <ul className="list-disc pl-4 mb-6">
          <li>The right to access your personal information</li>
          <li>The right to rectify inaccurate personal information</li>
          <li>The right to request the erasure of your personal information</li>
          <li>
            The right to restrict the processing of your personal information
          </li>
          <li>
            The right to object to the processing of your personal information
          </li>
          <li>The right to data portability</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6">
          To exercise any of these rights, please contact us using the contact
          information provided below.
        </p>

        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg text-gray-700">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          This Privacy Policy is effective as of 2022.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
