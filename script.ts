// Define a type for file input event
type FileInputEvent = Event & {
    target: HTMLInputElement;
  };
  
  // Function to load and display profile picture
  function loadImage(event: FileInputEvent): void {
    const image = document.createElement("img");
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const file = target.files[0];
      image.src = URL.createObjectURL(file);
      image.onload = function () {
        const profileImagePreview = document.getElementById("profileImagePreview") as HTMLElement;
        profileImagePreview.innerHTML = ''; // Clear existing image
        profileImagePreview.appendChild(image);
      };
    }
  }
  
  // Function to update resume preview with user input
  function updatePreview(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = (document.getElementById("age") as HTMLInputElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');
  
    (document.getElementById("previewName") as HTMLElement).innerText = name;
    (document.getElementById("previewAge") as HTMLElement).innerText = age;
    (document.getElementById("previewContact") as HTMLElement).innerText = `Contact: ${contact}`;
    (document.getElementById("previewEmail") as HTMLElement).innerText = `Email: ${email}`;
    (document.getElementById("previewExperience") as HTMLElement).innerText = experience;
    (document.getElementById("previewEducation") as HTMLElement).innerText = education;
  
    // Populate skills in the preview section
    const skillsList = document.getElementById("previewSkills") as HTMLElement;
    skillsList.innerHTML = ''; // Clear existing skills
    skills.forEach(skill => {
      const listItem = document.createElement("li");
      listItem.innerText = skill.trim();
      skillsList.appendChild(listItem);
    });
  }
  
  // Declare html2pdf as any to prevent TypeScript errors
  declare var html2pdf: any;
  
  // Function to generate PDF using html2pdf library
  function generateResume(): void {
    const resumeElement = document.getElementById("resume") as HTMLElement;
    html2pdf().from(resumeElement).save("Resume.pdf");
  }
  
  // Event listeners to update preview on input changes
  document.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", updatePreview);
  });
  
  // Event listener for image upload
  document.getElementById("profile-pic")?.addEventListener("change", (event) => {
    loadImage(event as FileInputEvent);
  });
  