(function() {

    // Question 1
    // Update the page title to say "YOUR NAME - Test 1"
    // Update the navbar title to say "YOUR NAME"
    document.title = "Aman Gulati - Test 1";
    document.querySelector('.navbar-brand').innerText = "Aman Gulati";


    // Question 2    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    var testTable = document.getElementById('test-table');
    var secondRow = testTable.getElementsByTagName('tr')[1];
    secondRow.getElementsByTagName('td')[0].innerText = '100100100';


    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
    var newRow = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.innerText = 'Aman';
    var lastNameCell = document.createElement('td');
    lastNameCell.innerText = 'Gulati';
    var bannerIdCell = document.createElement('td');
    bannerIdCell.innerText = '100886369';
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(bannerIdCell);
    testTable.getElementsByTagName('tbody')[0].appendChild(newRow);


    // Question 4
    // remove Alice Bobberts from the table
    var aliceRow = testTable.querySelector('tr:nth-child(3)');
    aliceRow.parentNode.removeChild(aliceRow);


    // Question 5
    // add the .table-info class to your personal row
    newRow.classList.add('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    var adamRow = testTable.querySelector('tr:nth-child(1)');
    adamRow.classList.remove('table-warning');


    // Question 7
    // change .table-dark to .table-success for John Doe's row
    var johnRow = testTable.querySelector('tr:nth-child(2)');
    johnRow.classList.remove('table-dark');
    johnRow.classList.add('table-success');


    // Question 8
    // use the node pacakge manager to install a new package, holderjs (see https://www.npmjs.com/package/holderjs)
    // include the holder script at the bottom of index.html
    // under the container div holding the test-table, create another container div, and create an image place"holder".

})();
