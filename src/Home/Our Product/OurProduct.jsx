import { useEffect, useRef, useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";


// ─── Asset imports ────────────────────────────────────────────────────────────
import MonthlyFoodImg   from "../../assets/products/MonthlyFood.jpeg";
import TramplePOSImg    from "../../assets/products/TamplePOS.jpeg";
import BusinessWebImg   from "../../assets/products/BusinessWebsite.jpeg";
import ForkliftImg      from "../../assets/products/FolkliftTimeTrack.jpeg";
import CheckInOutImg    from "../../assets/products/CheckInOut.jpeg";
import PortfolioImg     from "../../assets/products/Portfolio.jpeg";
import JabnoxLogo       from "../../assets/logo.png";

// ─── Data ────────────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Monthly Food",
    tagline: "Fresh groceries, delivered monthly",
    image: MonthlyFoodImg,
    logo: "https://jabnox.com/assets/logo-nw2GzLug.png",
    photos: [MonthlyFoodImg, MonthlyFoodImg, MonthlyFoodImg],
    category: "Subscription",
    status: "Live",
    description:
      "Monthly Food is a curated subscription box that delivers fresh, locally-sourced groceries right to your doorstep every month. We partner with trusted farmers and food producers to ensure quality you can taste.",
    plans: [
      { name: "Basic",  price: "$999/mo",   features: ["10 items", "Standard delivery", "Email support"] },
      { name: "Pro",    price: "$1,799/mo",  features: ["25 items", "Express delivery", "Priority support"] },
      { name: "Family", price: "$2,999/mo",  features: ["50 items", "Same-day delivery", "Dedicated manager"] },
    ],
    terms: "Orders are placed 5 days before delivery. Cancellation is free up to 48 hours before dispatch. No refunds after delivery.",
  },
  {
    id: 2,
    name: "Trample POS",
    tagline: "Point of sale, reimagined",
    image: TramplePOSImg,
    logo: JabnoxLogo,
    photos: [TramplePOSImg, TramplePOSImg, TramplePOSImg],
    category: "SaaS",
    status: "Live",
    description:
      "Trample POS is a modern, cloud-based point-of-sale system built for restaurants, retail shops, and service businesses. Real-time analytics, inventory management, and seamless payment integration — all in one dashboard.",
    plans: [
      { name: "Starter",    price: "$1,499/mo", features: ["1 terminal", "Basic reports", "Email support"] },
      { name: "Business",   price: "$3,499/mo", features: ["5 terminals", "Advanced analytics", "Chat support"] },
      { name: "Enterprise", price: "Custom",     features: ["Unlimited", "White-label", "Dedicated team"] },
    ],
    terms: "Monthly billing. 14-day free trial available. Data is backed up daily. SLA of 99.9% uptime guaranteed.",
  },
  {
    id: 3,
    name: "Business Website",
    tagline: "Your brand, built to impress",
    image: BusinessWebImg,
    logo: JabnoxLogo,
    photos: [BusinessWebImg, BusinessWebImg, BusinessWebImg],
    category: "Enterprise",
    status: "Beta",
    description:
      "A fully managed business website solution — from design to deployment. We craft high-converting landing pages, portfolio sites, and corporate web portals tailored to your brand identity and business goals.",
    plans: [
      { name: "Landing",  price: "$1,499", features: ["1 page", "SEO ready", "1 revision"] },
      { name: "Standard", price: "$3,499", features: ["5 pages", "CMS integration", "3 revisions"] },
      { name: "Premium",  price: "$7,999", features: ["Unlimited pages", "Custom features", "Unlimited revisions"] },
    ],
    terms: "50% advance required to start. Remaining balance due on delivery. Hosting not included. Maintenance plans available separately.",
  },
  {
    id: 4,
    name: "Forklift Time Track",
    tagline: "Smarter warehouse shift tracking",
    image: ForkliftImg,
    logo: JabnoxLogo,
    photos: [ForkliftImg, ForkliftImg, ForkliftImg],
    category: "Platform",
    status: "Coming Soon",
    description:
      "Forklift Time Track automates shift logging, break tracking, and productivity reporting for warehouse and logistics teams. Replace paper logs with a real-time digital platform that integrates with your HR and payroll systems.",
    plans: [
      { name: "Basic",    price: "$2,499/mo", features: ["Up to 20 operators", "Daily reports", "Email alerts"] },
      { name: "Advanced", price: "$4,999/mo", features: ["Unlimited operators", "Live tracking", "Payroll export"] },
    ],
    terms: "Beta access is free. Pricing applies after general availability. Data is stored securely with AES-256 encryption.",
  },
  {
    id: 5,
    name: "Check In Out",
    tagline: "Effortless visitor & staff management",
    image: CheckInOutImg,
    logo: JabnoxLogo,
    photos: [CheckInOutImg, CheckInOutImg, CheckInOutImg],
    category: "Platform",
    status: "Coming Soon",
    description:
      "Check In Out is a digital attendance and visitor management system for offices, schools, and events. Replace physical registers with QR-code check-ins, automated notifications, and compliance-ready audit logs.",
    plans: [
      { name: "Office", price: "$1,299/mo", features: ["50 users", "QR check-in", "Basic reports"] },
      { name: "Campus", price: "$3,999/mo", features: ["Unlimited users", "Multi-location", "API access"] },
    ],
    terms: "Free 30-day trial. No credit card required. GDPR compliant. Data retention period: 1 year by default.",
  },
  {
    id: 6,
    name: "Portfolio",
    tagline: "Showcase your work beautifully",
    image: PortfolioImg,
    logo: JabnoxLogo,
    photos: [PortfolioImg, PortfolioImg, PortfolioImg],
    category: "Platform",
    status: "Coming Soon",
    description:
      "A portfolio builder crafted for creatives, developers, and professionals. Choose from stunning templates, customize every detail, and publish your personal brand site in minutes — no coding required.",
    plans: [
      { name: "Free",    price: "$0",       features: ["3 projects", "Subdomain", "Jabnox branding"] },
      { name: "Creator", price: "$599/mo",  features: ["Unlimited projects", "Custom domain", "Analytics"] },
      { name: "Pro",     price: "$1,299/mo", features: ["Everything in Creator", "Password protection", "Priority support"] },
    ],
    terms: "Free plan is always free. Paid plans billed monthly. Custom domains require DNS configuration. Cancel anytime.",
  },
];

