/** @format */

export const fields = [
  "email",
  "phone",
  "address",
  "website",
  "linkedin",
  "portfolio",
];

export const getLabel = (fields) => {
  if (fields === "onames") {
    return <>Other Given Names</>;
  } else if (fields === "email") {
    return "Email";
  } else if (fields === "phone") {
    return "Phone Number";
  } else if (fields === "address") {
    return "Address";
  } else if (fields === "website") {
    return "Website";
  } else if (fields === "linkedin") {
    return "Linkedin";
  } else if (fields === "portfolio") {
    return "Portfolio";
  }
  return;
};

export const academicFields = [
  "iAttended",
  "degree",
  "course",
  "dClass",
  "dAStarted",
  "dAEnded",
  "qualCode",
];

export const academicLabels = (academicFields) => {
  if (academicFields === "iAttended") {
    return "Institution Attended";
  } else if (academicFields === "dAStarted") {
    return "Date Started";
  } else if (academicFields === "dAEnded") {
    return "Date Graduated";
  } else if (academicFields === "degree") {
    return "Degree Obtained";
  } else if (academicFields === "course") {
    return "Course";
  } else if (academicFields === "dClass") {
    return "Class of Degree";
  } else if (academicFields === "qualCode") {
    return "Qualification Code";
  }
  return;
};

export const expFields = [
  "org",
  "add",
  "position",
  "isChecked",
  "started",
  "dWStarted",
  "dWEnded",
  "duty",
];

export const getExpLabel = (expFields) => {
  if (expFields === "org") {
    return <>Organization's Name</>;
  } else if (expFields === "add") {
    return <>Address</>;
  } else if (expFields === "position") {
    return <>Current position</>;
  } else if (expFields === "dWStarted") {
    return <>Date resumed</>;
  } else if (expFields === "dWEnded") {
    return <>Date left</>;
  } else if (expFields === "started") {
    return <>Date resumed</>;
  } else if (expFields === "isChecked") {
    return <>I currently work here</>;
  } else if (expFields === "duty") {
    return <>Responsibilities</>;
  }
};
