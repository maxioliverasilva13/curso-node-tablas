const fs = require("fs");
var colors = require('colors');

const crearArchivo = async (base, l, limit) => {
    try {
        console.log("==================".underline.green);
        console.log("   Tabla del:", base)
        console.log("==================".underline.green);
        let salida, consola = '';
        for (i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.blue} ${i} = ${base * i}\n`;
        }

        (l) && console.log(consola);
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}