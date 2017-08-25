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
Por padrão, ele ja ira recortar 1000 caracteres, porem, pode ser mudado passando como primeiro parametro a quantidade de caracteres que deseja recortar
```javascript
Shorttext.cut(100);
```

* Opções
Por padrão, ja temos algumas configurações.
```javascript
var options = {
    link: 'http://example.com.br',
    text: 'Veja mais clicando aqui',
    delimiter: '...'
}

// chama o método com os options
Shorttext.cut(100, optoins);
```
