function ImageUpload({ fileName, onFileChange }) {
  return (
    <div className="form-group">
      <label className="form-label">Profile Photo</label>
      <div className="file-upload-wrapper">
        <label className="file-upload-btn" htmlFor="profileImage">
          🖼️ upload here 
        </label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={onFileChange}
        />
        <span className="file-name">
          {fileName || "No image selected"}
        </span>
      </div>
    </div>
  );
}

export default ImageUpload;
