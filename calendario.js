// Nombres de los meses del año
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; // Definir los nombres de los meses para visualización

// Mes y año actual que se muestra inicialmente (agosto de 2024)
let currentMonth = 7; // Inicializar el mes actual en agosto (índice 7)
let currentYear = 2024; // Inicializar el año actual en 2024

// Definir el rango de meses y años para mostrar en el calendario
const startMonth = 7; // Establecer el mes de inicio (agosto, índice 7)
const startYear = 2024; // Establecer el año de inicio (2024)
const endMonth = 6; // Establecer el mes de fin (julio, índice 6)
const endYear = 2025; // Establecer el año de fin (2025)

// Objeto que almacena los eventos con su fecha y color
const events = {
  "2024-08-12": { title: "Inicio de semestre", color: "#e2c131" },

    "2024-08-05": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2024-08-06": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2024-08-07": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2024-08-08": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2024-08-09": { title: "Periodo de preinscripción", color: "#c2d5ec" },

    "2025-01-06": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2025-01-07": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2025-01-07": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2025-01-08": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2025-01-09": { title: "Periodo de preinscripción", color: "#c2d5ec" },
    "2025-01-10": { title: "Periodo de preinscripción", color: "#c2d5ec" },
"2025-01-15": { title: "examen javascripr", color: "#30814b" },

    
    "2024-08-01": { title: "Suspensión de labores", color: "#30814b" },
    "2024-08-02": { title: "Suspensión de labores", color: "#30814b" },

    "2024-09-16": { title: "Suspensión de labores", color: "#30814b" },

    "2024-10-01": { title: "Suspensión de labores", color: "#30814b" },

    "2024-11-02": { title: "Suspensión de labores", color: "#30814b" },
    "2024-11-18": { title: "Suspensión de labores", color: "#30814b" },

    "2024-12-12": { title: "Suspensión de labores", color: "#30814b" },
    "2024-12-25": { title: "Suspensión de labores", color: "#30814b" },

    "2025-01-01": { title: "Suspensión de labores", color: "#30814b" },

    "2025-02-03": { title: "Suspensión de labores", color: "#30814b" },

    "2025-03-17": { title: "Suspensión de labores", color: "#30814b" },

    "2025-04-14": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-15": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-16": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-17": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-18": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-21": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-22": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-23": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-24": { title: "Suspensión de labores", color: "#30814b" },
    "2025-04-25": { title: "Suspensión de labores", color: "#30814b" },

    "2025-05-01": { title: "Suspensión de labores", color: "#30814b" },
    "2025-05-05": { title: "Suspensión de labores", color: "#30814b" },
    "2025-05-10": { title: "Suspensión de labores", color: "#30814b" },
    "2025-05-15": { title: "Suspensión de labores", color: "#30814b" },

    "2024-09-23": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-09-24": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-09-25": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-09-26": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-09-27": { title: "Periodo de evaluación", color: "#9bd7a0" },

    "2024-11-04": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-11-05": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-11-06": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-11-07": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-11-08": { title: "Periodo de evaluación", color: "#9bd7a0" },

    "2024-12-02": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-12-03": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-12-04": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-12-05": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2024-12-06": { title: "Periodo de evaluación", color: "#9bd7a0" },

    
    "2025-03-03": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-03-04": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-03-05": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-03-06": { title: "Periodo de evaluación", color: "#9bd7a0" },

    "2025-04-07": { title: "Periodo de evaluación", color: "#FFC0CB" },
    "2025-04-08": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-04-09": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-04-10": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-04-11": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-04-11": { title: "Periodo de evaluación", color: "#9bd7a0" },

    "2025-06-09": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-06-10": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-06-11": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-06-12": { title: "Periodo de evaluación", color: "#9bd7a0" },
    "2025-06-13": { title: "Periodo de evaluación", color: "#9bd7a0" },


  
    "2024-12-09": { title: "Exámenes extraordinarios", color: "#dbb0cd" },
    "2024-12-10": { title: "Exámenes extraordinarios", color: "#dbb0cd" },
    "2025-06-16": { title: "Exámenes extraordinarios", color: "#dbb0cd" },
    "2025-06-17": { title: "Exámenes extraordinarios", color: "#dbb0cd" },
    "2025-06-18": { title: "Exámenes extraordinarios", color: "#dbb0cd" },

    "2024-12-11": { title: "Exámenes a título", color: "#8bb8a2" },
    "2024-12-13": { title: "Exámenes a título", color: "#8bb8a2" },
    "2025-06-16": { title: "Exámenes a título", color: "#8bb8a2" },
    "2025-06-17": { title: "Exámenes a título", color: "#8bb8a2" },
    "2025-06-18": { title: "Exámenes a título", color: "#8bb8a2" },

   
   
    "2025-10-15": { title: "Día de la UICSLP", color: "#e2c131" },
    
   
    "2024-12-16": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-17": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-18": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-19": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-20": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-23": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-24": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-26": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-27": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-30": { title: "Vacaciones", color: "#86d5c3" },
    "2024-12-31": { title: "Vacaciones", color: "#86d5c3" },

    "2025-01-02": { title: "Vacaciones", color: "#86d5c3" },
    "2025-01-03": { title: "Vacaciones", color: "#86d5c3" },

    "2025-07-14": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-15": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-16": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-17": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-18": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-21": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-22": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-23": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-24": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-25": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-28": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-29": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-30": { title: "Vacaciones", color: "#86d5c3" },
    "2025-07-31": { title: "Vacaciones", color: "#86d5c3" },


   
    "2025-06-13": { title: "Fin de semestre", color: "#e2c131" }


};

