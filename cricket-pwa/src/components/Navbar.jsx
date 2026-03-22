function Navbar({ onInstall, showInstall }) {
    return (
        <nav style={{ 
            padding: "1rem 1.5rem", 
            background: "var(--bg-glass)", 
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "var(--text-primary)", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            borderBottom: "1px solid var(--border-glass)",
            position: "sticky",
            top: 0,
            zIndex: 100,
            boxShadow: "var(--shadow-lg)"
        }}>
            <h1 style={{ 
                margin: 0, 
                fontSize: "1.25rem", 
                fontWeight: "700",
                letterSpacing: "-0.025em",
                background: "linear-gradient(to right, #60a5fa, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>
                🏏 CricketDash
            </h1>
            {showInstall && (
                <button 
                    onClick={onInstall}
                    style={{
                        padding: "0.5rem 1rem",
                        background: "var(--accent-primary)",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                    fontSize: "0.875rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)"
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = "translateY(-1px)";
                        e.target.style.boxShadow = "0 10px 15px -3px rgba(59, 130, 246, 0.4)";
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 6px -1px rgba(59, 130, 246, 0.5)";
                    }}
                >
                    Install
                </button>
            )}
        </nav>
    );
}

export default Navbar;