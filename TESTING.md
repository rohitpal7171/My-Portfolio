# AI Assistant Test Cases

This document outlines the manual test cases for the "Ask my AI Assistant" feature on the portfolio website.

**Feature:** AI Assistant
**Component:** `src/features/portfolio/AiAssistant.tsx`

---

### Test Case 1: Successful Response (Happy Path)

*   **Objective:** Verify that the AI provides a relevant answer to a valid, portfolio-related question.
*   **Steps:**
    1.  Navigate to the homepage.
    2.  Locate the "Ask my AI Assistant" card.
    3.  In the input field, type a relevant question, such as: `"What are Rohit's top skills?"` or `"Tell me about his experience at MikeLegal."`
    4.  Click the "Send" button.
*   **Expected Result:**
    *   A loading indicator should appear briefly (e.g., "Thinking...").
    *   A professional, helpful, and accurate response based on the portfolio data should be displayed in the response box with a typewriter animation effect.
    *   The answer should directly address the question asked.

---

### Test Case 2: Empty Input Submission

*   **Objective:** Verify that the form handles empty submissions gracefully.
*   **Steps:**
    1.  Navigate to the homepage.
    2.  Locate the "Ask my AI Assistant" card.
    3.  Ensure the input field is empty.
    4.  Click the "Send" button.
*   **Expected Result:**
    *   The form should not submit.
    *   An HTML5 validation message (e.g., "Please fill in this field.") should appear, preventing submission.
    *   No API call should be made. The response box content should not change.

---

### Test Case 3: Off-Topic Question

*   **Objective:** Verify that the AI politely declines to answer questions that are not related to the portfolio content.
*   **Steps:**
    1.  Navigate to the homepage.
    2.  Locate the "Ask my AI Assistant" card.
    3.  In the input field, type an off-topic question, such as: `"What is the capital of France?"` or `"Can you write me a poem?"`
    4.  Click the "Send" button.
*   **Expected Result:**
    *   A loading indicator should appear briefly.
    *   The AI should respond by politely stating that it can only answer questions about Rohit's professional portfolio and guide the user back to relevant topics.

---

### Test Case 4: UI Loading State

*   **Objective:** Verify that the user interface provides clear feedback while the AI response is being generated.
*   **Steps:**
    1.  Navigate to the homepage.
    2.  Locate the "Ask my AI Assistant" card.
    3.  Type a valid question into the input field.
    4.  Click the "Send" button and immediately observe the UI.
*   **Expected Result:**
    *   The "Send" button should become disabled and show a loading spinner (e.g., `Loader2` icon).
    *   The input field should become disabled.
    *   The response box should clear its previous content and may show a "Thinking..." or similar loading message.
    *   Once the response is received, all controls should return to their normal, active state.

---

### Test Case 5: Response Display and Animation

*   **Objective:** Verify that the AI's response is displayed with the intended typewriter animation.
*   **Steps:**
    1.  Navigate to the homepage.
    2.  Ask a valid question that will result in a multi-word response.
    3.  Observe how the response appears in the text area.
*   **Expected Result:**
    *   The response should not appear all at once.
    *   The text should be "typed" out character by character, creating a dynamic effect.
    *   A blinking cursor should be visible at the end of the line while typing.
