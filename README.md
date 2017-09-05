# shorttext.js

> Limite o tanto de caracteres que podem recortar em seu site

----
## Instalação
Você pode clonar o projeto

```cmd
git clone https://github.com/modugno/shorttext.js.git
```
Ou pode baixar o repositório aqui [Download ZIP](https://github.com/modugno/shorttext.js/archive/master.zip)

----
## Como Usar
* Chame o script na página

```html
<script src="shorttext.js"></script>
```

* Inicializando o plugin e limitando caracteres
Por padrão, ele ja ira recortar 140 caracteres, porem, pode ser alterado passando como parâmetro a quantidade de caracteres que deseja recortar
```javascript
Shorttext.cut();
// ou
Shorttext.cut(50);
```

* Opções
Por padrão, ja temos algumas configurações.
```javascript
{
    link: window.location.href,
    text: 'Veja mais em',
    delimiter: '...',
    target: '_blank',
    class: 'shorttext'
}
```
Porem, pode ser alterado passando como parâmetro uma nova configuração
```javascript
// chama o método com o number e options 
Shorttext.cut(140, {
    text: 'Clique no link',
    class: 'nova-classe'
});
// ou
Shorttext.cut(options);
```