// Seleccionar todos los botones dentro del elemento 'aside'
const asideButtons = document.querySelectorAll("aside button"); // Seleccionar todos los botones dentro de <aside>

// Iterar sobre todos los botones y agregarles eventos
asideButtons.forEach(button => { // Recorrer cada botón en la lista
    button.addEventListener("click", () => { // Agregar un event listener para cada clic en los botones
        // Verificar si el botón tiene la id 'logout'
        if (button.id === "logout") { // Comprobar si el botón es el de cierre de sesión
            alert("Usted está abandonando esta página."); // Mostrar una alerta indicando que se va a abandonar la página
            window.location.href = "index.html"; // Redirigir a la página de inicio (index.html)
        } else { // Si no es el botón de logout
            alert("Función en desarrollo."); // Mostrar un mensaje genérico
        }
    });
});

// Función para obtener el primer día del mes (lunes, martes, etc.)
function getFirstDayOfMonth(month, year) {
    const date = new Date(year, month, 1); // Crear un objeto Date para el primer día del mes
    return date.getDay(); // Retorna el día de la semana (0 = domingo, 1 = lunes, etc.)
}

// Función para obtener el número de días que tiene un mes específico
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate(); // Retorna el número de días en el mes calculando el último día del mes
}

// Función para mostrar el calendario en la página
function renderCalendar() {
    const calendar = document.getElementById("calendar"); // Seleccionar el contenedor del calendario
    const monthYear = document.getElementById("month-year"); // Seleccionar el área que muestra el mes y año en la parte superior
    calendar.innerHTML = ""; // Limpiar cualquier contenido previo del calendario para volver a renderizar

    // Mostrar el mes y año actual en el encabezado
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`; // Establecer el texto con el nombre del mes y el año actual

    // Verificar si el mes y año están dentro del rango permitido
    if (currentYear < startYear || (currentYear === startYear && currentMonth < startMonth) ||
        currentYear > endYear || (currentYear === endYear && currentMonth > endMonth)) {
        return; // Si el mes está fuera del rango, no renderizar el calendario
    }

    // Obtener el primer día del mes y el número de días en el mes
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear); // Obtener el primer día de la semana del mes actual
    const daysInMonth = getDaysInMonth(currentMonth, currentYear); // Obtener el número de días en el mes actual

    // Crear los nombres de los días de la semana
    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]; // Nombres de los días de la semana
    weekdays.forEach(weekday => { // Iterar sobre cada nombre de día
        const weekdayElement = document.createElement("div"); // Crear un div para cada día de la semana
        weekdayElement.className = "weekday"; // Asignar la clase 'weekday' para estilizar
        weekdayElement.textContent = weekday; // Establecer el texto con el nombre del día
        calendar.appendChild(weekdayElement); // Añadir el día de la semana al calendario
    });

    // Crear los espacios vacíos antes del primer día del mes
    for (let i = 0; i < firstDay; i++) { // Añadir espacios vacíos según el primer día del mes
        const emptyCell = document.createElement("div"); // Crear un div vacío para un espacio
        emptyCell.className = "day"; // Asignar la clase 'day' para estilizar el espacio vacío
        calendar.appendChild(emptyCell); // Añadir el espacio vacío al calendario
    }

    // Crear los días del mes
    for (let day = 1; day <= daysInMonth; day++) { // Iterar sobre todos los días del mes
        const dayElement = document.createElement("div"); // Crear un div para cada día
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`; // Formatear la fecha en formato YYYY-MM-DD
        
        dayElement.className = "day"; // Asignar la clase 'day' para estilizar
        dayElement.textContent = day; // Establecer el texto con el número del día

        // Verificar si hay algún evento para este día
        if (events[dateStr]) { // Si existe un evento para este día
            dayElement.style.backgroundColor = events[dateStr].color; // Cambiar el color de fondo del día según el evento
            dayElement.title = events[dateStr].title; // Establecer el título del evento como texto del día

            // Agregar un evento de clic para mostrar detalles del evento
            dayElement.addEventListener("click", () => { // Cuando se haga clic en el día
                const dateFormatted = `${day < 10 ? "0" + day : day}/${currentMonth + 1 < 10 ? "0" + (currentMonth + 1) : currentMonth + 1}/${currentYear}`; // Formatear la fecha en formato dd/mm/yyyy
                alert(`Evento: ${events[dateStr].title}\nFecha: ${dateFormatted}`); // Mostrar una alerta con los detalles del evento
            });
        }

        calendar.appendChild(dayElement); // Añadir el día al calendario
    }
}

