window.onload = function() {
    const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    journalEntries.forEach(entry => {
        addJournalCard(entry.text, entry.date);
    });
}

function saveJournal() {
    const journalText = document.getElementById('journal').value;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based in JS
    const year = date.getFullYear();
    const currentDate = `Written on ${month}-${day}-${year}`;

    if (journalText.trim() !== "") {
        const journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        const newEntry = { text: journalText, date: currentDate };
        journalEntries.push(newEntry);
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
        
        addJournalCard(journalText, currentDate);
        alert('Journal entry saved!');
    } else {
        alert('Please write something in the journal before saving.');
    }
}

function addJournalCard(text, date) {
    const journalContainer = document.getElementById('journalContainer');
    const card = document.createElement('div');
    card.className = 'card';
    card.style.display = 'block';

    const title = document.createElement('h3');
    title.className = 'journaltitle';
    title.textContent = 'Journal Entry';

    const content = document.createElement('p');
    content.className = 'journalcontent';
    content.textContent = text;

    const journalDate = document.createElement('div');
    journalDate.className = 'journaldate';
    journalDate.textContent = date;

    card.appendChild(title);
    card.appendChild(content);
    card.appendChild(journalDate);

    journalContainer.appendChild(card);
}