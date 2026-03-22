import { useEffect, useState } from "react";
import MatchCard from "../components/MatchCard";

function Home() {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setMatches(data.data || []);
                localStorage.setItem("matches", JSON.stringify(data.data));
                setLoading(false);
            })
            .catch(() => {
                const cached = JSON.parse(localStorage.getItem("matches"));
                if (cached) setMatches(cached);
                setLoading(false);
            });
    }, []);

    return (
        <main style={{ 
            padding: "2rem 1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%"
        }}>
            <header style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ 
                    fontSize: "1.875rem", 
                    fontWeight: "800", 
                    marginBottom: "0.5rem",
                    color: "var(--text-primary)"
                }}>
                    Live Matches
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                    Real-time updates from across the cricket world.
                </p>
            </header>

            {loading ? (
                <div style={{ textAlign: "center", padding: "4rem", color: "var(--text-dim)" }}>
                    Loading matches...
                </div>
            ) : (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: "1.5rem",
                }}>
                    {matches.map((match, i) => (
                        <MatchCard key={i} match={match} />
                    ))}
                </div>
            )}

            {!loading && matches.length === 0 && (
                <div style={{ 
                    textAlign: "center", 
                    padding: "4rem", 
                    background: "var(--bg-card)", 
                    borderRadius: "16px",
                    border: "1px dashed var(--border-glass)",
                    color: "var(--text-secondary)"
                }}>
                    No live matches found at the moment.
                </div>
            )}
        </main>
    );
}

export default Home;