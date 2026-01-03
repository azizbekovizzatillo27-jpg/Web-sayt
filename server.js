import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import authRoutes from './routes/auth.js';
import newsRoutes from './routes/news.js';
import staffRoutes from './routes/staff.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Statik fayllar
app.use(express.static(__dirname));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/staff', staffRoutes);

// HTML sahifalarni xizmat qilish
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/staff', (req, res) => {
    res.sendFile(path.join(__dirname, 'staff.html'));
});

app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, 'education.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin/index.html'));
});

// Server ishga tushirish
app.listen(PORT, () => {
    console.log(`\n🚀 Server ishga tushdi!`);
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`\n👤 Admin ma'lumotlari:`);
    console.log(`   Username: admin`);
    console.log(`   Password: admin123`);
    console.log(`\n📚 API Endpoints:`);
    console.log(`   POST /api/auth/register - Ro'yxatdan o'tish`);
    console.log(`   POST /api/auth/login - Tizimga kirish`);
    console.log(`   GET  /api/news - Yangiliklar`);
    console.log(`   GET  /api/staff - Xodimlar\n`);
});
