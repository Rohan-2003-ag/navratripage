// Theme switching functionality
document.getElementById('theme1').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/goddess-durga-face-happy-durga-puja-subh-navratri-indian-festival-photos-images-pictures_1157715-10509.jpg?size=626&ext=jpg&ga=GA1.1.2086728415.1728027628&semt=ais_hybrid')";
    document.getElementById('greeting').innerText = "Wishing you a vibrant Navratri!";
});

document.getElementById('theme2').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/goddess-durga-face-happy-durga-puja-subh-navratri-indian-festival-photos-images-pictures_1157715-10495.jpg?size=626&ext=jpg&ga=GA1.1.2086728415.1728027628&semt=ais_hybrid')";
    document.getElementById('greeting').innerText = "May Goddess Durga bless you with peace!";
});

document.getElementById('theme3').addEventListener('click', function() {
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/happy-durga-puja-navratri-indian-festival-celebration-vector-background-banner-card-illustration_1280710-5228.jpg?size=626&ext=jpg&ga=GA1.1.2086728415.1728027628&semt=ais_hybrid')";
    document.getElementById('greeting').innerText = "Celebrate Navratri with joy and devotion!";
});
