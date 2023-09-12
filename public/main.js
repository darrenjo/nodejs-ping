document.addEventListener('DOMContentLoaded', () => {
    const pingForm = document.getElementById('pingForm');
    const pingResult = document.getElementById('pingResult');

    pingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const ipAddress = document.getElementById('ipAddress').value;
        fetch('/ping', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `ipAddress=${encodeURIComponent(ipAddress)}`,
        })
        .then(response => response.text())
        .then(result => {
            pingResult.textContent = result;
        });
    });
});
