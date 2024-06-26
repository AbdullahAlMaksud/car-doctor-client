
const BookingRow = ({ booking,handleConfirm, handleDelete }) => {
    const { _id, customerName, service: title, service_image, price, date, email, status } = booking;

    
    return (
        <tr>
            <th>
                <button onClick={()=>{handleDelete(_id)}} className="btn btn-sm btn-circle bg-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {service_image && <img src={service_image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{title}</div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                {
                    status==='confirm' ? <span className="font-bold">Confirmed</span> : <button onClick={()=>{handleConfirm(_id)}} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;