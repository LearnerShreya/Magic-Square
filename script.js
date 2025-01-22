function generateMagicSquare() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!day || !month || !year) {
        alert('Please enter valid values for day, month, and year.');
        return;
    }

    const yy = Math.floor(year / 100);
    const YY = year % 100;

    const magicSquare = [
        [day, month, yy, YY],
        [YY + 1, yy - 1, month - 3, day + 3],
        [month - 2, day + 2, YY + 2, yy - 2],
        [yy + 1, YY - 1, day + 1, month - 1]
    ];

    const magicSquareContainer = document.getElementById('magicSquare');
    magicSquareContainer.innerHTML = '';

    magicSquare.forEach(row => {
        row.forEach(value => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = value;
            magicSquareContainer.appendChild(cell);
        });
    });

    // Calculate sum of rows, columns, and diagonals
    const sum = magicSquare[0].reduce((a, b) => a + b, 0);
    const sumDisplay = document.getElementById('sumDisplay');
    sumDisplay.textContent = `Sum: ${sum}`;

    generatePatterns(magicSquare);
}

function generatePatterns(magicSquare) {
    const patterns = [];
    const size = magicSquare.length;

    // Rows
    for (let i = 0; i < size; i++) {
        patterns.push({
            type: `Row ${i + 1}`,
            values: magicSquare[i],
            sum: magicSquare[i].reduce((a, b) => a + b, 0)
        });
    }

    // Columns
    for (let i = 0; i < size; i++) {
        const column = [];
        for (let j = 0; j < size; j++) {
            column.push(magicSquare[j][i]);
        }
        patterns.push({
            type: `Column ${i + 1}`,
            values: column,
            sum: column.reduce((a, b) => a + b, 0)
        });
    }

    // Diagonals
    const mainDiagonal = [];
    const antiDiagonal = [];
    for (let i = 0; i < size; i++) {
        mainDiagonal.push(magicSquare[i][i]);
        antiDiagonal.push(magicSquare[i][size - i - 1]);
    }
    patterns.push({
        type: 'Main Diagonal',
        values: mainDiagonal,
        sum: mainDiagonal.reduce((a, b) => a + b, 0)
    });
    patterns.push({
        type: 'Anti Diagonal',
        values: antiDiagonal,
        sum: antiDiagonal.reduce((a, b) => a + b, 0)
    });

    // Render patterns
    const patternContainer = document.getElementById('patternContainer');
    patternContainer.innerHTML = '';

    patterns.forEach(pattern => {
        const patternDiv = document.createElement('div');
        patternDiv.className = 'pattern';

        const patternHeader = document.createElement('h3');
        patternHeader.textContent = `${pattern.type} (Sum: ${pattern.sum})`;
        patternDiv.appendChild(patternHeader);

        const patternGrid = document.createElement('div');
        patternGrid.className = 'magic-square';

        pattern.values.forEach(value => {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = value;
            patternGrid.appendChild(cell);
        });

        patternDiv.appendChild(patternGrid);
        patternContainer.appendChild(patternDiv);
    });
}

function showImage() {
    const image = document.getElementById('magicSquareImage');
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
}
