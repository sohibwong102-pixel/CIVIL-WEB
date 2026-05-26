# 🌍 CIVIL-WEB

> Kerangka awal Civil Group berbasis Astro + React 😎

Repo ini dibuat sebagai:

- fondasi belajar
- tempat eksplorasi
- starter project yang nyaman dikembangkan

Bukan produk final 😭🔥

---

# 📘 Tujuan Repository Ini

Project ini dibuat supaya:

- pemula tidak langsung tersesat
- struktur project lebih mudah dipahami
- proses belajar frontend terasa lebih nyaman
- developer bisa belajar sambil edit langsung

Fokus utamanya:

- clarity
- modular structure
- beginner-friendly flow
- low confusion development

---

# 🧠 Cara Membaca Project Ini

Kalau baru pertama buka repo frontend modern:

jangan langsung baca semuanya 😭🔥
Mulai pelan-pelan:

1. lihat struktur folder
2. pahami fungsi tiap file
3. edit bagian kecil dulu
4. lihat perubahan di browser
5. ulang terus sampai mulai familiar 😎

---

# 🗂️ Struktur Project

## 📦 Root Files

| File             | Fungsi                             |
| ---------------- | ---------------------------------- |
| astro.config.mjs | konfigurasi utama Astro            |
| metadata.json    | metadata sederhana project         |
| package.json     | daftar dependency & script project |
| tsconfig.json    | konfigurasi TypeScript             |
| README.md        | dokumentasi & panduan project      |

---

# 📂 src/

Folder utama tempat semua kode frontend berada.

---

# 📂 src/pages/

Tempat halaman website.

| File           | Fungsi                       |
| -------------- | ---------------------------- |
| index.astro    | homepage / halaman utama     |
| docs.astro     | halaman dokumentasi          |
| faq.astro      | halaman FAQ                  |
| journey.astro  | halaman storytelling/journey |
| pricing.astro  | halaman pricing              |
| products.astro | halaman produk               |
| try-now.astro  | halaman demo / try now       |

## 📌 Catatan

Kalau ingin mulai edit website:

mulai dari src/pages/index.astro 😎
Karena itu biasanya halaman paling mudah dipahami.

---

# 📂 src/layouts/

Tempat layout global.

## 📄 Layout.astro

File ini biasanya membungkus:

- navbar
- footer
- content halaman

Kalau dianalogikan:

layout = kerangka rumah 😎
page = isi tiap ruangan

---

# 📂 src/components/

Tempat komponen reusable.

Artinya:

- bisa dipakai berkali-kali
- tidak perlu copy paste UI terus 😎

---

## 📂 src/components/navigation/

### 📄 Navbar.tsx

Navigasi utama website.

Biasanya mengatur:

- menu
- link navigation
- mobile menu

---

## 📂 src/components/layout/

### 📄 Footer.astro

Footer website.

Biasanya berisi:

- copyright
- social link
- navigation tambahan

---

## 📂 src/components/sections/

Berisi potongan section halaman.

Contoh:

- Hero
- Feedback
- CTA
- Features

Section dipisah supaya:

- homepage lebih rapi
- mudah di-edit
- reusable 😎

---

## 📂 src/components/ui/

Tempat reusable UI component.

Contoh:

- accordion
- modal
- button
- card

### 📄 Accordion.tsx

Komponen buka/tutup content.

Biasanya dipakai untuk:

- FAQ
- detail produk
- expandable content

---

## 📂 src/components/interactive/

Tempat komponen React interaktif.

### 📄 Playground.tsx

Contoh komponen interaktif.

Biasanya dipakai untuk:

- demo logic
- testing interaction
- playground feature

---

# 🎨 src/styles/

## 📄 global.css

Style global project.

Biasanya mengatur:

- font
- color
- spacing
- reset CSS
- Tailwind custom style

Kalau ingin ubah style global:

- mulai dari file ini 😎

---

# 🚀 Cara Menjalankan Project

## 1️⃣ Install Dependency

## npm install

## 2️⃣ Jalankan Development Server

npm run dev
Lalu buka:

## http://localhost:3000

## 3️⃣ Build Production

## npm run build

# 🔍 Cara Belajar Project Ini

## ✅ Cara Aman Untuk Pemula

Jangan langsung edit semuanya 😭🔥

