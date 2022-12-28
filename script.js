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
        ["buttonSplitting", "usageH", "usage", "ex", "th", "tf", "reset", "totop"],
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
            ],
            [
                "Example",
                "例"
            ],
            [
                "<tr><th class = \"radT\">Before</th><th class = \"radT\">char</th><th class = \"radT\">After</th></tr>",
                "<tr><th class = \"radT\">元のタイトル</th><th class = \"radT\">分割に使う文字</th><th class = \"radT\">分割後のタイトル</th></tr>"
            ],
            [
                "<tr><td class = \"radT\">12345</td><td class = \"radT\">/</td><td class = \"radT\">1/2/3/4/5</td></tr><tr><td class = \"radT\">Github love</td><td class = \"radT\">:</td><td class = \"radT\">G:i:t:h:u:b l:o:v:e</td></tr>",
                "<tr><td class = \"radT\">12345</td><td class = \"radT\">/</td><td class = \"radT\">1/2/3/4/5</td></tr><tr><td class = \"radT\">Github love</td><td class = \"radT\">:</td><td class = \"radT\">G:i:t:h:u:b l:o:v:e</td></tr>"
            ],
            [
                "Reset",
                "リセット"
            ],
            [
                "To top",
                "トップに戻る"
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

function splitting() {
    let title = document.getElementById("input1").value,
        character = document.getElementById("input2").value,
        characters = Array.from(title),
        ret = "";
    for (let i = 0; i < characters.length; i++) {
        ret += characters[i];
        console.log(ret);
        if (i != characters.length - 1 && (characters[i + 1] != " " && characters[i + 1] != "　" && characters[i + 1] != "\n") && (characters[i] != " " && characters[i] != "　" && characters[i] != "\n")) {
            ret += character;
        }
    }
    document.getElementById("output1").value = ret;
}

function reset() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("output1").value = "";
}



// 起動時
window.onload = function() {
    let width = window.innerWidth,
        height = window.innerHeight,
        aspect_h = width * 9 / 16;
    //console.log("Window size " + width + ":" + height);
    if (aspect_h < height) {
        document.getElementById("html1").style.backgroundSize = (100 * height / aspect_h) + 4 + "%";
    } else {
        document.getElementById("html1").style.backgroundSize = "100%";
    }
    setLang("en");
}

// ウィンドウサイズ変更
window.onresize = function() {
    let width = window.innerWidth,
        height = window.innerHeight,
        aspect_h = width * 9 / 16;
    if (aspect_h < height) {
        document.getElementById("html1").style.backgroundSize = (100 * height / aspect_h) + 4 + "%";
    } else {
        document.getElementById("html1").style.backgroundSize = "100%";
    }
};