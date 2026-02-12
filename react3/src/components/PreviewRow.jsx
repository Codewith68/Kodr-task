function PreviewRow({ label, value }) {
  return (
    <div className="preview-row">
      <span className="preview-key">{label}</span>
      <span className={`preview-value${value ? "" : " empty"}`}>
        {value || "—"}
      </span>
    </div>
  );
}

export default PreviewRow;
