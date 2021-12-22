
function opendata(){
    let data = document.getElementById("view");
    let url ="http://localhost:8080/datamahasiswa/json";
    
    $.getJSON(url, function(result){
        console.log(result)
        $.each(result, function(a){
            
            data.innerHTML += "<br>" +
            "NIM :" + result[a].nim + 
            ", Nama : " + result[a].nama + 
            ", Alamat :" + result[a].alamat + 
            ", Program Studi :" + result[a].programstudi + 
            ", Fakultas :" + result[a].fakultas       
        })
        
        
        if (data.style.display === "none") {
            data.style.display = "block";
        } 
        
        document.getElementById("elementId").style.display = 'none';
        

    })
    
}
function hide(){
    let data = document.getElementById("view");
    if (data.style.display = "none")
    
    document.getElementById("elementId").style.display = 'none';

}



