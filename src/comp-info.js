class CompInfo extends HTMLElement{
    connectedCallback(){
        const sr = this.attachShadow({mode: "closed"});
        sr.innerHTML = `
            <style>
                a{
                    transition: background-color 0.5s, color 0.5s;
                    color: #fff;
                }
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
                    width: 360px;
                    padding: 20px;
                }
                #info{
                    box-sizing: border-box;
                    padding: 20px;
                    width: 100%;
                }
                @media(hover){
                    a:hover{
                        transition-duration: 0s;
                        background-color: #fff;
                        color: #000;
                    }
                }
            </style>

            <div id="main">
                <img src="cube.gif">
                <div id="title">qr show - retrospective</div>
                <div id="info"> qr show was an exhibition organized <a href="https://greg.technology" target="_blank">greg&nbsp;sadetsky</a> & <a href="https://linenisgreat.com" target="_blank">sasha&nbsp;friedenberg</a> featuring many, any, & all things "qr&nbsp;code". it was hosted by the <a href="https://www.recurse.com/about" target="_blank">recurse&nbsp;center</a> on sunday march 16th 2025 in brooklyn nyc. this is a directory of the authors and an archive of the exibits.<br><br>this archive is not comprehensive. if you presented something that hasn't been listed (or attended the event and captured some great photos) & would like to share, please email self@destruct.dev<br><br>to everyone who attended - thank you for. to all the volunteers -  thank you for all your help and being excellent</div>
            <div>
        `;
    };
};
window.customElements.define("comp-info", CompInfo);
