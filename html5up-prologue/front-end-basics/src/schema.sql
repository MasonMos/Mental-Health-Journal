

CREATE DATABASE mental_journal;
USE mental_journal;

CREATE TABLE journal_entries(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    response TEXT NOT NULL
);

INSERT INTO journal_entries (question, response)
VALUES
("Test Entry 1", "I'm so tired"),
("Test Entry 2", "I want to sleep");

-- @block
SELECT * FROM journal_entries;