export function getFirstLetters(full_name: string){
    const full_name_array : string[] = full_name.split(" ")
    return full_name_array[0][0] + full_name_array[1][0]
}