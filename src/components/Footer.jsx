// components/Footer.jsx
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col space-y-4">
          <img
            src="https://test-fe-blog-reactjs.vercel.app/assets/logo-lGLL0Zb0.png"
            alt="Logo"
            className="h-8 w-auto"
          />
          <p className="text-sm text-muted-foreground max-w-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Home",
              "Best Sellers",
              "Offers & Deals",
              "Contact Us",
              "FAQs",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Need Help? */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Delivery Information",
              "Return & Refund Policy",
              "Payment Methods",
              "Track your Order",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Instagram", "Twitter", "Facebook", "YouTube"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <Separator className="my-8 max-w-7xl mx-auto" />

      {/* Bottom line */}
      <div className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Your Blogging Platform. All rights
        reserved.
      </div>
    </footer>
  );
}
