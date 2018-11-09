namespace MuseCity {

	let flag = true;
    let apiurlhk = "api.muselab.hk/hk/?id="
    let apiurlsg = "api.muselab.hk/sg/?id=" 
    let apihkwcond = "api.muselab.hk/hk/conditions/index.php"
    let apiurlhktraffic = "api.muselab.hk/hk/musetraffic/?id="
	
    export enum hkStationSelect {
        //% blockId="HK1"
        //% block="Hong Kong Observatory"
        HK1 = 1,
        //% blockId="HK2"
        //% block="Kings Park"
        HK2 = 2,
		//% blockId="HK3"
        //% block="Wong Chuk Hang"
        HK3 = 3,
        //% blockId="HK4"
        //% block="Ta Kwu Ling"
        HK4 = 4,
		//% blockId="HK5"
        //% block="Lau Fau Shan"
        HK5 = 5,
        //% blockId="HK6"
        //% block="Sha Tin"
        HK6 = 6,
		//% blockId="HK7"
        //% block="Tuen Mun"
        HK7 = 7,
        //% blockId="HK8"
        //% block="Tseung Kwan O"
        HK8 = 8,
        //% blockId="HK9"
        //% block="Sai Kung"
        HK9 = 9,
		//% blockId="HK10"
        //% block="Cheung Chau"
        HK10 = 10,
        //% blockId="HK11"
        //% block="Chek Lap Kok"
        HK11 = 11,
		//% blockId="HK12"
        //% block="Tsing Yi"
        HK12 = 12,
        //% blockId="HK13"
        //% block="Shek Kong"
        HK13 = 13,
		//% blockId="HK14"
        //% block="Tsuen Wan Ho Koon"
        HK14 = 14,
        //% blockId="HK15"
        //% block="Tsuen Wan Shing Mun Valley"
        HK15 = 15,
        //% blockId="HK16"
        //% block="Hong Kong Park"
        HK16 = 16,
		//% blockId="HK17"
        //% block="Shau Kei Wan"
        HK17 = 17,
        //% blockId="HK18"
        //% block="Kowloon City"
        HK18 = 18,
		//% blockId="HK19"
        //% block="Happy Valley"
        HK19 = 19,
        //% blockId="HK20"
        //% block="Wong Tai Sin"
        HK20 = 20,
		//% blockId="HK21"
        //% block="Stanley"
        HK21 = 21,
        //% blockId="HK22"
        //% block="Kwun Tong"
        HK22 = 22,
        //% blockId="HK23"
        //% block="Sham_Shui_Po"
        HK23 = 23,
		//% blockId="HK24"
        //% block="Kai Tak Runway Park"
        HK24 = 24,
        //% blockId="HK25"
        //% block="Yuen Long Park"
        HK25 = 25,
		//% blockId="HK26"
        //% block="Tai Mei Tuk"
        HK26 = 26
    }

    export enum sgStationSelect {
        //% blockId="SG1"
        //% block="Banyan"
        SG1 = 1,
        //% blockId="SG2"
        //% block="Clementi"
        SG2 = 2,
		//% blockId="SG3"
        //% block="EastCost Parkway"
        SG3 = 3,
        //% blockId="SG4"
        //% block="Kim Chuan Road"
        SG4 = 4,
		//% blockId="SG5"
        //% block="Marina Gardens Drive"
        SG5 = 5,
        //% blockId="SG6"
        //% block="Nanyang Avenue"
        SG6 = 6,
		//% blockId="SG7"
        //% block="Old Choa Chu Kang Road"
        SG7 = 7,
        //% blockId="SG8"
        //% block="Pulau Ubin"
        SG8 = 8,
        //% blockId="SG9"
        //% block="Sembawang Road"
        SG9 = 9,
		//% blockId="SG10"
        //% block="Sentosa"
        SG10 = 10,
        //% blockId="SG11"
        //% block="West Coast Highway"
        SG11 = 11,
		//% blockId="SG12"
        //% block="Woodlands Avenue 9"
        SG12 = 12,
        //% blockId="SG13"
        //% block="Woodlands Road"
        SG13 = 13,
		//% blockId="SG14"
        //% block="Ang Mo Kio Avenue 5"
        SG14 = 14,
        //% blockId="SG15"
        //% block="Scotts Road"
        SG15 = 15
    }

    export enum hkTrafficSelect {
        //% blockId="HKT1"
        //% block="Cross Harbour Tunnel"
        HKT1 = "CH",
        //% blockId="HKT2"
        //% block="Eastern Harbour Crossing"
        HKT2 = "EH",
		//% blockId="HKT3"
        //% block="Western Harbour Crossing"
        HKT3 = "WH",
        //% blockId="HKT4"
        //% block="Lion Rock Tunnel"
        HKT4 = "LRT",
		//% blockId="HKT5"
        //% block="Shing Mun Tunnel"
        HKT5 = "SMT",
        //% blockId="HKT6"
        //% block="Tates Cairn Tunnel"
        HKT6 = "TCT",
		//% blockId="HKT7"
        //% block="Ting Kau via Tai Lum Tunnel"
        HKT7 = "TKTL",
        //% blockId="HKT8"
        //% block="Ting Kau via Tuen Mun Road"
        HKT8 = "TKTM",
        //% blockId="HKT9"
        //% block="Tsing Sha Control Area"
        HKT9 = "TSCA",
		//% blockId="HKT10"
        //% block="Tsuen Wan via Castle Peak"
        HKT10 = "TWCP",
        //% blockId="HKT11"
        //% block="Tsuen Wan via Tuen Mun"
        HKT11 = "TWTM"
    }
	
	// -------------- 1. Main Blocks ----------------
    //%blockId=select_hkstation
    //%block="Select Hong Kong Station %hkstation"
    //% weight=90
	//% blockGap=7
    export function getHkWeather(hkstation: hkStationSelect): number {
        let hkTemp = '';
        let list: string[] = [];
        let hklink = apiurlhk + hkstation;
        serial.writeLine("(AT+http?method=GET" + "&url=" + hklink + "&header=&body=)");
        for (let value of MuseIoT.getGenericHttpReturn()) {
            hkTemp = list;
        }
        return parseInt(hkTemp);
    }
     

    //%blockId=select_sgstation
    //%block="Select Singapore Station %sgstation"
    //% weight=80
	//% blockGap=7
    export function getSgWeather(sgstation: sgStationSelect): string {
        let sglink = '';
        sglink = apiurlsg + sgstation;
        return sglink;
    }


    //%blockId=get_hk_weather_condition
    //%block="Get HK Weather Condition"
    //% weight=70
	//% blockGap=7
    export function getHKwCond(): string {
        let get_string = apihkwcond;
        return get_string;
    }

    //%subcategory=More
    //%blockId=select_hktraffic
    //%block="Hong Kong Road Additional Travel Time %hkTrafficSelect"
	//% weight=60
    export function getHkTraffic(hkdest: hkStationSelect): string {
        let hkTlink = "";
        hkTlink = apiurlhktraffic + hkdest;
        return hkTlink;
    }

}