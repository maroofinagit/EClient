import OrderTrack from "@/components/OrderTrack";
import { order } from "@/Data/OrderItems";

const TrackingPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const orderItem = order

    if (!orderItem || orderItem.trackingNumber === undefined) {
    return <p>Order item not found.</p>;
}

    return (
        <OrderTrack order={orderItem} />
    );
}
export default TrackingPage;