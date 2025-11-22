# Nike Landing Page – Formulário com Validação e Popup de Sucesso

Este projeto é uma landing page inspirada no estilo da Nike, contendo seções de apresentação, produtos e um formulário de contato totalmente validado em JavaScript. O formulário possui efeitos visuais modernos (shake + borda vermelha) para campos inválidos e exibe um popup de sucesso quando enviado corretamente.

---

## 🚀 Funcionalidades

### 🎨 Layout Responsivo
- Design inspirado no site oficial da Nike.
- Estrutura moderna com HTML5 + CSS3.
- Totalmente responsivo e compatível com navegadores modernos.

### 📝 Formulário com Validação
O formulário de contato possui:
- Validação personalizada em JavaScript.
- Efeito de **shake** nos campos vazios.
- Borda vermelha animada para erros.
- Reset automático após envio bem-sucedido.

### 🔔 Popup de Sucesso
Quando o usuário envia o formulário corretamente:
- Um popup é exibido no centro da tela.
- Fundo escurecido (overlay).
- Fecha sozinho após 2 segundos ou ao clicar nele.

---

## 📂 Estrutura dos Arquivos

```

📦 Projeto
├── index.html      # Estrutura principal da página
├── style.css       # Estilos e animações
└── script.js       # Validação e popup do formulário

```

---

## 🧩 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- Google Fonts (Poppins)
- Layout inspirado no branding da **Nike**

---

## ⚙ Como Executar o Projeto

1. Baixe ou clone o repositório:
```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPO.git
```

2. Certifique-se de que os arquivos estejam na mesma pasta:

   ```
   index.html
   style.css
   script.js
   ```
3. Abra o arquivo `index.html` diretamente no navegador.

Pronto! A página funcionará imediatamente.

---

## 📸 Pré-visualização das Funcionalidades

### ✔ Validação com shake

* Ao tentar enviar vazio, os campos são sacudidos e marcados em vermelho.

### ✔ Popup de sucesso

* Exibido quando o formulário é validado com sucesso.

---

## 🔧 Como Personalizar

### Alterar tempo do popup

No `script.js`, modifique:

```js
setTimeout(() => {
    pop.style.display = "none";
}, 2000);
```

### Alterar mensagens de erro

Crie elementos abaixo dos inputs ou personalize no JS.

---

## 📜 Licença

Este projeto é livre para uso educacional, modificação e personalização.

---

## 🙋‍♂️ Autor

Projeto desenvolvido por **Luiz Eduardo**.
Contato e portfólio: [http://luizeduos.web.app](http://luizeduos.web.app)

---
```
