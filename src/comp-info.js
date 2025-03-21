class CompInfo extends HTMLElement{
    connectedCallback(){
        const sr = this.attachShadow({mode: "closed"});
        sr.innerHTML = `
            <style>
                #main{
                    overscroll-behavior: none;
                    scrollbar-color: #0000;
                    overflow-y: scroll;
                    display: grid;
                }
                #title{
                    box-sizing: border-box;
                    background-color: #fff;
                    padding: 4px 24px;
                    position: sticky;
                    color: #000;
                    width: 100%;
                    top: 0;
                }
                img{
                    aspect-ratio: 1 / 1;
                    justify-self: center;
                    width: 400px;
                }
                #info{
                    box-sizing: border-box;
                    padding: 20px;
                    width: 100%;
                }
            </style>

            <div id="main">
                <img src="cube.gif">
                <div id="title">artist - title</div>
                <div id="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div>
        `;
    };
};
window.customElements.define("comp-info", CompInfo);
