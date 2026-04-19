const cine = localStorage.getItem("cinema");
if (cine == null){
    window.location.href = "/EcoCine/cines";
}