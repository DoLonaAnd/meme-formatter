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
        ["buttonSplitting"],
        [
            [
                "Splitting",
                "分割する"
            ]
        ]
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
    setLang("en");
}