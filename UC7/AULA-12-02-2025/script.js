const url = 'https://api.openweathermap.org/data/2.5/weather?q=fortaleza&appid=a9192884da52b5a82b8118bb5b1badde&units=metric';

fetch(url)
    .then(response => response.json())
    .then(data=>{
        const temperatura = data.main.temp;
        const descricao = data.weather[0].description;
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "A temperatura de fortaleza é" ${temperatura}"°C e o clima está "${descricao}";
    })
    .catch(error=>{
        console.log('houve um erro', error);
    }) 