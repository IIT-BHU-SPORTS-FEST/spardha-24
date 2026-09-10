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
        <form className={styles.form} onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" className={styles.input} name="name" value={form.name}
        onChange={handleChange} />
    <input type="email" placeholder="Email" className={styles.input} name="email"
     value={form.email}
        onChange={handleChange} />
    <textarea placeholder="Message" className={styles.textarea} name="message"
     value={form.message}
        onChange={handleChange}></textarea>
     <button
        type="submit"
        disabled={loading}
       className={styles.button}
      >
        {loading ? "Submitting..." : "SUBMIT   →"}
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
