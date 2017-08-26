/**
 * Shorttext.js
 * @author Guilherme Modugno - https://modugno.github.io 
 * @author Paulo Tosi - http://paulotosi.com.br/
 * @description Limite o tanto de caracteres que podem recortar em seu site
 */
class Shorttext {
 
    /**
     * Método para recortar o texto
     * @param {Array} value Quantidade de Caracteres / opções
     */
    static cut(...value) {

        // maximo de caracters
        let maxCharacter = 140;
       
        // pega as opções
        let options = Shorttext._setOptions();
       
        // verifica os tipos dos parametros e seta suas configurações
        switch(typeof value[0]) {
            case 'number':
                maxCharacter = value[0];
                 if(value[1]) Object.assign(options, value[1]);
                break;
            case 'object':
                 if(value[0]) Object.assign(options, value[0]);
                break;
            default:
                maxCharacter;
        }

        // aciona o evento de copy
        document.addEventListener('copy', e => Shorttext._callbackCut(e, maxCharacter, options));
    };

    /**
     * Callback para quando copiar o texto
     * @param {Event} event 
     */
    static _callbackCut(event, maxCharacter, options) {
        event.preventDefault();

        // texto selecionado
        let textSelected = window.getSelection().toString();
        // faz o processo de copiar o texto minificado
        event.clipboardData.setData('text/plain', Shorttext._traitText( textSelected.substring(0, maxCharacter), options));
    };

    /**
     * Trata o texto selecionado
     * @param {String} text 
     */
    static _traitText(text, options) {
        return `${text}${options.delimiter} ${options.text} - <a href='${options.link}' target='${options.target}' class='${options.class}'>${options.link}</a>`;
    }

    /**
     * Opções do Plugin
     * @param {Object} parameters 
     */
    static _setOptions() {
        return {
            link: window.location.href,
            text: 'Veja mais em',
            delimiter: '...',
            target: '_blank',
            class: 'shorttext'
        }
    };

}