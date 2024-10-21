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
            }

            if (side === currentPlayer && board[side][hole] === 3) {
                scores[currentPlayer] += board[side][hole];
                board[side][hole] = 0;
                updateScore();
            }

            currentPlayer = 1 - currentPlayer;
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
            } else {
                document.body.style.background = "#fff";
                document.body.style.color = "#000";
            }
        }

        window.onload = () => {
            createBoard();
        }a