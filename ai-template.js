async function generateTemplate() {
    const title = document.getElementById("templateTitle").value.trim();
    const description = document.getElementById("templateDescription").value.trim();
    const resultDiv = document.getElementById("templateResult");
    const outputSection = document.querySelector(".generated-template");
    if (!title || !description) {
        alert("Please provide both a title and a description.");
        return;
    }
    resultDiv.innerHTML = "<p>Generating template, please wait...</p>";
    outputSection.classList.remove("hidden");
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer YOUR_OPENAI_API_KEY` 
            },
            body: JSON.stringify({
                model: "gpt-4",
                prompt: `Create a structured document template based on the following details:\n\nTitle: ${title}\nDescription: ${description}\n\nGenerate a clear and structured template that fits this description.`,
                max_tokens: 500
            })
        });
        const data = await response.json();
        resultDiv.innerHTML = `<pre>${data.choices[0].text.trim()}</pre>`;
    } catch (error) {
        resultDiv.innerHTML = `<p>Error generating template. Please try again.</p>`;
        console.error("Error:", error);
    }
}
document.getElementById("datasetUpload").addEventListener("change", function () {
    alert("Dataset Selected: " + this.files[0].name);
});
function goToSettings() {
    window.location.href = "settings.html";
}
function goToDashboard() {
    window.location.href = "dashboard.html";
}
