"use client";

import { useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import "./ResetPassword.css";

const ResetPassword = () => {
const router = useRouter();


const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleResetPassword = () => {

  router.push("/reset-link");

};
  return (
    <div className="rp-container">
      
      {/* LEFT SIDE */}
      <div className="rp-left">
        <h3 className="rp-logo">GrowMarkt</h3>

        <h1 className="rp-title">
          Elevate your data to <br />
          <span>editorial precision.</span>
        </h1>

        <p className="rp-desc">
          Join the platform where growth is curated, not just tracked.
          Experience the financial-journal approach to social intelligence.
        </p>

        <div className="rp-features">

          <div className="rp-feature">
            <div className="rp-icon rp-dark">
              <img
                src="/assets/strategic.png"
                alt="Strategic Recovery"
                className="rp-feature-img"
              />
            </div>
            <div>
              <h4>Strategic Recovery</h4>
              <p>Point-in-time restoration for your entire data ecosystem.</p>
            </div>
          </div>

          <div className="rp-feature">
            <div className="rp-icon rp-dark">
              <img
                src="/assets/secure.png"
                alt="Secure Infrastructure"
                className="rp-feature-img"
              />
            </div>
            <div>
              <h4>Secure Infrastructure</h4>
              <p>Bank-level encryption protecting your historical data.</p>
            </div>
          </div>

        </div>

        <div className="rp-testimonial">
          <p>
            "Redefining our brand’s soul through digital excellence was only
            possible with GrowMarkt's precision."
          </p>

          <div className="rp-user">
            <div className="rp-avatar rp-green-avatar">SK</div>
            <div>
              <h5>Sarah Kensington</h5>
              <span>CHIEF VISIONARY OFFICER</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="rp-right">
        <div className="rp-card">
          <h2>Reset Password</h2>
          <p className="rp-trial">
            Enter your email address and we'll send you instructions to reset your password.
          </p>

          <label className="rp-label">Email Address</label>
          <input
  type="email"
  placeholder="sarah@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

<button
  className="rp-sign-in-btn"
  onClick={handleResetPassword}
  disabled={loading}
>
  {loading ? "Sending..." : "Send Reset Link →"}
</button>

          <p
  className="rp-back"
  onClick={() => router.push("/login")}
  style={{ cursor: "pointer" }}
>
  ← Back to Sign In
</p>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="rp-page-footer">
        <div className="rp-footer-left">
          <strong>GrowMarkt</strong>
          <span className="rp-footer-text">
            © 2024 GROWMARKT INC. EDITORIAL PRECISION IN DATA.
          </span>
        </div>

        <div className="rp-footer-links">
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