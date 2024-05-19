/** @format */

import React from "react";
import { useDataContext } from "../Provider/ContextAPI";

const AboutUs = () => {
  const { data } = useDataContext();

  return (
    <div className="container mt-5 vh-82">
      <h1 className="mb-4">About Us</h1>
      <p>
        {data.name} is dedicated to providing innovative solutions for CV
        building and career development. Our mission is to empower individuals
        in their career journey by offering user-friendly tools and expert
        guidance. Whether you're a recent graduate or an experienced
        professional, we're here to help you create compelling CVs and navigate
        the job market effectively.
      </p>
    </div>
  );
};

export default AboutUs;
