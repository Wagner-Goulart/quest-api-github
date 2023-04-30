const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src = "${user.avatarUrl} alt="Foto do perfil do   usuario"/>
                                <div>
                                    <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                    <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                    <p>
                                    <i class="fa-solid fa-users"></i>
                                    Seguidores: ${user.followers ?? '0'}</p>
                                    <p>
                                    <i class="fa-solid fa-users"></i>
                                    Seguindo: ${user.following ?? '0'}</p>
                                </div>
                        </div>`

        let respositoriesItens = ''

        user.repositories.forEach(repo => respositoriesItens += `<li>
                        <a href ="${repo.html_url}" target = "_blank">${repo.name}
                                <br>
                                <span>
                                <i class="fa-solid fa-code-fork"></i>
                                ${repo.forks_count}
                                </span>
                                <span>
                                <i class="fa-regular fa-star"></i>
                                ${repo.stargazers_count}
                                </span>
                                <span>
                                <i class="fa-regular fa-eye"></i>
                                ${repo.watchers_count}
                                </span>
                                <span>
                                <i class="fa-solid fa-laptop"></i>
                                ${repo.language}
                                </span>
                        </a>
                        </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class = "repositories section">
                                                <h2>Respositórios</h2>
                                                <ul>${respositoriesItens}</ul>
                                            </div> `
        }

        let eventItens = ''
        user.events.forEach((event)=> {
            
            if(event.type === 'PushEvent') {
                eventItens += `<li>${event.repo.name} - ${event.payload.commits[0].message}</li>`
            } else {
                eventItens += `<li>${event.repo.name} - Evento sem descrição</li>`
            }
        })
        this.userProfile.innerHTML += `<div class = "events">
                                        <h3>Eventos</h3>
                                        <ul>
                                            ${eventItens}
                                        </ul>
                                        </div>`


    },
    renderUserNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }

}

export { screen }