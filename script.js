                 //Cargar codigo svg que es una imagen
        fetch('svg-image.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('svg-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el archivo:', error);
            });
        
            //Realiza rando para ir moviendo la imagen
            const saludo = document.getElementById('saludo');
            function moverSaludo() {
                saludo.style.position = 'absolute';
                saludo.style.top = Math.random() * window.innerHeight + 'px';
                saludo.style.left = Math.random() * window.innerWidth + 'px';
            }
            setInterval(moverSaludo, 1000);
   