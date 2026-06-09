# 🎓 WeLearnInstitution Website

A full-stack WeLearnInstitution web application built with React (Frontend) and Node.js/Express (Backend). Features a public-facing landing page with course listings and an Admin panel for full CRUD management of courses.

---

## 🚀 Features

### 🌐 Public Website
- **Hero Section** — Full-screen background with institute tagline and Register CTA button
- **Why Choose Us** — 4-card section highlighting benefits (Affordability, Time, Training, Quality)
- **Vision & Mission** — Dedicated section with institute values
- **Course Listings** — Fetches live course data from backend API with image, price, discount, and rating
- **Animated Counter** — Scroll-triggered count-up stats (100% Placement, 200+ Students, 20+ Clients)
- **Student Reviews** — Testimonial section with student name and role
- **Course Category Navbar** — Tab navigation for HTML/CSS, JavaScript, Java, NodeJS, ReactJS
- **Footer** — Animated social media icons (Instagram, Facebook, YouTube, Twitter) with hover effects
- **Register Page** — Student registration flow

### 🔐 Admin Panel
- **Course Management** — Create, Read, Update, Delete (CRUD) courses
- **Image Upload** — Product image upload support via backend
- **Auto Hide Navbar/Footer** — Navbar and Footer hidden on `/Admin` route using `HideNavbar` & `HideFooter` components

---

## 🛠️ Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| React | UI & Component Logic |
| React Router DOM | Client-side Routing |
| Bootstrap 5 + React Bootstrap | Layout & UI Components |
| Tailwind CSS | Utility Styling |
| Axios | API Calls |
| React Icons | Iconography |
| React CountUp | Animated Statistics |
| React Scroll Trigger | Scroll-based animations |

### Backend
| Technology | Usage |
|---|---|
| Node.js + Express | REST API Server |
| MongoDB | Database |
| Multer | Image Upload Handling |

---

## 📁 Project Structure

```
welearns/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Content1.jsx       # Hero section
│   │   │   ├── Content2.jsx       # Why Choose Us cards
│   │   │   ├── Content3.jsx       # Vision & Mission
│   │   │   ├── Content4.jsx       # Course category icons
│   │   │   ├── Content5.jsx       # Student reviews
│   │   │   ├── CounterPage.jsx    # Animated stats counter
│   │   │   ├── Cards.jsx          # Course product cards (API)
│   │   │   ├── CnavBar.jsx        # Course category tab navbar
│   │   │   ├── Footer.jsx         # Footer with social icons
│   │   │   ├── HideNavbar.jsx     # Hides navbar on Admin route
│   │   │   └── HideFooter.jsx     # Hides footer on Admin route
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Admin.jsx          # Admin CRUD panel
│   │   │   └── Register.jsx
│   │   └── App.jsx
│   └── .env                       # VITE_BACKEND_URL
│
└── backend/
    ├── routes/
    │   └── product.js             # CRUD API routes
    ├── models/
    │   └── Product.js             # MongoDB schema
    ├── uploads/                   # Stored course images
    └── server.js
```

---

## ⚙️ How It Works

1. **Home page** loads and fetches all courses from `GET /product/list`
2. Users browse courses with price, discount, and ratings
3. Clicking **Buy Now** triggers an alert with course selection confirmation
4. Admin navigates to `/Admin` — Navbar and Footer are hidden automatically
5. Admin can **Add** a new course (name, price, discount, description, image)
6. Admin can **Edit** or **Delete** existing courses via the dashboard
7. All changes reflect instantly on the public course listing page

---

## 🔧 Setup & Run

```bash
# Clone the repo
git clone https://github.com/your-username/welearns.git

# Backend
cd backend
npm install
node server.js

# Frontend
cd frontend
npm install
npm run dev
```

**Environment Variables (frontend/.env):**
```
VITE_BACKEND_URL=http://localhost:5000
```

---

## 📱 Responsive Behavior

| Screen | Behavior |
|---|---|
| Desktop | Full multi-column layout |
| Tablet (≤768px) | 2-column grid for cards and counters |
| Mobile (≤425px) | Single column, hero image hidden |

---

## 🎨 Color Palette

| Role | Color |
|---|---|
| Primary Accent | `#7DFC00` (Neon Green) |
| Dark Background | `#1A1F1B` |
| Navbar/Footer | `#0f1011` / `#000000` |
| Active Tab | `#4CAF50` |
| Price | `#28a745` |
| Discount | `#d9534f` |

---

## 🙋‍♂️ Author

**Arun Prasath**  
Software Developer

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
