function search(){
    var myInput,filter,table,tr,td,text,i;
    myInput = document.getElementById("myInput");
    filter = myInput.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for( i = 0; i < tr.length;i++){
        tr[i].style.display = "";
        td = tr[i].getElementsByTagName("td")[1];
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