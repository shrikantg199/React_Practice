import React, { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    age: "",
    gender: "",
    dateOfBirth: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      age,
      gender,
      dateOfBirth,
    } = formData;

    // First Name
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    // Last Name
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    // Email validation
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // Password validation
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Phone Number validation
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits";
    }

    // Age validation
    if (!age.trim()) {
      errors.age = "Age is required";
    } else if (isNaN(age) || age < 1 || age > 120) {
      errors.age = "Age must be a valid number between 1 and 120";
    }

    // Gender validation
    if (!gender.trim()) {
      errors.gender = "Gender is required";
    }

    // Date of Birth validation
    if (!dateOfBirth.trim()) {
      errors.dateOfBirth = "Date of Birth is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit data
      console.log("Form submitted:", formData);
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <h1 className="flex justify-center m-4 text-4xl font-normal">
        Form Validation
      </h1>
      <div className="flex justify-center items-center h-[60%]">
        <form className=" " onSubmit={handleSubmit}>
          <div className=""></div>
          <div className="m-4">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-10  p-1 ring-black"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div className="m-4">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-10  p-1 ring-black"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div className="m-4">
            <label htmlFor="email">Email:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-20  p-1 ring-black"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="m-4">
            <label htmlFor="password">Password:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-12 ring-black  p-1"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="m-4">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-3  p-1 ring-black"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="m-4">
            <label htmlFor="age">Age:</label>
            <input
              className="border-3 border-black ring-1 rounded-lg ml-[90px] p-1 ring-black"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="text-red-500">{errors.age}</p>}
          </div>

          <div className="m-4">
            <label htmlFor="gender">Gender:</label>
            <select
              className="ml-20"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          <div className="m-4">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              className="ml-8"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth}</p>
            )}
          </div>
          <div className="flex justify-center">
            {" "}
            <button
              className="m-4  text-center bg-blue-600 px-3 py-1 text-white rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
