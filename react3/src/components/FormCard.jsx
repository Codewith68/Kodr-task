import { SKILLS_LIST } from "../utils/validate";
import ImageUpload from "./ImageUpload";

function FormCard({ form, errors, onChange, onSkillToggle, onFileChange, onSubmit }) {
  const bioLen = form.bio.length;
  const bioClass = bioLen > 150 ? "danger" : bioLen > 120 ? "warning" : "";

  return (
    <form className="neon-card" onSubmit={onSubmit} noValidate>
      <h2 className="card-heading">Register</h2>

      {/* Name */}
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="neon-input"
          placeholder="Enter your name"
          value={form.name}
          onChange={onChange}
        />
        {errors.name && <p className="error-msg">▸ {errors.name}</p>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="neon-input"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
        />
        {errors.email && <p className="error-msg">▸ {errors.email}</p>}
      </div>

      {/* Age */}
      <div className="form-group">
        <label className="form-label" htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          className="neon-input"
          placeholder="e.g. 22"
          value={form.age}
          onChange={onChange}
          min="1"
          max="120"
        />
        {errors.age && <p className="error-msg">▸ {errors.age}</p>}
      </div>

      {/* Gender */}
      <div className="form-group">
        <label className="form-label" htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          className="neon-select"
          value={form.gender}
          onChange={onChange}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
          <option value="Prefer not to say">Prefer not to say Here😂😂</option>
        </select>
        {errors.gender && <p className="error-msg">▸ {errors.gender}</p>}
      </div>

      <div className="neon-divider" />

      {/* Skills */}
      <div className="form-group">
        <label className="form-label">Skills</label>
        <div className="checkbox-group">
          {SKILLS_LIST.map((skill) => {
            const isChecked = form.skills.includes(skill);
            return (
              <label
                key={skill}
                className={`checkbox-item${isChecked ? " checked" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onSkillToggle(skill)}
                />
                <span className="checkbox-label">{skill}</span>
              </label>
            );
          })}
        </div>
        {errors.skills && <p className="error-msg">▸ {errors.skills}</p>}
      </div>

      {/* Experience */}
      <div className="form-group">
        <label className="form-label" htmlFor="experience">Experience (years)</label>
        <input
          id="experience"
          name="experience"
          type="number"
          className="neon-input"
          placeholder="e.g. 2"
          value={form.experience}
          onChange={onChange}
          min="0"
        />
        {errors.experience && <p className="error-msg">▸ {errors.experience}</p>}
      </div>

      {/* Profile Image Upload */}
      <ImageUpload
        fileName={form.profileImage ? form.profileImage.name : ""}
        onFileChange={onFileChange}
      />

      <div className="neon-divider" />

      {/* Bio */}
      <div className="form-group">
        <label className="form-label" htmlFor="bio">Apne bare main kuch likho 😂</label>
        <textarea
          id="bio"
          name="bio"
          className="neon-textarea"
          placeholder="Tell us about yourself…"
          value={form.bio}
          onChange={onChange}
          maxLength={160}
        />
        <p className={`char-count ${bioClass}`}>{bioLen}/150</p>
        {errors.bio && <p className="error-msg">▸ {errors.bio}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Submit 
      </button>
    </form>
  );
}

export default FormCard;
