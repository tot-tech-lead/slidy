// data-define.ts
import {Country, Currency, Images} from '@/app/lib/types/data';
import {Dict} from "@/app/[lang]/dictionaries";

export const roles: { [key: string]: Dict } = {
    "TOURIST": {
        uk: "Турист",
        en: "Tourist",
    },
    "ADMIN": {
        uk: "Адміністратор",
        en: "Admin",
    },
    "GUIDE": {
        uk: "Екскурсовод",
        en: "Tour guide",
    }
};

export const homeImagesCityTranslation = {
    "Львів": {
        en: "Lviv",
        uk: "Львів"
    },
    "Київ": {
        en: "Kyiv",
        uk: "Київ"
    },
    "Лондон": {
        en: "London",
        uk: "Лондон"
    },
    "Копенгаген": {
        en: "Copenhagen",
        uk: "Копенгаген"
    },
    "Париж": {
        en: "Paris",
        uk: "Париж"
    },
}

export const images: Images = {
    "Львів": [
        {
            "Photo": "/assets/images/cityImages/lviv/lviv-1.webp",
            "125": "/assets/images/cityImages/lviv/lviv-1-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/lviv/lviv.webp",
            "125": "/assets/images/cityImages/lviv/lviv-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/lviv/lviv-2.webp",
            "125": "/assets/images/cityImages/lviv/lviv-2-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/lviv/lviv-3.webp",
            "125": "/assets/images/cityImages/lviv/lviv-3-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/lviv/lviv-4.webp",
            "125": "/assets/images/cityImages/lviv/lviv-4-125.webp"
        }
    ],
    "Київ": [
        {
            "Photo": "/assets/images/cityImages/kyiv/kyiv.webp",
            "125": "/assets/images/cityImages/kyiv/kyiv-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/kyiv/kyiv-1.webp",
            "125": "/assets/images/cityImages/kyiv/kyiv-1-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/kyiv/kyiv-2.webp",
            "125": "/assets/images/cityImages/kyiv/kyiv-2-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/kyiv/kyiv-3.webp",
            "125": "/assets/images/cityImages/kyiv/kyiv-3-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/kyiv/kyiv-4.webp",
            "125": "/assets/images/cityImages/kyiv/kyiv-4-125.webp"
        }
    ],
    "Лондон": [
        {
            "Photo": "/assets/images/cityImages/london/london-1.webp",
            "125": "/assets/images/cityImages/london/london-1-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/london/london.webp",
            "125": "/assets/images/cityImages/london/london-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/london/london-2.webp",
            "125": "/assets/images/cityImages/london/london-2-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/london/london-3.webp",
            "125": "/assets/images/cityImages/london/london-3-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/london/london-4.webp",
            "125": "/assets/images/cityImages/london/london-4-125.webp"
        }
    ],
    "Копенгаген": [
        {
            "Photo": "/assets/images/cityImages/copenhagen/copenhagen-4.webp",
            "125": "/assets/images/cityImages/copenhagen/copenhagen-4-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/copenhagen/copenhagen.webp",
            "125": "/assets/images/cityImages/copenhagen/copenhagen-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/copenhagen/copenhagen-1.webp",
            "125": "/assets/images/cityImages/copenhagen/copenhagen-1-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/copenhagen/copenhagen-2.webp",
            "125": "/assets/images/cityImages/copenhagen/copenhagen-2-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/copenhagen/copenhagen-3.webp",
            "125": "/assets/images/cityImages/copenhagen/copenhagen-3-125.webp"
        }
    ],
    "Париж": [
        {
            "Photo": "/assets/images/cityImages/paris/paris.webp",
            "125": "/assets/images/cityImages/paris/paris-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/paris/paris-1.webp",
            "125": "/assets/images/cityImages/paris/paris-1-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/paris/paris-2.webp",
            "125": "/assets/images/cityImages/paris/paris-2-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/paris/paris-3.webp",
            "125": "/assets/images/cityImages/paris/paris-3-125.webp"
        },
        {
            "Photo": "/assets/images/cityImages/paris/paris-4.webp",
            "125": "/assets/images/cityImages/paris/paris-4-125.webp"
        }
    ]
};

