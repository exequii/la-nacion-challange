import { stringify } from "querystring"

export type Tag = {
    slug: string,
    text: string,
}

export type Article = {
    _id:string,
    display_date: string,
    headlines:{
        basic: string,
    },
    promo_items?:{
        basic:{
            resized_urls?: Array<{
                option: {
                    media: string,
                },
                resizedUrl: string,
            }>
            subtitle?: string,
            type: string,
            url?: string,
        },
    },
    subtype: string,
    taxonomy : {
        tags: Array<{
            slug: string,
            text: string,
        }>,
    },
    website_url: string,
}
//para esto uso transform.tools para pasar de JS to JSON y de JSON to TS

const api = {
    list : async (): Promise<{ articles: Article[], tags: Tag[]}> => {
        const data = [{
            _id:"1",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pesc1", text: "Pescados"},
                    {slug: "pesc11", text: "Arroz"},
                    {slug: "pesc111", text: "Limon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },
        {
            _id:"2",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pesc111", text: "Pescados"},
                    {slug: "pesc212", text: "Arroz"},
                    {slug: "pesc12121", text: "Limon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"3",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pes5454c", text: "Pescados"},
                    {slug: "pes5454c", text: "Arroz"},
                    {slug: "pes01154c", text: "Limon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"4",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "p87esc", text: "Pan"},
                    {slug: "pes54c", text: "Queso"},
                    {slug: "p11esc", text: "Jamon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"5",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pe87sc", text: "Pan"},
                    {slug: "p4esc", text: "Queso"},
                    {slug: "pe54sc", text: "Jamon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"6",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pes84512c", text: "Fafa"},
                    {slug: "pes33c", text: "Fefe"},
                    {slug: "pes324c", text: "Fifi"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"7",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pes454c", text: "kjk"},
                    {slug: "phgesc", text: "hh"},
                    {slug: "pehgsc", text: "ff"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"8",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "peshjc", text: "Pescnados"},
                    {slug: "pejhbsc", text: "Arrhoz"},
                    {slug: "pnesc", text: "Limnon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"9",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pejhsc", text: "Pesghcados"},
                    {slug: "pehhsc", text: "Arcsroz"},
                    {slug: "cpesc", text: "Limwaon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"10",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "peshc", text: "Pesgfcados"},
                    {slug: "pes7gc", text: "Arrfdxoz"},
                    {slug: "p6esc", text: "Li<zmon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"11",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pejhc", text: "Pescagfdos"},
                    {slug: "pescmm", text: "Ar<roz"},
                    {slug: "pe vbsc", text: "Limfxon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"12",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pehgsc", text: "Peschados"},
                    {slug: "pdcesc", text: "Akrroz"},
                    {slug: "pehghsc", text: "Limonh"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"13",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pejesc", text: "Arjfrjoz"},
                    {slug: "pejgsc", text: "Ljimon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        },{
            _id:"14",
            display_date: "2019-12-06T17:50:17.735Z",
            headlines:{
                basic:"Sanguche de Lomito,"
            },
            promo_items:{
                basic:{
                    resized_urls: [{
                        option: {
                            media: "string",
                        },
                        resizedUrl: "",
                    }],
                    subtitle: "la comida mas rica del universo.",
                    type: "string",
                    url: "https://www.clara.es/medio/2021/12/16/que-comer-hoy-ideas_21beeb02_1200x630.jpg"
                },
            },
            subtype: "7",
            taxonomy : {
                tags: [
                    {slug: "pes nc", text: "Pescafdos"},
                    {slug: "pem sc", text: "Arrofz"},
                    {slug: "pefff sc", text: "Lifmon"},
                ],
            },
            website_url: "https://chakra-ui.com/docs/components/input/usage",
        }]

        const articles = data.filter((article) => article.subtype === "7")
                        .slice(0,30)
                        .map(article => ({
                            ...article,
                            display_date: new Date(article.display_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }),
                        })
                    )
        
        const mapTags = articles.reduce<Record<string, {count: number, slug: string, text: string}>>((contador, article) => {
                            for (let tag of article.taxonomy.tags){
                            if(!contador[tag.text]){
                                contador[tag.text] = {
                                ...tag,
                                count:0
                                }
                            }
                            contador[tag.text].count++
                            }
                            return contador
                        },{})
                    
        const topTags: Tag[] = Object.values(mapTags).sort((a,b) => b.count - a.count).slice(0,10)

        return {
            articles,
            tags: topTags,
        }
    }
}

export default api;