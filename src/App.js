import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interests: {
      tech: false,
      design: false,
      marketing: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        interests: {
          ...prevState.interests,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(formData.interests)
    .filter((key) => formData.interests[key])
    .join(", ");

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Newsletter Signup</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>Interests:</legend>
          <div>
            <label htmlFor="tech">Tech</label>
            <input
              id="tech"
              type="checkbox"
              name="tech"
              checked={formData.interests.tech}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="design">Design</label>
            <input
              id="design"
              type="checkbox"
              name="design"
              checked={formData.interests.design}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="marketing">Marketing</label>
            <input
              id="marketing"
              type="checkbox"
              name="marketing"
              checked={formData.interests.marketing}
              onChange={handleChange}
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>
          Thank you for signing up, {formData.name}! {formData.email} has been
          added to our newsletter. You are interested in: {selectedInterests}.
        </p>
      )}
    </main>
  );
}

export default App;
