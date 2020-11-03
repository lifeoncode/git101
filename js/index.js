window.addEventListener('load', (e) => {
    
    const [local, branch, remote] = [document.querySelector('#local'), document.querySelector('#branch'), document.querySelector('#remote')]

    const [localSection, branchSection, remoteSection] = [document.querySelector('#local-content'), document.querySelector('#branch-content'), document.querySelector('#remote-content')];

    
    local.addEventListener('click', (e) => {
        local.classList.add('current');
        branch.classList.remove('current');
        remote.classList.remove('current');

        // sections
        localSection.style.display = 'block';
        branchSection.style.display = 'none';
        remoteSection.style.display = 'none';
    });
    
    
    
    branch.addEventListener('click', (e) => {
        branch.classList.add('current');
        local.classList.remove('current');
        remote.classList.remove('current');

        // sections
        localSection.style.display = 'none';
        branchSection.style.display = 'block';
        remoteSection.style.display = 'none';
    });

    
    
    remote.addEventListener('click', (e) => {
        remote.classList.add('current');
        local.classList.remove('current');
        branch.classList.remove('current');

        // sections
        localSection.style.display = 'none';
        branchSection.style.display = 'none';
        remoteSection.style.display = 'block';
    });
    

    
    
})