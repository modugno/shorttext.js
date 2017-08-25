# shorttext.js

> Limite o tanto de caracteres que podem recortar em seu site

----
## Instalação
Você pode baixar o repositório aqui [Download ZIP](https://github.com/modugno/shorttext.js/archive/master.zip)

----
## Como Usar
* Chame o script na página

```html
<script src="shorttext.js"></script>
```

* Inicializando o plugin e limitando caracteres
Por padrão, ele ja ira recortar 140 caracteres, porem, pode ser mudado passando como primeiro parametro a quantidade de caracteres que deseja recortar
```javascript
Shorttext.cut();
// ou
Shorttext.cut(140);
```

* Opções
Por padrão, ja temos algumas configurações.
```javascript
var options = {
    link: window.location.href,
    text: 'Veja mais em',
    delimiter: '...'
}

// chama o método com os options
Shorttext.cut(140, options);
// ou
Shorttext.cut(undefined, options);
```
