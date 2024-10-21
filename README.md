 <!DOCTYPE html>
<html lang="ky">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тогуз Коргоол</title>
<style>
     body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background: url('photo_2024-09-02_09-27-54.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #333;
            transition: background 0.3s, color 0.3s;
        }
        h1 {
            font-family: 'Tajawal', sans-serif;
            color: #8B0000; 
            font-size: 48px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            margin-bottom: 20px;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(9, 70px);
            gap: 10px;
            justify-content: center;
            margin-bottom: 20px;
        }
        .hole {
            width: 70px;
            height: 70px;
            background-color: #C19A6B;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            position: relative;
            border: 3px solid #8B0000; /* ÐšÑ‹Ñ€Ð³Ñ‹Ð· ÐºÑ‹Ð·Ñ‹Ð» Ñ‚Ò¯ÑÒ¯ */
            transition: background-color 0.3s, transform 0.3s;
        }
        .hole:hover {
            background-color: #FFD700; /* ÐÐ»Ñ‚Ñ‹Ð½ Ñ‚Ò¯ÑÐºÓ© Ð¶Ð°ÐºÑ‹Ð½ */
            transform: scale(1.1);
        }
         .hole img {
            width: 45px;
            height: 45px;
        } 
        .scores {
            margin-bottom: 20px;
            font-size: 18px;
            color: #8B0000;
        } 
        .hole .stones {
            position: absolute;
            bottom: 5px;
            right: 5px;
            font-size: 14px;
            background-color: white;
            border-radius: 50%;
            padding: 3px 7px;
            border: 1px solid #ccc;
        } 
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #8B0000; /* ÐšÑ‹Ñ€Ð³Ñ‹Ð· ÐºÑ‹Ð·Ñ‹Ð»Ñ‹ */
            color: white;
            border: 2px solid #FFD700; /* ÐÐ»Ñ‚Ñ‹Ð½ Ñ‡ÐµÐº */
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        } 
        button:hover {
            background-color: #A52A2A; /* ÐšÐ°Ñ€Ð°Ð¼ÐµÐ»Ð´Ò¯Ò¯ ÐºÒ¯Ñ€Ó©Ò£ Ñ‚Ò¯Ñ */
            transform: scale(1.05);
        }
        .history-rules, .creator, .news {
            width: 80%;
            margin: 30px auto;
            text-align: left;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            font-family: 'Tajawal', sans-serif;
        }
        .history-rules h2, .creator h2, .news h2 {
            text-align: center;
            color: #8B0000;
            font-family: 'Tajawal', sans-serif;
        }
        .difficulty {
            margin: 20px 0;
            color: #8B0000;
        }
        .container img {
            margin-top: 15px;
            width: 100%;
            border-radius: 10px;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
         #win-message {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 128, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            font-size: 24px;
            z-index: 10;
            animation: fadeIn 1s;
        }
</style>
</head>
<body>
    <h1>Тогуз Коргоол</h1>
    <div class="scores">
        <span id="player1-score">1-Оюнчунун упайы: 0</span> | 
        <span id="player2-score">2-Оюнчунун упайы: 0</span>
    </div>
    <div id="board" class="board"></div>
    <div class="difficulty">
        <label for="difficulty">Оюндун деңгээлин тандаңыз:</label>
        <select id="difficulty">
            <option value="easy">Жеңил</option>
            <option value="medium">Орто</option>
            <option value="hard">Кыйын</option>
        </select>
    </div>
    <div>
        <button onclick="restartGame()">Оюнду башта</button>
        <button onclick="toggleTheme()">Теманы өзгөртүү</button>
    </div>
    <div id="win-message">
        Куттуктайбыз! <span id="winner-number"></span>-оюнчу жеңди!
    </div>
    <div class="container">
        <div class="history-rules">
            <h2>Тогуз Коргоол оюунун тарыхы</h2>
            <p>Тогуз Коргоол — бул Борбор Азияда миң жылдан ашуун убакыттан бери белгилүү болгон байыркы акыл-эс оюндардын бири. 
                Бул оюн көчмөн элдердин маданиятына кирип, казактар, кыргыздар жана башка түрк элдери арасында кеңири тараган. Оюн "манкала" тибиндеги оюндардын бири болуп эсептелет.
            </p>
            <p>Илгери Тогуз Коргоол акыл-эс оюн катары гана колдонулбастан, стратегиялык ой жүгүртүүнү, логиканы жана көңүлдү топтоо үчүн колдонулган. 
                Бул Борбор Азия элдеринин маданий символу болуп, азыр да ар кандай курактагы оюнчулар арасында кеңири жайылган.</p>
            <h2>Оюндун эрежелери</h2>
            <p>Оюн тактада жүргүзүлөт, анда ар бир оюнчу үчүн 9дан уя жана эки чоң уя (казан) бар. 
                Башында ар бир уяга 9 коргоол салынып, оюнчулар 81 коргоол чогултууга аракет кылышат.</p>
                <p>Оюнчулар кезек менен өздөрүнүн уяларынан коргоолдорду алып, ар бир кийинки уяга бирден коргоол коюшат. 
                Эгерде акыркы коргоол атаандаштын уясына түшүп, ал жердеги коргоолдордун саны жуп болсо, оюнчу ошол уядан бардык коргоолдорду өзүнө алат.</p>
                <p>Оюндун максаты — биринчи болуп 81 коргоол чогултуу.</p>
        </div>
        <div class="news">
            <h2>Кызыктуу жаңылыктар</h2>
            <p>
                Жакында дүйнө жүзүндөгү интеллектуалдык оюндар боюнча эл аралык турнир өтүп, Тогуз Коргоол боюнча мыкты оюнчулар Казакстан, Кыргызстан жана Өзбекстандан катышты. 
                Мындан тышкары, Тогуз Коргоол айрым Борбор Азия мектептеринде милдеттүү предмет катары киргизилүүсү пландалууда.</p>
        </div>
    </div>
