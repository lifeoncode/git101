window.addEventListener('load', (e) => {
    
    const [repo, branch, remote] = [document.querySelector('#repo'), document.querySelector('#branch'), document.querySelector('#remote')]


    
    repo.addEventListener('click', (e) => {
        repo.classList.add('current');
        branch.classList.remove('current');
        remote.classList.remove('current');
    });
    
    
    
    branch.addEventListener('click', (e) => {
        branch.classList.add('current');
        repo.classList.remove('current');
        remote.classList.remove('current');
    });

    
    
    remote.addEventListener('click', (e) => {
        remote.classList.add('current');
        repo.classList.remove('current');
        branch.classList.remove('current');
    });
    

    
    
})