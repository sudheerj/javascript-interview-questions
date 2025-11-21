cat > jaw-dropping-questions.md << 'EOF'

cat > jaw-dropping-questions.md << 'EOF'
# Jaw-Dropping JavaScript Interview Questions

Here are some advanced and surprising JavaScript interview questions I recently encountered.

## 1. Why does [] == ![] evaluate to true?
Answer: Because [] becomes "", ![] becomes false → "" == false → true.

## 2. What is event loop starvation?
Answer: When microtasks continuously run and block macrotasks from executing.

## 3. Difference between microtask queue and macrotask queue?
Answer: Microtasks run immediately after current execution; macrotasks run in next event loop step.

## 4. Why is typeof null === "object"?
Answer: Legacy bug from the first JS implementation; null was represented as a null pointer.

## 5. What happens when you delete an array index?
Answer: It leaves a hole (empty slot), does NOT reindex the array.

## 6. Explain Temporal Dead Zone with an example.
Answer: A period between variable creation and initialization where using `let`/`const` throws ReferenceError.
