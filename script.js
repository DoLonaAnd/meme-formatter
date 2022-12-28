// const
/**
 * @words_list
 *  [for placeholder
 *      [elements id],
 *      [words]
 *  ],
 *  [for innerHTML
 *      [elements id],
 *      [words]
 *  ],
 *  [for style
 *      [elements id],
 *      [size],
 *      [style]
 *  0 = font-size
 *  ]
 */
const words_list = [
    [

        ["input1", "input2", "output1"],
        [
            [
                "Title you want to split",
                "分割したいタイトル"
            ],
            [
                "Characters  for splitting",
                "分割に使う文字"
            ],
            [
                "Splitted title",
                "分割したタイトル"
            ]
        ]
    ],
    [
        ["buttonSplitting", "usageH", "usage"],
        [
            [
                "Splitting",
                "分割する"
            ],
            [
                "Usage",
                "使い方"
            ],
            [
                "Enter the title you want to enter in the input box \"Title you want to split\".<br>Enter the characters to use for splitting in the input box \"Characters for splitting\".<br>When you press the \"Splitting\" button, <br>the result will be displayed in the output box \"Splitted title\".",
                "入力ボックス『分割したいタイトル』に分割したいタイトルを入力します。<br>入力ボックス『分割に使う文字』を入力します。<br>『分割する』ボタンを押すと、出力ボックス『分割したタイトル』に<br>分割したタイトルが表示されます。"
            ]
        ]
    ],
    [
        ["usage"],
        [
            ["133.33%", "100%"]
        ],
        [0]
    ]
]
const langs = [
    "en",
    "ja"
]

//functions
function getLangNum(lang) {
    let num = 0;
    for (let i = 0; i < langs.length; i++) {
        if (lang == langs[i]) {
            num = i;
        }
    }
    return num;
}

function setHtml(i, num) {
    let lists = words_list[i];
    switch (i) {
        case 0:
            for (let i = 0; i < lists[0].length; i++) {
                document.getElementById(lists[0][i]).placeholder = lists[1][i][num];
            }
            break;
        case 1:
            for (let i = 0; i < lists[0].length; i++) {
                document.getElementById(lists[0][i]).innerHTML = lists[1][i][num];
            }
            break;
        case 2:
            for (let i = 0; i < lists[0].length; i++) {
                switch (lists[2]) {
                    case 0:
                        document.getElementById(lists[0][i]).style.fontSize = lists[1][i][num];
                        break;
                }
            }
            break;
        default:
            break;
    }
}

function setLang(lang) {
    let num = getLangNum(lang);
    document.getElementById("html1").lang = lang;
    for (let i = 0; i < words_list.length; i++) {
        setHtml(i, num);
    }
}


// 起動時
window.onload = function() {
    /*if (window.name != "memeFormatter") {
        let len = function() {
            window.history.length = 1;
        }
        window.open(location.href, "memeFormatter", "width = 1280, height = 720, resizable = 1");
        window.close();
    } else {*/
    setLang("en");
    //}
}

// ウィンドウサイズ変更
window.onresize = function() {
    let width = window.innerWidth,
        height = window.innerHeight,
        aspect_h = width * 9 / 16;
    //console.log("Window size " + width + ":" + height);
    if (aspect_h < height) {
        document.getElementById("html1").style.backgroundSize = (100 * height / aspect_h) + 4 + "%";
    } else {
        document.getElementById("html1").style.backgroundSize = "100%";
    }

    /*if (window.innerWidth > 1920) {
        window.resizeBy(1920, window.innerHeight);
    }
    if (window.innerHeight > 1080) {
        window.resizeBy(window.innerWidth, 1080);
    }*/
};