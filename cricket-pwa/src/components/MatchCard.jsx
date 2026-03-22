function MatchCard({ match }) {
    const isLive = match.status.toLowerCase().includes("live") || match.ms === "live";

    return (
        <div className="fade-in" style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-glass)",
            padding: "1.25rem",
            borderRadius: "16px",
            boxShadow: "var(--shadow-lg)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
        }}>
            {isLive && (
                <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(239, 68, 68, 0.1)",
                    color: "#ef4444",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem"
                }}>
                    <span style={{
                        width: "6px",
                        height: "6px",
                        background: "#ef4444",
                        borderRadius: "50%",
                        boxShadow: "0 0 8px #ef4444"
                    }}></span>
                    LIVE
                </div>
            )}
            
            <div style={{ paddingRight: isLive ? "4rem" : "0" }}>
                <h3 style={{ 
                    margin: 0, 
                    fontSize: "1.125rem", 
                    color: "var(--text-primary)",
                    lineHeight: "1.4"
                }}>
                    {match.name}
                </h3>
            </div>

            <div style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ opacity: 0.7 }}>📍</span>
                    {match.venue || "TBA"}
                </div>
                <div style={{ 
                    color: isLive ? "var(--accent-secondary)" : "var(--text-dim)",
                    fontWeight: isLive ? "600" : "400",
                    background: isLive ? "rgba(16, 185, 129, 0.1)" : "transparent",
                    padding: isLive ? "0.5rem" : "0",
                    borderRadius: "8px"
                }}>
                    {match.status}
                </div>
            </div>

            <button style={{
                marginTop: "0.5rem",
                width: "100%",
                padding: "0.75rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border-glass)",
                borderRadius: "12px",
                color: "var(--text-primary)",
                fontSize: "0.875rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
            }}
            onMouseOver={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
            onMouseOut={(e) => e.target.style.background = "rgba(255, 255, 255, 0.05)"}
            >
                Match Details
            </button>
        </div>
    );
}

export default MatchCard;