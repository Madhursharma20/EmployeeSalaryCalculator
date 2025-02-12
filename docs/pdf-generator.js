import jsPDF from "jspdf";
import "jspdf-autotable";

export function generatePDF() {
    const doc = new jsPDF();
    doc.text("Employee Salary Report", 10, 10);
    doc.autoTable({ html: "#salaryTable" });
    doc.save("salary-report.pdf");
}
