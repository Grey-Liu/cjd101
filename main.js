console("Hollo world!")

let html = "<table border='1' cellspacing='0' cellpadding='5'>";
for (let i = 1; i <= 9; i++) {
    html += "<tr>";
    for (let j = 1; j <= 9; j++) {
        html += `<td>${i} × ${j} = ${i * j}</td>`;
    }
    html += "</tr>";
}
html += "</table>";
document.write(html);