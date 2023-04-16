import { useForm, ValidationError } from '@formspree/react';
import "./FormStyles.css";
import { FaCoffee } from "react-icons/fa";

function ContactForm() {
    //Using formspree code
    const [state, handleSubmit] = useForm("123xyz");

    if (state.succeeded) {
        return <p>Thank you for contacting me, I will be in touch soon!</p>;
    }

    return (
        <body className="flex min-h-screen justify-center items-center">
            <div className="">
            <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h1 className="text-[#AC34FF] text-3xl text-center font-bold pb-3 pt-10">Get in touch</h1>
                <h2 className= "text-white text-xl text-center font-bold pb-5">Let's chat over a cup of coffee!</h2>    

                <div className="form-item">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required="required"
                    />
                    <label htmlFor="name">
                        <span>your name</span>
                    </label>
                </div>

                <div className="form-item">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                    />
                    <label htmlFor="email">
                        <span>email</span>
                    </label>
                </div>

                <div className="form-item">
                    <input
                        type="message"
                        id="message"
                        name="message"
                        required="required"
                     />
                    <label htmlFor="message">
                        <span>your message</span>
                    </label>
                </div>     
                       

            <div className="md:flex md:items-center mb-10">
                <div>
                    <button className="shadow bg-[#AC34FF] hover:bg-fuchsia-400 focus:shadow-outline 
focus:outline-none text-white font-bold px-12 py-3 rounded-lg" type="submit" disabled={state.
submitting}>
                    submit
                    </button>
                </div>
            </div>           
        </form>

        <div className='text-white'>You can also contact me on:</div>



        </div>
        </div>
    </body>
    );
}

export default ContactForm;