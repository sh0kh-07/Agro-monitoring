// Components/Hokim/Data/provinceConfig.js

import { boyovutData } from "./Boyovut";
import { Gulistan } from "./Gulistan";
import { Mirzaobod } from "./Mirzaobod";
import { Oqoltin } from "./Oqoltin";
import { Sardoba } from "./Sardoba";
import { Sayxun } from "./Sayxun";
import { Sirdaryo } from "./Sirdaryo";
import { Xovos } from "./Xovos";

export const provinceConfig = {
    "Боёвут": {
        title: "Боёвут туманида қишлоқ хўжалиги соҳасида амалга оширилган ишлар тўғрисида",
        districts: boyovutData,
    },
    "Гулистон": {
        title: "Гулистан шаҳрида қишлоқ хўжалиги соҳасида амалга оширилган ишлар тўғрисида",
        districts: Gulistan,
    },
     "Мирзаобод": {
        title: "Мирзаобод туманида 2026 йил ҳосили учун қилинган ишлар бўйича кунлик",
        districts: Mirzaobod,
    },
     "Оқолтин": {
        title: "Оқолтин туманида 2026 йил ҳосили учун қилинган ишлар бўйича кунлик ",
        districts: Oqoltin,
    },
     "Сардоба": {
        title: "Сардоба туманида Қишлоқ хўжалигида олиб борилаётган ишлар ва агротехник тадбирлар тўғрисида МАЪЛУМОТ",
        districts: Sardoba,
    },
     "Сайҳунобод": {
        title: "Сайхунобод туманида Қишлоқ хўжалигида олиб борилаётган ишлар ва агротехник тадбирлар тўғрисида МАЪЛУМОТ",
        districts: Sayxun,
    },
     "Сирдарё": {
        title: "Сирдарё туманида Қишлоқ хўжалигида олиб борилаётган ишлар, ва агротехник тадбирлар тўғрисида МАЪЛУМОТ",
        districts: Sirdaryo,
    },
     "Ховос": {
        title: "Ховос туманида 2026 йил ҳосили учун қилинган ишлар бўйича кунлик ",
        districts: Xovos,
    },
};
