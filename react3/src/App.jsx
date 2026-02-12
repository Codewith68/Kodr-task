import { useState } from "react";
import { INITIAL_FORM, INITIAL_ERRORS, validate } from "./utils/validate";
import FormCard from "./components/FormCard";
import PreviewCard from "./components/PreviewCard";
import SuccessToast from "./components/SuccessToast";

/* ── Import split styles ── */
import "./styles/App.css";
import "./styles/Form.css";
import "./styles/Preview.css";
import "./styles/Toast.css";

function App() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  /* ── handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  };

  const handleSkillToggle = (skill) => {
    setForm((prev) => {
      const has = prev.skills.includes(skill);
      return {
        ...prev,
        skills: has
          ? prev.skills.filter((s) => s !== skill)
          : [...prev.skills, skill],
      };
    });
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.skills;
      return copy;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    // Create a preview URL from the file (no useEffect needed!)
    const url = file ? URL.createObjectURL(file) : "";
    setForm((prev) => {
      // Revoke old URL to free memory
      if (prev.profileImageURL) URL.revokeObjectURL(prev.profileImageURL);
      return { ...prev, profileImage: file, profileImageURL: url };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    if (form.profileImageURL) URL.revokeObjectURL(form.profileImageURL);
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <h1 className="app-title" style={{ paddingTop: "2.5rem" }}>
        KODR TASK FORM
      </h1>
      <p className="app-subtitle">Register your details here</p>

      <div className="form-wrapper">
        <FormCard
          form={form}
          errors={errors}
          onChange={handleChange}
          onSkillToggle={handleSkillToggle}
          onFileChange={handleFileChange}
          onSubmit={handleSubmit}
        />
        <PreviewCard form={form} />
      </div>

      {submitted && <SuccessToast onReset={handleReset} />}
    </>
  );
}

export default App;
