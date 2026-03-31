# 🛒 Store App

Tam kapsamlı bir **React e-ticaret uygulaması**. Ürün listeleme, sepet yönetimi, kullanıcı kimlik doğrulama ve sipariş ödeme akışı gibi gerçek dünya özelliklerini içermektedir.

---

## 🚀 Başlarken

Bu proje iki ayrı repodan oluşmaktadır:

### 1. API Sunucusunu Başlatın (`store-api`)

```bash
git clone https://github.com/KULLANICI_ADIN/store-api.git
cd store-api
npm install
npm start
```

### 2. React Uygulamasını Başlatın (`store-app`)

```bash
git clone https://github.com/KULLANICI_ADIN/store-app.git
cd store-app
npm install
npm run dev
```

> ⚠️ Uygulamanın düzgün çalışması için önce `store-api` sunucusunun çalışıyor olması gerekmektedir.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| **React** | UI kütüphanesi |
| **React Router** | Sayfa yönlendirme |
| **Material UI** | Bileşen kütüphanesi |
| **Redux Toolkit** | Global state yönetimi |
| **Axios** | HTTP istekleri |
| **React Toastify** | Bildirim sistemi |
| **React Hook Form** | Form yönetimi ve validasyon |
| **Cookie** | Kimlik doğrulama token yönetimi |

---

## 📁 Proje Yapısı & Özellikler

### 🏗️ Bölüm 3 — Temel Yapı

- Proje iskeleti ve klasör yapısı kurulumu
- **React Router** ile sayfa yönlendirme
- **Material UI** entegrasyonu
- **Navbar** bileşeni
- **Products Page**, **ProductList**, **ProductCard** bileşenleri
- **ProductDetails** sayfası
- **Loading** bileşeni

---

### 🌐 Bölüm 4 — API İletişimi & Hata Yönetimi

- **Axios** ile API istekleri
- **Axios Interceptors** ile merkezi istek/yanıt yönetimi
- **React Toastify** ile kullanıcı bildirimleri
- HTTP hata yönetimi (4xx)
- Sunucu hata yönetimi (5xx)
- **404 Not Found** sayfası
- Form validasyon hataları yönetimi

---

### 🛒 Bölüm 5 — Sepet Yönetimi

- Cookie tabanlı oturum yönetimi
- Axios ile sepet API istekleri
- Sepete ürün ekleme
- **Cart Page** (Sepet sayfası)
- **CartContext** ile global sepet state'i
- Context API kullanımı
- Sepet miktarı güncelleme (artırma/azaltma)
- Ürün detay sayfasından sepete ekleme
- **Cart Özeti** bileşeni

---

### ⚙️ Bölüm 6 — Redux Toolkit

- Redux Toolkit kurulumu ve yapılandırması
- **Redux Store** oluşturma
- **Redux Slices** ile modüler state yönetimi
- Redux'ın bileşenlerde kullanımı
- **CartSlice** — sepet state yönetimi
- **Thunk Methods** ile asenkron işlemler
- Thunk yöntemlerinin uygulamaya entegrasyonu
- **createEntityAdapter** ile önbellek yönetimi
- Cache'den veri okuma

---

### 🔐 Bölüm 7 — Kimlik Doğrulama

- Authentication mimarisi
- **Login Formu** tasarımı
- Form Data yönetimi
- **React Hook Form** entegrasyonu
- Form validasyon kuralları
- Kullanıcı kayıt işlemi
- Kullanıcı giriş işlemi
- **AccountSlice** — kullanıcı state yönetimi
- **AuthMiddleware** ile korumalı rotalar
- Thunk yöntemleri ile auth işlemleri
- **initApp** — uygulama başlangıç kimlik doğrulama kontrolü

---

### 💳 Bölüm 8 — Ödeme & Siparişler

- **AuthGuard** — yetkisiz erişim koruması
- **Checkout Page** (Ödeme sayfası)
- **Stepper** bileşeni ile adım adım ödeme akışı
- Kullanıcı bilgileri formu
- **AddressForm** — adres bilgileri
- **PaymentForm** — ödeme bilgileri
- Sipariş kayıt işlemi
- **Menu Component** — navigasyon menüsü
- **Sipariş Listesi** — geçmiş siparişler
- **Sipariş Detayları** sayfası
- **Kredi Kartı Ödeme** entegrasyonu

---
