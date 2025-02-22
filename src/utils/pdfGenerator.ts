// import { jsPDF } from "jspdf";
// import autoTable from "jspdf-autotable";

// interface ProjectDetails {
//   type: string;
//   pages: number;
//   features: string[];
//   basePrice: number;
//   featuresPrice: number;
//   pagesPrice: number;
//   totalPrice: number;
//   email: string;
//   selectedFeatureDetails: Array<{ name: string; price: number }>;
// }

// export const generatePDF = (projectDetails: ProjectDetails) => {
//   try {
//     const doc = new jsPDF({
//       orientation: "portrait",
//       unit: "mm",
//       format: "a4",
//     });

//     // Add font that supports Czech characters
//     doc.setFont("helvetica");
//     doc.setLanguage("cs");

//     // Header
//     doc.setFontSize(24);
//     doc.text("Cenová kalkulace projektu", 20, 30);

//     // Project details
//     doc.setFontSize(12);
//     doc.text(`Datum: ${new Date().toLocaleDateString("cs-CZ")}`, 20, 50);
//     doc.text(`Typ projektu: ${projectDetails.type}`, 20, 60);
//     doc.text(`Počet stránek: ${projectDetails.pages}`, 20, 70);

//     // Pricing table
//     const tableData = [
//       [
//         { content: "Položka", styles: { fontStyle: "bold" } },
//         { content: "Cena (Kč)", styles: { fontStyle: "bold" } },
//       ],
//       ["Základní cena", projectDetails.basePrice.toLocaleString()],
//     ];

//     if (projectDetails.selectedFeatureDetails?.length > 0) {
//       projectDetails.selectedFeatureDetails.forEach((feature) => {
//         tableData.push([feature.name, feature.price.toLocaleString()]);
//       });
//     }

//     if (projectDetails.pagesPrice > 0) {
//       tableData.push([
//         `Stránky navíc (${projectDetails.pages - 5})`,
//         projectDetails.pagesPrice.toLocaleString(),
//       ]);
//     }

//     autoTable(doc, {
//       startY: 80,
//       head: [tableData[0]],
//       body: tableData.slice(1),
//       styles: {
//         font: "helvetica",
//         fontSize: 11,
//         cellPadding: 8,
//       },
//       headStyles: {
//         fillColor: [51, 51, 51],
//         textColor: [255, 255, 255],
//         fontStyle: "bold",
//       },
//       columnStyles: {
//         0: { cellWidth: 120 },
//         1: { cellWidth: 50, halign: "right" },
//       },
//       margin: { left: 20, right: 20 },
//     });

//     const finalY =
//       (doc as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
//         .finalY + 20;

//     // Total price
//     doc.setFontSize(14);
//     doc.setFont("helvetica", "bold");
//     doc.text(
//       `Celková cena: ${projectDetails.totalPrice.toLocaleString()} Kč`,
//       20,
//       finalY
//     );

//     // Add disclaimer with word wrap
//     doc.setFontSize(10);
//     doc.setFont("helvetica", "normal");
//     const disclaimer =
//       "Tato kalkulace je předběžná a může se měnit v závislosti na konkrétních požadavcích projektu.";
//     doc.text(disclaimer, 20, finalY + 20, {
//       maxWidth: 170,
//       lineHeightFactor: 1.5,
//     });

//     return doc;
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     throw error;
//   }
// };
