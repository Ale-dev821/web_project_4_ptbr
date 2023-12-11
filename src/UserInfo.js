class UserInfo {
    constructor({ userNameSelector, userJobSelector }) {
        this._userNameElement = document.querySelector(userNameSelector);
        this._userJobElement = document.querySelector(userJobSelector);
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            job: this._userJobElement.textContent
        };
    }

    setUserInfo({ name, job }) {
        this._userNameElement.textContent = name;
        this._userJobElement.textContent = job;
    }
}


const userInfo = new UserInfo({
    userNameSelector: '#nome-usuario',
    userJobSelector: '.trabalho-usuario'
});

// Obtendo as informações do usuário
const userData = userInfo.getUserInfo();
console.log(userData);

// Definindo novas informações do usuário
userInfo.setUserInfo({ name: 'Novo Nome', job: 'Nova Profissão' });
