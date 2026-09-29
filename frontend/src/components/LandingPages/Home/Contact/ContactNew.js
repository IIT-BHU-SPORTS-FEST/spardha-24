import React,{useEffect, useRef, useState} from "react";
import styles from "./ContactNew.module.css";
const HomeContact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "", message: "" });
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Google Apps Script web apps redirect internally (302), which causes the
    // browser to send Origin: null on the follow-up request. GScript does not
    // whitelist the null origin, so the *response* is blocked by CORS even
    // though the write already succeeded on the server.
    //
    // Fix: use mode:"no-cors" so the browser sends the request without
    // enforcing CORS on the response. The response is opaque (unreadable),
    // so we treat a successful network send as a success.
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbys5zd1ReBGByhITzLeZqTYF-pAg5mme6z4CDxKMFzOYdKKDdjmhB5wqYO6Fj8ZVnMM/exec",
        {
          method: "POST",
          mode: "no-cors",         // prevents CORS error on the opaque response
          body: JSON.stringify(form),
        }
      );

      // Response is opaque with no-cors — assume success if fetch didn't throw
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "", college: "", message: "" });
    } catch (err) {
      // Only reaches here on a genuine network failure (offline, DNS error, etc.)
      alert("Request failed. Please check your connection and try again.");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`${styles.container} ${inView ? styles.cnIn : ""}`} ref={containerRef}>
      <div className={styles.wrapper}>
        
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
          <div className={styles.labelWrap}>
            <span className={styles.labelLine} aria-hidden="true"></span>
            <span className={styles.eyebrow}>✦ SPARDHA 2026</span>
          </div>
          <h1 className={styles.heading}>Contact Us</h1>
          <h1 className={styles.heading}>LET'S CONNECT</h1>
          <div className={styles.duoLine} aria-hidden="true"></div>
          <p className={styles.subheading}>SPARDHA PLAY. PUSH. PREVAIL.</p>
</div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <div className={styles.formBox}>
            <span className={styles.panelCornerTL} aria-hidden="true"></span>
            <span className={styles.panelCornerBR} aria-hidden="true"></span>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formHead}>
                <span className={styles.formTag}>SPARDHA // 2026</span>
                <h3 className={styles.formTitle}>REACH THE SPARDHA TEAM</h3>
                <div className={styles.formAccent} aria-hidden="true"></div>
              </div>

              <label className={styles.field}>
                <span className={styles.fieldMeta}>
                  <span className={styles.fieldIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6"/>
                    </svg>
                  </span>
                  YOUR NAME
                </span>
                <input type="text" placeholder="Enter your full name" className={styles.input} name="name" value={form.name}
                  onChange={handleChange} required />
                <span className={styles.fieldNum} aria-hidden="true">01</span>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldMeta}>
                  <span className={styles.fieldIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2"/>
                      <path d="M3 7l9 6 9-6"/>
                    </svg>
                  </span>
                  EMAIL ADDRESS
                </span>
                <input type="email" placeholder="you@example.com" className={styles.input} name="email"
                  value={form.email} onChange={handleChange} required />
                <span className={styles.fieldNum} aria-hidden="true">02</span>
              </label>


              <label className={styles.field}>
                <span className={styles.fieldMeta}>
                  <span className={styles.fieldIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.127.96.361 1.9.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </span>
                  PHONE NUMBER
                </span>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  className={styles.input}
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  pattern="[0-9+\-\s()]{7,15}"
                  title="Enter a valid phone number"
                  required
                />
                <span className={styles.fieldNum} aria-hidden="true">03</span>
              </label>

              <label className={styles.field}>
                <span className={styles.fieldMeta}>
                  <span className={styles.fieldIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </span>
                  COLLEGE NAME
                </span>
                <input
                  type="text"
                  placeholder="Enter your college name"
                  className={styles.input}
                  name="college"
                  value={form.college}
                  onChange={handleChange}
                  required
                />
                <span className={styles.fieldNum} aria-hidden="true">04</span>
              </label>
              <label className={styles.field}>
                <span className={styles.fieldMeta}>
                  <span className={styles.fieldIcon} aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5h16v12H8l-4 4z"/>
                    </svg>
                  </span>
                  YOUR MESSAGE
                </span>
                <textarea placeholder="Tell us what's on your mind..." className={styles.textarea} name="message"
                  value={form.message} onChange={handleChange} required></textarea>
                <span className={styles.fieldNum} aria-hidden="true">05</span>
              </label>

              <button type="submit" disabled={loading} className={styles.button}>
                <span className={styles.btnLabel}>{loading ? "Submitting..." : "SEND MESSAGE"}</span>
                <span className={styles.btnArrow} aria-hidden="true">→</span>
              </button>
            </form>
          </div>
          <div className={styles.backgroundImage}></div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
