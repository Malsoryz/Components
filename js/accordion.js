function alwaysOpenAccordion(target,icon) {
    const getTarget = document.getElementById(target);
    const getIcon = document.getElementById(icon);
    if (getTarget.classList.contains('hidden') && getIcon.classList.contains('rotate-180')) {
        getTarget.classList.remove('hidden');
        getIcon.classList.remove('rotate-180');
    } else {
        getTarget.classList.add('hidden');
        getIcon.classList.add('rotate-180');
    } 
}