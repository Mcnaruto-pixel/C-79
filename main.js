my_student_name_array = [];

function submit(){
var student_name1 = document.getElementById("name_of_the_student1").value;
var student_name2 = document.getElementById("name_of_the_student2").value;
var student_name3 = document.getElementById("name_of_the_student3").value;
var student_name4 = document.getElementById("name_of_the_student4").value;

my_student_name_array.push(student_name1);
my_student_name_array.push(student_name2);
my_student_name_array.push(student_name3);
my_student_name_array.push(student_name4);

document.getElementById("Div_2").innerHTML = my_student_name_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sort(){
my_student_name_array.sort();
document.getElementById("Div_2").innerHTML = my_student_name_array;
}