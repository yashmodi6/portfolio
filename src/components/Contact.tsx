import React from "react";
import EmailIcon from "./icons/EmailIcon";
import SendIcon from "./icons/SendIcon";

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="fadeIn mt-28 w-full rounded-lg border border-blue-300"
        >
            <div className="w-full p-4 leading-loose text-white">
                <h1 className="text-3xl font-bold text-center md:text-left">
                    CONTACT ME
                </h1>
                <hr className="my-4 h-px border-0 bg-blue-300" />

                <form
                    action="https://formsubmit.co/yovotheheroes@gmail.com"
                    method="POST"
                >
                    <div className="flex flex-col gap-4 text-sm">
                        {/* Name & Email */}
                        <div className="flex flex-col gap-4 md:flex-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full rounded-md border-2 border-blue-300 bg-white/70 px-3 py-2 text-sky-950 focus:bg-white/85 focus:border-blue-500 outline-none transition-colors duration-200"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="w-full rounded-md border-2 border-blue-300 bg-white/70 px-3 py-2 text-sky-950 focus:bg-white/85 focus:border-blue-500 outline-none transition-colors duration-200"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Write your message here..."
                            required
                            className="w-full rounded-md border-2 border-blue-300 bg-white/70 px-3 py-2 text-sky-950 focus:bg-white/85 focus:border-blue-500 outline-none transition-colors duration-200"
                        ></textarea>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-1.5 rounded-md border border-blue-300 bg-sky-950/70 px-4 py-2 text-sm font-medium transition-transform hover:scale-[0.95] hover:bg-sky-950"
                            >
                                Send Message
                                <SendIcon />
                            </button>

                        <button
  type="button"
  onClick={() =>
    (window.location.href = "mailto:" + "yovotheheroes" + "@gmail.com")
  }
  className="flex items-center justify-center gap-1.5 rounded-md border border-blue-300 bg-cyan-500/60 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[0.95] hover:bg-cyan-500/70"
>
  <EmailIcon />
  Email Me
</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default Contact;
