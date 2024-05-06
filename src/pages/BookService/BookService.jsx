import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';

const BookService = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    const { _id, title, price, img } = service;
    console.log(service)

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;

        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            service_image: img,
            service_id: _id,
            price: price,
        }

        console.log(img)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('service booked successfully');
                }
            })

    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book a Sercvice: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="Date" name='date' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dew amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} placeholder="password" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-block btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;