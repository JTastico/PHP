<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Notas</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Registro de Notas</h2>
        <form id="notasForm" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <h3>Notas de Laboratorio:</h3>
            <div id="laboratorioNotas">
                <!-- Aquí se agregarán las notas de laboratorio dinámicamente -->
                <?php
                for ($i = 1; $i <= 12; $i++) {
                    echo '<input type="number" name="laboratorio[]" class="nota-input" min="0" max="20" placeholder="Ingrese la nota">' . "\n";
                }
                ?>
            </div>
            <button type="button" onclick="agregarNota('laboratorio')">Agregar Nota de Laboratorio</button>
            <h3>Notas de Práctica:</h3>
            <div id="practicaNotas">
                <!-- Aquí se agregarán las notas de práctica dinámicamente -->
                <?php
                for ($i = 1; $i <= 3; $i++) {
                    echo '<input type="number" name="practica[]" class="nota-input" min="0" max="20" placeholder="Ingrese la nota">' . "\n";
                }
                ?>
            </div>
            <button type="button" onclick="agregarNota('practica')">Agregar Nota de Práctica</button>
            <br><br>
            <button type="submit" name="submit">Guardar Notas</button>
        </form>
        <p id="errorMessage" class="error"></p>
        <div id="notaFinal" style="display: none;">
            <h3>Nota Final:</h3>
            <p id="notaFinalValor"></p>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
