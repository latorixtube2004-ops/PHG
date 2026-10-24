# دليل رفع الموقع على نيتفلي (Netlify Deployment Guide)

هذا المجلد جاهز ومعد بالكامل للنشر الفوري على منصة **Netlify** بدون أي أخطاء برمجية.

---

### الطريقة الأولى: النشر عبر GitHub (الأسهل والأفضل - دقيقة واحدة)
1. ارفع هذا المجلد `Palm-Hills-Gulf-Netlify` إلى حسابك في **GitHub** في مستودع جديد (Repository).
2. افتح موقع نيتفلي: **[app.netlify.com](https://app.netlify.com)**
3. اضغط على **"Add new site"** ثم اختر **"Import an existing project"**.
4. اختر **GitHub** وحدد المستودع الخاص بك.
5. سيتعرف نيتفلي تلقائياً على ملف الإعدادات `netlify.toml` المرفق ويضبط التالي:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Plugin:** `@netlify/plugin-nextjs`
6. اضغط **"Deploy site"**، وسيتم بناء ونشر الموقع مباشرة وخلال 60 إلى 90 ثانية سيعطيك الرابط المباشر المجاني السريع!

---

### الطريقة الثانية: النشر المباشر عبر سطر الأوامر (Netlify CLI)
إذا كنت تستخدم الطرفية (Terminal):
1. افتح موجه الأوامر (PowerShell / Terminal) داخل هذا المجلد:
```bash
cd "C:\Users\NAZEM\Desktop\Palm-Hills-Gulf-Netlify"
```
2. نفّذ الأمر التالي:
```bash
npx netlify deploy --prod
```
3. سجل دخول بحسابك في نيتفلي واضغط Enter للموافقة على الإعدادات الافتراضية، وسيتم رفع الموقع فوراً!

---

### محتويات هذا المجلد المعتمدة 100%:
- ملف إعدادات نيتفلي الرسمي: `netlify.toml`
- ملفات الـ PDF الرسمية للملف التعريفي داخل `public/downloads/`:
  - النسخة العربية المعتمدة: `Palm-Hills-Gulf-Company-Profile-AR.pdf` (16.4 ميجابايت)
  - النسخة الثنائية: `Palm-Hills-Gulf-Company-Profile.pdf` (15.0 ميجابايت)
- كافة الصور عالية الدقة (84 صورة) مفحوصة 100% بدون أي روابط مفقودة
- خريطة الموقع التلقائية لمحركات البحث (`/sitemap.xml`)
- ملف محركات البحث (`/robots.txt`)
- صفحة خطأ 404 مخصصة وراقية (`app/not-found.tsx`)
- ترويسات الأمان المؤسسية المعتمدة
- تم التحقق من البناء بنجاح: `next build: Exit Code 0`
