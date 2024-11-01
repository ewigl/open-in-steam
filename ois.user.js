// ==UserScript==
// @name         在 Steam(客户端) 中打开 - Open in Steam
// @name:en   Open (Web Page) in Steam (Client)
// @namespace    https://github.com/ewigl/open-in-steam
// @version      0.3.3
// @description  在 Steam 网页中添加一个按钮, 以快速在 Steam(客户端) 中打开当前页面
// @description:en  Add a button to open the current steam web page in Steam (Client)
// @author       Licht
// @license      MIT
// @homepage     https://github.com/ewigl/open-in-steam
// @match        *://*.steampowered.com/*
// @match        *://*.steamcommunity.com/*
// @noframes
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

    const DEFAULT_LANGUAGE = 'en-US'

    const titles = {
        'zh-CN': '在 Steam (客户端) 中打开',
        'en-US': 'Open in Steam (Client)',
    }

    const utils = {
        getLanguage() {
            return navigator.language || DEFAULT_LANGUAGE
        },
        getTitle() {
            return titles[utils.getLanguage()]
        },
    }

    // Main
    const main = {
        init() {
            const openInSteamButton = document.createElement('a')
            openInSteamButton.id = 'open-in-steam-button'
            openInSteamButton.title = utils.getTitle()
            openInSteamButton.href = `steam://openurl/${location.href}`
            openInSteamButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 -960 960 960" >
                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
            </svg>
            `

            document.getElementsByTagName('body')[0].append(openInSteamButton)
        },
    }

    main.init()
})()
