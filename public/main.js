document.addEventListener('DOMContentLoaded', () => {
    const pingForm = document.getElementById('pingForm');
    const pingResult = document.getElementById('pingResult');

    pingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ipAddresses = document.getElementById('ipAddresses').value;
        fetch('/ping', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `ipAddresses=${encodeURIComponent(ipAddresses)}`,
        })
        .then(response => response.text())
        .then(result => {
            // Split the result by newline and create a <p> element for each line
            const resultLines = result.split('\n');
            const resultHTML = resultLines.map(line => `<p>${line}</p>`).join('');
            pingResult.innerHTML = resultHTML;
        });
    });
});
