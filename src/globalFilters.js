import Vue from 'vue'
 /*1) Codificado: se hará cambiando las vocales de la siguiente forma: a por u, e por o,
 la i queda igual, o por e y u por a. Considerar pasar el texto ingresado a minúscula
 antes de realizar el cambio.*/
Vue.filter('reemplazarLetras', function(value) {
    
    return value.toLowerCase()
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('pasarAminuscula', function(value) {
    return value.toLowerCase()
})

Vue.filter('iniciarConMayus', function(value) {
    let resultado = value.toLowerCase().split('').map((word, index) => {
        if (index % 2 === 0) {
            return word.toUpperCase()
        }
    return word
    }).join('')
    return resultado
})

Vue.filter('iniciarConMinus', function(value) {
    let resultado= value.toUpperCase().split('').map((word, index) => {
    if (index % 2 === 0) {
        return word.toLowerCase()
    }
    return word
    }).join('')
    return resultado
})