"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./ResetLink.css";
import { api } from "@/lib/api";

const ResetPassword = () => {
 const router = useRouter();

const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);


const handleReset = async (e: FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  if (password !== confirmPassword) {

    setError("Passwords do not match");

    return;
  }

  setLoading(true);

  setError("");

  try {

    await api.auth.resetPassword({
      password,
      confirmPassword,
    });
    router.push("/login");
  } catch (err: any) {
    setError(err?.message || "Failed to update password");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="login-container">
      
      {/* LEFT SIDE */}
      <section className="info-section">
        <header className="logo">GrowMarkt</header>

        <div className="hero-content">
          <h1>
            Secure your digital <br />
            <span>heritage.</span>
          </h1>

          <p className="description">
            Manage your growth narratives with precision. Join the inner circle
            of brands that treat social intelligence as a financial-grade asset.
          </p>

         <div className="feature-item">
  <div className="icon-box dark">
    <img src="/assets/analysis.png" alt="Spectral Analysis" className="feature-img" />
  </div>
  <div>
    <h3>Spectral Analysis</h3>
    <p>
      Real-time sentiment vectoring for high-velocity teams.
    </p>
  </div>
</div>

<div className="feature-item">
  <div className="icon-box green">
    <img src="/assets/contextual.png" alt="Contextual Intelligence" className="feature-img" />
  </div>
  <div>
    <h3>Contextual Intelligence</h3>
    <p>
      Automated storytelling that decodes complex market signals.
    </p>
  </div>
</div>

          <div className="testimonial-card">
            <p>
              "GrowMarkt transformed our presence from disjointed noise into a
              masterful editorial engine. We've seen a 40% lift in engagement
              within 60 days of refinement."
            </p>

            <div className="author">
              <div className="avatar">
      <img src="/assets/chief.jpg" alt="Marcus Thorne" className="avatar-img" />
    </div>
              <div>
                <strong>Sarah Kensington</strong>
                <span>MARKETING DIRECTOR, STRATOS GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="form-section">
        <div className="login-card">
          <h2>Reset your password</h2>
          <p className="subtitle">
            Choose a strong password to protect your account and social assets.
          </p>

          <form onSubmit={handleReset}>
            <div className="input-group">
              <label>NEW PASSWORD</label>
              <input
  type="password"
  placeholder="••••••••"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
            </div>

            <div className="input-group">
              <label>CONFIRM PASSWORD</label>
              <input
  type="password"
  placeholder="••••••••"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
/>
            </div>

<div className="password-hint">
  <span>• 8+ CHARACTERS</span>
  <span>• SYMBOL</span>
  <span>• NUMBER</span>
</div>
{error && (
  <p className="error-message">
    {error}
  </p>
)}

<button
  type="submit"
  className="sign-in-btn"
  disabled={loading}
>
  {loading ? "Updating..." : "UPDATE PASSWORD →"}
</button>
          </form>

          <p
            className="back-link"
            onClick={() => router.push("/login")}
          >
            ← Return to Sign In
          </p>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="page-footer">
        <div className="footer-left">
          <strong>GrowMarkt</strong> <span className="footer-text">
  © 2024 GROWMARKT INC. EDITORIAL PRECISION IN DATA.
</span>
        </div>
        <div className="footer-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">SECURITY</a>
          <a href="#">HELP CENTER</a>
        </div>
      </footer>
    </div>
  );
};

export default ResetPassword;