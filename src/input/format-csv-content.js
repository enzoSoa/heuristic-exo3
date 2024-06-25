export function formatCsvContent(content) {
    const formatedContent = content.split(";").map((data) => Number(data));
    if (formatedContent.some((num) => isNaN(num))) throw new Error("CSV content is incorrect it should only contain numbers separated with commas");
    return formatedContent;
}