/* 
Instructions:
- input 
    - first name
    - last name 
    - ID number
    - job title
    - annual salary

- submit 
    - collect form information
    - calculate monthly cost
        - show on DOM
    - clear inputs 

    ## restriction ##
        - if monthly cost exceeds 20,000 
                - make background red

- add remove button 
    - remove employ from list 
    
*/

$(onReady);

function onReady(){
    console.log('hello world');
    $('#submit-btn').on('click', getInputs);
}

// employees added to the rendered table
let employeeData = [];

function getInputs(){
    // prevents page from reloading
    event.preventDefault();

    // creates an array of all the input values
    let inputs = {};

    let fname = $("#fname").val();      // index 0
    let lname = $("#lname").val();      // index 1
    let employID = $("#ID").val();      // index 2
    let jobTitle = $("#job").val();     // index 3
    let salary = $("#salary").val();    // index 4
    
    inputs.fname = fname;
    inputs.lname = lname;
    inputs.employID = employID;
    inputs.jobTitle = jobTitle;
    inputs.salary = salary;

    // checks if all input forms are valid
    if(validateForm(inputs)){
        console.log('sending data');
    }
    else{
        alert('inputs not good')
    }

    $('.employee-input').val('')
}

function validateForm(obj){
    let objValues = Object.values(obj)
    for(values of objValues){
        if(values.replace(/\s/g, "") === ''){
            return false;
        }
    }

    return true;
}

function render(){

}

function calcMonthly(){}