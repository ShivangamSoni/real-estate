import { IListItem } from "@components/common/ListMenu";

export function getList<T, P>(
    list: T[],
    selector: (data: T) => P,
    empty?: any,
) {
    const data = list.reduce<IListItem[]>((res, data) => {
        const label = selector(data);
        if (res.findIndex((item) => item.label === label) === -1) {
            const id = crypto.randomUUID();
            res.push({ id, label });
        }
        return res;
    }, []);

    if (empty) {
        data.unshift({
            id: crypto.randomUUID(),
            label: empty,
        });
    }

    return data;
}
