/* ============================================================
   THE SERENDIB CONNECTION — Main JS
   ============================================================ */

// ── SCROLL REVEAL ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── MODALS ───────────────────────────────────────────────────
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
  }
});

// ── DONATE HELPERS ───────────────────────────────────────────
function selectAmount(btn, value) {
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const custom = document.getElementById('customAmount');
  if (value === 'other') {
    custom.style.display = 'block';
    custom.focus();
  } else {
    custom.style.display = 'none';
  }
}

function selectPaymentTab(tab) {
  document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
}

// ── FORM SUBMISSION ──────────────────────────────────────────
// TODO: Wire up to real backend / Stripe
function submitForm(formId, successId) {
  document.getElementById(formId).style.display = 'none';
  document.getElementById(successId).classList.add('show');
}

// ── NEWSLETTER ───────────────────────────────────────────────
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail');
  if (email.value && email.value.includes('@')) {
    document.getElementById('newsletterForm').innerHTML =
      '<p style="color: var(--accent); font-weight: 600; padding: 14px 24px;">✓ You\'re subscribed! Welcome to the community.</p>';
  }
}
