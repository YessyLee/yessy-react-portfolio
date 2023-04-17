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
        <body name="contact" className="flex min-h-screen justify-center items-center">
            <div className="">
            <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
            <h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-600 to-orange-500 bg-clip-text text-transparent text-5xl font-black pb-5 md:text-4xl lg:text-5xl">Get in touch.</h1>
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
                       

            <div className="md:flex md:items-center mt-5 mb-10">
                <div>
                    <button className="shadow bg-[#AC34FF] hover:bg-fuchsia-400 focus:shadow-outline focus:outline-none text-white font-bold text-lg px-12 py-3 rounded-lg" type="submit" disabled={state.submitting}>
                    Submit
                    </button>
                </div>
            </div>           
        </form>

        </div>
        </div>
    </body>
    );
}

export default ContactForm;