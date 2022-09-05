

const data = {
    "migrationsverket": {
        "Inkomna ansökningar om asyl": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b90/1659525901814/Inkomna%20ans%C3%B6kningar%20om%20asyl%202022.xlsx",
            "type": "excel"
        },
        "Avgjorda asylärenden": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b8a/1659525901774/Avgjorda%20asyl%C3%A4renden%202022.xlsx",
            "type": "excel"
        },
        "Inskrivna personer i mottagningssytemet": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b92/1659525901840/Inskrivna%20personer%20i%20Migrationsverkets%20mottagningssystem%202022.xlsx",
            "type": "excel"
        },
        "Beviljade arbetstillstånd": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b8b/1659941736439/Beviljade%20arbetstillst%C3%A5nd%202022.xlsx",
            "type": "excel"
        },
        "Asylsökande till Sverige 1984-2017": {
            "url": "https://www.migrationsverket.se/download/18.4a5a58d51602d141cf41004/1643640357046/Asyls%C3%B6kande%20till%20Sverige%202000-2021.xlsx",
            "type": "excel"
        },
        "Beviljade uppehållstillstånd till nära anhöriga 1986-2014": {
            "url": "https://www.migrationsverket.se/download/18.39a9cd9514a346077211284/1485556056617/Beviljade%20uppeh%C3%A5llstillst%C3%A5nd%20till%20n%C3%A4ra%20anh%C3%B6riga%201986-2014.xlsx",
            "type": "excel"
        },
        "Beviljade uppehållstillstånd 1980-2014 för flyktningar m.fl.": {
            "url": "https://www.migrationsverket.se/download/18.39a9cd9514a346077211282/1485556056612/Beviljade%20uppeh%C3%A5llstillst%C3%A5nd%201980-2014%20flyktingar%20m.fl.xlsx",
            "type": "excel"
        },
        "Uppehållstillstånd till gäststuderande 1986-2014": {
            "url": "https://www.migrationsverket.se/download/18.39a9cd9514a346077211288/1485556056600/Uppeh%C3%A5llstillst%C3%A5nd%20till%20g%C3%A4ststuderande%201986-2014.xlsx",
            "type": "excel"
        },
        "Beviljade arbets- och uppehållstillstånd 2005-2015": {
            "url": "https://www.migrationsverket.se/download/18.2bbf7de914c17a2ed265511/1485556054791/%C3%96versikt-2005-2015.xls",
            "type": "excel"
        },
        "Uppehållstillsånd till adoptivbarn 1984-2014": {
            "url": "https://www.migrationsverket.se/download/18.39a9cd9514a34607721128b/1485556056637/Uppeh%C3%A5llstillst%C3%A5nd%20till%20adoptivbarn%201984-2014.xlsx",
            "type": "excel"
        },
        "Beviljade uppehållstillstånd och registrerade uppehållsrätter": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b8d/1659427988559/Beviljade%20uppeh%C3%A5llstillst%C3%A5nd%202022.xlsx",
            "type": "excel"
        },
        "Uppehållstillstånd uppehållsrätter enligt EES-regler 1994-2014": {
            "url": "https://www.migrationsverket.se/download/18.39a9cd9514a34607721128d/1485556056667/Uppeh%C3%A5llstillst%C3%A5nd%20uppeh%C3%A5llsr%C3%A4tter%20enligt%20EES-regler%201994-2014.xlsx",
            "type": "excel"
        },
        "Uppehållstillstånd av arbetsmarknadsskäl 2000-2014": {
            "url": "https://www.migrationsverket.se/download/18.748d859516793fb65f9a3a/1567427131756/Uppeh%C3%A5llstillst%C3%A5nd%20av%20arbetsmarknadssk%C3%A4l%202000-2014.xlsx",
            "type": "excel"
        },
        "Personer mottagna i en kommun": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a992510a0/1659530377853/Kommunmottagna%20enligt%20ers%C3%A4ttningsf%C3%B6rordningen%202022.xlsx",
            "type": "excel"
        },
        "Anmälda områden med sociala och ekonomiska utmaningar": {
            "url": "https://www.migrationsverket.se/download/18.6b4387bd17dc72a9925b89/1659426711524/Anm%C3%A4lda%20omr%C3%A5den.xlsx",
            "type": "excel"
        }
    },
    "folkhälsomyndigheten": {
        "Antal fall av covid-19 i Sverige per åldersgrupp": {
            "url": "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=geojson&where=1%3D1&outFields=*",
            "type": "json"
        },
        "Antal fall av covid-19 i Sverige per dag och region": {
            "url": "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=geojson&where=1%3D1&outFields=*&orderByFields=Statistikdatum%20desc",
            "type": "json"
        },
        "Antal fall av covid-19 i Sverige per region": {
            "url": "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/0/query?f=geojson&where=Region%20%3C%3E%20%27dummy%27&returnGeometry=false&outFields=*",
            "type": "json"
        },
        "Antal fall av covid-19 i Sverige per kön": {
            "url": "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/3/query?f=geojson&where=1%3D1&outFields=*",
            "type": "json"
        }

    },
    "skatteverket": {
        "Beskattnings­­sammandrag för inkomstår 2018": {
            "url": "https://skatteverket.entryscape.net/store/9/resource/977",
            "type": "excel"
        },
        "Beskattnings­­sammandrag för inkomstår 2019": {
            "url": "https://skatteverket.entryscape.net/store/9/resource/1218",
            "type": "excel"
        },
        "Beskattnings-sammandrag för inkomstår 2020": {
            "url": "https://skatteverket.entryscape.net/store/9/resource/1514",
            "type": "excel"
        },
        "Beskattnings-sammandrag för inkomstår 2021": {
            "url": "https://skatteverket.entryscape.net/store/9/resource/1696",
            "type": "excel"
        }
    },
    "sveriges kommuner och regioner": {
        "Styren i kommuner 1994-": {
            "url": "https://catalog.skl.se/rowstore/dataset/46552a39-4b37-4c21-91ca-059fda9952e1",
            "type": "json"
        },
        "Styren i regioner 1994-": {
            "url": "https://catalog.skl.se/rowstore/dataset/088de648-dd7b-45cd-9a02-f0a6c7b88b5c",
            "type": "json"
        },
        "Verksamhetsstatistik inom hälso- och sjukvård (yrke)": {
            "url": "https://catalog.skl.se/store/1/resource/299",
            "type": "excel"
        },
        "Verksamhetsstatistik inom hälso- och sjukvård (vårdplatser)": {
            "url": "https://catalog.skl.se/store/1/resource/297",
            "type": "excel"
        },
        "Verksamhetsstatistik inom hälso- och sjukvård (vårdcentraler)": {
            "url": "https://catalog.skl.se/store/1/resource/295",
            "type": "excel"
        }
    }
}


export default data;