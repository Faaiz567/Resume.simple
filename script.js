var _a;
// Function to load and display profile picture
function loadImage(event) {
    var image = document.createElement("img");
    var target = event.target;
    if (target.files) {
        var file = target.files[0];
        image.src = URL.createObjectURL(file);
        image.onload = function () {
            var profileImagePreview = document.getElementById("profileImagePreview");
            profileImagePreview.innerHTML = ''; // Clear existing image
            profileImagePreview.appendChild(image);
        };
    }
}
// Function to update resume preview with user input
function updatePreview() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value.split(',');
    document.getElementById("previewName").innerText = name;
    document.getElementById("previewAge").innerText = age;
    document.getElementById("previewContact").innerText = "Contact: ".concat(contact);
    document.getElementById("previewEmail").innerText = "Email: ".concat(email);
    document.getElementById("previewExperience").innerText = experience;
    document.getElementById("previewEducation").innerText = education;
    // Populate skills in the preview section
    var skillsList = document.getElementById("previewSkills");
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var listItem = document.createElement("li");
        listItem.innerText = skill.trim();
        skillsList.appendChild(listItem);
    });
}
// Function to generate PDF using html2pdf library
function generateResume() {
    var resumeElement = document.getElementById("resume");
    html2pdf().from(resumeElement).save("Resume.pdf");
}
// Event listeners to update preview on input changes
document.querySelectorAll("input, textarea").forEach(function (input) {
    input.addEventListener("input", updatePreview);
});
// Event listener for image upload
(_a = document.getElementById("profile-pic")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (event) {
    loadImage(event);
});
