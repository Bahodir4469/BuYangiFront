# Deployment Guide / Produksionga Chiqarish Bo'yicha Qo'llanma

## O'zgarishlar / Changes

### API Konfiguratsiyasi Markazlashtirildi
Barcha API chaqiruvlari endi markazlashtirilgan `src/utils/axios.js` faylidan foydalanadi va environment o'zgaruvchilar orqali boshqariladi.

## Development Muhitida Ishlatish

1. `.env` faylini tekshiring va lokalingizda ishga tushgan API portini kiriting:
   ```
   VITE_API_BASE_URL=http://localhost:8080/api
   ```

2. Development server'ni ishga tushiring:
   ```bash
   npm run dev
   ```

## Production Uchun Tayyorlash

### 1. Environment O'zgaruvchilarini Sozlash

Production server'ingizda `.env.production` faylini yarating:

```bash
# Production API manzili
VITE_API_BASE_URL=https://api.yourdomain.com/api

# Environment type
VITE_APP_ENV=production
```

**MUHIM:** `.env` fayllari `.gitignore` da, shuning uchun ular Git'ga yuklanmaydi. Har bir serverdagi environment o'zgaruvchilarini alohida sozlang.

### 2. Build Qilish

Production build yaratish:

```bash
npm run build
```

Bu `dist` papkasida production-ready fayllarni yaratadi.

### 3. Build Natijasini Tekshirish

Local'da production build'ni test qilish:

```bash
npm run preview
```

### 4. Deployment

`dist` papkasidagi fayllarni hosting provayderingizga yuklang:

- **Netlify/Vercel:** Environment o'zgaruvchilarini dashboard'dan kiriting
- **VPS/Dedicated Server:** `.env.production` faylini server'da yarating
- **Docker:** Environment o'zgaruvchilarni docker-compose yoki Dockerfile'da belgilang

## Environment O'zgaruvchilari

| O'zgaruvchi          | Tavsif                          | Misol                              |
|---------------------|--------------------------------|-------------------------------------|
| VITE_API_BASE_URL   | Backend API manzili            | https://api.yourdomain.com/api     |
| VITE_APP_ENV        | Muhit turi                     | production / development            |

## Xavfsizlik Maslahatlari

1. ❌ **HECH QACHON** `.env` fayllarini Git'ga yuklámang
2. ✅ Har bir server uchun alohida environment sozlamalari
3. ✅ Production'da HTTPS ishlatishni unutmang
4. ✅ API key'lar va maxfiy ma'lumotlarni environment o'zgaruvchilarda saqlang

## Muammolarni Hal Qilish

### API ga ulanish muammosi
- `.env` faylidagi `VITE_API_BASE_URL` to'g'riligini tekshiring
- Backend server ishlab turganligini tekshiring
- Browser console'da xatolarni ko'ring

### Build muammosi
- `node_modules` ni qayta o'rnatib ko'ring: `npm install`
- Cache'ni tozalang: `rm -rf dist node_modules package-lock.json && npm install`

## Qo'shimcha Ma'lumot

Qo'shimcha savol yoki muammolar uchun [Issues](https://github.com/Sariqdasturchi/education/issues) bo'limiga murojaat qiling.
