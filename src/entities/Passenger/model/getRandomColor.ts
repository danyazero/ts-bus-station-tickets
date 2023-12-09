export function getRandomColor(): string {
    const colors: string[] = ["#0bbe75", "#f19097", "#8e96a0", "#5438dc", "#e74e58"]
    const random_num = Math.floor(Math.random() * 5);
    return colors[random_num]
}