// Función para cambiar el mes (izquierda o derecha)
function changeMonth(offset) {
    let newMonth = currentMonth + offset; // Calcular el nuevo mes sumando o restando el desplazamiento
    let newYear = currentYear; // Mantener el año igual inicialmente

    // Si el mes es menor que 0 (enero anterior), restar un año
    if (newMonth < 0) { 
        newMonth = 11; // Diciembre
        newYear--; // Restar un año
    } else if (newMonth > 11) { // Si el mes es mayor que diciembre
        newMonth = 0; // Enero
        newYear++; // Incrementar el año
    }

    // Verificar si el mes y el año están dentro del rango
    if (newYear < startYear || (newYear === startYear && newMonth < startMonth) ||
        newYear > endYear || (newYear === endYear && newMonth > endMonth)) {
        return; // Si el mes está fuera del rango, no cambiar el mes
    }

    // Actualizar el mes y año
    currentMonth = newMonth;
    currentYear = newYear;
    renderCalendar(); // Renderizar el calendario con los nuevos valores
}

// Manejo de los botones de navegación de mes
document.getElementById("prev-month").addEventListener("click", () => changeMonth(-1)); // Navegar al mes anterior
document.getElementById("next-month").addEventListener("click", () => changeMonth(1)); // Navegar al siguiente mes

// Inicializar el calendario cuando se cargue la página
renderCalendar(); // Llamar a la función que renderiza el calendario inicialmente
