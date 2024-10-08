function calculateDiscount() {
  let final = document.getElementById('final');
  let vize = document.getElementById('vize');
  let result = ((final.value * 0.6) +(vize.value * 0.4));

//  inputtan deger almak istiyorsan (veri.value kullanilir)

  if (result >= 50) {
    alert('Tebrikler sınıfı geçtiniz');
  } else  if (result>= 40){
    alert('Şartlı geçtiniz');
  }
  else{
    alert('Kaldınız')
  }
}