import GitHubSlugger from "github-slugger";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const slugger = new GitHubSlugger();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "../README.md");

const TOC_START_MARKER = "<!-- TOC_START -->";
const TOC_END_MARKER = "<!-- TOC_END -->";
const QUESTIONS_START_MARKER = "<!-- QUESTIONS_START -->";
const QUESTIONS_END_MARKER = "<!-- QUESTIONS_END -->";
const QUESTION_TITLE_HEADING_LEVEL = "###";

const rawFile = fs.readFileSync(filePath).toString();

const fileAsLines = rawFile.split("\n");

const tocStartIndex = fileAsLines.findIndex(
  (line) => line === TOC_START_MARKER
);
const tocEndIndex = fileAsLines.findIndex((line) => line === TOC_END_MARKER);

const questionsStartIndex = fileAsLines.findIndex(
  (line) => line === QUESTIONS_START_MARKER
);
const questionsEndIndex = fileAsLines.findIndex(
  (line) => line === QUESTIONS_END_MARKER
);

if (
  [tocStartIndex, tocEndIndex, questionsStartIndex, questionsEndIndex].some(
    (index) => index === -1
  )
) {
  throw "One of the crucial indices markers not found";
}

const questions = [];
let currentQuestion = 0;

// Collect the question titles and numbers into an array.
// Also automatically renames the title line if the number is out-of-order.
for (
  let lineNumber = questionsStartIndex;
  lineNumber < questionsEndIndex;
  lineNumber++
) {
  const line = fileAsLines[lineNumber];
  if (line.includes(` ${QUESTION_TITLE_HEADING_LEVEL} `)) {
    currentQuestion++;
    const lineParts = line.split(` ${QUESTION_TITLE_HEADING_LEVEL} `);
    const questionTitle = lineParts[1];
    const questionSlug = slugger.slug(questionTitle);
    questions.push({
      number: currentQuestion,
      title: questionTitle,
      slug: questionSlug,
    });

    fileAsLines[lineNumber] =
      currentQuestion + `. ${QUESTION_TITLE_HEADING_LEVEL} ` + questionTitle;
  }
}

// Create lines for table of contents using the collected questions.
const tableOfContentsLines = ["| No. | Questions |", "| --- | --------- |"];

questions.forEach(({ number, title, slug }) =>
  tableOfContentsLines.push(`| ${number} | [${title}](#${slug}) |`)
);

// Create resulting file and write to file system.
const outputFileLines = [
  ...fileAsLines.slice(0, tocStartIndex + 1),
  ...tableOfContentsLines,
  ...fileAsLines.slice(tocEndIndex),
];

const outputFile = outputFileLines.join("\n");

fs.writeFileSync(filePath, outputFile);
console.info(`Processed ${tableOfContentsLines.length} questions.`);
