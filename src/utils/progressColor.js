export function getProgressColorClass(percent) {
    if (percent >= 80) return "blue";
    if (percent >= 50) return "green";
    if (percent >= 25) return "purple";
    if (percent >= 10) return "amber";

    return "red";
}
