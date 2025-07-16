import { jsPDF } from "jspdf";
import type { SkillCategory, Experience, EducationItem, Project } from "@/data/portfolio-data";

interface ResumeData {
  skills: SkillCategory[];
  experience: Experience[];
  education: EducationItem[];
  projects: Project[];
}

// Margins and layout constants
const MARGIN = 20;
const FONT_SIZES = {
  name: 24,
  header: 16,
  subheader: 12,
  body: 10,
  meta: 9,
};
const LINE_HEIGHT = 1.5;
const SECTION_SPACING = 10;
const BULLET = "•";

// Helper function to add a new section with a heading
const addSection = (doc: jsPDF, title: string, startY: number): number => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT_SIZES.header);
  doc.text(title, MARGIN, startY);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, startY + 2, doc.internal.pageSize.getWidth() - MARGIN, startY + 2);
  return startY + 8;
};

// Helper to handle page breaks
const checkAndAddPage = (doc: jsPDF, currentY: number): number => {
  if (currentY > doc.internal.pageSize.getHeight() - MARGIN) {
    doc.addPage();
    return MARGIN;
  }
  return currentY;
};

export const generateResumePdf = (data: ResumeData): void => {
  const doc = new jsPDF("p", "mm", "a4");
  let y = MARGIN;

  // --- Name and Title ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT_SIZES.name);
  doc.text("Rohit Singh Pal", MARGIN, y);
  y += FONT_SIZES.name / 2;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_SIZES.subheader);
  doc.text("Frontend Software Developer", MARGIN, y);
  y += SECTION_SPACING;

  // --- About Section ---
  y = addSection(doc, "About", y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT_SIZES.body);
  const aboutText = "Passionate and dedicated Frontend Software Developer with over 4 years of progressive experience in building robust, user-focused web applications. Specializes in React.js, Redux, and modern frontend technologies, delivering high-performance interfaces for enterprise-grade products. Thrives in fast-paced environments and believes in continuous learning, adaptability, and solving real-world problems through clean and scalable code.";
  const splitAbout = doc.splitTextToSize(aboutText, doc.internal.pageSize.getWidth() - MARGIN * 2);
  doc.text(splitAbout, MARGIN, y);
  y += doc.getTextDimensions(splitAbout).h + SECTION_SPACING;

  // --- Professional Experience Section ---
  y = checkAndAddPage(doc, y);
  y = addSection(doc, "Professional Experience", y);
  data.experience.forEach(job => {
    y = checkAndAddPage(doc, y);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_SIZES.subheader);
    doc.text(job.role, MARGIN, y);
    y += FONT_SIZES.subheader / 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT_SIZES.meta);
    doc.text(`${job.company} | ${job.period} | ${job.location}`, MARGIN, y);
    y += FONT_SIZES.meta / 2 + 2;

    doc.setFontSize(FONT_SIZES.body);
    job.description.forEach(desc => {
      y = checkAndAddPage(doc, y);
      const splitDesc = doc.splitTextToSize(desc, doc.internal.pageSize.getWidth() - MARGIN * 2 - 5);
      doc.text(`${BULLET} ${splitDesc}`, MARGIN + 5, y);
      y += doc.getTextDimensions(splitDesc).h * 0.8;
    });
    y += 5;
  });
  y += SECTION_SPACING - 5;

  // --- Skills Section ---
  y = checkAndAddPage(doc, y);
  y = addSection(doc, "Skills", y);
  let skillLine = "";
  data.skills.forEach(category => {
    category.list.forEach(skill => {
      const skillText = `${skill.name}, `;
      if (doc.getTextWidth(skillLine + skillText) > doc.internal.pageSize.getWidth() - MARGIN * 2) {
        doc.text(skillLine.slice(0, -2), MARGIN, y);
        y += FONT_SIZES.body / 2;
        skillLine = skillText;
      } else {
        skillLine += skillText;
      }
    });
  });
  doc.text(skillLine.slice(0, -2), MARGIN, y);
  y += doc.getTextDimensions(skillLine).h + SECTION_SPACING;

  // --- Highlighted Projects Section ---
  y = checkAndAddPage(doc, y);
  y = addSection(doc, "Highlighted Projects", y);
  data.projects.forEach(project => {
    y = checkAndAddPage(doc, y);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_SIZES.subheader);
    doc.text(project.title, MARGIN, y);
    y += FONT_SIZES.subheader / 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT_SIZES.body);
    project.description.forEach(desc => {
      y = checkAndAddPage(doc, y);
      const splitDesc = doc.splitTextToSize(desc, doc.internal.pageSize.getWidth() - MARGIN * 2 - 5);
      doc.text(`${BULLET} ${splitDesc}`, MARGIN + 5, y);
      y += doc.getTextDimensions(splitDesc).h * 0.8;
    });

    doc.setFont("helvetica", "bold");
    doc.text(`Tech Stack:`, MARGIN + 5, y);
    doc.setFont("helvetica", "normal");
    doc.text(project.tech.join(", "), MARGIN + 5 + doc.getTextWidth(`Tech Stack: `) + 1, y);
    y += 5;
  });
  y += SECTION_SPACING - 5;


  // --- Education Section ---
  y = checkAndAddPage(doc, y);
  y = addSection(doc, "Education", y);
  data.education.forEach(edu => {
    y = checkAndAddPage(doc, y);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(FONT_SIZES.body);
    doc.text(edu.degree, MARGIN, y);
    y += FONT_SIZES.body / 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT_SIZES.meta);
    doc.text(`${edu.institution} | ${edu.period}`, MARGIN, y);
    y += FONT_SIZES.meta / 2 + 5;
  });

  // Save the PDF
  doc.save("Rohit_Singh_Pal_Resume.pdf");
};
