type Shop<itemType> = { 
    name : string
    items : Array<itemType>;
}

type ShopOfNumbers = Shop<number>

type ShopOfStrings = Shop<string>

type ShopOfBooleans = Shop<Boolean>