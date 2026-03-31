
function Modal({ isOpen, onClose, children, className = '' }) {
    if (!isOpen) return null;

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000 // Ensure it's on top
            }}
        >
        {/* Modal content */}
            <div
                onClick={handleContentClick}
                style={{
                  padding: '20px',
                  borderRadius: '8px',
                  position: 'relative'
                }}
                className={className}
            >
            {children} {/* Renders content passed from the parent component */}
                
            </div>
    </div>
  );
}

export default Modal;