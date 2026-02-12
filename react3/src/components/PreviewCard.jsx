import PreviewRow from "./PreviewRow";

function PreviewCard({ form }) {
  return (
    <div className="neon-card preview-card">
      {/* ── Profile Image at the Top ── */}
      <div className="profile-image-wrapper">
        {form.profileImageURL ? (
          <img
            src={form.profileImageURL}
            alt="Profile"
            className="profile-image"
          />
        ) : (
          <div className="profile-image-placeholder">
            <span>👤</span>
          </div>
        )}
      </div>

      {/* ── Name under avatar ── */}
      <h3 className="profile-name">
        {form.name || "Your Name"}
      </h3>
      <p className="profile-email">
        {form.email || "your@email.com"}
      </p>

      <div className="neon-divider" />

      <h2 className="card-heading">Details</h2>

      <PreviewRow label="Age" value={form.age} />
      <PreviewRow label="Gender" value={form.gender} />

      <div className="preview-row">
        <span className="preview-key">Skills</span>
        <div className="preview-skills">
          {form.skills.length > 0 ? (
            form.skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))
          ) : (
            <span className="preview-value empty">—</span>
          )}
        </div>
      </div>

      <PreviewRow label="Exp" value={form.experience ? `${form.experience} yr(s)` : ""} />
      <PreviewRow label="Bio" value={form.bio} />
    </div>
  );
}

export default PreviewCard;
