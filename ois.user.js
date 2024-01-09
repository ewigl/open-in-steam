// ==UserScript==
// @name         在 Steam(客户端) 中打开 - Open in Steam
// @namespace    https://github.com/ewigl/open-in-steam
// @version      0.2.8
// @description  在 Steam 网页中添加一个按钮, 以快速在 Steam(客户端) 中打开当前页面
// @author       Licht
// @license      MIT
// @homepage     https://github.com/ewigl/open-in-steam
// @match        *://*.steampowered.com/*
// @match        *://*.steamcommunity.com/*
// @icon         https://store.steampowered.com/favicon.ico
// @grant        GM_addStyle
// ==/UserScript==

;(function () {
    'use strict'

    let styleCSS = `
    #open-in-steam-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;

        width: 50px;
        height: 50px;

        border-radius: 50%;
        background-color: #181d25;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    #open-in-steam-button svg {
        fill: #4d7fbe;
        width: 50%;
        height: 50%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    `

    GM_addStyle(styleCSS)

    // Main
    const main = {
        init() {
            const openInSteamButton = `
            <a id="open-in-steam-button" title="在 Steam (客户端) 中打开" href="steam://openurl/${location.href}" >
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 -960 960 960" >
                    <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
                </svg>
            </a>
            `

            document.getElementsByTagName('body')[0].innerHTML += openInSteamButton
        },
    }

    main.init()
})()
