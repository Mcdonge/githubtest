import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-brown-800 mb-8 text-center">Contact Us</h1>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brown-700">
              Name
            </label>
            <Input type="text" id="name" name="name" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brown-700">
              Email
            </label>
            <Input type="email" id="email" name="email" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brown-700">
              Message
            </label>
            <Textarea id="message" name="message" rows={4} required className="mt-1" />
          </div>
          <Button type="submit" className="w-full bg-brown-600 hover:bg-brown-700">
            Send Message
          </Button>
        </form>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-brown-800 mb-4">Other Ways to Reach Us</h2>
          <p className="text-brown-700 mb-2">Email: info@tsamoi.org</p>
          <p className="text-brown-700 mb-2">Phone: +254 123 456 789</p>
          <p className="text-brown-700">Address: School of Engineering, Moi University, Eldoret, Kenya</p>
        </div>
      </div>
    </div>
  )
}

