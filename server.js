const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

const statsData = {
  years: "15+",
  engineersPlaced: "5,000+",
  reach: "Gujarat & Beyond",
  studentsTrained: "15,000+",
  readyCourses: "50+"
};

const testimonialsData = [
  {
    rating: 5,
    quote: "The AutoCAD and BIM courses at Roshani Technologies were instrumental in my placement. The hands-on training with real-world blueprints made all the difference.",
    initials: "AP",
    name: "Amit Patel",
    course: "Revit BIM Architecture"
  },
  {
    rating: 5,
    quote: "Excellent faculty and outstanding learning environment. The SolidWorks mechanical design classes prepared me perfectly for my industry role.",
    initials: "SM",
    name: "Siddharth Mehta",
    course: "SolidWorks Mechanical Design"
  },
  {
    rating: 5,
    quote: "Highly recommended for engineering students. The syllabus is perfectly aligned with what top employers look for. The instructors are extremely supportive.",
    initials: "ND",
    name: "Neha Desai",
    course: "AutoCAD 2D & 3D"
  }
];

const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // API Endpoints
  if (pathname === '/api/stats') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(statsData));
    return;
  }

  if (pathname === '/api/testimonials') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(testimonialsData));
    return;
  }

  // Serve static files
  let filePath = '';
  if (pathname === '/' || pathname === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    filePath = path.join(__dirname, pathname);
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    let contentType = 'text/html';
    if (ext === '.css') contentType = 'text/css';
    else if (ext === '.js') contentType = 'application/javascript';
    else if (ext === '.png') contentType = 'image/png';
    else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
    else if (ext === '.svg') contentType = 'image/svg+xml';
    else if (ext === '.json') contentType = 'application/json';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
