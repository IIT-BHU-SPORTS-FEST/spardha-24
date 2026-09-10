// src/components/LandingPages/Team/teamData.js

export const teamData = [
  {
    vertical: "Secretaries & Leadership",
    members: [
      {
        id: 1,
        name: "Tatsam Ranjan Sharma",
        position: "General Secretary",
        photo: "/assets/team/tatsam.jpg", // Replace with image path or web URL
        email: "tatsam.sharma.spardha@gmail.com",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/"
      },
      {
        id: 2,
        name: "Talin Sharma",
        position: "Deputy General Secretary",
        photo: "/assets/team/talin.jpg",
        email: "talin.sharma@gmail.com",
        linkedin: "https://linkedin.com/in/",
        instagram: "" // Left blank if not provided
      },
      {
        id: 3,
        name: "Dushyant Soni",
        position: "Deputy General Secretary (PG)",
        photo: "/assets/team/dushyant.jpg",
        email: "dushyant.soni@gmail.com",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/"
      }
    ]
  },
  {
    vertical: "Events & Competitions",
    members: [
      {
        id: 4,
        name: "Aarav Mehta",
        position: "Events Head",
        photo: "/assets/team/aarav.jpg",
        email: "aarav.mehta@spardha.in",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/"
      },
      {
        id: 5,
        name: "Riya Verma",
        position: "Events Convenor",
        photo: "", // Falls back to default avatar placeholder
        email: "riya.verma@spardha.in",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/"
      }
    ]
  },
  {
    vertical: "Marketing & Sponsorship",
    members: [
      {
        id: 6,
        name: "Vikramaditya Singh",
        position: "Sponsorship Head",
        photo: "/assets/team/vikram.jpg",
        email: "sponsorship@spardha.in",
        linkedin: "https://linkedin.com/in/",
        instagram: ""
      }
    ]
  },
  {
    vertical: "Public Relations & Operations",
    members: [
      // Row 14 skipped as requested
      {
        id: 15,
        name: "Ananya Roy",
        position: "PR Head",
        photo: "/assets/team/ananya.jpg",
        email: "pr@spardha.in",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/"
      }
    ]
  }
];

// Helper logic to ensure entry #14 is excluded
export const getFilteredTeamData = () => {
  return teamData.map((category) => ({
    ...category,
    members: category.members.filter((member) => member.id !== 14)
  }));
};