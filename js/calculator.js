const calculateAge = () => {

    let day = document.getElementById('date').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    let date = new Date();
    let day2 = date.getDate();
    let month2 = 1 + date.getMonth();
    let year2 = date.getFullYear();
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (day > day2){
        day2 = day2 + months[month2 - 1]
        month2 = month2 - 1;
    }

    if (month > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }

    let d = day2 - day;
    let m = month2 - month;
    let y = year2 - year;


    document.getElementById('displayAge').innerText = `Your Age is ${y} Years, ${m} Months and ${d} Days`;
}