import fs from "fs";
import path from "path";

export async function generateCSV(prompt: string) {
  const outputDir = path.join(process.cwd(), "public", "outputs", "csv");
  fs.mkdirSync(outputDir, { recursive: true });

  const filename = `csv-${Date.now()}.csv`;
  const filePath = path.join(outputDir, filename);

  let csvContent = "City,Population\n";

  if (prompt.toLowerCase().includes("indian")) {
    csvContent += `
Mumbai,20411000
Delhi,16787941
Bengaluru,12102500
Kolkata,14958125
Chennai,10850000
Hyderabad,10400000
Ahmedabad,8150000
Pune,3115000
Jaipur,3170000
Surat,6740000
`.trim();
  } else {
    csvContent += "Example,1000";
  }

  fs.writeFileSync(filePath, csvContent, "utf8");

  return {
    filePath,
    downloadUrl: `/outputs/csv/${filename}`,
  };
}
