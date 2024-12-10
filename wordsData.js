// wordsData.js

const wordsData = [];

// Function to generate placeholder words
function generatePlaceholderWords(level, count) {
  const words = [];
  for (let i = 1; i <= count; i++) {
    words.push({
      german: `Wort${i}_Level${level}`,
      english: `Word${i}_Level${level}`
    });
  }
  return words;
}

// Define difficulty levels based on CEFR
const difficultyLevels = {
  A1: { start: 1, end: 20 },
  A2: { start: 21, end: 40 },
  B1: { start: 41, end: 60 },
  B2: { start: 61, end: 80 },
  C1: { start: 81, end: 100 }
};

// Populate wordsData with 100 levels
for (let level = 1; level <= 100; level++) {
  let difficulty = '';

  // Determine difficulty based on level number
  if (level >= difficultyLevels.A1.start && level <= difficultyLevels.A1.end) {
    difficulty = 'A1';
  } else if (level >= difficultyLevels.A2.start && level <= difficultyLevels.A2.end) {
    difficulty = 'A2';
  } else if (level >= difficultyLevels.B1.start && level <= difficultyLevels.B1.end) {
    difficulty = 'B1';
  } else if (level >= difficultyLevels.B2.start && level <= difficultyLevels.B2.end) {
    difficulty = 'B2';
  } else if (level >= difficultyLevels.C1.start && level <= difficultyLevels.C1.end) {
    difficulty = 'C1';
  }

  // Generate 20 placeholder words for each level
  const words = generatePlaceholderWords(level, 20);

  // Push the level data into wordsData array
  wordsData.push({
    level: level,
    difficulty: difficulty,
    words: words
  });
}

/*
  To populate the actual words, replace the placeholder entries in wordsData.
  For example:
  wordsData[0].words[0] = { german: 'Hallo', english: 'Hello' };
  wordsData[0].words[1] = { german: 'Tschüss', english: 'Goodbye' };
  // Continue for all words in all levels
*/