Mulai dari:

1. edit text kecil
2. lihat perubahan
3. pahami file yang berubah
4. lanjut sedikit demi sedikit

---

## ✅ Recommended Learning Flow

| Step | Fokus                     |
| ---- | ------------------------- |
| 1    | pahami folder pages/      |
| 2    | pahami component          |
| 3    | pahami layout             |
| 4    | pahami props React        |
| 5    | pahami styling            |
| 6    | pahami reusable structure |

---

# ⚠️ Tentang Placeholder Text

Beberapa file masih berisi:

- lorem ipsum
- dummy text
- placeholder content

Dan itu normal 😎

<!-- STRUKTUR PROYEK -->

# 🗂️ Struktur Project

CIVIL-WEB/
├── src/ # tempat utama kode frontend
├── public/ # asset public (image, icon, dll)
├── astro.config.mjs # konfigurasi Astro
├── metadata.json # metadata project
├── package.json # dependency & script project
├── tsconfig.json # konfigurasi TypeScript
└── README.md # dokumentasi project

---

# 📂 Penjelasan Struktur

## 📂 src/

Tempat utama semua logic frontend berada 😎

Di folder ini biasanya ada:

- halaman website
- component UI
- layout
- styling
- logic frontend

Kalau analoginya:

# src/

## isi utama rumah 😎

## 📂 public/

Tempat asset static.

Biasanya berisi:

- image
- favicon
- logo
- file static lain

Isi folder ini bisa diakses langsung dari browser.

Contoh:

public/logo.png
↓
localhost:3000/logo.png

---

## 📄 astro.config.mjs

Konfigurasi utama Astro.

Biasanya mengatur:

- integration
- adapter
- alias
- build config
- plugin

Kalau project frontend punya “otak config”:

## astro.config.mjs 😎

## 📄 metadata.json

Metadata sederhana project.

Biasanya dipakai untuk:

- identitas project
- info tambahan
- asset reference
- helper configuration

---

## 📄 package.json

Salah satu file paling penting 😭🔥

File ini mengatur:

- dependency project
- npm script
- package information

Contoh script:

"scripts": {
"dev": "astro dev",
"build": "astro build"
}
Kalau ingin menjalankan project:

- file ini hampir selalu terlibat 😎

---

## 📄 tsconfig.json

Konfigurasi TypeScript.

Mengatur:

- type checking
- path alias
- compiler behavior

Walaupun tidak menulis TypeScript langsung:

- file ini tetap penting 😎

---

## 📄 README.md

Dokumentasi utama project.

Biasanya berisi:

- cara install
- cara menjalankan project
- struktur project
- penjelasan dasar ecosystem

README yang bagus membantu developer:

- tidak bingung
- tidak nyasar
- lebih cepat onboarding 😎

Karena repo ini memang:
starter scaffold
BUKAN final production project 😭🔥

---

# 🔎 Cara Cari Placeholder Cepat

Jalankan:

grep -R "lorem\|Lorem\|TODO" -n src
Command ini membantu mencari:

- lorem ipsum
- TODO
- placeholder text

---

# 🧪 Cara Edit Dengan Aman

## 1️⃣ Buat Branch Baru

## git checkout -b feat/edit-homepage

## 2️⃣ Edit File Kecil Dulu

Contoh:
src/pages/index.astro
Ganti:

- heading
- paragraph
- button text

Lalu lihat hasilnya di browser 😎

---

## 3️⃣ Commit Perubahan Kecil

git add .
git commit -m "chore: edit homepage text"
Tujuannya supaya:

- perubahan mudah dilacak
- debugging lebih gampang
- tidak chaos 😭🔥

---

# 📚 Rekomendasi Belajar

| Topic              | Link                                         |
| ------------------ | -------------------------------------------- |
| Astro Basics       | https://docs.astro.build/en/getting-started/ |
| React Fundamentals | https://react.dev/learn                      |
| Vite Guide         | https://vitejs.dev/guide/                    |
| Tailwind CSS       | https://tailwindcss.com/docs/installation    |

---

# 📌 Final Reminder

frontend modern memang terlihat banyak 😭🔥

TAPI:
pelajari pelan-pelan

- # edit sedikit demi sedikit
  lama-lama mulai kebaca polanya 😎
