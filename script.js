

function volume_sphere() {
    event.preventDefault(); 

    let raddd = document.getElementById("radius").value;
    let vol = document.getElementById("volume");

    let r = Number(raddd);
    if (isNaN(r) || r < 0) {
        vol.value = "NaN";
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    vol.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
