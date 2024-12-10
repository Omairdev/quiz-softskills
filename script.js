document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const correctAnswers = {
        q1: "C", q2: "B", q3: "C", q4: "D", q5: "B",
        q6: "C", q7: "C", q8: "B", q9: "A", q10: "B",
        q11: "A", q12: "A", q13: "B", q14: "B", q15: "B",
        q16: "B", q17: "B", q18: "A", q19: "B", q20: "B",
        q21: "B", q22: "C", q23: "B", q24: "B", q25: "C"
    };

    const subdomains = {
        Communication: ["q1", "q2", "q3", "q4", "q5"],
        Leadership: ["q6", "q7", "q8", "q9", "q10"],
        EmotionalIntelligence: ["q11", "q12", "q13", "q14", "q15"],
        ConflictResolution: ["q16", "q17", "q18", "q19", "q20"],
        PersuasiveSpeaking: ["q21", "q22", "q23", "q24", "q25"]
    };

    const scores = {
        Communication: 0,
        Leadership: 0,
        EmotionalIntelligence: 0,
        ConflictResolution: 0,
        PersuasiveSpeaking: 0
    };

    let totalCorrect = 0;

    // Calculate scores
    for (const subdomain in subdomains) {
        subdomains[subdomain].forEach((question) => {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === correctAnswers[question]) {
                scores[subdomain]++;
                totalCorrect++;
            }
        });
    }

    // Save results in localStorage
    localStorage.setItem("quizResults", JSON.stringify(scores));
    localStorage.setItem("totalCorrect", totalCorrect);

    // Redirect to results page
    window.location.href = "./results.html";
});
