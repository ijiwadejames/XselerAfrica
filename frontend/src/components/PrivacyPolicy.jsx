/** @format */

import React from "react";
import { useDataContext } from "../Provider/ContextAPI";

const PrivacyPolicy = () => {
  const { data } = useDataContext();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Privacy Policy</h1>

      <p>
        Welcome to {data.name}! This Privacy Policy explains how we collect,
        use, share, and protect your personal information when you use our React
        app designed for CV building and career development.
      </p>

      <h2 className="mt-4">1. Information We Collect</h2>
      <p>
        We collect various types of personal information from users to provide
        our services effectively. This may include:
      </p>
      <div className="col-12">
        <div className="policy-list">
          <strong>Contact Information:</strong> Such as your name and email
          address, which are used for account creation and communication
          purposes.
        </div>
        <div className="policy-list">
          <strong>Educational Background and Employment History:</strong>{" "}
          Details about your schools attended, degrees obtained, work
          experience, and job titles, which are essential for creating
          comprehensive CVs.
        </div>
        <div className="policy-list">
          <strong>Skills and Qualifications:</strong> Information about your
          professional skills, certifications, and qualifications to tailor our
          services to your career goals.
        </div>
        <div className="policy-list">
          <strong>Other Information:</strong> Any additional details voluntarily
          provided by you, such as career objectives or interests, to
          personalize your experience within our app.
        </div>
      </div>

      <h2 className="mt-4">2. Use of Information</h2>
      <p>We use the collected information to:</p>
      <div className="col-12">
        <div className="policy-list">
          <strong>Create and Manage User Accounts:</strong> To establish and
          maintain user profiles and facilitate access to our services.
        </div>
        <div className="policy-list">
          <strong> Generate CVs and Career Documents: </strong>Utilize your
          educational background, employment history, skills, and qualifications
          to create professional CVs and related career documents.
        </div>
        <div className="policy-list">
          <strong> Provide Personalized Career Advice: </strong>Deliver tailored
          recommendations and advice based on your career objectives and profile
          information.
        </div>
        <div className="policy-list">
          <strong> Enhance App Features and User Experience:</strong>{" "}
          Continuously improve our app's functionality and user interface based
          on usage patterns and feedback.
        </div>
      </div>

      {/* Include other sections (Data Sharing, Data Security, User Rights, Cookies and Tracking, Legal Basis, Updates to the Privacy Policy, Contact Us) similarly */}

      <h2 className="mt-4">9. Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or data
        practices, please contact us at{" "}
        <a href="mailto:support@xseler.com">support@xseler.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