export const countries: Country[] = [
    {"name": "Afghanistan", "code": "AF", "localeUA": "Афганістан", "phoneCode": "93", "numberLength": 9},
    {"name": "Åland Islands", "code": "AX", "localeUA": "Аландські острови", "phoneCode": "358", "numberLength": 9},
    {"name": "Albania", "code": "AL", "localeUA": "Албанія", "phoneCode": "355", "numberLength": 9},
    {"name": "Algeria", "code": "DZ", "localeUA": "Алжир", "phoneCode": "213", "numberLength": 9},
    {"name": "American Samoa", "code": "AS", "localeUA": "Американське Самоа", "phoneCode": "1-684", "numberLength": 7},
    {"name": "Andorra", "code": "AD", "localeUA": "Андорра", "phoneCode": "376", "numberLength": 6},
    {"name": "Angola", "code": "AO", "localeUA": "Ангола", "phoneCode": "244", "numberLength": 9},
    {"name": "Anguilla", "code": "AI", "localeUA": "Ангілья", "phoneCode": "1-264", "numberLength": 7},
    {"name": "Antarctica", "code": "AQ", "localeUA": "Антарктида", "phoneCode": "", "numberLength": 0},
    {
        "name": "Antigua and Barbuda",
        "code": "AG",
        "localeUA": "Антигуа і Барбуда",
        "phoneCode": "1-268",
        "numberLength": 7
    },
    {"name": "Argentina", "code": "AR", "localeUA": "Аргентина", "phoneCode": "54", "numberLength": 10},
    {"name": "Armenia", "code": "AM", "localeUA": "Вірменія", "phoneCode": "374", "numberLength": 8},
    {"name": "Aruba", "code": "AW", "localeUA": "Аруба", "phoneCode": "297", "numberLength": 7},
    {"name": "Australia", "code": "AU", "localeUA": "Австралія", "phoneCode": "61", "numberLength": 9},
    {"name": "Austria", "code": "AT", "localeUA": "Австрія", "phoneCode": "43", "numberLength": 10},
    {"name": "Azerbaijan", "code": "AZ", "localeUA": "Азербайджан", "phoneCode": "994", "numberLength": 9},
    {"name": "Bahamas", "code": "BS", "localeUA": "Багамські острови", "phoneCode": "1-242", "numberLength": 7},
    {"name": "Bahrain", "code": "BH", "localeUA": "Бахрейн", "phoneCode": "973", "numberLength": 8},
    {"name": "Bangladesh", "code": "BD", "localeUA": "Бангладеш", "phoneCode": "880", "numberLength": 10},
    {"name": "Barbados", "code": "BB", "localeUA": "Барбадос", "phoneCode": "1-246", "numberLength": 7},
    {"name": "Belgium", "code": "BE", "localeUA": "Бельгія", "phoneCode": "32", "numberLength": 9},
    {"name": "Belize", "code": "BZ", "localeUA": "Беліз", "phoneCode": "501", "numberLength": 7},
    {"name": "Benin", "code": "BJ", "localeUA": "Бенін", "phoneCode": "229", "numberLength": 8},
    {"name": "Bermuda", "code": "BM", "localeUA": "Бермуди", "phoneCode": "1-441", "numberLength": 7},
    {"name": "Bhutan", "code": "BT", "localeUA": "Бутан", "phoneCode": "975", "numberLength": 8},
    {"name": "Bolivia", "code": "BO", "localeUA": "Болівія", "phoneCode": "591", "numberLength": 8},
    {
        "name": "Bosnia and Herzegovina",
        "code": "BA",
        "localeUA": "Боснія і Герцеговина",
        "phoneCode": "387",
        "numberLength": 8
    },
    {"name": "Botswana", "code": "BW", "localeUA": "Ботсвана", "phoneCode": "267", "numberLength": 7},
    {"name": "Bouvet Island", "code": "BV", "localeUA": "Острів Буве", "phoneCode": "", "numberLength": 0},
    {"name": "Brazil", "code": "BR", "localeUA": "Бразилія", "phoneCode": "55", "numberLength": 11},
    {
        "name": "British Indian Ocean Territory",
        "code": "IO",
        "localeUA": "Британська територія в Індійському океані",
        "phoneCode": "",
        "numberLength": 0
    },
    {"name": "Brunei Darussalam", "code": "BN", "localeUA": "Бруней", "phoneCode": "673", "numberLength": 7},
    {"name": "Bulgaria", "code": "BG", "localeUA": "Болгарія", "phoneCode": "359", "numberLength": 8},
    {"name": "Burkina Faso", "code": "BF", "localeUA": "Буркіна-Фасо", "phoneCode": "226", "numberLength": 8},
    {"name": "Burundi", "code": "BI", "localeUA": "Бурунді", "phoneCode": "257", "numberLength": 8},
    {"name": "Cambodia", "code": "KH", "localeUA": "Камбоджа", "phoneCode": "855", "numberLength": 8},
    {"name": "Cameroon", "code": "CM", "localeUA": "Камерун", "phoneCode": "237", "numberLength": 9},
    {"name": "Canada", "code": "CA", "localeUA": "Канада", "phoneCode": "1", "numberLength": 10},
    {"name": "Cape Verde", "code": "CV", "localeUA": "Кабо-Верде", "phoneCode": "238", "numberLength": 7},
    {"name": "Cayman Islands", "code": "KY", "localeUA": "Кайманові острови", "phoneCode": "1-345", "numberLength": 7},
    {
        "name": "Central African Republic",
        "code": "CF",
        "localeUA": "Центральноафриканська Республіка",
        "phoneCode": "236",
        "numberLength": 8
    },
    {"name": "Chad", "code": "TD", "localeUA": "Чад", "phoneCode": "235", "numberLength": 8},
    {"name": "Chile", "code": "CL", "localeUA": "Чилі", "phoneCode": "56", "numberLength": 9},
    {"name": "China", "code": "CN", "localeUA": "Китай", "phoneCode": "86", "numberLength": 11},
    {"name": "Christmas Island", "code": "CX", "localeUA": "Острів Різдва", "phoneCode": "61", "numberLength": 9},
    {
        "name": "Cocos (Keeling) Islands",
        "code": "CC",
        "localeUA": "Острови Кокос",
        "phoneCode": "61",
        "numberLength": 9
    },
    {"name": "Colombia", "code": "CO", "localeUA": "Колумбія", "phoneCode": "57", "numberLength": 10},
    {"name": "Comoros", "code": "KM", "localeUA": "Комори", "phoneCode": "269", "numberLength": 7},
    {"name": "Congo", "code": "CG", "localeUA": "Конго", "phoneCode": "242", "numberLength": 9},
    {
        "name": "Congo, The Democratic Republic of the",
        "code": "CD",
        "localeUA": "Конго, Демократична Республіка",
        "phoneCode": "243",
        "numberLength": 9
    },
    {"name": "Cook Islands", "code": "CK", "localeUA": "Острови Кука", "phoneCode": "682", "numberLength": 7},
    {"name": "Costa Rica", "code": "CR", "localeUA": "Коста-Ріка", "phoneCode": "506", "numberLength": 8},
    {"name": "Croatia", "code": "HR", "localeUA": "Хорватія", "phoneCode": "385", "numberLength": 9},
    {"name": "Cuba", "code": "CU", "localeUA": "Куба", "phoneCode": "53", "numberLength": 8},
    {"name": "Curacao", "code": "CW", "localeUA": "Кюрасао", "phoneCode": "599", "numberLength": 7},
    {"name": "Cyprus", "code": "CY", "localeUA": "Кіпр", "phoneCode": "357", "numberLength": 8},
    {"name": "Czech Republic", "code": "CZ", "localeUA": "Чехія", "phoneCode": "420", "numberLength": 9},
    {"name": "Denmark", "code": "DK", "localeUA": "Данія", "phoneCode": "45", "numberLength": 8},
    {"name": "Djibouti", "code": "DJ", "localeUA": "Джибуті", "phoneCode": "253", "numberLength": 6},
    {"name": "Dominica", "code": "DM", "localeUA": "Домініка", "phoneCode": "1-767", "numberLength": 7},
    {
        "name": "Dominican Republic",
        "code": "DO",
        "localeUA": "Домініканська Республіка",
        "phoneCode": "1-809",
        "numberLength": 10
    },
    {"name": "Ecuador", "code": "EC", "localeUA": "Еквадор", "phoneCode": "593", "numberLength": 9},
    {"name": "Egypt", "code": "EG", "localeUA": "Єгипет", "phoneCode": "20", "numberLength": 10},
    {"name": "El Salvador", "code": "SV", "localeUA": "Сальвадор", "phoneCode": "503", "numberLength": 8},
    {
        "name": "Equatorial Guinea",
        "code": "GQ",
        "localeUA": "Екваторіальна Гвінея",
        "phoneCode": "240",
        "numberLength": 9
    },
    {"name": "Eritrea", "code": "ER", "localeUA": "Еритрея", "phoneCode": "291", "numberLength": 8},
    {"name": "Estonia", "code": "EE", "localeUA": "Естонія", "phoneCode": "372", "numberLength": 8},
    {"name": "Eswatini", "code": "SZ", "localeUA": "Есватіні", "phoneCode": "268", "numberLength": 9},
    {"name": "Ethiopia", "code": "ET", "localeUA": "Ефіопія", "phoneCode": "251", "numberLength": 10},
    {
        "name": "Falkland Islands",
        "code": "FK",
        "localeUA": "Фолклендські острови",
        "phoneCode": "500",
        "numberLength": 4
    },
    {"name": "Faroe Islands", "code": "FO", "localeUA": "Фарерські острови", "phoneCode": "298", "numberLength": 6},
    {"name": "Fiji", "code": "FJ", "localeUA": "Фіджі", "phoneCode": "679", "numberLength": 7},
    {"name": "Finland", "code": "FI", "localeUA": "Фінляндія", "phoneCode": "358", "numberLength": 8},
    {"name": "France", "code": "FR", "localeUA": "Франція", "phoneCode": "33", "numberLength": 9},
    {"name": "French Guiana", "code": "GF", "localeUA": "Французька Гвіана", "phoneCode": "594", "numberLength": 9},
    {
        "name": "French Polynesia",
        "code": "PF",
        "localeUA": "Французька Полінезія",
        "phoneCode": "689",
        "numberLength": 6
    },
    {"name": "Gabon", "code": "GA", "localeUA": "Габон", "phoneCode": "241", "numberLength": 8},
    {"name": "Gambia", "code": "GM", "localeUA": "Гамбія", "phoneCode": "220", "numberLength": 7},
    {"name": "Georgia", "code": "GE", "localeUA": "Грузія", "phoneCode": "995", "numberLength": 9},
    {"name": "Germany", "code": "DE", "localeUA": "Німеччина", "phoneCode": "49", "numberLength": 11},
    {"name": "Ghana", "code": "GH", "localeUA": "Гана", "phoneCode": "233", "numberLength": 9},
    {"name": "Gibraltar", "code": "GI", "localeUA": "Гібралтар", "phoneCode": "350", "numberLength": 5},
    {"name": "Greece", "code": "GR", "localeUA": "Греція", "phoneCode": "30", "numberLength": 10},
    {"name": "Greenland", "code": "GL", "localeUA": "Гренландія", "phoneCode": "299", "numberLength": 6},
    {"name": "Grenada", "code": "GD", "localeUA": "Гренада", "phoneCode": "1-473", "numberLength": 7},
    {"name": "Guadeloupe", "code": "GP", "localeUA": "Гваделупа", "phoneCode": "590", "numberLength": 9},
    {"name": "Guam", "code": "GU", "localeUA": "Гуам", "phoneCode": "1-671", "numberLength": 7},
    {"name": "Guatemala", "code": "GT", "localeUA": "Гватемала", "phoneCode": "502", "numberLength": 8},
    {"name": "Guernsey", "code": "GG", "localeUA": "Гернсі", "phoneCode": "44-1481", "numberLength": 4},
    {"name": "Guinea", "code": "GN", "localeUA": "Гвінея", "phoneCode": "224", "numberLength": 9},
    {"name": "Guinea-Bissau", "code": "GW", "localeUA": "Гвінея-Бісау", "phoneCode": "245", "numberLength": 8},
    {"name": "Guyana", "code": "GY", "localeUA": "Гаяна", "phoneCode": "592", "numberLength": 7},
    {"name": "Haiti", "code": "HT", "localeUA": "Гаїті", "phoneCode": "509", "numberLength": 8},
    {"name": "Honduras", "code": "HN", "localeUA": "Гондурас", "phoneCode": "504", "numberLength": 8},
    {"name": "Hong Kong", "code": "HK", "localeUA": "Гонконг", "phoneCode": "852", "numberLength": 8},
    {"name": "Hungary", "code": "HU", "localeUA": "Угорщина", "phoneCode": "36", "numberLength": 9},
    {"name": "Iceland", "code": "IS", "localeUA": "Ісландія", "phoneCode": "354", "numberLength": 7},
    {"name": "India", "code": "IN", "localeUA": "Індія", "phoneCode": "91", "numberLength": 10},
    {"name": "Indonesia", "code": "ID", "localeUA": "Індонезія", "phoneCode": "62", "numberLength": 10},
    {"name": "Iran", "code": "IR", "localeUA": "Іран", "phoneCode": "98", "numberLength": 11},
    {"name": "Iraq", "code": "IQ", "localeUA": "Ірак", "phoneCode": "964", "numberLength": 9},
    {"name": "Ireland", "code": "IE", "localeUA": "Ірландія", "phoneCode": "353", "numberLength": 9},
    {"name": "Isle of Man", "code": "IM", "localeUA": "Острів Мен", "phoneCode": "44-1624", "numberLength": 4},
    {"name": "Israel", "code": "IL", "localeUA": "Ізраїль", "phoneCode": "972", "numberLength": 9},
    {"name": "Italy", "code": "IT", "localeUA": "Італія", "phoneCode": "39", "numberLength": 10},
    {"name": "Jamaica", "code": "JM", "localeUA": "Ямайка", "phoneCode": "1-876", "numberLength": 7},
    {"name": "Jersey", "code": "JE", "localeUA": "Джерсі", "phoneCode": "44-1534", "numberLength": 4},
    {"name": "Jordan", "code": "JO", "localeUA": "Йорданія", "phoneCode": "962", "numberLength": 9},
    {"name": "Kazakhstan", "code": "KZ", "localeUA": "Казахстан", "phoneCode": "7", "numberLength": 10},
    {"name": "Kenya", "code": "KE", "localeUA": "Кенія", "phoneCode": "254", "numberLength": 10},
    {"name": "Kiribati", "code": "KI", "localeUA": "Кірибаті", "phoneCode": "686", "numberLength": 7},
    {
        "name": "Korea, Democratic People's Republic of",
        "code": "KP",
        "localeUA": "Корея, Народна Республіка",
        "phoneCode": "850",
        "numberLength": 8
    },
    {
        "name": "Korea, Republic of",
        "code": "KR",
        "localeUA": "Корея, Республіка",
        "phoneCode": "82",
        "numberLength": 11
    },
    {"name": "Kuwait", "code": "KW", "localeUA": "Кувейт", "phoneCode": "965", "numberLength": 8},
    {"name": "Kyrgyzstan", "code": "KG", "localeUA": "Киргизстан", "phoneCode": "996", "numberLength": 9},
    {
        "name": "Lao People's Democratic Republic",
        "code": "LA",
        "localeUA": "Лаос",
        "phoneCode": "856",
        "numberLength": 8
    },
    {"name": "Latvia", "code": "LV", "localeUA": "Латвія", "phoneCode": "371", "numberLength": 8},
    {"name": "Lebanon", "code": "LB", "localeUA": "Ліван", "phoneCode": "961", "numberLength": 8},
    {"name": "Lesotho", "code": "LS", "localeUA": "Лесото", "phoneCode": "266", "numberLength": 8},
    {"name": "Liberia", "code": "LR", "localeUA": "Ліберія", "phoneCode": "231", "numberLength": 7},
    {"name": "Libya", "code": "LY", "localeUA": "Лівія", "phoneCode": "218", "numberLength": 9},
    {"name": "Liechtenstein", "code": "LI", "localeUA": "Ліхтенштейн", "phoneCode": "423", "numberLength": 8},
    {"name": "Lithuania", "code": "LT", "localeUA": "Литва", "phoneCode": "370", "numberLength": 8},
    {"name": "Luxembourg", "code": "LU", "localeUA": "Люксембург", "phoneCode": "352", "numberLength": 9},
    {"name": "Madagascar", "code": "MG", "localeUA": "Мадагаскар", "phoneCode": "261", "numberLength": 9},
    {"name": "Malawi", "code": "MW", "localeUA": "Малаві", "phoneCode": "265", "numberLength": 9},
    {"name": "Malaysia", "code": "MY", "localeUA": "Малайзія", "phoneCode": "60", "numberLength": 10},
    {"name": "Maldives", "code": "MV", "localeUA": "Мальдіви", "phoneCode": "960", "numberLength": 7},
    {"name": "Mali", "code": "ML", "localeUA": "Малі", "phoneCode": "223", "numberLength": 8},
    {"name": "Malta", "code": "MT", "localeUA": "Мальта", "phoneCode": "356", "numberLength": 8},
    {"name": "Marshall Islands", "code": "MH", "localeUA": "Маршаллові острови", "phoneCode": "692", "numberLength": 7},
    {"name": "Martinique", "code": "MQ", "localeUA": "Мартиніка", "phoneCode": "596", "numberLength": 9},
    {"name": "Mauritania", "code": "MR", "localeUA": "Мавританія", "phoneCode": "222", "numberLength": 8},
    {"name": "Mauritius", "code": "MU", "localeUA": "Маврикій", "phoneCode": "230", "numberLength": 8},
    {"name": "Mayotte", "code": "YT", "localeUA": "Майотта", "phoneCode": "262", "numberLength": 9},
    {"name": "Mexico", "code": "MX", "localeUA": "Мексика", "phoneCode": "52", "numberLength": 10},
    {
        "name": "Micronesia (Federated States of)",
        "code": "FM",
        "localeUA": "Мікронезія",
        "phoneCode": "691",
        "numberLength": 7
    },
    {"name": "Moldova", "code": "MD", "localeUA": "Молдова", "phoneCode": "373", "numberLength": 8},
    {"name": "Monaco", "code": "MC", "localeUA": "Монако", "phoneCode": "377", "numberLength": 8},
    {"name": "Mongolia", "code": "MN", "localeUA": "Монголія", "phoneCode": "976", "numberLength": 8},
    {"name": "Montenegro", "code": "ME", "localeUA": "Чорногорія", "phoneCode": "382", "numberLength": 8},
    {"name": "Montserrat", "code": "MS", "localeUA": "Монтсеррат", "phoneCode": "1-664", "numberLength": 7},
    {"name": "Morocco", "code": "MA", "localeUA": "Марокко", "phoneCode": "212", "numberLength": 10},
    {"name": "Mozambique", "code": "MZ", "localeUA": "Мозамбік", "phoneCode": "258", "numberLength": 9},
    {"name": "Myanmar", "code": "MM", "localeUA": "М'янма", "phoneCode": "95", "numberLength": 8},
    {"name": "Namibia", "code": "NA", "localeUA": "Намібія", "phoneCode": "264", "numberLength": 9},
    {"name": "Nauru", "code": "NR", "localeUA": "Науру", "phoneCode": "674", "numberLength": 7},
    {"name": "Nepal", "code": "NP", "localeUA": "Непал", "phoneCode": "977", "numberLength": 10},
    {"name": "Netherlands", "code": "NL", "localeUA": "Нідерланди", "phoneCode": "31", "numberLength": 9},
    {"name": "New Caledonia", "code": "NC", "localeUA": "Нова Каледонія", "phoneCode": "687", "numberLength": 6},
    {"name": "New Zealand", "code": "NZ", "localeUA": "Нова Зеландія", "phoneCode": "64", "numberLength": 9},
    {"name": "Nicaragua", "code": "NI", "localeUA": "Нікарагуа", "phoneCode": "505", "numberLength": 8},
    {"name": "Niger", "code": "NE", "localeUA": "Нігер", "phoneCode": "227", "numberLength": 8},
    {"name": "Nigeria", "code": "NG", "localeUA": "Нігерія", "phoneCode": "234", "numberLength": 10},
    {"name": "Niue", "code": "NU", "localeUA": "Ніуе", "phoneCode": "683", "numberLength": 5},
    {"name": "Norfolk Island", "code": "NF", "localeUA": "Острів Норфолк", "phoneCode": "672", "numberLength": 6},
    {"name": "North Macedonia", "code": "MK", "localeUA": "Північна Македонія", "phoneCode": "389", "numberLength": 8},
    {
        "name": "Northern Mariana Islands",
        "code": "MP",
        "localeUA": "Північні Маріанські острови",
        "phoneCode": "1-670",
        "numberLength": 7
    },
    {"name": "Norway", "code": "NO", "localeUA": "Норвегія", "phoneCode": "47", "numberLength": 8},
    {"name": "Oman", "code": "OM", "localeUA": "Оман", "phoneCode": "968", "numberLength": 8},
    {"name": "Pakistan", "code": "PK", "localeUA": "Пакистан", "phoneCode": "92", "numberLength": 10},
    {"name": "Palau", "code": "PW", "localeUA": "Палау", "phoneCode": "680", "numberLength": 7},
    {"name": "Panama", "code": "PA", "localeUA": "Панама", "phoneCode": "507", "numberLength": 8},
    {
        "name": "Papua New Guinea",
        "code": "PG",
        "localeUA": "Папуа - Нова Гвінея",
        "phoneCode": "675",
        "numberLength": 7
    },
    {"name": "Paraguay", "code": "PY", "localeUA": "Парагвай", "phoneCode": "595", "numberLength": 9},
    {"name": "Peru", "code": "PE", "localeUA": "Перу", "phoneCode": "51", "numberLength": 9},
    {"name": "Philippines", "code": "PH", "localeUA": "Філіппіни", "phoneCode": "63", "numberLength": 10},
    {"name": "Pitcairn", "code": "PN", "localeUA": "Піткерн", "phoneCode": "870", "numberLength": 3},
    {"name": "Poland", "code": "PL", "localeUA": "Польща", "phoneCode": "48", "numberLength": 9},
    {"name": "Portugal", "code": "PT", "localeUA": "Португалія", "phoneCode": "351", "numberLength": 9},
    {"name": "Puerto Rico", "code": "PR", "localeUA": "Пуерто-Рико", "phoneCode": "1-787", "numberLength": 7},
    {"name": "Qatar", "code": "QA", "localeUA": "Катар", "phoneCode": "974", "numberLength": 8},
    {"name": "Romania", "code": "RO", "localeUA": "Румунія", "phoneCode": "40", "numberLength": 10},
    {"name": "Russia", "code": "RU", "localeUA": "Росія", "phoneCode": "7", "numberLength": 11},
    {"name": "Rwanda", "code": "RW", "localeUA": "Руанда", "phoneCode": "250", "numberLength": 9},
    {"name": "Saint Barthelemy", "code": "BL", "localeUA": "Сен-Бартелемі", "phoneCode": "590", "numberLength": 9},
    {"name": "Saint Helena", "code": "SH", "localeUA": "Свята Олена", "phoneCode": "290", "numberLength": 4},
    {
        "name": "Saint Kitts and Nevis",
        "code": "KN",
        "localeUA": "Сент-Кітс і Невіс",
        "phoneCode": "1-869",
        "numberLength": 7
    },
    {"name": "Saint Lucia", "code": "LC", "localeUA": "Сент-Люсія", "phoneCode": "1-758", "numberLength": 7},
    {"name": "Saint Martin", "code": "MF", "localeUA": "Сен-Мартен", "phoneCode": "590", "numberLength": 9},
    {
        "name": "Saint Pierre and Miquelon",
        "code": "PM",
        "localeUA": "Сен-П'єр і Мікелон",
        "phoneCode": "508",
        "numberLength": 6
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "code": "VC",
        "localeUA": "Сент-Вінсент і Гренадини",
        "phoneCode": "1-784",
        "numberLength": 7
    },
    {"name": "Samoa", "code": "WS", "localeUA": "Самоа", "phoneCode": "685", "numberLength": 7},
    {"name": "San Marino", "code": "SM", "localeUA": "Сан-Марино", "phoneCode": "378", "numberLength": 10},
    {
        "name": "Sao Tome and Principe",
        "code": "ST",
        "localeUA": "Сан-Томе і Принсіпі",
        "phoneCode": "239",
        "numberLength": 6
    },
    {"name": "Saudi Arabia", "code": "SA", "localeUA": "Саудівська Аравія", "phoneCode": "966", "numberLength": 9},
    {"name": "Senegal", "code": "SN", "localeUA": "Сенегал", "phoneCode": "221", "numberLength": 9},
    {"name": "Serbia", "code": "RS", "localeUA": "Сербія", "phoneCode": "381", "numberLength": 8},
    {"name": "Seychelles", "code": "SC", "localeUA": "Сейшельські острови", "phoneCode": "248", "numberLength": 4},
    {"name": "Sierra Leone", "code": "SL", "localeUA": "Сьєрра-Леоне", "phoneCode": "232", "numberLength": 8},
    {"name": "Singapore", "code": "SG", "localeUA": "Сінгапур", "phoneCode": "65", "numberLength": 8},
    {"name": "Sint Maarten", "code": "SX", "localeUA": "Сінт-Мартен", "phoneCode": "1-721", "numberLength": 7},
    {"name": "Slovakia", "code": "SK", "localeUA": "Словаччина", "phoneCode": "421", "numberLength": 9},
    {"name": "Slovenia", "code": "SI", "localeUA": "Словенія", "phoneCode": "386", "numberLength": 8},
    {"name": "Solomon Islands", "code": "SB", "localeUA": "Соломонові Острови", "phoneCode": "677", "numberLength": 7},
    {"name": "Somalia", "code": "SO", "localeUA": "Сомалі", "phoneCode": "252", "numberLength": 7},
    {
        "name": "South Africa",
        "code": "ZA",
        "localeUA": "Південноафриканська Республіка",
        "phoneCode": "27",
        "numberLength": 10
    },
    {"name": "South Sudan", "code": "SS", "localeUA": "Південний Судан", "phoneCode": "211", "numberLength": 9},
    {"name": "Spain", "code": "ES", "localeUA": "Іспанія", "phoneCode": "34", "numberLength": 9},
    {"name": "Sri Lanka", "code": "LK", "localeUA": "Шрі-Ланка", "phoneCode": "94", "numberLength": 10},
    {
        "name": "State of Palestine",
        "code": "PS",
        "localeUA": "Держава Палестина",
        "phoneCode": "970",
        "numberLength": 9
    },
    {"name": "Suriname", "code": "SR", "localeUA": "Суринам", "phoneCode": "597", "numberLength": 7},
    {"name": "Sweden", "code": "SE", "localeUA": "Швеція", "phoneCode": "46", "numberLength": 10},
    {"name": "Switzerland", "code": "CH", "localeUA": "Швейцарія", "phoneCode": "41", "numberLength": 9},
    {"name": "Syria", "code": "SY", "localeUA": "Сирія", "phoneCode": "963", "numberLength": 9},
    {"name": "Taiwan", "code": "TW", "localeUA": "Тайвань", "phoneCode": "886", "numberLength": 10},
    {"name": "Tajikistan", "code": "TJ", "localeUA": "Таджикистан", "phoneCode": "992", "numberLength": 9},
    {"name": "Tanzania", "code": "TZ", "localeUA": "Танзанія", "phoneCode": "255", "numberLength": 10},
    {"name": "Thailand", "code": "TH", "localeUA": "Таїланд", "phoneCode": "66", "numberLength": 9},
    {"name": "Timor-Leste", "code": "TL", "localeUA": "Східний Тимор", "phoneCode": "670", "numberLength": 7},
    {"name": "Togo", "code": "TG", "localeUA": "Того", "phoneCode": "228", "numberLength": 8},
    {"name": "Tokelau", "code": "TK", "localeUA": "Токелау", "phoneCode": "690", "numberLength": 7},
    {"name": "Tonga", "code": "TO", "localeUA": "Тонга", "phoneCode": "676", "numberLength": 6},
    {
        "name": "Trinidad and Tobago",
        "code": "TT",
        "localeUA": "Тринідад і Тобаго",
        "phoneCode": "1-868",
        "numberLength": 7
    },
    {"name": "Tunisia", "code": "TN", "localeUA": "Туніс", "phoneCode": "216", "numberLength": 8},
    {"name": "Turkey", "code": "TR", "localeUA": "Туреччина", "phoneCode": "90", "numberLength": 10},
    {"name": "Turkmenistan", "code": "TM", "localeUA": "Туркменістан", "phoneCode": "993", "numberLength": 8},
    {"name": "Tuvalu", "code": "TV", "localeUA": "Тувалу", "phoneCode": "688", "numberLength": 7},
    {"name": "Uganda", "code": "UG", "localeUA": "Уганда", "phoneCode": "256", "numberLength": 10},
    {"name": "Ukraine", "code": "UA", "localeUA": "Україна", "phoneCode": "380", "numberLength": 9},
    {
        "name": "United Arab Emirates",
        "code": "AE",
        "localeUA": "Об'єднані Арабські Емірати",
        "phoneCode": "971",
        "numberLength": 9
    },
    {"name": "United Kingdom", "code": "GB", "localeUA": "Велика Британія", "phoneCode": "44", "numberLength": 5},
    {
        "name": "United States of America",
        "code": "US",
        "localeUA": "Сполучені Штати Америки",
        "phoneCode": "1",
        "numberLength": 10
    },
    {"name": "Uruguay", "code": "UY", "localeUA": "Уругвай", "phoneCode": "598", "numberLength": 8},
    {"name": "Uzbekistan", "code": "UZ", "localeUA": "Узбекистан", "phoneCode": "998", "numberLength": 9},
    {"name": "Vanuatu", "code": "VU", "localeUA": "Вануату", "phoneCode": "678", "numberLength": 7},
    {"name": "Vatican City", "code": "VA", "localeUA": "Ватикан", "phoneCode": "39", "numberLength": 10},
    {"name": "Venezuela", "code": "VE", "localeUA": "Венесуела", "phoneCode": "58", "numberLength": 11},
    {"name": "Vietnam", "code": "VN", "localeUA": "В'єтнам", "phoneCode": "84", "numberLength": 10},
    {"name": "Wallis and Futuna", "code": "WF", "localeUA": "Волліс і Футуна", "phoneCode": "681", "numberLength": 6},
    {"name": "Western Sahara", "code": "EH", "localeUA": "Західна Сахара", "phoneCode": "212", "numberLength": 9},
    {"name": "Yemen", "code": "YE", "localeUA": "Ємен", "phoneCode": "967", "numberLength": 9},
    {"name": "Zambia", "code": "ZM", "localeUA": "Замбія", "phoneCode": "260", "numberLength": 9},
    {"name": "Zimbabwe", "code": "ZW", "localeUA": "Зімбабве", "phoneCode": "263", "numberLength": 9}
]

