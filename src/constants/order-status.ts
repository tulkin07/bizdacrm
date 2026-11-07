export interface OrderStatusType {
    PENDING: {
        title: string;
    };
    CONFIRMED: {
        title: string;
    };
    PROCESSING: {
        title: string;
    };
    PACKED: {
        title: string;
    };
    SHIPPED: {
        title: string;
    };
    DELIVERED: {
        title: string;
    };
    CANCELLED: {
        title: string;
    };
    RETURN_REQUESTED: {
        title: string;
    };
    RETURNED: {
        title: string;
    };
}

export const orderStatus: OrderStatusType = {
    PENDING: {
        title: "Kutilmoqda",
    },
    CONFIRMED: {
        title: "Tasdiqlandi",
    },
    PROCESSING: {
        title: "Jarayonda",
    },
    PACKED: {
        title: "Qadoqlandi",
    },
    SHIPPED: {
        title: "Yetkazib berishga yuborildi",
    },
    DELIVERED: {
        title: "Yetkazib berildi",
    },
    CANCELLED: {
        title: "Bekor qilindi",
    },
    RETURN_REQUESTED: {
        title: "Qaytarish so‘rovi",
    },
    RETURNED: {
        title: "Qaytarildi",
    },
};

export type OrderStatus =
    | "PENDING"
    | "CONFIRMED"
    | "PROCESSING"
    | "PACKED"
    | "SHIPPED"
    | "DELIVERED"
    | "CANCELLED"
    | "RETURN_REQUESTED"
    | "RETURNED";

export const orderStatusOptions: {
    label: string;
    value: OrderStatus;
}[] = [
        { label: "Kutilmoqda", value: "PENDING" },
        { label: "Tasdiqlandi", value: "CONFIRMED" },
        { label: "Jarayonda", value: "PROCESSING" },
        { label: "Qadoqlandi", value: "PACKED" },
        { label: "Yetkazib berishga yuborildi", value: "SHIPPED" },
        { label: "Yetkazib berildi", value: "DELIVERED" },
        { label: "Bekor qilindi", value: "CANCELLED" },
        { label: "Qaytarish so‘rovi", value: "RETURN_REQUESTED" },
        { label: "Qaytarildi", value: "RETURNED" },
    ];