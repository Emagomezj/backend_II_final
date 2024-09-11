export default class CartDTO {
    fromModel(model) {
        return {
            id: model.id,
            products: model.products,
            user:model.user
        };
    }

    fromData(data) {
        return {
            id: data.id || null,
            products: data.products,
            user: data.user
        };
    }
}