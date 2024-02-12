// Asynkron funktion til at indlæse og omforme datafilen
async function loadData() {
  try {
    const response = await fetch("../data/ddo_fullforms_2023-10-11.csv");
    if (!response.ok) throw new Error('Netværksrespons var ikke ok');
    const rawtext = await response.text();

    // Omdanner rå tekst til array af objekter
    globalArrayOfWords = rawtext.split("\n").map(line => {
      const parts = line.split("\t");
      return {
        variant: parts[0],
        headword: parts[1],
        homograph: parts[2] || undefined, // Sæt til undefined hvis tomt
        partofspeech: parts[3],
        id: parts[4]
      };
    });

    // Efter indlæsning af data, udfør søgning og måling
    performSearches();
  } catch (error) {
    console.error("Fejl under indlæsning af data:", error);
  }
}

// Compare-funktion for binary search
function compare(searchTerm, wordObject) {
  if (searchTerm < wordObject.variant) return -1;
  if (searchTerm > wordObject.variant) return 1;
  return 0;
}

// Implementering af binary search
function binarySearch(array, searchTerm) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparison = compare(searchTerm, array[mid]);

    if (comparison === 0) return mid;
    if (comparison < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1; // Elementet blev ikke fundet
}

// Funktion til at udføre søgninger og måle performance
function performSearches() {
  const searchTerm = "hestevogn"; // Eksempel på søgeterm

  // Måling af binary search
  const startBinary = performance.now();
  const indexBinary = binarySearch(globalArrayOfWords, searchTerm);
  const endBinary = performance.now();
  console.log(`Binary Search tog ${endBinary - startBinary} millisekunder. Fundet på index: ${indexBinary}`);

  // Måling af .find metoden
  const startFind = performance.now();
  const indexFind = globalArrayOfWords.findIndex(wordObject => wordObject.variant === searchTerm);
  const endFind = performance.now();
  console.log(`.find metoden tog ${endFind - startFind} millisekunder. Fundet på index: ${indexFind}`);
}

// Kald loadData for at starte processen
loadData();