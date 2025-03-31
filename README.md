<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DML-MD - Multi Device WhatsApp Bot</title>
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #0d1117;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        h1 {
            font-size: 3em;
            color: #FF4500;
            animation: fadeIn 2s ease-in-out;
            text-shadow: 0px 0px 20px rgba(255, 69, 0, 0.8);
        }
        .typing-effect img {
            width: 100%;
            max-width: 900px;
            animation: slideIn 2s;
        }
        .image-container img {
            width: 700px;
            height: auto;
            border-radius: 20px;
            box-shadow: 0px 0px 30px rgba(255, 69, 0, 0.7);
            transition: transform 0.5s ease-in-out;
        }
        .image-container img:hover {
            transform: scale(1.1) rotate(2deg);
        }
        .buttons a {
            display: inline-block;
            margin: 15px;
            padding: 15px 30px;
            font-size: 1.2em;
            font-weight: bold;
            color: white;
            text-decoration: none;
            border-radius: 12px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s;
        }
        .deploy-btn {
            background: linear-gradient(135deg, #1DB954, #27ae60);
            box-shadow: 0px 0px 15px rgba(39, 174, 96, 0.8);
        }
        .support-btn {
            background: linear-gradient(135deg, #FF4500, #ff5733);
            box-shadow: 0px 0px 15px rgba(255, 87, 51, 0.8);
        }
        .buttons a:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <h1>✨ WELCOME TO DML-MD ✨</h1>
    <div class="typing-effect">
        <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=50&pause=1000&color=1BAFBAFF&center=true&width=910&height=100&lines=THANKS+FOR+CHOOSING+DML-MD;MULTI+DEVICE+WHATSAPP+BOT;CREATED+BY+DML+MD;RELEASED+22.1.2025" alt="Typing SVG" />
    </div>
    <div class="image-container">
        <img src="https://files.catbox.moe/kgd9az.jpg" alt="DML-MD Logo">
    </div>
    <br>
    <div class="buttons">
        <a href="https://france-king.vercel.app" class="deploy-btn">🚀 Deploy Now</a>
        <a href="https://messages-snowy.vercel.app" class="support-btn">🛠 Get Support</a>
    </div>
</body>
</html>

