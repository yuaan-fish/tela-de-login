Tela de Login (React Native + Expo)

Este é um aplicativo simples de **tela de login** desenvolvido com **React Native** e **Expo**, com validação básica de campos de e-mail e senha.

---

Funcionalidades

* 📧 Campo para inserir e-mail
* 🔒 Campo para inserir senha (oculta)
* ✅ Validação de campos obrigatórios
* ⚠️ Alertas em caso de erro
* 🎉 Mensagem de sucesso ao realizar login
* 🔁 Opção "Esqueci minha senha" (interface)

---

Como funciona

* O usuário deve preencher os campos de **e-mail** e **senha**
* Caso algum campo esteja vazio:

  * Um alerta será exibido solicitando o preenchimento
* Se ambos estiverem preenchidos:

  * Um alerta de **login realizado com sucesso** será mostrado

---

Tecnologias utilizadas

* React Native
* Expo
* JavaScript (Hook `useState`)

---

Como rodar o projeto

1. Instale o Expo CLI:

```
npm install -g expo-cli
```

2. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

3. Acesse a pasta do projeto:

```
cd seu-repositorio
```

4. Instale as dependências:

```
npm install
```

5. Execute o projeto:

```
npx expo start
```

6. Abra no:

* Emulador Android/iOS
* Ou app **Expo Go** no celular

---

## 📸 Interface

O aplicativo possui:

* Texto de boas-vindas
* Ícone ilustrativo de login
* Campo de e-mail
* Campo de senha (com ocultação de caracteres)
* Botão de **login**
* Link de **"Esqueci minha senha"**

---

Observações

* Este projeto **não possui autenticação real** (backend)
* Os dados não são armazenados
* Serve apenas para fins de estudo e prática

---

 Melhorias futuras

* 🔐 Integração com API de autenticação
* 📩 Validação de e-mail mais robusta
* 👁️ Botão para mostrar/ocultar senha
* 💾 Persistência de login
* 🎨 Melhorias na interface (UI/UX)

---

Licença

Projeto livre para estudos e aprendizado em desenvolvimento mobile.

---
