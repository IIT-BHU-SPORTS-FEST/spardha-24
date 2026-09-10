import React,{useEffect, useRef, useState} from "react";
import styles from "./ContactNew.module.css";
const HomeContact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbys5zd1ReBGByhITzLeZqTYF-pAg5mme6z4CDxKMFzOYdKKDdjmhB5wqYO6Fj8ZVnMM/exec",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.result === "success") {
        alert("Form submitted successfully!");
        setForm({ name: "", email: "", message: "" }); 
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Request failed: " + err.message);
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
                      <path d="M4 5h16v12H8l-4 4z"/>
                    </svg>
                  </span>
                  YOUR MESSAGE
                </span>
                <textarea placeholder="Tell us what's on your mind..." className={styles.textarea} name="message"
                  value={form.message} onChange={handleChange} required></textarea>
                <span className={styles.fieldNum} aria-hidden="true">03</span>
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