</div>
<script>
    let board = [
            [9, 9, 9, 9, 9, 9, 9, 9, 9],
            [9, 9, 9, 9, 9, 9, 9, 9, 9]
        ];
        let scores = [0, 0];
        let currentPlayer = 0;
        let gameMode = 'bot';
        let difficulty = 'easy';
        let isDarkTheme = true;
        function createBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';
            for (let player = 0; player < 2; player++) {
                for (let i = 0; i < 9; i++) {
                    const hole = document.createElement('div');
                    hole.className = 'hole';
                    hole.innerHTML = `<img src="photo_2024-09-16_21-46-27.jpg" alt="marble"><div class="stones">${board[player][i]}</div>`;
                    if (player === 0) {
                        hole.onclick = () => makeMove(currentPlayer, i);
                    }
                    boardElement.appendChild(hole);
                }
            }
        }
        function makeMove(player, holeIndex) {
            if (player !== currentPlayer) {
                alert("ÐÐ·Ñ‹Ñ€ ÑÐ¸Ð·Ð´Ð¸Ð½ ÐºÐµÐ·ÐµÐ³Ð¸Ò£Ð¸Ð· ÑÐ¼ÐµÑ!");
                return;
            }
            let stones = board[player][holeIndex];
            if (stones === 0) {
                alert("Ð‘ÑƒÐ» Ð»ÑƒÐ½ÐºÐ° Ð±Ð¾Ñˆ!");
                return;
            }
            board[player][holeIndex] = 0;
            let side = player;
            let hole = holeIndex;
            while (stones > 0) {
                hole++;
                if (hole > 8) {
                    hole = 0;
                    side = 1 - side;
                }
                board[side][hole]++;
                stones--;
            }if (side === currentPlayer && board[side][hole] === 3) {
                scores[currentPlayer] += board[side][hole];
                board[side][hole] = 0;
                updateScore();
            }currentPlayer = 1 - currentPlayer;
            createBoard();
            checkWin();
        } 
        function updateScore() {
            document.getElementById('player1-score').innerText = `1-ÐžÑŽÐ½Ñ‡ÑƒÐ½ÑƒÐ½ ÑƒÐ¿Ð°Ð¹Ñ‹: ${scores[0]}`;
            document.getElementById('player2-score').innerText = `2-ÐžÑŽÐ½Ñ‡ÑƒÐ½ÑƒÐ½ ÑƒÐ¿Ð°Ð¹Ñ‹: ${scores[1]}`;
        }
        function checkWin() {
            if (scores[0] >= 81) {
                showWinMessage(1);
            } else if (scores[1] >= 81) {
                showWinMessage(2);
            }
        }
        function showWinMessage(winnerNumber) {
            const winMessage = document.getElementById('win-message');
            document.getElementById('winner-number').innerText = winnerNumber;
            winMessage.style.display = 'block';
        }
        function restartGame() {
            scores = [0, 0];
            currentPlayer = 0;
            board = [
                [9, 9, 9, 9, 9, 9, 9, 9, 9],
                [9, 9, 9, 9, 9, 9, 9, 9, 9]
            ];
            createBoard();
            updateScore();
            document.getElementById('win-message').style.display = 'none';
        }
function toggleTheme() {
            isDarkTheme = !isDarkTheme;
            if (isDarkTheme) {
                document.body.style.background = "url('kyrgyz-pattern-bg.jpg') no-repeat center center fixed";
                document.body.style.color = "#333";
            } 
            else {
                document.body.style.background = "#fff";
                document.body.style.color = "#000";
            }
        }
        window.onload = () => {
            createBoard();
        }
</script>
</body>
</html>
