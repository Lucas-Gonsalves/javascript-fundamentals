let date = new Date("2024-07-02T14:30:10")

console.lod(date.toLocaleDateString()) // show only date on 'dd/mm/yyyy' format

console.lod(date.toLocaleTimeString()) // show only time on 'hh/mm/ss' format

// display date and hour in choosen format
console.log(date.toLocaleDateString("en")) // show only date on 'mm/dd/yyyy' format
console.log(date.toLocaleTimeString("en")) // show only date on 'hh(0-12)/mm/ss' PM/AM  format