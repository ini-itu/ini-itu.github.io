# Panduan Deploy ke GitHub Pages

## ⚠️ Catatan Penting tentang URL

Website ini menggunakan **Hash Routing** untuk kompatibilitas dengan GitHub Pages. Artinya:

- URL akan menggunakan tanda `#` (hash): 
  - Home: `https://ini-itu.github.io/#/`
  - Shop: `https://ini-itu.github.io/#/shop`
  - About: `https://ini-itu.github.io/#/about`
  
- Hash routing memastikan semua halaman dapat di-refresh dan di-bookmark tanpa error 404
- Ini adalah solusi standar untuk Single Page Applications (SPA) di GitHub Pages

## 📋 Langkah-Langkah Setup (Hanya Sekali)

### 1. Pastikan Repository Sudah Benar

Repository harus bernama: **ini-itu.github.io**

### 2. Aktifkan GitHub Actions untuk Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab paling kanan)
3. Di sidebar kiri, klik **Pages**
4. Di bagian **Build and deployment**:
   - **Source**: Pilih **"GitHub Actions"** (bukan "Deploy from a branch")
   - Klik **Save**

### 3. Berikan Permission ke GitHub Actions

1. Masih di **Settings**
2. Di sidebar kiri, klik **Actions** → **General**
3. Scroll ke bawah ke bagian **Workflow permissions**
4. Pilih **"Read and write permissions"**
5. Centang **"Allow GitHub Actions to create and approve pull requests"**
6. Klik **Save**

## 🚀 Deploy Otomatis

Setelah setup di atas selesai, setiap kali Anda push ke branch `main`, website akan otomatis di-build dan deploy ke:

**https://ini-itu.github.io/**

## 🔧 Deploy Manual (Jika Diperlukan)

1. Buka repository di GitHub
2. Klik tab **Actions**
3. Di sidebar kiri, klik **"Deploy to GitHub Pages"**
4. Klik tombol **"Run workflow"** (hijau)
5. Pilih branch **main**
6. Klik **"Run workflow"**

## 📝 File Penting untuk GitHub Pages

File-file berikut sudah dikonfigurasi:

- **.github/workflows/deploy.yml** - Workflow untuk auto-deploy
- **vite.config.ts** - Konfigurasi Vite dengan `base: '/'` untuk root directory
- **public/.nojekyll** - Mencegah Jekyll processing
- **index.html** - Entry point aplikasi

## ✅ Verifikasi Deployment

Setelah deploy selesai (biasanya 2-5 menit):

1. Buka tab **Actions** di repository
2. Lihat workflow terakhir - harus ada centang hijau ✓
3. Buka **https://ini-itu.github.io/** di browser
4. Website Anda sudah online!

## 🐛 Troubleshooting

### Halaman Kosong / Blank?
- Cek apakah `base: '/'` di `vite.config.ts`
- Pastikan file `.nojekyll` ada di folder `public/`

### Error 404 pada Assets?
- Pastikan `base` di `vite.config.ts` sesuai dengan URL Anda
- Untuk root deployment (ini-itu.github.io), gunakan `base: '/'`

### Workflow Gagal?
- Cek di tab **Actions** untuk melihat error
- Pastikan **workflow permissions** sudah diaktifkan (lihat langkah 3)

### Perubahan Tidak Muncul?
- Tunggu 2-5 menit setelah push
- Clear cache browser dengan Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
- Cek tab **Actions** untuk memastikan workflow selesai

## 📦 Build Lokal (Testing)

Untuk test build sebelum deploy:

```bash
# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

Build akan tersimpan di folder `dist/` - folder ini yang akan di-upload ke GitHub Pages.

## 🔄 Update Website

Untuk update website:

1. Edit file yang diperlukan di Replit atau IDE
2. Commit dan push ke GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
3. Tunggu 2-5 menit - website otomatis terupdate!

## 📌 Catatan Penting

- **Jangan edit folder `dist/`** - folder ini auto-generated saat build
- **Base path sudah diset ke `/`** - cocok untuk root deployment
- **Workflow berjalan otomatis** - tidak perlu manual build/deploy
- **Website bisa diakses di https://ini-itu.github.io/**