export const currency: Currency[] = [
    {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
    },
    {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
    },
    {
        "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
    },
    {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol_native": "د.إ.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },
    {
        "symbol": "Af",
        "name": "Afghan Afghani",
        "symbol_native": "؋",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
    },
    {
        "symbol": "ALL",
        "name": "Albanian Lek",
        "symbol_native": "Lek",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ALL",
        "name_plural": "Albanian lekë"
    },
    {
        "symbol": "AMD",
        "name": "Armenian Dram",
        "symbol_native": "դր.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AMD",
        "name_plural": "Armenian drams"
    },
    {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos"
    },
    {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
    },
    {
        "symbol": "man.",
        "name": "Azerbaijani Manat",
        "symbol_native": "ман.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AZN",
        "name_plural": "Azerbaijani manats"
    },
    {
        "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "symbol_native": "KM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks"
    },
    {
        "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "symbol_native": "৳",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BDT",
        "name_plural": "Bangladeshi takas"
    },
    {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
        "symbol_native": "лв.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
    },
    {
        "symbol": "BD",
        "name": "Bahraini Dinar",
        "symbol_native": "د.ب.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "BHD",
        "name_plural": "Bahraini dinars"
    },
    {
        "symbol": "FBu",
        "name": "Burundian Franc",
        "symbol_native": "FBu",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "BIF",
        "name_plural": "Burundian francs"
    },
    {
        "symbol": "BN$",
        "name": "Brunei Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BND",
        "name_plural": "Brunei dollars"
    },
    {
        "symbol": "Bs",
        "name": "Bolivian Boliviano",
        "symbol_native": "Bs",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BOB",
        "name_plural": "Bolivian bolivianos"
    },
    {
        "symbol": "R$",
        "name": "Brazilian Real",
        "symbol_native": "R$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
    },
    {
        "symbol": "BWP",
        "name": "Botswanan Pula",
        "symbol_native": "P",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BWP",
        "name_plural": "Botswanan pulas"
    },
    {
        "symbol": "BZ$",
        "name": "Belize Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BZD",
        "name_plural": "Belize dollars"
    },
    {
        "symbol": "CDF",
        "name": "Congolese Franc",
        "symbol_native": "FrCD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CDF",
        "name_plural": "Congolese francs"
    },
    {
        "symbol": "CHF",
        "name": "Swiss Franc",
        "symbol_native": "CHF",
        "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
    },
    {
        "symbol": "CL$",
        "name": "Chilean Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CLP",
        "name_plural": "Chilean pesos"
    },
    {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
    },
    {
        "symbol": "CO$",
        "name": "Colombian Peso",
        "symbol_native": "$",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "COP",
        "name_plural": "Colombian pesos"
    },
    {
        "symbol": "₡",
        "name": "Costa Rican Colón",
        "symbol_native": "₡",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CRC",
        "name_plural": "Costa Rican colóns"
    },
    {
        "symbol": "CV$",
        "name": "Cape Verdean Escudo",
        "symbol_native": "CV$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CVE",
        "name_plural": "Cape Verdean escudos"
    },
    {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
        "symbol_native": "Kč",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
    },
    {
        "symbol": "Fdj",
        "name": "Djiboutian Franc",
        "symbol_native": "Fdj",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "DJF",
        "name_plural": "Djiboutian francs"
    },
    {
        "symbol": "Dkr",
        "name": "Danish Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
    },
    {
        "symbol": "RD$",
        "name": "Dominican Peso",
        "symbol_native": "RD$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DOP",
        "name_plural": "Dominican pesos"
    },
    {
        "symbol": "DA",
        "name": "Algerian Dinar",
        "symbol_native": "د.ج.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DZD",
        "name_plural": "Algerian dinars"
    },
    {
        "symbol": "Ekr",
        "name": "Estonian Kroon",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EEK",
        "name_plural": "Estonian kroons"
    },
    {
        "symbol": "EGP",
        "name": "Egyptian Pound",
        "symbol_native": "ج.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EGP",
        "name_plural": "Egyptian pounds"
    },
    {
        "symbol": "Nfk",
        "name": "Eritrean Nakfa",
        "symbol_native": "Nfk",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ERN",
        "name_plural": "Eritrean nakfas"
    },
    {
        "symbol": "Br",
        "name": "Ethiopian Birr",
        "symbol_native": "Br",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ETB",
        "name_plural": "Ethiopian birrs"
    },
    {
        "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
    },
    {
        "symbol": "GEL",
        "name": "Georgian Lari",
        "symbol_native": "GEL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GEL",
        "name_plural": "Georgian laris"
    },
    {
        "symbol": "GH₵",
        "name": "Ghanaian Cedi",
        "symbol_native": "GH₵",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GHS",
        "name_plural": "Ghanaian cedis"
    },
    {
        "symbol": "FG",
        "name": "Guinean Franc",
        "symbol_native": "FG",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "GNF",
        "name_plural": "Guinean francs"
    },
    {
        "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "symbol_native": "Q",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals"
    },
    {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
    },
    {
        "symbol": "HNL",
        "name": "Honduran Lempira",
        "symbol_native": "L",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HNL",
        "name_plural": "Honduran lempiras"
    },
    {
        "symbol": "kn",
        "name": "Croatian Kuna",
        "symbol_native": "kn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
    },
    {
        "symbol": "Ft",
        "name": "Hungarian Forint",
        "symbol_native": "Ft",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
    },
    {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
        "symbol_native": "Rp",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
    },
    {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "symbol_native": "₪",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
    },
    {
        "symbol": "Rs",
        "name": "Indian Rupee",
        "symbol_native": "টকা",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
    },
    {
        "symbol": "IQD",
        "name": "Iraqi Dinar",
        "symbol_native": "د.ع.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IQD",
        "name_plural": "Iraqi dinars"
    },
    {
        "symbol": "Ikr",
        "name": "Icelandic Króna",
        "symbol_native": "kr",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ISK",
        "name_plural": "Icelandic krónur"
    },
    {
        "symbol": "J$",
        "name": "Jamaican Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "JMD",
        "name_plural": "Jamaican dollars"
    },
    {
        "symbol": "JD",
        "name": "Jordanian Dinar",
        "symbol_native": "د.أ.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "JOD",
        "name_plural": "Jordanian dinars"
    },
    {
        "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
    },
    {
        "symbol": "Ksh",
        "name": "Kenyan Shilling",
        "symbol_native": "Ksh",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KES",
        "name_plural": "Kenyan shillings"
    },
    {
        "symbol": "KHR",
        "name": "Cambodian Riel",
        "symbol_native": "៛",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KHR",
        "name_plural": "Cambodian riels"
    },
    {
        "symbol": "CF",
        "name": "Comorian Franc",
        "symbol_native": "FC",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KMF",
        "name_plural": "Comorian francs"
    },
    {
        "symbol": "₩",
        "name": "South Korean Won",
        "symbol_native": "₩",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
    },
    {
        "symbol": "KD",
        "name": "Kuwaiti Dinar",
        "symbol_native": "د.ك.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "KWD",
        "name_plural": "Kuwaiti dinars"
    },
    {
        "symbol": "KZT",
        "name": "Kazakhstani Tenge",
        "symbol_native": "тңг.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KZT",
        "name_plural": "Kazakhstani tenges"
    },
    {
        "symbol": "LB£",
        "name": "Lebanese Pound",
        "symbol_native": "ل.ل.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "LBP",
        "name_plural": "Lebanese pounds"
    },
    {
        "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
        "symbol_native": "SL Re",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LKR",
        "name_plural": "Sri Lankan rupees"
    },
    {
        "symbol": "Lt",
        "name": "Lithuanian Litas",
        "symbol_native": "Lt",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LTL",
        "name_plural": "Lithuanian litai"
    },
    {
        "symbol": "Ls",
        "name": "Latvian Lats",
        "symbol_native": "Ls",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "LVL",
        "name_plural": "Latvian lati"
    },
    {
        "symbol": "LD",
        "name": "Libyan Dinar",
        "symbol_native": "د.ل.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "LYD",
        "name_plural": "Libyan dinars"
    },
    {
        "symbol": "MAD",
        "name": "Moroccan Dirham",
        "symbol_native": "د.م.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MAD",
        "name_plural": "Moroccan dirhams"
    },
    {
        "symbol": "MDL",
        "name": "Moldovan Leu",
        "symbol_native": "MDL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MDL",
        "name_plural": "Moldovan lei"
    },
    {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
        "symbol_native": "MGA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MGA",
        "name_plural": "Malagasy Ariaries"
    },
    {
        "symbol": "MKD",
        "name": "Macedonian Denar",
        "symbol_native": "MKD",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MKD",
        "name_plural": "Macedonian denari"
    },
    {
        "symbol": "MMK",
        "name": "Myanma Kyat",
        "symbol_native": "K",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MMK",
        "name_plural": "Myanma kyats"
    },
    {
        "symbol": "MOP$",
        "name": "Macanese Pataca",
        "symbol_native": "MOP$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MOP",
        "name_plural": "Macanese patacas"
    },
    {
        "symbol": "MURs",
        "name": "Mauritian Rupee",
        "symbol_native": "MURs",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MUR",
        "name_plural": "Mauritian rupees"
    },
    {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
    },
    {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
        "symbol_native": "RM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
    },
    {
        "symbol": "MTn",
        "name": "Mozambican Metical",
        "symbol_native": "MTn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MZN",
        "name_plural": "Mozambican meticals"
    },
    {
        "symbol": "N$",
        "name": "Namibian Dollar",
        "symbol_native": "N$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NAD",
        "name_plural": "Namibian dollars"
    },
    {
        "symbol": "₦",
        "name": "Nigerian Naira",
        "symbol_native": "₦",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NGN",
        "name_plural": "Nigerian nairas"
    },
    {
        "symbol": "C$",
        "name": "Nicaraguan Córdoba",
        "symbol_native": "C$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas"
    },
    {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
    },
    {
        "symbol": "NPRs",
        "name": "Nepalese Rupee",
        "symbol_native": "नेरू",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NPR",
        "name_plural": "Nepalese rupees"
    },
    {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
    },
    {
        "symbol": "OMR",
        "name": "Omani Rial",
        "symbol_native": "ر.ع.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "OMR",
        "name_plural": "Omani rials"
    },
    {
        "symbol": "B/.",
        "name": "Panamanian Balboa",
        "symbol_native": "B/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PAB",
        "name_plural": "Panamanian balboas"
    },
    {
        "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
        "symbol_native": "S/.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles"
    },
    {
        "symbol": "₱",
        "name": "Philippine Peso",
        "symbol_native": "₱",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
    },
    {
        "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "symbol_native": "₨",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PKR",
        "name_plural": "Pakistani rupees"
    },
    {
        "symbol": "zł",
        "name": "Polish Zloty",
        "symbol_native": "zł",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
    },
    {
        "symbol": "₲",
        "name": "Paraguayan Guarani",
        "symbol_native": "₲",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PYG",
        "name_plural": "Paraguayan guaranis"
    },
    {
        "symbol": "QR",
        "name": "Qatari Rial",
        "symbol_native": "ر.ق.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "QAR",
        "name_plural": "Qatari rials"
    },
    {
        "symbol": "RON",
        "name": "Romanian Leu",
        "symbol_native": "RON",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
    },
    {
        "symbol": "din.",
        "name": "Serbian Dinar",
        "symbol_native": "дин.",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RSD",
        "name_plural": "Serbian dinars"
    },
    {
        "symbol": "RWF",
        "name": "Rwandan Franc",
        "symbol_native": "FR",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "RWF",
        "name_plural": "Rwandan francs"
    },
    {
        "symbol": "SR",
        "name": "Saudi Riyal",
        "symbol_native": "ر.س.‏",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SAR",
        "name_plural": "Saudi riyals"
    },
    {
        "symbol": "SDG",
        "name": "Sudanese Pound",
        "symbol_native": "SDG",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SDG",
        "name_plural": "Sudanese pounds"
    },
    {
        "symbol": "Skr",
        "name": "Swedish Krona",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
    },
    {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
    },
    {
        "symbol": "Ssh",
        "name": "Somali Shilling",
        "symbol_native": "Ssh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SOS",
        "name_plural": "Somali shillings"
    },
    {
        "symbol": "SY£",
        "name": "Syrian Pound",
        "symbol_native": "ل.س.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "SYP",
        "name_plural": "Syrian pounds"
    },
    {
        "symbol": "฿",
        "name": "Thai Baht",
        "symbol_native": "฿",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
    },
    {
        "symbol": "DT",
        "name": "Tunisian Dinar",
        "symbol_native": "د.ت.‏",
        "decimal_digits": 3,
        "rounding": 0,
        "code": "TND",
        "name_plural": "Tunisian dinars"
    },
    {
        "symbol": "T$",
        "name": "Tongan Paʻanga",
        "symbol_native": "T$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TOP",
        "name_plural": "Tongan paʻanga"
    },
    {
        "symbol": "TL",
        "name": "Turkish Lira",
        "symbol_native": "TL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
    },
    {
        "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars"
    },
    {
        "symbol": "NT$",
        "name": "New Taiwan Dollar",
        "symbol_native": "NT$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TWD",
        "name_plural": "New Taiwan dollars"
    },
    {
        "symbol": "TSh",
        "name": "Tanzanian Shilling",
        "symbol_native": "TSh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "TZS",
        "name_plural": "Tanzanian shillings"
    },
    {
        "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "symbol_native": "₴",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias"
    },
    {
        "symbol": "USh",
        "name": "Ugandan Shilling",
        "symbol_native": "USh",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UGX",
        "name_plural": "Ugandan shillings"
    },
    {
        "symbol": "$U",
        "name": "Uruguayan Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UYU",
        "name_plural": "Uruguayan pesos"
    },
    {
        "symbol": "UZS",
        "name": "Uzbekistan Som",
        "symbol_native": "UZS",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "UZS",
        "name_plural": "Uzbekistan som"
    },
    {
        "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
        "symbol_native": "Bs.F.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "VEF",
        "name_plural": "Venezuelan bolívars"
    },
    {
        "symbol": "₫",
        "name": "Vietnamese Dong",
        "symbol_native": "₫",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "VND",
        "name_plural": "Vietnamese dong"
    },
    {
        "symbol": "FCFA",
        "name": "CFA Franc BEAC",
        "symbol_native": "FCFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XAF",
        "name_plural": "CFA francs BEAC"
    },
    {
        "symbol": "CFA",
        "name": "CFA Franc BCEAO",
        "symbol_native": "CFA",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "XOF",
        "name_plural": "CFA francs BCEAO"
    },
    {
        "symbol": "YR",
        "name": "Yemeni Rial",
        "symbol_native": "ر.ي.‏",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "YER",
        "name_plural": "Yemeni rials"
    },
    {
        "symbol": "R",
        "name": "South African Rand",
        "symbol_native": "R",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
    },
    {
        "symbol": "ZK",
        "name": "Zambian Kwacha",
        "symbol_native": "ZK",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "ZMK",
        "name_plural": "Zambian kwachas"
    }
]

export const tourCategories: string[] = [
    "Архітектура",
    "Історичні місця",
    "Перлина мітса"
]
