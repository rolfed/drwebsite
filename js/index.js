var app = (function() {

    console.log('Welcome');

    function toggleNavigation() {
        var mainNavigationButton = document.querySelector('.main-navigation-button'),
            mainNavigationDropdown = document.querySelector('.main-navigation-links');

        mainNavigationButton.addEventListener('click', function() {
            console.log('Click');

            if (mainNavigationDropdown.classList.contains('hidden')) {
                console.log('Contains hidden');
                mainNavigationDropdown.classList.remove('hidden');
            } else {
                console.log('Does not contain hidden');
                mainNavigationDropdown.classList.add('hidden');
            }
        });
    };

    return {
        toggleNavigation: toggleNavigation()
    }

})();



