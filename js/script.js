// Función para calcular la nota final
function calcularNotaFinal() {
  const todasLasNotas = document.querySelectorAll('.nota-input');
  let laboratorioTotal = 0;
  let practicaTotal = 0;
  let laboratorioCantidad = 0;
  let practicaCantidad = 0;

  todasLasNotas.forEach(nota => {
    const valor = parseInt(nota.value);
    if (!isNaN(valor)) {
      if (nota.name === 'laboratorio[]') {
        laboratorioTotal += valor;
        laboratorioCantidad++;
      } else if (nota.name === 'practica[]') {
        practicaTotal += valor;
        practicaCantidad++;
      }
    }
  });

  const laboratorioPromedio = laboratorioCantidad > 0 ? laboratorioTotal / laboratorioCantidad : 0;
  const practicaPromedio = practicaCantidad > 0 ? practicaTotal / practicaCantidad : 0;

  const notaFinal = (laboratorioPromedio * 0.7) + (practicaPromedio * 0.3);

  return notaFinal.toFixed(2);
}

// Función para agregar una nueva nota de laboratorio o práctica
function agregarNota(tipo) {
  const container = document.getElementById(`${tipo}Notas`);
  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'nota-input';
  input.min = 0;
  input.max = 20;
  input.placeholder = 'Ingrese la nota';
  input.name = tipo === 'laboratorio' ? 'laboratorio[]' : 'practica[]'; // Asignar el nombre correcto al input
  container.appendChild(input);
}

// Validación de las notas antes de enviar el formulario
document.getElementById('notasForm').addEventListener('submit', function(event) {
  const todasLasNotas = document.querySelectorAll('.nota-input');
  let valid = true;
  todasLasNotas.forEach(function(nota) {
      if (nota.value === '' || parseInt(nota.value) < 0 || parseInt(nota.value) > 20) {
          valid = false;
      }
  });
  if (!valid) {
      document.getElementById('errorMessage').innerText = 'Por favor, asegúrese de ingresar notas válidas (entre 0 y 20).';
      event.preventDefault(); // Evitar el envío del formulario si hay notas inválidas
  } else {
      const notaFinalValor = calcularNotaFinal();
      document.getElementById('notaFinalValor').innerText = notaFinalValor;
      document.getElementById('notaFinal').style.display = 'block';
      event.preventDefault(); // Evitar el envío del formulario
  }
});
