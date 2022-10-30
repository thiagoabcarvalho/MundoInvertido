const btn_darkmode = document.getElementById( 'theme-button' );

btn_darkmode.addEventListener( 'click', event => {
    event.preventDefault();
    const body_darkmode = document.body.classList;
    body_darkmode.toggle( 'light-theme' );
    body_darkmode.toggle( 'dark-theme' );
} );

