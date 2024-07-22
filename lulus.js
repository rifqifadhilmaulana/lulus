const mahasiswa = (nama,nilai) =>{
    if(nilai >= 60){
        return `selamat ${nama},anda lulus dengan nilai ${nilai}`
    }else{
        return`${nama}anda tidak lulus karna nilai anda jelek `
    }
    
}
console.log(mahasiswa("rifqi",60));