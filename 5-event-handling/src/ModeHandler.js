function ModeHandler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark mode is On</h1>
    const lightMode = <h1>Light mode is On</h1>

    function handleClick() {
        darkModeOn = !darkModeOn;
        if ( darkModeOn) {
            console.log('Dark mode is On');
        } else {
            console.log('Light mode is On');
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>Toggle Mode</button>
        </div>
    )
}
export default ModeHandler;