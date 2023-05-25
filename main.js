const saatOx = document.querySelector(".saatOx")
const deqiqeOx = document.querySelector(".deqiqeOx")
const saniyeOx = document.querySelector(".saniyeOx")
const dinamikSaat = document.querySelector(".saat")


setInterval(() => {
    let zaman = new Date();
    let saniye = zaman.getSeconds()
    let deqiqe = zaman.getDate()
    let saat = zaman.getHours()
    zamanDegisti(saniye, deqiqe, saat);
}, 1000);

function zamanDegisti(saniye, deqiqe, saat) {
    saniyeOx.style.transform = `rotateZ(${saniye * 6}deg) translateY(-67px)`
    deqiqeOx.style.transform = `rotateZ(${deqiqe * 6}deg) translateY(-60px)`
    saatOx.style.transform = `rotateZ(${saat * 30}deg) translateY(-39px)`
    if (saniye < 10) {
        saniye = "0" + saniye
    }
    if (deqiqe < 10) {
        saniye = "0" + saniye
    } if (saat < 10) {
        saniye = "0" + saniye
    }

    dinamikSaat.textContent = `${saat}:${deqiqe}:${saniye}`
}

