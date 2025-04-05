import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="max-w-xl mx-auto space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border-2 border-[#e6c74a] focus:ring-[#e6c74a] rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2  border-2 border-[#e6c74a] focus:ring-[#e6c74a] rounded"
          required
        />
      </div>

      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full p-2 border-2 border-[#e6c74a] focus:ring-[#e6c74a] rounded"
        required
      />

      <div className="flex justify-center">
        <button className="bg-[#bc6c25] order-2 md:order-1 text-white px-4 py-2 rounded-md md:rounded-full cursor-pointer flex items-center gap-2 hover:bg-[#611a00] transition">
          Submit
          <ArrowRight size={20} />
        </button>
      </div>
    </form>
  );
}
