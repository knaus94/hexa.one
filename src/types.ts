interface SuccessfulResponse<T> {
    result: T;
}

type DynamicResponse<K extends string, T> = SuccessfulResponse<{
    [key in K]: T;
}>;

type Metadata = SuccessfulResponse<{
    updated: number;
}>;

type ProxyResponse<K extends string, T> = DynamicResponse<K, T> & Metadata;

interface Price {
    avg: number;
    max: number;
    med: number;
    min: number;
    std: number;
    sales: number;
}

type PriceTimeframe = '7' | '14' | '30' | '90' | '365';

export type GetPricesResponse = ProxyResponse<
    'prices',
    Record<string, { [key in PriceTimeframe]: Price }>
>;

interface ItemTag {
    name: string;
    category: string;
    category_name: string;
    internal_name: string;
    color?: string;
}

interface ItemAction {
    link: string;
    name: string;
}

interface ItemDescription {
    type: string;
    value: string;
    app_data: string;
}

interface Item {
    tags: ItemTag[];
    type: string;
    actions: ItemAction[];
    icon_url: string;
    tradable: boolean;
    commodity: boolean;
    marketable: boolean;
    name_color: string;
    market_name: string;
    descriptions: ItemDescription[];
    icon_url_large: string | null;
    background_color: string | null;
    market_tradable_restriction: number;
    market_marketable_restriction: number;
}

export type GetItemsResponse = ProxyResponse<'items', Record<string, Item>>;

interface Account {
    steam_id: string;
    balance: number;
    name: string;
    roles: string[];
}

export type GetAccountResponse = SuccessfulResponse<Account>;
