
import ContactForm from "../Home/ContactForm";

const Contact = () => {

  return (
    <div className="bg-white py-16 px-6 lg:px-16 text-black bg-gradient-to-b from-blue-900 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-amber-600">JABNOX</span>
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto ">
            Have a question or want to work with us? Fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <ContactForm></ContactForm> 

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:info@jabnox.com" className="hover:text-amber-600">
                    info@jabnox.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+1234567890" className="hover:text-amber-600">
                    +1 (234) 567-890
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 123 Business
                  Street, City, Country
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Location
              </h2>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  title="JABNOX Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37695.12038832053!2d90.42966818190705!3d23.761784812124834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b80e827f19df%3A0x9c7482b95bc6d57c!2sKhilgaon%2C%20Dhaka!5e1!3m2!1sen!2sbd!4v1741944652040!5m2!1sen!2sbd"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