// ─── Status color ─────────────────────────────────────────────────────────────
const statusColor = (s) => {
  if (s === "Live") return "#10b981";
  if (s === "Beta") return "#f59e0b";
  return "#a78bfa";
};

// ─── Popup Component ──────────────────────────────────────────────────────────
const ProductPopup = ({ product, onClose }) => {
  const axiosPublic = useAxiosPublic();
  const [photoIdx, setPhotoIdx] = useState(0);
  const [showOrder, setShowOrder] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    plan: `${product.plans[0].name} — ${product.plans[0].price}`,
    message: "",
  });
  const [dragStart, setDragStart] = useState(null);

  const allPhotos = product.photos;
  const isLast = photoIdx === allPhotos.length - 1;

  // ── Drag/swipe for popup photo gallery ───────────────────────────────────
  const handlePhotoDragStart = (e) =>
    setDragStart(e.clientX ?? e.touches?.[0]?.clientX);

  const handlePhotoDragEnd = (e) => {
    if (dragStart === null) return;
    const end = e.clientX ?? e.changedTouches?.[0]?.clientX ?? dragStart;
    const diff = dragStart - end;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && photoIdx < allPhotos.length - 1) setPhotoIdx((i) => i + 1);
      if (diff < 0 && photoIdx > 0) setPhotoIdx((i) => i - 1);
    }
    setDragStart(null);
  };

  // ── useMutation — POST to /apply ──────────────────────────────────────────
  const applyMutation = useMutation({
    mutationFn: async (applicationData) => {
      const res = await axiosPublic.post("/apply", applicationData);
      return res.data;
    },
  });

  const handleFormSubmit = () => {
    if (!form.name || !form.email) return;

    const applicationData = {
      productId: product.id,
      productName: product.name,
      selectedPlan: form.plan,
      applicantName: form.name,
      applicantEmail: form.email,
      applicantPhone: form.phone,
      company: form.company,
      message: form.message,
      submittedAt: new Date().toISOString(),
    };

    applyMutation.mutate(applicationData);
  };

  // Shorthand booleans for cleaner JSX
  const isLoading = applyMutation.isPending;
  const isSuccess = applyMutation.isSuccess;
  const isError = applyMutation.isError;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.82)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "fadeIn .25s ease",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          background: "linear-gradient(160deg,#0d1b2a 0%,#12263a 60%,#0a1628 100%)",
          border: "1px solid rgba(103,232,249,.18)",
          borderRadius: 24,
          width: "100%", maxWidth: 640,
          maxHeight: "90vh", overflowY: "auto",
          boxShadow: "0 0 80px rgba(6,182,212,.15), 0 32px 80px rgba(0,0,0,.6)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)",
            color: "#fff", width: 36, height: 36, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", fontSize: 18, lineHeight: 1,
            transition: "background .2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "rgba(239,68,68,.4)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,.08)"}
        >✕</button>

        {!showOrder ? (
          <>
            {/* ── Cover ── */}
            <div
              style={{
                borderRadius: "24px 24px 0 0",
                height: 180, position: "relative",
                overflow: "hidden",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {/* Real cover image */}
              <img
                src={product.image}
                alt={product.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Dark overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.65))" }} />

              {/* Category watermark */}
              <div style={{ position: "relative", color: "#fff", fontWeight: 900, fontSize: 28, letterSpacing: 3, opacity: .18, textTransform: "uppercase" }}>
                {product.category}
              </div>

              {/* Name pill */}
              <div style={{
                position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg,#10b981,#06b6d4)",
                borderRadius: 16, padding: "10px 28px",
                boxShadow: "0 8px 32px rgba(16,185,129,.35)",
                display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap",
              }}>
                <img src={product.logo} alt="logo" style={{ height: 22, objectFit: "contain", maxWidth: 60 }} />
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 17, letterSpacing: .5 }}>{product.name}</span>
              </div>
            </div>

            {/* ── Name + Tagline ── */}
            <div style={{ textAlign: "center", padding: "44px 32px 16px" }}>
              <p style={{ color: "#94a3b8", fontSize: 14, marginTop: 4 }}>{product.tagline}</p>
              <span style={{
                display: "inline-block", marginTop: 10,
                padding: "3px 14px", borderRadius: 99,
                background: statusColor(product.status) + "22",
                border: `1px solid ${statusColor(product.status)}55`,
                color: statusColor(product.status), fontSize: 12, fontWeight: 700,
              }}>{product.status}</span>
            </div>

            {/* ── Description ── */}
            <div style={{ padding: "0 28px 20px" }}>
              <h3 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>About</h3>
              <p style={{ color: "#cbd5e1", fontSize: 14, lineHeight: 1.75 }}>{product.description}</p>
            </div>

            {/* ── Photo Slider ── */}
            <div style={{ padding: "0 28px 20px" }}>
              <h3 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Gallery</h3>
              <div
                style={{
                  borderRadius: 16, overflow: "hidden", position: "relative",
                  userSelect: "none", cursor: "grab",
                  border: "1px solid rgba(103,232,249,.12)",
                }}
                onMouseDown={handlePhotoDragStart}
                onMouseUp={handlePhotoDragEnd}
                onTouchStart={handlePhotoDragStart}
                onTouchEnd={handlePhotoDragEnd}
              >
                <img
                  src={allPhotos[photoIdx]}
                  alt={`${product.name} photo ${photoIdx + 1}`}
                  draggable={false}
                  style={{
                    width: "100%", height: 200, objectFit: "cover", display: "block",
                    userSelect: "none", pointerEvents: "none",
                  }}
                />
                {/* Dots */}
                <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "10px 0", background: "rgba(0,0,0,.4)" }}>
                  {allPhotos.map((_, i) => (
                    <div key={i} onClick={() => setPhotoIdx(i)} style={{
                      width: i === photoIdx ? 22 : 8, height: 8,
                      borderRadius: 99, cursor: "pointer", transition: "all .3s",
                      background: i === photoIdx ? "linear-gradient(90deg,#10b981,#06b6d4)" : "rgba(255,255,255,.25)",
                    }} />
                  ))}
                </div>
              </div>
              {/* Nav arrows */}
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                <button onClick={() => setPhotoIdx(Math.max(0, photoIdx - 1))}
                  disabled={photoIdx === 0}
                  style={{
                    background: photoIdx === 0 ? "rgba(255,255,255,.04)" : "rgba(16,185,129,.15)",
                    border: "1px solid rgba(16,185,129,.25)", color: photoIdx === 0 ? "#475569" : "#10b981",
                    borderRadius: 10, padding: "6px 18px", cursor: photoIdx === 0 ? "not-allowed" : "pointer", fontSize: 18,
                  }}>‹</button>
                <span style={{ color: "#64748b", fontSize: 13, alignSelf: "center" }}>{photoIdx + 1} / {allPhotos.length}</span>
                {isLast ? (
                  <button onClick={() => setShowOrder(true)} style={{
                    background: "linear-gradient(90deg,#10b981,#06b6d4)",
                    border: "none", color: "#fff", borderRadius: 10, padding: "6px 20px",
                    cursor: "pointer", fontWeight: 700, fontSize: 13,
                    boxShadow: "0 4px 20px rgba(16,185,129,.3)",
                  }}>Order Software →</button>
                ) : (
                  <button onClick={() => setPhotoIdx(Math.min(allPhotos.length - 1, photoIdx + 1))} style={{
                    background: "rgba(16,185,129,.15)", border: "1px solid rgba(16,185,129,.25)",
                    color: "#10b981", borderRadius: 10, padding: "6px 18px", cursor: "pointer", fontSize: 18,
                  }}>›</button>
                )}
              </div>
            </div>

            {/* ── Plans ── */}
            <div style={{ padding: "0 28px 20px" }}>
              <h3 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>Purchase Plans</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {product.plans.map((plan) => (
                  <div key={plan.name} style={{
                    flex: "1 1 140px",
                    background: "rgba(255,255,255,.04)", border: "1px solid rgba(103,232,249,.15)",
                    borderRadius: 14, padding: "14px 16px",
                  }}>
                    <div style={{ color: "#10b981", fontWeight: 800, fontSize: 14, marginBottom: 4 }}>{plan.name}</div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{plan.price}</div>
                    {plan.features.map((f) => (
                      <div key={f} style={{ color: "#94a3b8", fontSize: 12, display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
                        <span style={{ color: "#10b981" }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Terms ── */}
            <div style={{ padding: "0 28px 28px" }}>
              <h3 style={{ color: "#67e8f9", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>Terms & Conditions</h3>
              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7, background: "rgba(255,255,255,.03)", borderRadius: 10, padding: "10px 14px", border: "1px solid rgba(255,255,255,.06)" }}>
                {product.terms}
              </p>
            </div>

            {/* ── CTA ── */}
            <div style={{ padding: "0 28px 28px", textAlign: "center" }}>
              <button onClick={() => setShowOrder(true)} style={{
                background: "linear-gradient(90deg,#10b981,#06b6d4)",
                border: "none", color: "#fff", borderRadius: 14,
                padding: "14px 48px", fontSize: 15, fontWeight: 800, cursor: "pointer",
                boxShadow: "0 8px 32px rgba(16,185,129,.35)",
                width: "100%", letterSpacing: .5,
              }}>🚀 Order Software</button>
            </div>
          </>
        ) : (
          /* ── Order Form ── */
          <div style={{ padding: "40px 28px 36px" }}>
            {/* ── Success Screen ── */}
            {isSuccess ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                <h2 style={{ color: "#10b981", fontWeight: 900, fontSize: 22, marginBottom: 8 }}>Request Sent!</h2>
                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
                  Thanks <strong style={{ color: "#fff" }}>{form.name}</strong>! We received your request for{" "}
                  <strong style={{ color: "#67e8f9" }}>{product.name}</strong>.<br />
                  Our team will contact you at <strong style={{ color: "#fff" }}>{form.email}</strong> within 24 hours.
                </p>
                <button onClick={onClose} style={{
                  marginTop: 28, background: "linear-gradient(90deg,#10b981,#06b6d4)",
                  border: "none", color: "#fff", borderRadius: 12, padding: "12px 40px",
                  cursor: "pointer", fontWeight: 800, fontSize: 14,
                }}>Close</button>
              </div>
            ) : (
              /* ── Order Form ── */
              <>
                <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 22, marginBottom: 4 }}>Let's Connect 🤝</h2>
                <p style={{ color: "#64748b", fontSize: 13, marginBottom: 24 }}>
                  Fill the form and we'll reach out within 24 hours.
                </p>

                {/* Fields */}
                {[
                  { label: "Full Name *", key: "name", type: "text", placeholder: "Your name" },
                  { label: "Email *", key: "email", type: "email", placeholder: "you@email.com" },
                  { label: "Phone", key: "phone", type: "tel", placeholder: "+880 1xxx-xxxxxx" },
                  { label: "Company / Organization", key: "company", type: "text", placeholder: "Your company (optional)" },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key} style={{ marginBottom: 14 }}>
                    <label style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, letterSpacing: .5, display: "block", marginBottom: 4 }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      disabled={isLoading}
                      style={{
                        width: "100%", background: "rgba(255,255,255,.05)",
                        border: "1px solid rgba(103,232,249,.2)", borderRadius: 10,
                        padding: "10px 14px", color: "#fff", fontSize: 14, outline: "none",
                        boxSizing: "border-box", opacity: isLoading ? .6 : 1,
                      }}
                    />
                  </div>
                ))}

                {/* Plan Selector */}
                <div style={{ marginBottom: 14 }}>
                  <label style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, letterSpacing: .5, display: "block", marginBottom: 4 }}>
                    Interested Plan
                  </label>
                  <select
                    value={form.plan}
                    onChange={(e) => setForm((f) => ({ ...f, plan: e.target.value }))}
                    disabled={isLoading}
                    style={{
                      width: "100%", background: "#0d1b2a",
                      border: "1px solid rgba(103,232,249,.2)", borderRadius: 10,
                      padding: "10px 14px", color: "#fff", fontSize: 14, outline: "none",
                    }}
                  >
                    {product.plans.map((p) => (
                      <option key={p.name} value={`${p.name} — ${p.price}`}>
                        {p.name} — {p.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ color: "#94a3b8", fontSize: 12, fontWeight: 600, letterSpacing: .5, display: "block", marginBottom: 4 }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    disabled={isLoading}
                    rows={3}
                    style={{
                      width: "100%", background: "rgba(255,255,255,.05)",
                      border: "1px solid rgba(103,232,249,.2)", borderRadius: 10,
                      padding: "10px 14px", color: "#fff", fontSize: 14, outline: "none",
                      resize: "vertical", boxSizing: "border-box", opacity: isLoading ? .6 : 1,
                    }}
                  />
                </div>

                {/* Error banner */}
                {isError && (
                  <div style={{
                    marginBottom: 14, padding: "10px 14px", borderRadius: 10,
                    background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.3)",
                    color: "#f87171", fontSize: 13,
                  }}>
                    ⚠️ Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                {/* Actions */}
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    onClick={() => setShowOrder(false)}
                    disabled={isLoading}
                    style={{
                      flex: 1, background: "rgba(255,255,255,.06)",
                      border: "1px solid rgba(255,255,255,.12)",
                      color: "#94a3b8", borderRadius: 12, padding: "12px 0",
                      cursor: isLoading ? "not-allowed" : "pointer", fontSize: 14,
                    }}
                  >← Back</button>

                  <button
                    onClick={handleFormSubmit}
                    disabled={!form.name || !form.email || isLoading}
                    style={{
                      flex: 2,
                      background: form.name && form.email && !isLoading
                        ? "linear-gradient(90deg,#10b981,#06b6d4)"
                        : "rgba(255,255,255,.08)",
                      border: "none",
                      color: form.name && form.email && !isLoading ? "#fff" : "#475569",
                      borderRadius: 12, padding: "12px 0",
                      cursor: form.name && form.email && !isLoading ? "pointer" : "not-allowed",
                      fontSize: 14, fontWeight: 800,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span style={{
                          width: 16, height: 16, border: "2px solid rgba(255,255,255,.3)",
                          borderTopColor: "#fff", borderRadius: "50%",
                          display: "inline-block", animation: "spin .7s linear infinite",
                        }} />
                        Sending...
                      </>
                    ) : "Send Request ✉️"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:scale(.97) } to { opacity:1; transform:scale(1) } }
        @keyframes spin { to { transform: rotate(360deg) } }
        ::-webkit-scrollbar { width:5px }
        ::-webkit-scrollbar-track { background: transparent }
        ::-webkit-scrollbar-thumb { background: rgba(103,232,249,.25); border-radius:99px }
      `}</style>
    </div>
  );
};

// ─── Card Component ───────────────────────────────────────────────────────────
const ProductCard = ({ product, onLearnMore }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 300, minWidth: 300, flexShrink: 0,
        background: hovered
          ? "linear-gradient(145deg,rgba(16,185,129,.12),rgba(6,182,212,.08))"
          : "linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.03))",
        border: hovered ? "1px solid rgba(103,232,249,.45)" : "1px solid rgba(255,255,255,.1)",
        borderRadius: 24, padding: "24px 20px",
        backdropFilter: "blur(20px)",
        boxShadow: hovered ? "0 24px 64px rgba(16,185,129,.15), 0 0 0 1px rgba(103,232,249,.15)" : "0 8px 32px rgba(0,0,0,.25)",
        transition: "all .4s cubic-bezier(.22,1,.36,1)",
        transform: hovered ? "translateY(-6px) scale(1.025)" : "translateY(0) scale(1)",
        position: "relative", overflow: "hidden",
        cursor: "pointer", userSelect: "none",
      }}
    >
      {/* Glow bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: hovered ? 1 : 0,
        background: "radial-gradient(ellipse at 50% 0%,rgba(16,185,129,.08),transparent 70%)",
        transition: "opacity .4s",
      }} />

      {/* Badges */}
      <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 6 }}>
        <span style={{
          padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700,
          background: "rgba(6,182,212,.12)", border: "1px solid rgba(6,182,212,.3)", color: "#67e8f9",
        }}>{product.category}</span>
      </div>
      <div style={{ position: "absolute", top: 16, right: 16 }}>
        <span style={{
          padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700, color: "#fff",
          background: statusColor(product.status),
        }}>{product.status}</span>
      </div>

      {/* Thumbnail */}
      <div style={{ marginTop: 36, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)", marginBottom: 20, position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          draggable={false}
          style={{
            width: "100%", height: 150, objectFit: "cover", display: "block",
            transition: "transform .5s ease",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Logo overlay */}
        <div style={{
          position: "absolute", bottom: 8, left: 8,
          background: "rgba(0,0,0,.55)", backdropFilter: "blur(6px)",
          borderRadius: 10, padding: "4px 8px",
          border: "1px solid rgba(255,255,255,.12)",
          display: "flex", alignItems: "center",
        }}>
          <img
            src={product.logo}
            alt="logo"
            draggable={false}
            style={{ height: 20, objectFit: "contain", maxWidth: 70 }}
          />
        </div>
      </div>

      {/* Text */}
      <h3 style={{
        color: hovered ? "transparent" : "#fff",
        background: hovered ? "linear-gradient(90deg,#10b981,#06b6d4)" : "none",
        WebkitBackgroundClip: hovered ? "text" : "unset",
        fontWeight: 800, fontSize: 18, marginBottom: 6, transition: "color .3s",
      }}>{product.name}</h3>
      <p style={{ color: "#94a3b8", fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>{product.tagline}</p>

      {/* Indicators */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#94a3b8", fontSize: 12 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981", animation: "pulse 2s infinite" }} />
          Active
        </div>
        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#334155" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#94a3b8", fontSize: 12 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#06b6d4" }} />
          Scalable
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => onLearnMore(product)}
        style={{
          width: "100%", padding: "11px 0",
          background: hovered ? "linear-gradient(90deg,rgba(16,185,129,.25),rgba(6,182,212,.25))" : "rgba(103,232,249,.06)",
          border: "1px solid rgba(103,232,249,.3)",
          borderRadius: 12, color: "#67e8f9", fontWeight: 700, fontSize: 13,
          cursor: "pointer", transition: "all .3s", letterSpacing: .3,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        }}
      >
        Learn More
        <span style={{ fontSize: 14, transition: "transform .3s", transform: hovered ? "translateX(4px)" : "none" }}>→</span>
      </button>

      {/* Bottom glow line */}
      <div style={{
        position: "absolute", bottom: 0, left: "15%", right: "15%", height: 2,
        background: "linear-gradient(90deg,#10b981,#06b6d4)", borderRadius: 99,
        opacity: hovered ? 1 : 0, transition: "opacity .4s", filter: "blur(2px)",
      }} />
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const OurProduct = () => {
  const trackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const autoRef = useRef(null);

  // ── Mouse/touch drag ──────────────────────────────────────────────────────
  const drag = useRef({ active: false, startX: 0, scrollX: 0 });

  const startDrag = (x) => {
    drag.current = { active: true, startX: x, scrollX: trackRef.current.scrollLeft };
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const moveDrag = (x) => {
    if (!drag.current.active) return;
    const dx = drag.current.startX - x;
    trackRef.current.scrollLeft = drag.current.scrollX + dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    snapToNearest();
  };

  const snapToNearest = () => {
    if (!trackRef.current) return;
    const cardW = 316; // 300 + gap
    const idx = Math.round(trackRef.current.scrollLeft / cardW);
    const clamped = Math.max(0, Math.min(products.length - 1, idx));
    setActiveIdx(clamped);
    trackRef.current.scrollTo({ left: clamped * cardW, behavior: "smooth" });
  };

  // ── Auto-scroll ───────────────────────────────────────────────────────────
  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    if (selectedProduct) return; // pause when popup open
    autoRef.current = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % products.length;
        if (trackRef.current) {
          trackRef.current.scrollTo({ left: next * 316, behavior: "smooth" });
        }
        return next;
      });
    }, 3500);
  }, [selectedProduct]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  const moveTo = (idx) => {
    setActiveIdx(idx);
    trackRef.current?.scrollTo({ left: idx * 316, behavior: "smooth" });
  };

  const openPopup = (product) => {
    setSelectedProduct(product);
    clearInterval(autoRef.current);
  };
  const closePopup = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (!selectedProduct) startAuto();
  }, [selectedProduct, startAuto]);

  return (
    <div style={{
      width: "100%", padding: "64px 0 48px",
      background: "linear-gradient(160deg,#060d1a 0%,#0d1b2a 40%,#040c17 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Ambient blobs */}
      <div style={{ position: "absolute", top: -120, left: "20%", width: 500, height: 500, borderRadius: "50%", background: "rgba(16,185,129,.04)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, right: "15%", width: 400, height: 400, borderRadius: "50%", background: "rgba(6,182,212,.05)", filter: "blur(80px)", pointerEvents: "none" }} />

      {/* ── Header ── */}
      <div style={{ textAlign: "center", marginBottom: 48, padding: "0 16px" }}>
        <span style={{
          display: "inline-block",
          background: "linear-gradient(90deg,#10b981,#06b6d4)",
          color: "#fff", padding: "8px 28px", borderRadius: 99, fontWeight: 700, fontSize: 14,
          boxShadow: "0 8px 32px rgba(16,185,129,.3)", marginBottom: 20, letterSpacing: .5,
        }}>Our Products</span>
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(28px,5vw,52px)", margin: "0 0 12px", lineHeight: 1.15 }}>
          Innovative{" "}
          <span style={{
            background: "linear-gradient(90deg,#10b981,#06b6d4)",
            WebkitBackgroundClip: "text", color: "transparent",
          }}>Digital Products</span>
        </h2>
        <p style={{ color: "#94a3b8", fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
          Cutting-edge solutions designed to transform your business operations
        </p>
      </div>

      {/* ── Carousel ── */}
      <div
        ref={trackRef}
        style={{
          display: "flex", gap: 16, padding: "16px 48px",
          overflowX: "auto", scrollbarWidth: "none", cursor: "grab",
          scrollSnapType: "x mandatory",
        }}
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
        onMouseEnter={() => clearInterval(autoRef.current)}
        onMouseOut={startAuto}
      >
        <style>{`
          div::-webkit-scrollbar { display:none }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        `}</style>
        {products.map((p) => (
          <div key={p.id} style={{ scrollSnapAlign: "center", flexShrink: 0 }}>
            <ProductCard product={p} onLearnMore={openPopup} />
          </div>
        ))}
      </div>

      {/* ── Dots ── */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
        {products.map((_, i) => (
          <button key={i} onClick={() => moveTo(i)} style={{
            width: i === activeIdx ? 28 : 10, height: 10, borderRadius: 99, border: "none",
            background: i === activeIdx ? "linear-gradient(90deg,#10b981,#06b6d4)" : "rgba(255,255,255,.18)",
            cursor: "pointer", transition: "all .3s", padding: 0,
          }} />
        ))}
      </div>

      {/* ── Hint ── */}
      <p style={{ textAlign: "center", color: "#334155", fontSize: 12, marginTop: 16, display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <span>⟵ Drag to navigate ⟶</span>
        <span>•</span>
        <span>Auto-scrolls every 3.5s</span>
        <span>•</span>
        <span>Hover to pause</span>
      </p>

      {/* ── Popup ── */}
      {selectedProduct && (
        <ProductPopup
          product={selectedProduct}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default OurProduct;