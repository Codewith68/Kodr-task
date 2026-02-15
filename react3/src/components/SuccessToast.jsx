function SuccessToast({ onReset }) {
  return (
    <div className="toast-overlay" onClick={onReset}>
      <div className="toast-box" onClick={(e) => e.stopPropagation()}>
        <div className="toast-icon">✅</div>
        <h3 className="toast-title">Submitted!</h3>
        <p className="toast-msg">Your data has been registered successfully.</p>
        <button className="toast-close-btn" onClick={onReset}>
          Reset Form
        </button>
      </div>
    </div>
  );
}

export default SuccessToast;
