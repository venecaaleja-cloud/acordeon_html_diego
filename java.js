// 1. Seleccionamos todos los botones (cabeceras) de la página
const botones = document.querySelectorAll('.cabecera-acordeon');

// 2. Recorremos cada botón para añadirle la funcionalidad de clic
botones.forEach(boton => {
    
    boton.addEventListener('click', () => {
        
        // 3. Encontramos el "padre" del botón, es decir, el div .item-acordeon
        // Esto nos permite manipular el bloque completo (pregunta + respuesta)
        const itemActual = boton.parentElement;
        
        // 4. Verificamos si este item ya estaba abierto antes del clic
        // Usamos una variable para guardar este estado (true o false)
        const estabaActivo = itemActual.classList.contains('activo');

        // 5. LA REGLA DE ORO: Cerrar todos los items primero
        // Buscamos todos los items de la página
        const todosLosItems = document.querySelectorAll('.item-acordeon');
        
        // Les quitamos la clase 'activo' a todos
        todosLosItems.forEach(item => {
            item.classList.remove('activo');
        });

        // 6. Abrir solo el que acabamos de clickear
        // Si el item NO estaba activo (es decir, lo acabamos de cerrar en el paso 5)
        if (!estabaActivo) {
            // Le añadimos la clase 'activo' para que se abra
            itemActual.classList.add('activo');
        }
    });
});