function validateForm() { 
    var fIsim = document.forms["iletisimform"]["isim"].value;
    var fSoyisim = document.forms["iletisimform"]["soyisim"].value;
    var fEmail = document.forms["iletisimform"]["email"].value;
    var fMesaj = document.forms["iletisimform"]["mesaj"].value;
    if (fIsim == null || fIsim == "")  
    {
        alert("Hata! İsim alanı boş bırakılamaz lütfen isminizi giriniz."); 
        return false;
    }
    if (fSoyisim==null|| fSoyisim =="") 
        {
            alert("Hata! Soyisim alanı boş bırakılamaz lütfen soyisminizi giriniz."); 
            return false;
        }
    if (fEmail==null||fEmail=="")
    {
        alert("Hata! Email alanı boş bırakılamaz lütfen emailinizi giriniz."); 
    }
     if (fMesaj==null||fMesaj=="") 
    {
        alert("Hata! Mesaj alanı boş bırakılamaz lütfen iletmek istediğiniz mesajı giriniz."); 
        return false;
    }   
}
