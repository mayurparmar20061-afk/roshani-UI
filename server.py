import http.server
import json
import os

PORT = 5000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/stats':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            stats_data = {
                "years": "15+",
                "engineersPlaced": "5,000+",
                "reach": "Gujarat & Beyond",
                "studentsTrained": "15,000+",
                "readyCourses": "50+"
            }
            self.wfile.write(json.dumps(stats_data).encode('utf-8'))
            return

        if self.path == '/api/testimonials':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            testimonials_data = [
                {
                    "rating": 5,
                    "quote": "The AutoCAD and BIM courses at Roshani Technologies were instrumental in my placement. The hands-on training with real-world blueprints made all the difference.",
                    "initials": "AP",
                    "name": "Amit Patel",
                    "course": "Revit BIM Architecture"
                },
                {
                    "rating": 5,
                    "quote": "Excellent faculty and outstanding learning environment. The SolidWorks mechanical design classes prepared me perfectly for my industry role.",
                    "initials": "SM",
                    "name": "Siddharth Mehta",
                    "course": "SolidWorks Mechanical Design"
                },
                {
                    "rating": 5,
                    "quote": "Highly recommended for engineering students. The syllabus is perfectly aligned with what top employers look for. The instructors are extremely supportive.",
                    "initials": "ND",
                    "name": "Neha Desai",
                    "course": "AutoCAD 2D & 3D"
                }
            ]
            self.wfile.write(json.dumps(testimonials_data).encode('utf-8'))
            return

        # Serve index.html for / or /index.html
        if self.path == '/' or self.path == '/index.html':
            self.path = '/index.html'
        
        return super().do_GET()

if __name__ == '__main__':
    # Set the working directory to the directory of server.py
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = http.server.HTTPServer(('0.0.0.0', PORT), MyHandler)
    print(f"Server started at http://localhost:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
