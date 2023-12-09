export function formatUkraineNumber(number: number){
    return number.toString().replace(/^(\d{3})(\d{3})(\d{2})(\d{4})$/, '+$1 $2 $3 $4');
}