function makeTable(container, data) {
    var table = $("<table/>").addClass('myTable');
    $.each(data, function(rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function(colIndex, c) { 
            row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

$(document).ready(function() {
    var data = [
        ["Name","Roll No", "Year"],
        ["Aakarsh singh", "170003","Y17"],
        ["Aayush Sharma", "170010","Y17"],
        ["ACHYUT KR VERMA", "170041","Y17"],
        ["Archit Awasthi" ,"170144","Y17"],
        ["Dikshant Sachan", "170250","Y17"],
        ["GEETAM" ,"170274","Y17"],
        ["Jayant Kumar Goyal", "170322","Y17"],
        ["Pragyan Pandey", "170478","Y17"],

        ["Pratigya Tomar", "170499","Y17"],
        ["Rahul Rohit" ,"170531","Y17"],
        ["Ritesh Kumar" ,"170576","Y17"],
        ["Sajal Chaurasia", "170609","Y17"],
        ["Sameer Kumar Singh" ,"170618","Y17"],
        ["Snehil Saluja" ,"170707","Y17"],
        ["Yash Maheshwari","170817","Y18"],
        ["Aaryan Srivastava", "180007","Y18"],
        ["Abhishek Mittal" ,"180022","Y18"],
        ["Abhishek Shah" ,"180025","Y18"],
        ["Aditya Dikshit" ,"180035","Y18"],
        ["Akshat Kumar" ,"180063","Y18"],
        ["Aman Verma" ,"180075","Y18"],
        ["Anjali Devra", "180094","Y18"],
        ["Ankur Banga", "180108","Y18"],
        ["Archit Bansal", "180134","Y18"],
        ["Aryaman Shandilya", "180143","Y18"],
        ["AVINANDAN BOSE", "180165","Y18"],
        ["Ayush Saxena" ,"180177","Y18"],
        ["Hutesh Sandhu", "180302","Y18"],
        ["Ishanh Misra", "180313","Y18"],
        ["K. Krishna Dhakshin", "180334","Y18"],
        ["Kaustav Sen", "180351","Y18"],
        ["Manas Agarwal", "180401","Y18"],
        ["Nallapati Chaitanya Sathvik" ,"180456","Y18"]

        

    ]
    var Table = makeTable($(document.body), data);
});

function search(){
    var myInput,filter,table,tr,td,text,i;
    myInput = document.getElementById("myInput");
    filter = myInput.value.toUpperCase();
    table = document.getElementsByClassName("myTable")[0];
    tr = table.getElementsByTagName("tr");
    for( i = 0; i < tr.length;i++){
        tr[i].style.display = "";
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            text = td.textContent || td.innerText;
            if(text.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
             }
             else{
                 tr[i].style.display = "none";
             }
        }

    }
    
}


