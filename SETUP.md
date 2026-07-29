# Devin Le Portfolio — Setup Guide

## Requirements

- [Node.js 18 or later](https://nodejs.org) — download the LTS version
- npm (included with Node.js)

---

## 1. Run the Website Locally

```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:
```bash
npm run build
npm run start
```

---

## 2. Update Personal Information

All personal data lives in **`src/data/`** — change only these files, not the components.

| File | What it controls |
|------|-----------------|
| `src/data/profile.ts` | Name, headline, bio, contact info, GPA stats |
| `src/data/education.ts` | Degree, GPA, minors, coursework, honors |
| `src/data/experience.ts` | Work history, bullets, dates |
| `src/data/projects.ts` | Academic projects, skill tags, descriptions |
| `src/data/leadership.ts` | Organizations, honors, certifications |
| `src/data/skills.ts` | Skill categories and individual skills |

**To change the CV file path**, edit the single line at the top of `src/data/profile.ts`:
```ts
export const CV_PATH = '/documents/Devin-Le-Resume.pdf';
```

---

## 3. Replace the Headshot

1. Prepare your new photo (JPEG or WebP, at least 800×1000 px recommended).
2. Rename it `headshot.jpg`.
3. Drop it into `public/images/`, replacing the existing file.

If you use a different filename, update this line in `src/data/profile.ts`:
```ts
export const HEADSHOT_PATH = '/images/headshot.jpg';
```

---

## 4. Replace the Resume PDF

1. Export or save your updated resume as a PDF.
2. Rename it `Devin-Le-Resume.pdf`.
3. Drop it into `public/documents/`, replacing the existing file.

If you rename the file, update this line in `src/data/profile.ts`:
```ts
export const CV_PATH = '/documents/Devin-Le-Resume.pdf';
```

---

## 5. Connect the Contact Form (Formspree)

The contact form is pre-wired for [Formspree](https://formspree.io) — it takes 2 minutes to activate.

**Step 1 — Create a free Formspree account**  
Go to https://formspree.io and sign up.

**Step 2 — Create a new form**  
- In your Formspree dashboard, click **+ New Form**
- Name it "Devin Le Portfolio Contact"
- Copy the **Form endpoint URL** — it looks like `https://formspree.io/f/abcdefgh`

**Step 3 — Paste the endpoint into the code**  
Open `src/components/Contact.tsx` and replace this line:
```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
with your actual endpoint, e.g.:
```ts
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcdefgh';
```

**Step 4 — Test it**  
Submit a test message from the contact form. Formspree will email it to the address you registered with.

> **Alternative:** If you prefer EmailJS, Resend, or another service, swap out the `fetch()` call in the `handleSubmit` function in `Contact.tsx` with that service's API.

---

## 6. Deploy to Vercel

Vercel is the fastest way to deploy a Next.js site and offers a free Hobby tier.

**Step 1 — Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

**Step 2 — Connect Vercel**
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Import the GitHub repository you just pushed.
4. Vercel auto-detects Next.js — click **Deploy**. No configuration needed.

**Step 3 — Add a custom domain (optional)**
- In your Vercel project settings, go to **Domains**.
- Add your domain (e.g., `devinle.com`) and follow the DNS instructions.

**Step 4 — Automatic deployments**  
Every push to `main` triggers an automatic redeploy. Update content by editing the `src/data/` files, committing, and pushing.

---

## 7. Pre-Launch Checklist

### Navigation
- [ ] All 9 nav links scroll to the correct section (Home, About, Education, Experience, Projects, Leadership, Skills, CV, Contact)
- [ ] Active section highlights in the nav as you scroll
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Clicking a mobile nav item closes the drawer and scrolls to the section
- [ ] Skip-to-content link appears on keyboard Tab press and jumps to main content

### Buttons & Links
- [ ] "View Experience" button scrolls to Experience section
- [ ] "View Projects" button scrolls to Projects section
- [ ] "Download CV" button downloads the PDF
- [ ] "LinkedIn" button opens linkedin.com/in/devinle14/ in a new tab
- [ ] Back-to-top button appears after scrolling and returns to top
- [ ] Footer email link opens email client
- [ ] Footer LinkedIn link opens in a new tab

### CV Section
- [ ] "View Full CV" opens the PDF in a new tab
- [ ] "Download CV" downloads the PDF file
- [ ] "Print CV" triggers the print dialog
- [ ] PDF embeds correctly on desktop
- [ ] Mobile shows a clean fallback with Open/Download buttons

### Contact Form
- [ ] Submitting with empty fields shows validation errors
- [ ] Invalid email format shows error
- [ ] Successful submission shows the success message
- [ ] Form endpoint is updated from `YOUR_FORM_ID` to your real Formspree ID

### Responsive Layout
- [ ] Desktop (1280px+): two-column hero, full navigation
- [ ] Tablet (768px): single-column hero, navigation still visible
- [ ] Mobile (375px): hamburger menu, stacked layout, no horizontal overflow
- [ ] Headshot is visible and correctly cropped on all sizes

### Content Accuracy
- [ ] All dates, GPA, and institution names are correct
- [ ] LinkedIn URL is correct
- [ ] Email address and phone number are correct
- [ ] PDF headshot and resume files load without errors

---

## File Structure Reference

```
portfolio/
├── public/
│   ├── documents/
│   │   └── Devin-Le-Resume.pdf      ← Replace this file to update the CV
│   ├── images/
│   │   └── headshot.jpg             ← Replace this file to update the photo
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx               ← SEO metadata, fonts
│   │   ├── page.tsx                 ← Page assembly
│   │   └── not-found.tsx            ← Custom 404 page
│   ├── components/                  ← UI components (do not edit for content)
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Leadership.tsx
│   │   ├── Skills.tsx
│   │   ├── CVSection.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   ├── data/                        ← Edit these to update content
│   │   ├── profile.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── leadership.ts
│   │   └── skills.ts
│   └── hooks/
│       └── useInView.ts
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```
